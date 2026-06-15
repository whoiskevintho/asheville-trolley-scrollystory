const config = {
    style: 'mapbox://styles/mapbox/standard-satellite',
    config: {
        basemap: {
          lightPreset: "night",
          showRoadsAndTransit: false
        }
      },
    // leave commented to use Mapbox Standard Style
    accessToken: import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
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
    theme: 'light',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Reconstructing Asheville\'s Trolley Network',
    byline: 'By Kevin Young',
    photoCredit: 'Ruger & Stoner and Burleigh Litho, Bird\'s-Eye View of the City of Asheville, North Carolina (1891). Courtesy of the Library of Congress',
    intro: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor, nibh at facilisis feugiat, mi lorem efficitur augue, vitae feugiat sem augue at ligula. Donec ac neque id arcu gravida luctus, sed tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        'Praesent luctus, justo at fermentum suscipit, orci lacus pulvinar sapien, non sagittis arcu risus sed augue. Curabitur posuere, dolor vitae ullamcorper congue, sem erat faucibus massa, vitae dapibus tortor ipsum vitae risus. Suspendisse potenti. Maecenas sed justo non eros cursus pretium.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porttitor, nibh at facilisis feugiat, mi lorem efficitur augue, vitae feugiat sem augue at ligula. Donec ac neque id arcu gravida luctus, sed tincidunt mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.',
        'Praesent luctus, justo at fermentum suscipit, orci lacus pulvinar sapien, non sagittis arcu risus sed augue. Curabitur posuere, dolor vitae ullamcorper congue, sem erat faucibus massa, vitae dapibus tortor ipsum vitae risus. Suspendisse potenti. Maecenas sed justo non eros cursus pretium.',
    ],
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: '1889',
            title: 'South Side Avenue',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
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
            openedYear: '1889',
            title: 'Patton Avenue',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
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
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: '1889',
            title: 'Charlotte Street',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            image: './assets/san-fran.jpeg',
            description: 'The Charlotte Street line extended the trolley network north from downtown Asheville, connecting more neighborhoods to Pack Square and the growing electric railway system.',
            location: {
                center: [-82.54994, 35.59926],
                zoom: 15.4,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'charlottestreet-1889-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'charlottestreet-1889-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: '1889',
            title: 'Valley Street Freight',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            image: './assets/san-fran.jpeg',
            description: 'Valley Street line was opened to connect lumber and freight to the electric lines.',
            location: {
                center: [-82.55007, 35.58961],
                zoom: 15.38,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'valleystreet-1889-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'valleystreet-1889-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: 'July 1891',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            title: 'East Street / Lookout Mountain Line',
            image: './assets/san-fran.jpeg',
            description: 'Opened July 10th 1891, the East Street Line extended northeast from Asheville along what later became Montclare Avenue. The route passed the newly constructed Winyah Sanitarium before crossing a ravine on a wooden trestle and continuing through the woods toward Lookout Mountain. The line terminated at Lookout Park, a popular excursion destination featuring picnic grounds, a pavilion, concerts, lectures, and recreational attractions. Although developed independently, the line was quickly operated as part of the Asheville Street Railway system and helped establish the practice of using streetcars to transport visitors to leisure destinations on the outskirts of the city.',
            location: {
                center: [-82.55862, 35.60904],
                zoom: 14.4,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'EastStreetLine-1890-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'EastStreetLine-1890-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: 'Late Summer 1891',
            owner: 'Asheville Loan, Construction and Improvement Company',
            ownerColor: '#abc4ab',
            title: 'Montford Line',
            image: './assets/san-fran.jpeg',
            description: 'Opened in the late summer of 1891, the Montford Line was constructed to support the development of Montford Park, a new residential suburb northwest of downtown Asheville. Beginning near Haywood Street and Patton Avenue, the line traveled north along Montford Avenue and ended at the city\’s edge along Panola Street. The line helped transform Montford into a center of civic and social life. Its success demonstrated how streetcar infrastructure could be used to promote suburban real estate development. ',
            location: {
                center: [-82.56131, 35.60127],
                zoom: 15.04,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'montfordline-1891-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'montfordline-1891-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: 'Late Autumn 1891',
            title: 'West Asheville & Sulphur Springs Railway',
            owner: 'West Asheville & Sulphur Springs Railway',
            ownerColor: '#beabc4',
            image: './assets/san-fran.jpeg',
            description: 'Edwin G. Carrier played a major role in the development of West Asheville during the 1880s and 1890s. He built the Belmont Hotel, established the area\'s first hydroelectric plant, constructed a steel bridge across the French Broad River, and created the West Asheville & Sulphur Springs Railway, which linked his hotel to downtown Asheville. Although his ambitious resort and transportation projects helped shape the city\'s expansion, financial losses and infrastructure failures forced him to relinquish control of the railway by 1895. ',
            location: {
                center: [-82.59295, 35.57219],
                zoom: 14,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
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
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'eighth-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: 'Summer 1892',
            title: 'West Asheville Line Reaches Downtown',
            owner: 'West Asheville & Sulphur Springs Railway',
            ownerColor: '#beabc4',
            image: './assets/san-fran.jpeg',
            description: 'In 1892, the West Asheville & Sulphur Springs Railway completed its long-planned extension into downtown Asheville. Construction began in April and required crossing tracks owned by the rival Asheville Street Railway, leading to several disputes during the building process. The new route ran through Bartlett Street, Bailey Street, French Broad Avenue, and Patton Avenue before reaching Government Street near present-day Pritchard Park. Streetcar service began in July 1892, creating the first direct rail connection between West Asheville and Asheville\'s commercial center. Planned extensions farther east were ultimately abandoned due to local opposition.',
            location: {
                center: [-82.56212, 35.58673],
                zoom: 15.04,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'frenchbroadavenue-1892-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'frenchbroadavenue-1892-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'ninth-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: '1894',
            title: 'Extension to Riverside Park',
            owner: 'Asheville Loan, Construction and Improvement Company',
            ownerColor: '#abc4ab',
            image: './assets/san-fran.jpeg',
            description: 'In 1894, the Montford Line was extended beyond its original terminus through wooded land near the Coxe Estate to the French Broad River and Pearson\'s Bridge. The extension connected the city to Riverside Park, an emerging amusement destination on the riverfront. As the park expanded with entertainment venues and recreational attractions, the streetcar became a primary means of transporting visitors. The project reflected a common pattern of the era, in which street railway companies expanded lines to parks and resorts in order to generate passenger traffic beyond daily commuting.',
            location: {
                center: [-82.57160, 35.61138],
                zoom: 14.4,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'riversideparkextension-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'riversideparkextension-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'tenth-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: '1896',
            title: 'Montford Avenue Realignment',
            owner: 'Inter-Montane Railroad',
            ownerColor: '#acabc4',
            image: './assets/san-fran.jpeg',
            description: 'Following financial difficulties and a change in ownership, the Montford Line was reorganized under the Inter-Montane Railroad Company. In 1896, tracks that had previously followed Cumberland Avenue were relocated to the center of Montford Avenue, creating a more direct route through the neighborhood. The realignment reinforced Montford Avenue as the district\'s main transportation corridor and improved access to both the residential community and Riverside Park. The upgraded route remained a defining feature of the neighborhood\'s streetscape as Asheville\'s street railway network continued to grow.',
            location: {
                center: [-82.57114, 35.60414],
                zoom: 14.4,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'montfordavenuerealignment-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'montfordavenuerealignment-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'eleventh-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: '1899',
            owner: 'Asheville & Craggy Mountain Railway',
            ownerColor: '#c4abb1',
            title: 'Charlotte Street Extension to the Golf Club',
            image: './assets/san-fran.jpeg',
            description: 'In spring 1899, the Asheville Street Railway extended service beyond Chestnut Street by leasing tracks from the Asheville & Craggy Mountain Railway. Originally built for a steam-powered excursion line, the route carried passengers north to the entrance of the Asheville Golf Club. This was the only significant passenger-service expansion Asheville saw during the 1890s.',
            location: {
                center: [-82.57114, 35.60414],
                zoom: 14.4,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'charlotte-street-extension-1899-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'charlotte-street-extension-1899-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'twelfth-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: '1897',
            owner: 'Asheville & Biltmore Street Railway and Transportation Co',
            ownerColor: '#c4abb1',
            title: 'Asheville & Biltmore Street Railway',
            image: './assets/san-fran.jpeg',
            description: 'As George Vanderbilt developed Biltmore Estate and transformed the former Town of Best into Biltmore Village, the Asheville & Biltmore Street Railway was organized in 1895 to connect the new community with downtown Asheville. Construction began in 1896 and proceeded slowly amid public opposition and disputes over the route through city streets. After additional approvals in 1897, the line was completed using portions of the former West Asheville & Sulphur Springs Railway infrastructure. Streetcar service began in November 1897, providing Asheville\'s first direct electric rail connection to Biltmore Village. The route linked downtown Asheville, the railroad depot, and Biltmore, running south along Biltmore Avenue to the Swannanoa River at the edge of the village.',
            location: {
                center: [-82.55687, 35.58211],
                zoom: 14.46,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'asheville-biltmore-street-railway-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'asheville-biltmore-street-railway-line',
                    opacity: 0.5
                }
            ]
        },
        {
            id: 'thirteenth-chapter',
            alignment: 'left',
            hidden: false,
            openedYear: '1899',
            owner: 'Asheville & Craggy Mountain Railway',
            ownerColor: '#c4abb1',
            title: 'Charlotte Street Extension to the Golf Club',
            image: './assets/san-fran.jpeg',
            description: 'In spring 1899, the Asheville Street Railway extended service beyond Chestnut Street by leasing tracks from the Asheville & Craggy Mountain Railway. Originally built for a steam-powered excursion line, the route carried passengers north to the entrance of the Asheville Golf Club. This was the only significant passenger-service expansion Asheville saw during the 1890s.',
            location: {
                center: [-82.54717, 35.61137],
                zoom: 14.46,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'charlotte-street-extension-1899-line',
                    opacity: 1,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'charlotte-street-extension-1899-line',
                    opacity: 0.5
                }
            ]
        }
    ]
};

export default config
