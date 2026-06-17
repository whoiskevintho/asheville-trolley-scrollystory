import { Fragment, useEffect, useMemo, useRef, useState } from 'react'
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

const colorLayerTypes = {
  fill: ['fill-color'],
  line: ['line-color'],
  circle: ['circle-color', 'circle-stroke-color'],
  symbol: ['icon-color', 'text-color'],
}

const alignments = {
  left: 'lefty',
  center: 'centered',
  right: 'righty',
  full: 'fully',
  fully: 'fully',
}

const hexToRgb = (color) => {
  if (!color?.startsWith('#')) {
    return null
  }

  const value = color.slice(1)
  const expandedValue = value.length === 3
    ? value.split('').map((char) => char + char).join('')
    : value

  if (expandedValue.length !== 6) {
    return null
  }

  const parsedValue = Number.parseInt(expandedValue, 16)

  if (Number.isNaN(parsedValue)) {
    return null
  }

  return {
    r: (parsedValue >> 16) & 255,
    g: (parsedValue >> 8) & 255,
    b: parsedValue & 255,
  }
}

const rgbToHex = ({ r, g, b }) => (
  `#${[r, g, b].map((value) => value.toString(16).padStart(2, '0')).join('')}`
)

const interpolateColor = (fromColor, toColor, progress) => {
  const fromRgb = hexToRgb(fromColor)
  const toRgb = hexToRgb(toColor)

  if (!fromRgb || !toRgb) {
    return toColor || fromColor
  }

  const boundedProgress = Math.min(Math.max(progress, 0), 1)

  return rgbToHex({
    r: Math.round(fromRgb.r + (toRgb.r - fromRgb.r) * boundedProgress),
    g: Math.round(fromRgb.g + (toRgb.g - fromRgb.g) * boundedProgress),
    b: Math.round(fromRgb.b + (toRgb.b - fromRgb.b) * boundedProgress),
  })
}

const getFadeProgress = (progress, holdProgress = 0) => {
  const boundedHoldProgress = Math.min(Math.max(holdProgress, 0), 0.99)

  return Math.min(
    Math.max((progress - boundedHoldProgress) / (1 - boundedHoldProgress), 0),
    1,
  )
}

