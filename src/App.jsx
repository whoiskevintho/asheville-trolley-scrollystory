import { useEffect, useMemo, useRef, useState } from 'react'
import mapboxgl from 'mapbox-gl'
import scrollama from 'scrollama'
import GlobeMinimap from 'mapbox-gl-globe-minimap'
import config from '../config.js'

const layerTypes = {
  fill: ['fill-opacity'],
  line: ['line-opacity'],
  circle: ['circle-opacity', 'circle-stroke-opacity'],
  symbol: ['icon-opacity', 'text-opacity'],
  raster: ['raster-opacity'],
  'fill-extrusion': ['fill-extrusion-opacity'],
  heatmap: ['heatmap-opacity'],
}

const alignments = {
  left: 'lefty',
  center: 'centered',
  right: 'righty',
  full: 'fully',
  fully: 'fully',
}

function addStoryLayers(map) {
  map.addSource('west-asheville-sulphur-springs', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.327cyfexvofu',
  })

  map.addLayer({
    id: 'west-asheville-sulphur-springs-line',
    type: 'line',
    source: 'west-asheville-sulphur-springs',
    'source-layer': '66761dc51f25c9b0bceb',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('southsideavenue-1889', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.9d983rxjkwml',
  })

  map.addLayer({
    id: 'southsideavenue-1889-line',
    type: 'line',
    source: 'southsideavenue-1889',
    'source-layer': 'fae7a171713a36282483',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('pattonavenue-1889', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.ndqqw4fexza3',
  })

  map.addLayer({
    id: 'pattonavenue-1889-line',
    type: 'line',
    source: 'pattonavenue-1889',
    'source-layer': 'd5b424af5ef22f12f437',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })
}

function addTerrain(map) {
  map.addSource('mapbox-dem', {
    type: 'raster-dem',
    url: 'mapbox://mapbox.mapbox-terrain-dem-v1',
    tileSize: 512,
    maxzoom: 14,
  })

  map.setTerrain({ source: 'mapbox-dem', exaggeration: 1.5 })

  map.addLayer({
    id: 'sky',
    type: 'sky',
    paint: {
      'sky-type': 'atmosphere',
      'sky-atmosphere-sun': [0.0, 0.0],
      'sky-atmosphere-sun-intensity': 15,
    },
  })
}

function BrokenImageSafe({ src, alt }) {
  const [hasError, setHasError] = useState(false)

  if (!src || hasError) {
    return null
  }

  return <img src={src} alt={alt} onError={() => setHasError(true)} />
}

export default function App() {
  const mapContainerRef = useRef(null)
  const mapRef = useRef(null)

  const firstChapter = config.chapters[0]
  const hasHeader = Boolean(config.title || config.subtitle || config.byline)
  const hasFooter = Boolean(config.footer)

  const storyTheme = useMemo(() => config.theme || 'light', [])

  useEffect(() => {
    if (!mapContainerRef.current || !firstChapter) {
      return undefined
    }

    mapboxgl.accessToken = config.accessToken

    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: config.style,
      config: config.config,
      center: firstChapter.location.center,
      zoom: firstChapter.location.zoom,
      bearing: firstChapter.location.bearing,
      pitch: firstChapter.location.pitch,
      interactive: false,
      projection: config.projection,
    })

    mapRef.current = map

    let marker
    if (config.showMarkers) {
      marker = new mapboxgl.Marker({ color: config.markerColor })
      marker.setLngLat(firstChapter.location.center).addTo(map)
    }

    if (config.inset) {
      map.addControl(new GlobeMinimap({ ...config.insetOptions }), config.insetPosition)
    }

    const getLayerPaintType = (layer) => {
      const mapLayer = map.getLayer(layer)
      return mapLayer ? layerTypes[mapLayer.type] : []
    }

    const setLayerOpacity = (layer) => {
      getLayerPaintType(layer.layer).forEach((prop) => {
        const options = {}

        if (layer.duration) {
          map.setPaintProperty(layer.layer, `${prop}-transition`, {
            duration: layer.duration,
          })
        }

        map.setPaintProperty(layer.layer, prop, layer.opacity, options)
      })
    }

    const scroller = scrollama()

    map.on('load', () => {
      if (config.use3dTerrain) {
        addTerrain(map)
      }

      addStoryLayers(map)

      scroller
        .setup({
          step: '.step',
          offset: 0.5,
          progress: true,
        })
        .onStepEnter((response) => {
          const currentChapter = config.chapters.findIndex(
            (chapter) => chapter.id === response.element.id,
          )
          const chapter = config.chapters[currentChapter]

          if (!chapter) {
            return
          }

          response.element.classList.add('active')
          map[chapter.mapAnimation || 'flyTo'](chapter.location)

          if (marker) {
            marker.setLngLat(chapter.location.center)
          }

          chapter.onChapterEnter?.forEach(setLayerOpacity)

          if (chapter.callback && window[chapter.callback]) {
            window[chapter.callback]()
          }

          if (chapter.rotateAnimation) {
            map.once('moveend', () => {
              map.rotateTo(map.getBearing() + 180, {
                duration: 30000,
                easing: (t) => t,
              })
            })
          }

          if (config.auto) {
            const nextChapter = (currentChapter + 1) % config.chapters.length
            map.once('moveend', () => {
              document
                .querySelector(`[data-scrollama-index="${nextChapter}"]`)
                ?.scrollIntoView()
            })
          }
        })
        .onStepExit((response) => {
          const chapter = config.chapters.find((item) => item.id === response.element.id)

          response.element.classList.remove('active')
          chapter?.onChapterExit?.forEach(setLayerOpacity)
        })

      if (config.auto) {
        document.querySelector('[data-scrollama-index="0"]')?.scrollIntoView()
      }
    })

    return () => {
      scroller.destroy()
      map.remove()
      mapRef.current = null
    }
  }, [firstChapter])

  return (
    <>
      <div id="map" ref={mapContainerRef} />
      <main id="story">
        {hasHeader && (
          <header id="header" className={storyTheme}>
            {config.title && <h1>{config.title}</h1>}
            {config.subtitle && <h2>{config.subtitle}</h2>}
            {config.byline && <p>{config.byline}</p>}
          </header>
        )}

        <section id="features">
          {config.chapters.map((chapter, index) => (
            <article
              className={[
                'step',
                index === 0 ? 'active' : '',
                alignments[chapter.alignment] || 'centered',
                chapter.hidden ? 'hidden' : '',
              ]
                .filter(Boolean)
                .join(' ')}
              id={chapter.id}
              key={chapter.id}
            >
              <div className={storyTheme}>
                {chapter.title && <h3>{chapter.title}</h3>}
                <BrokenImageSafe src={chapter.image} alt={chapter.title || ''} />
                {chapter.description && (
                  <p dangerouslySetInnerHTML={{ __html: chapter.description }} />
                )}
              </div>
            </article>
          ))}
        </section>

        {hasFooter && (
          <footer
            id="footer"
            className={storyTheme}
            dangerouslySetInnerHTML={{ __html: config.footer }}
          />
        )}
      </main>
    </>
  )
}
