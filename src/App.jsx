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

  map.addSource('charlottestreet-1889', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.34i9oswobn1i',
  })

  map.addLayer({
    id: 'charlottestreet-1889-line',
    type: 'line',
    source: 'charlottestreet-1889',
    'source-layer': '42395e24869b98a48aed',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('valleystreet-1889', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.hmy7z73h1wy0',
  })

  map.addLayer({
    id: 'valleystreet-1889-line',
    type: 'line',
    source: 'valleystreet-1889',
    'source-layer': 'c9ee43b1d1931dd1176d',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('EastStreetLine-1890', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.nsvsz76w3tgs',
  })

  map.addLayer({
    id: 'EastStreetLine-1890-line',
    type: 'line',
    source: 'EastStreetLine-1890',
    'source-layer': 'bd9f6c9a632d53e4a59f',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('montfordline-1891', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.dop4caifk207',
  })

  map.addLayer({
    id: 'montfordline-1891-line',
    type: 'line',
    source: 'montfordline-1891',
    'source-layer': '34446b8ec6cbbcbdfdaf',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

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

  map.addSource('frenchbroadavenue-1892', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.v23dweld57od',
  })

  map.addLayer({
    id: 'frenchbroadavenue-1892-line',
    type: 'line',
    source: 'frenchbroadavenue-1892',
    'source-layer': '1f1119474448a087b968',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('riversideparkextension', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.pt63mp230t50',
  })

  map.addLayer({
    id: 'riversideparkextension-line',
    type: 'line',
    source: 'riversideparkextension',
    'source-layer': '1cf061a4263c4b92446a',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('montfordavenuerealignment', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.omnzlw6s30ih',
  })

  map.addLayer({
    id: 'montfordavenuerealignment-line',
    type: 'line',
    source: 'montfordavenuerealignment',
    'source-layer': '036df6e4bcef2ac553ce',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('asheville-biltmore-street-railway', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.s48e597erty2',
  })

  map.addLayer({
    id: 'asheville-biltmore-street-railway-line',
    type: 'line',
    source: 'asheville-biltmore-street-railway',
    'source-layer': '6b9b8b21086b61fbdc89',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('charlotte-street-extension-1899', {
    type: 'vector',
    url: 'mapbox://whoiskevintho.lq34g3y3tmni',
  })

  map.addLayer({
    id: 'charlotte-street-extension-1899-line',
    type: 'line',
    source: 'charlotte-street-extension-1899',
    'source-layer': 'fc2d22599bfe2e5eb57d',
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
            <div className="header-image-wrap">
              <img
                className="header-image"
                src="/banner-image.webp"
                alt="Asheville trolley network"
              />
              {config.photoCredit && (
                <p className="photo-credit">{config.photoCredit}</p>
              )}
            </div>
            <div className="header-content">
              {config.title && <h1>{config.title}</h1>}
              {config.byline && (
                <p className="byline">
                  By{' '}
                  <a href="https://whoiskevintho.com/about" target="_blank" rel="noreferrer">
                    Kevin Young
                  </a>
                </p>
              )}
              {config.intro?.length > 0 && (
                <div className="header-intro">
                  {config.intro.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              )}
              {config.subtitle && <h2>{config.subtitle}</h2>}
            </div>
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
                {chapter.openedYear && (
                  <div className="chapter-year">{chapter.openedYear}</div>
                )}
                {chapter.title && <h3>{chapter.title}</h3>}
                <BrokenImageSafe src={chapter.image} alt={chapter.title || ''} />
                {chapter.description && (
                  <p dangerouslySetInnerHTML={{ __html: chapter.description }} />
                )}
                {chapter.owner && (
                  <div
                    className="chapter-owner"
                    style={{ '--owner-color': chapter.ownerColor }}
                  >
                    {chapter.owner}
                  </div>
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
