const config = {
    style: 'mapbox://styles/mapbox/standard-satellite',
    config: {
        basemap: {
          lightPreset: "night",
          showRoadsAndTransit: false
        }
      },
    // leave commented to use Mapbox Standard Style
    accessToken: 'VITE_MAPBOX_ACCESS_TOKEN',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Reconstructing Asheville\'s Trolley Network',
    subtitle: 'Asheville\'s Trolley Network in 1930 - four yearsa before it was discontinued. This electric passanger railway is responsible for turning this small town into a tourist desitination. But how did it start? And what is it\'s history? ',
    byline: 'By Kevin Young',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'SouthSide Avenue',
            image: './assets/san-fran.jpeg',
            description: 'This was the first trolley line to start service. It went down South Main St about half a mile, turning onto Southside Avenue and ending up at the Depot, where it could pick up passengers coming into town on the Big Railroad.',
            location: {
                center: [-82.55799, 35.58598],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'southsideavenue-1889-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'southsideavenue-1889-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Patton Avenue',
            image: './assets/pattonavenue.jpg',
            description: 'The Patton Avenue line opened in the fall of 1889, running west from Pack square along Patton Avenue, down Haywood Street and ending near Park Avenue.',
            location: {
                center: [-82.55978, 35.59346],
                zoom: 15,
                pitch: 0,
                bearing: 0,
                speed: 0.2, // make the flying slow
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'pattonavenue-1889-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'pattonavenue-1889-line',
                    opacity: 0.25
                }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'The Sulphur Springs',
            image: './assets/san-fran.jpeg',
            description: 'Asheville\'s Trolley Network in 1930 - four yearsa before it was discontinued. This electric passanger railway is responsible for turning this small town into a tourist desitination. But how did it start? And what is it\'s history? ',
            location: {
                center: [-82.59295, 35.57219],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 0.5,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'west-asheville-sulphur-springs-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'west-asheville-sulphur-springs-line',
                    opacity: 0
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'full',
            hidden: false,
            title: 'Buenos Aires',
            image: './assets/buenos-aires.jpg',
            description: 'Buenos Aires, the capital of Argentina, is a dynamic city known for its European-inspired architecture, vibrant tango culture, and rich culinary scene. Often called the "Paris of South America," it blends historic charm with modern energy.  You can add as many chapters as you need, just copy the JSON data and make changes.',
            location: {
                center: [-58.54195, -34.71600],
                zoom: 4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};

export default config