function addStoryLayers(map) {

    map.addSource('southsideavenue-1889', {
      type: 'geojson',
      data: '/geojson/SouthSideAvenue_1889.geojson',
  })

  map.addLayer({
    id: 'southsideavenue-1889-line',
    type: 'line',
    source: 'southsideavenue-1889',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('pattonavenue-1889', {
    type: 'geojson',
    data: '/geojson/PattonAvenue-1889.geojson',
  })

  map.addLayer({
    id: 'pattonavenue-1889-line',
    type: 'line',
    source: 'pattonavenue-1889',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('charlottestreet-1889', {
    type: 'geojson',
    data: '/geojson/CharlotteStreet-1889.geojson',
  })

  map.addLayer({
    id: 'charlottestreet-1889-line',
    type: 'line',
    source: 'charlottestreet-1889',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('valleystreet-1889', {
    type: 'geojson',
    data: '/geojson/ValleySt-1889.geojson',
  })

  map.addLayer({
    id: 'valleystreet-1889-line',
    type: 'line',
    source: 'valleystreet-1889',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('batteryparkhotel', {
    type: 'geojson',
    data: '/geojson/BatteryParkHotel.geojson',
  })

  map.addLayer({
    id: 'batteryparkhotel-line',
    type: 'line',
    source: 'batteryparkhotel',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('craggymountainry-1891', {
    type: 'geojson',
    data: '/geojson/CraggyMountainRY-1891.geojson',
  })

  map.addLayer({
    id: 'craggymountainry-1891-line',
    type: 'line',
    source: 'craggymountainry-1891',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('EastStreetLine-1890', {
    type: 'geojson',
    data: '/geojson/EastStreetLine-1890.geojson',
  })

  map.addLayer({
    id: 'EastStreetLine-1890-line',
    type: 'line',
    source: 'EastStreetLine-1890',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('montfordline-1891', {
    type: 'geojson',
    data: '/geojson/montfordline-1891.geojson',
  })

  map.addLayer({
    id: 'montfordline-1891-line',
    type: 'line',
    source: 'montfordline-1891',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('west-asheville-sulphur-springs', {
    type: 'geojson',
    data: '/geojson/WestAshevilleSulphurSprings.geojson',
  })

  map.addLayer({
    id: 'west-asheville-sulphur-springs-line',
    type: 'line',
    source: 'west-asheville-sulphur-springs',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('frenchbroadavenue-1892', {
    type: 'geojson',
    data: '/geojson/FrenchBroadAve-1892.geojson',
  })

  map.addLayer({
    id: 'frenchbroadavenue-1892-line',
    type: 'line',
    source: 'frenchbroadavenue-1892',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('craggymountain-quaryextension', {
    type: 'geojson',
    data: '/geojson/CraggyMountainRY_QuaryExtension.geojson',
  })

  map.addLayer({
    id: 'craggymountain-quaryextension-line',
    type: 'line',
    source: 'craggymountain-quaryextension',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('riversideparkextension', {
    type: 'geojson',
    data: '/geojson/RiversideParkExtension.geojson',
  })

  map.addLayer({
    id: 'riversideparkextension-line',
    type: 'line',
    source: 'riversideparkextension',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('montfordavenuerealignment', {
    type: 'geojson',
    data: '/geojson/MontfordAvenueRealignment.geojson',
  })

  map.addLayer({
    id: 'montfordavenuerealignment-line',
    type: 'line',
    source: 'montfordavenuerealignment',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('asheville-biltmore-street-railway', {
    type: 'geojson',
    data: '/geojson/AshevilleBiltmoreStreetRailway.geojson',
  })

  map.addLayer({
    id: 'asheville-biltmore-street-railway-line',
    type: 'line',
    source: 'asheville-biltmore-street-railway',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('charlotte-street-extension-1899', {
    type: 'geojson',
    data: '/geojson/CharlotteStreetExtensionGolfClub.geojson',
  })

  map.addLayer({
    id: 'charlotte-street-extension-1899-line',
    type: 'line',
    source: 'charlotte-street-extension-1899',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('biltmorestreetrailwayrealignment', {
    type: 'geojson',
    data: '/geojson/BiltmoreStreetRailwayRealignment.geojson',
  })

  map.addLayer({
    id: 'biltmorestreetrailwayrealignment-line',
    type: 'line',
    source: 'biltmorestreetrailwayrealignment',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('howland', {
    type: 'geojson',
    data: '/geojson/HowlandLine.geojson',
  })

  map.addLayer({
    id: 'howland-line',
    type: 'line',
    source: 'howland',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('eaststreetline-ramothreroute', {
    type: 'geojson',
    data: '/geojson/EastStreetLine_RamothReroute.geojson',
  })

  map.addLayer({
    id: 'eaststreetline-ramothreroute-line',
    type: 'line',
    source: 'eaststreetline-ramothreroute',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('locustgapextension', {
    type: 'geojson',
    data: '/geojson/LocustGapExtension.geojson',
  })

  map.addLayer({
    id: 'locustgapextension-line',
    type: 'line',
    source: 'locustgapextension',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('newashevillecraggymountain', {
    type: 'geojson',
    data: '/geojson/NewAshevilleCraggyMountainRY.geojson',
  })

  map.addLayer({
    id: 'newashevillecraggymountain-line',
    type: 'line',
    source: 'newashevillecraggymountain',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })
//Feb 1909
  map.addSource('merrimonavenueextension', {
    type: 'geojson',
    data: '/geojson/MerrimonAvenueExtension.geojson',
  })

  map.addLayer({
    id: 'merrimonavenueextension-line',
    type: 'line',
    source: 'merrimonavenueextension',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  //Oct 1909
  map.addSource('weavervilleline', {
    type: 'geojson',
    data: '/geojson/WeavervilleLine.geojson',
  })

  map.addLayer({
    id: 'weavervilleline-line',
    type: 'line',
    source: 'weavervilleline',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })
// May 1911
  map.addSource('westasheville-1911', {
    type: 'geojson',
    data: '/geojson/WestAsheville-1911.geojson',
  })

  map.addLayer({
    id: 'westasheville-1911-line',
    type: 'line',
    source: 'westasheville-1911',
    paint: {
      'line-color': '#ffb000',
      'line-emissive-strength': 1,
      'line-width': 3,
      'line-opacity': 0,
    },
  })

  map.addSource('groveparkextension', {
    type: 'geojson',
    data: '/geojson/GroveParkExtension.geojson',
  })

  map.addLayer({
    id: 'groveparkextension-line',
    type: 'line',
    source: 'groveparkextension',
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

    const getLayerColorPaintType = (layer) => {
      const mapLayer = map.getLayer(layer)
      return mapLayer ? colorLayerTypes[mapLayer.type] : []
    }

    const setLayerPaint = (layer) => {
      getLayerPaintType(layer.layer).forEach((prop) => {
        const options = {}

        if (layer.duration && layer.opacity !== undefined) {
          map.setPaintProperty(layer.layer, `${prop}-transition`, {
            duration: layer.duration,
          })
        }

        if (layer.opacity !== undefined) {
          map.setPaintProperty(layer.layer, prop, layer.opacity, options)
        }
      })

      getLayerColorPaintType(layer.layer).forEach((prop) => {
        if (layer.duration && layer.color) {
          map.setPaintProperty(layer.layer, `${prop}-transition`, {
            duration: layer.duration,
          })
        }

        if (layer.color) {
          map.setPaintProperty(layer.layer, prop, layer.color)
        }
      })
    }

    const runLayerActions = (actions, direction) => {
      actions
        ?.filter((action) => !action.direction || action.direction === direction)
        .forEach(setLayerPaint)
    }

    const runLayerProgressActions = (actions, progress) => {
      const fadeProgress = getFadeProgress(progress, config.highlightHoldProgress)

      actions
        ?.filter((action) => action.color)
        .forEach((action) => {
          setLayerPaint({
            layer: action.layer,
            color: interpolateColor(
              action.color,
              action.fadeToColor || config.lineColor,
              fadeProgress,
            ),
          })
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

          runLayerActions(chapter.onChapterEnter, response.direction)

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
          runLayerActions(chapter?.onChapterExit, response.direction)
        })
        .onStepProgress((response) => {
          const chapter = config.chapters.find((item) => item.id === response.element.id)

          runLayerProgressActions(chapter?.onChapterEnter, response.progress)
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
                  {config.intro.map((paragraph, index) => (
                    <Fragment key={paragraph}>
                      <p>{paragraph}</p>
                      {index < config.intro.length - 1 && <br />}
                    </Fragment>
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
          <footer id="footer" className={storyTheme}>
            <div className="header-content">
              <div
                className="header-intro"
                dangerouslySetInnerHTML={{ __html: config.footer }}
              />
            </div>
          </footer>
        )}
      </main>
    </>
  )
}
