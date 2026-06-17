const lineColor = '#ffb000'
const highlightLineColor = '#ff0000'

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
    lineColor,
    highlightLineColor,
    highlightHoldProgress: 0.5,
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
        'By the early 1880s, the Southern Railway had connected Asheville to the broader national rail network, giving travelers direct access from the North, South, East, and Midwest. At the same time, American cities were entering a period of rapid modernization with growing populations, improved sanitation, and experimental adoption of a new-fangled technology - electricity!',
        'It was during this period that George Vanderbilt began planning his Biltmore Estate. Asheville’s temperate climate, mountain scenery, and growing reputation as a health resort attracted travelers from across the country, along with entrepreneurs and wealthy newcomers eager to invest in the region’s future. The arrival of more residents and visitors created a need for a more efficient way to move people around the city. Because Asheville’s steep mountain terrain made traditional transportation difficult, residents turned to one of the most modern solutions of the era: street railways, or trolleys.',
        'Electric power itself was still in its early stages, but it was quickly reshaping urban life. After Frank Sprague built a revolutionary new street railway in Richmond, Virginia, the first of its kind, the Asheville Street Railway Co. signed a contract with Sprague to build in Asheville next, making Asheville the second city in America to have electric trolleys.',
        'The trolley system operated from the late 1880s into the 1930s, and over that half-century it helped reshape Asheville into a busier, more connected mountain city. By my estimates, around 40 miles of track were laid across the network over these years. That’s comparable to some modern mid-sized commuter rail networks. The MARTA network in Atlanta is 48 miles long.',
        'Let’s explore the extent of the trolley system chronologically…'
    ],
    footer: `
        <p>The history of Asheville's trolleys is fascinating and has been documented by many historians and foamers, plenty of whom were instrumental in making this project possible. If you have information on more exact routes or locations of Asheville's trolley lines, or if you spot any mistakes in this story, please reach out. You can find my contact information on my <a href="https://whoiskevintho.com/about" target="_blank" rel="noreferrer">website</a>.</p>
        <p>This project would not have been possible without the definitive source on Asheville's street railways: <em>Trolleys in the Land of the Sky: Street Railways of Asheville, N.C. and Vicinity</em> by David C. Bailey, Joseph M. Canfield, and Harold E. Cox (2000).</p>
        <p>Numerous online resources were also used during the research and development of this project:</p>
        <ul>
            <li>Asheville Junction: A Blog by David E. Whisnant - <a href="https://ashevillejunction.com/" target="_blank" rel="noreferrer">Link</a></li>
            <li>Preservation Society of Asheville & Buncombe County - <a href="https://psabc.org/" target="_blank" rel="noreferrer">Link</a></li>
            <li>North Carolina Maps - <a href="https://web.lib.unc.edu/nc-maps/index.php" target="_blank" rel="noreferrer">Link</a></li>
            <li>The Library of Congress - <a href="https://www.loc.gov/" target="_blank" rel="noreferrer">Link</a></li>
        </ul>
        <p>Special thanks to Pack Memorial Library in Asheville for providing access to historical maps and archival materials.</p>
    `,
    chapters: [
        {
            id: 'chapter-1',
            alignment: 'left',
            hidden: false,
            openedYear: 'Feb 1889',
            title: 'South Side Avenue',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            image: './assets/san-fran.jpeg',
            description: 'This was the first trolley line to start service. It went down South Main St about half a mile, turning onto Southside Avenue and ending up at the Depot, where it could pick up passengers coming into town on the Southern Railroad.',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'southsideavenue-1889-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-2',
            alignment: 'left',
            hidden: false,
            openedYear: 'Early Fall 1889',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'pattonavenue-1889-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-3',
            alignment: 'left',
            hidden: false,
            openedYear: 'Summer 1890',
            title: 'Charlotte Street',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            image: './assets/san-fran.jpeg',
            description: 'The Charlotte Street line opened on Thanksgiving Day, 1889. It ran East from Pack Square along College St, through Oak St and Up Charlotte St where it terminated at Chestnut St.',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'charlottestreet-1889-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-4',
            alignment: 'left',
            hidden: false,
            openedYear: 'Summer 1890',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            title: 'Extension to Battery Park Hotel',
            image: './assets/san-fran.jpeg',
            description: 'Colonel Fran Coxe, a wealthy patron, built this extension for the Asheville Street Railway. It connected with the Patton Line.',
            location: {
                center: [-82.55663, 35.59576],
                zoom: 16,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'batteryparkhotel-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'batteryparkhotel-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-5',
            alignment: 'left',
            hidden: false,
            openedYear: '1891',
            title: 'Valley Street Freight',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            image: './assets/san-fran.jpeg',
            description: 'The Valley Street line was built to move freight to and from warehouses along the street. While most of Asheville\’s trolleys would carry passengers throughout the years, some lines also carried freight.',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'valleystreet-1889-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-6',
            alignment: 'left',
            hidden: false,
            openedYear: 'May 1891',
            owner: 'Asheville & Craggy Mountain Railway',
            ownerColor: '#c4abab',
            title: 'Sunset Park Line',
            image: './assets/san-fran.jpeg',
            description: 'Walter B. Gwyn opened the Asheville & Craggy Mountain Railway, a 2.5-mile steam-powered excursion line running from the end of the Charlotte Street line to a switchback on Sunset Mountain. The railway was built to promote Gwyn\'s planned Sunset Park development and provide visitors access to scenic overlooks on the mountain. Although envisioned as the first segment of a route to Craggy Mountain, the line never extended beyond Sunset Mountain during Gwyn\'s ownership.',
            location: {
                center: [-82.54179, 35.61300],
                zoom: 14.7,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'craggymountainry-1891-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'craggymountainry-1891-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-7',
            alignment: 'left',
            hidden: false,
            openedYear: 'July 1891',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            title: 'East Street / Lookout Mountain Line',
            image: './assets/san-fran.jpeg',
            description: 'The East Street Line extended northeast from Asheville along what later became Montclare Avenue. The route passed the newly constructed Winyah Sanitarium before and continuing through the woods toward Lookout Mountain. The line terminated at Lookout Park, a popular excursion destination featuring a pavilion and recreational attractions. So began the practice of using streetcars to transport visitors to leisure destinations on the outskirts of the city, a model that would be followed by other lines to come.',
            location: {
                center: [-82.55862, 35.60904],
                zoom: 14.4,
                pitch: 0,
                bearing: 0,
                speed: 0.3,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'EastStreetLine-1890-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'EastStreetLine-1890-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-8',
            alignment: 'left',
            hidden: false,
            openedYear: 'Late Summer 1891',
            owner: 'Asheville Loan, Construction and Improvement Company',
            ownerColor: '#abc4ab',
            title: 'Montford Line',
            image: './assets/san-fran.jpeg',
            description: 'The Montford Line was constructed to support the development of Montford Park, a new residential suburb northwest of downtown Asheville. Beginning near Haywood Street and Patton Avenue, the line traveled north along Montford Avenue and ended at the city\’s edge along Panola Street. The line helped transform Montford into a center of civic and social life. Its success demonstrated how streetcar infrastructure could be used to promote suburban real estate development. ',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'montfordline-1891-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-9',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'west-asheville-sulphur-springs-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-10',
            alignment: 'left',
            hidden: false,
            openedYear: 'July 1892',
            title: 'West Asheville Line Reaches Downtown',
            owner: 'West Asheville & Sulphur Springs Railway',
            ownerColor: '#beabc4',
            image: './assets/san-fran.jpeg',
            description: 'The West Asheville & Sulphur Springs Railway extended into downtown Asheville. Construction began in April and required crossing tracks owned by the rival Asheville Street Railway, leading to several disputes during the building process. The new route ran through Bartlett Street, Bailey Street, French Broad Avenue, and Patton Avenue before reaching Government Street near present-day Pritchard Park.',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'frenchbroadavenue-1892-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-11',
            alignment: 'left',
            hidden: false,
            openedYear: 'Summer 1892',
            title: 'Stone Quarry Extension',
            owner: 'Asheville & Craggy Mountain Railway',
            ownerColor: '#beabc4',
            image: './assets/san-fran.jpeg',
            description: 'The Asheville & Craggy Mountain Railway extended beyond the switchback to a stone quarry and rock crusher on Smith\'s Hill. The extension allowed the railway to support both tourism and quarry operations, carrying visitors to the mountain while providing transportation for stone for building macadam roads.',
            location: {
                center: [-82.53438, 35.61642],
                zoom: 14.70,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'craggymountain-quaryextension-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'craggymountain-quaryextension-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-12',
            alignment: 'left',
            hidden: false,
            openedYear: '1894',
            title: 'Extension to Riverside Park',
            owner: 'Asheville Loan, Construction and Improvement Company',
            ownerColor: '#abc4ab',
            image: './assets/san-fran.jpeg',
            description: 'The Montford Line was extended through wooded land near the Coxe Estate to the French Broad River and Pearson\'s Bridge. The extension connected the city to Riverside Park, an emerging amusement destination on the riverfront. As the park expanded with entertainment venues and recreational attractions, the streetcar became a primary means of transporting visitors. Another example of expanding lines to parks and resorts in order to generate passenger traffic beyond daily commuting.',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'riversideparkextension-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-13',
            alignment: 'left',
            hidden: false,
            openedYear: '1896',
            title: 'Montford Avenue Realignment',
            owner: 'Inter-Montane Railroad',
            ownerColor: '#acabc4',
            image: './assets/san-fran.jpeg',
            description: 'The Montford Line was reorganized under the Inter-Montane Railroad Company. Tracks that had previously followed Cumberland Avenue were relocated to the center of Montford Avenue, creating a more direct route through the neighborhood.',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'montfordavenuerealignment-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-15',
            alignment: 'left',
            hidden: false,
            openedYear: '1897',
            owner: 'Asheville & Biltmore Street Railway and Transportation Co',
            ownerColor: '#c4abb1',
            title: 'Asheville & Biltmore Street Railway',
            image: './assets/san-fran.jpeg',
            description: 'As George Vanderbilt developed Biltmore Estate and transformed the former Town of Best into Biltmore Village, the Asheville & Biltmore Street Railway was organized to connect the new community with downtown Asheville. The line was completed using portions of the former West Asheville & Sulphur Springs Railway infrastructure. The line ran down Asheland Avenue to McDowell Street, where it crossed Choctaw Street and continued south along BIltmore Avenue to a station at the Swannanoa River.',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'asheville-biltmore-street-railway-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-16',
            alignment: 'left',
            hidden: false,
            openedYear: '1899',
            owner: 'Asheville Street Railway',
            ownerColor: '#c4abab',
            title: 'Charlotte Street Extension to the Golf Club',
            image: './assets/san-fran.jpeg',
            description: 'The Asheville Street Railway extended service beyond Chestnut Street by leasing tracks from the Asheville & Craggy Mountain Railway. Originally built for a steam-powered excursion line, they strung electric lines and carried passengers north to the entrance of the Asheville Golf Club.',
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
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'charlotte-street-extension-1899-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-17',
            alignment: 'left',
            hidden: false,
            openedYear: '1900',
            owner: 'Asheville Electric Company',
            ownerColor: '#706e67',
            title: 'Consolidation of Asheville\'s Street Railways',
            image: './assets/san-fran.jpeg',
            description: 'Asheville\'s electric railways had been unified under the Asheville Electric Company. The company gained control of the Asheville Street Railway, the Inter-Montane Railroad (Montford Line), and the Asheville & Biltmore Street Railway. For the first time, the city\'s formerly independent trolley systems were connected into a single network, allowing passengers to travel between routes without changing companies.',
            location: {
                center: [-82.55972, 35.59496],
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
                }
            ],
            onChapterExit: [
                {

                }
            ]
        },
        {
            id: 'chapter-18',
            alignment: 'left',
            hidden: false,
            openedYear: 'April 1901',
            owner: 'Asheville Electric Company',
            ownerColor: '#706e67',
            title: 'Biltmore Line Connected to Downtown',
            image: './assets/san-fran.jpeg',
            description: 'Tracks from the Asheville & Biltmore Railway were physically connected to the downtown streetcar network. Cars that had previously terminated outside the city center were routed directly into Public Square. New tracks on South Main Street completed a continuous streetcar connection between downtown Asheville and Biltmore.',
            location: {
                center: [-82.55027, 35.58024],
                zoom: 14.36,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'biltmorestreetrailwayrealignment-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'biltmorestreetrailwayrealignment-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-19',
            alignment: 'left',
            hidden: false,
            openedYear: '1901',
            owner: 'Asheville & Craggy Mountain Railway',
            ownerColor: '#c4abb1',
            title: 'Howland Rebuilds the Sunset Park Line',
            image: './assets/san-fran.jpeg',
            description: 'In 1900, Richard S. Howland purchases the line from Walter B. Gwyn, that same year he refused to sell to the Asheville Electric Company as it consolidated the other lines. Howland rebuilt the Asheville & Craggy Mountain line with a smoother switchback and guard railings for safety. He electrified the line and built Overlook Park, with the goal of driving traffic to a leisurely getaway spot.',
            location: {
                center: [-82.53695, 35.61858],
                zoom: 14.36,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'howland-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'howland-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-20',
            alignment: 'left',
            hidden: false,
            openedYear: '1902',
            owner: 'Asheville Electric Company',
            ownerColor: '#706e67',
            title: 'East Street Line Rerouted to Ramoth',
            image: './assets/san-fran.jpeg',
            description: 'The route to Lookout Park route underwent a major transformation after the Asheville Electric abandoned Lookout Park as an excursion destination. A new route was constructed via Spears Avenue and Merrimon Avenue to the Town Hall in Ramoth, around where Chatham Road crosses Merimon Avenue.<br><br>According to records, the line was rerouted because of declining business to Lookout Park. However, a more troubling explanation may probably played a role. The line served several Black neighborhoods, while Asheville\'s parks remained segregated. A park for Black residents had been established near Lookout Park, leading to increased ridership by Black passengers. As a result, some white riders complained. Ramoth offered the Asheville Electric Company a franchise to extend the line north on the condition that no Black park be established along the route.',
            location: {
                center: [-82.55623, 35.60884],
                zoom: 14.36,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'eaststreetline-ramothreroute-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'eaststreetline-ramothreroute-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-21',
            alignment: 'left',
            hidden: false,
            openedYear: '1903',
            owner: 'Asheville & Craggy Mountain Railway',
            ownerColor: '#c4abb1',
            title: 'Line extended to Locust Gap',
            image: './assets/san-fran.jpeg',
            description: 'Locust Gap was the final extension of the Asheville & Craggy Mountain Railway along Sunset Mountain. It extended the line about one mile beyond Overlook Park as part of Howland\'s efforts to push farther toward Craggy Mountain. The extension was short-lived, as the entire Sunset Mountain line was abandoned and relocated later that same year.',
            location: {
                center: [-82.52778, 35.62290],
                zoom: 14.36,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'locustgapextension-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'locustgapextension-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-22',
            alignment: 'left',
            hidden: false,
            openedYear: '1903',
            owner: 'Asheville & Craggy Mountain Railway',
            ownerColor: '#c4abb1',
            title: 'Relocating the Craggy Line',
            image: './assets/san-fran.jpeg',
            description: 'Howland tore up the Sunset Mountain line in late 1903. The line was relocated, extending from Golf Club through the Beaverdam Valley to the French Broad River, the Weaver Dam power plant, and eventually a connection with the Southern Railway at Craggy Station. Excursion trains carried visitors to Lake Tahkeeostee, while the railroad increasingly focused on freight service, hauling stone, coal, and other goods.',
            location: {
                center: [-82.58559, 35.63288],
                zoom: 13.6,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'newashevillecraggymountain-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'newashevillecraggymountain-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-23',
            alignment: 'left',
            hidden: false,
            openedYear: 'Feb 1909',
            owner: 'Asheville Electric Company',
            ownerColor: '#706e67',
            title: 'Merrimon Avenue Line',
            image: './assets/san-fran.jpeg',
            description: 'Merrimon Avenue line built running directly from North Pack square to the old East St line on Merrimon, then extending to Grace, where it would meet with the new Weaverville line. The East Street line was cut back to Winyah Sanitorium.',
            location: {
                center: [-82.55537, 35.61216],
                zoom: 14.2,
                pitch: 0,
                bearing: 0,
                speed: 0.2,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'merrimonavenueextension-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'merrimonavenueextension-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-24',
            alignment: 'left',
            hidden: false,
            openedYear: 'Oct 1909',
            owner: 'Asheville & East Tennessee Railroad Co.',
            ownerColor: '#c4abb1',
            title: 'Weaverville line',
            image: './assets/san-fran.jpeg',
            description: 'The Asheville to Weaverville electric railway was completed in stages during 1909 under the leadership of Richard S. Howland. Construction progressed steadily northward from Grace, with excursion and regular passenger service beginning on newly completed sections even before the line was finished. By August 1909, regular service had reached Weaverville, and on September 4 through cars began operating between downtown Asheville and Weaverville via the Merrimon Avenue streetcar line. The final extension into the center of Weaverville was completed in late October, with a station built near the site of the present Town Hall.',
            location: {
                center: [-82.58727, 35.66775],
                zoom: 13.12,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'weavervilleline-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'weavervilleline-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-25',
            alignment: 'left',
            hidden: false,
            openedYear: 'May 1911',
            owner: 'Asheville Electric Company',
            ownerColor: '#706e67',
            title: 'West Asheville line',
            image: './assets/san-fran.jpeg',
            description: 'After years of proposals and delays, the line was constructed using the new Concrete Bridge (now the West Asheville Bridge) across the French Broad River and extended into West Asheville along what later became Haywood Road. Service began on May 4, 1911, with cars operating through downtown and continuing to Riverside Park. Although the railway held a franchise to extend farther west toward Turnpike and possibly the Asheville School, those extensions were never built. The new line became the last entirely new streetcar route constructed in Asheville.',
            location: {
                center: [-82.58321, 35.57813],
                zoom: 14.12,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'westasheville-1911-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'westasheville-1911-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-26',
            alignment: 'left',
            hidden: false,
            openedYear: '1913',
            owner: 'Asheville Power & Light Co.',
            ownerColor: '#706e67',
            title: 'Extension to Grove Park Inn',
            image: './assets/san-fran.jpeg',
            description: 'After E. W. Grove built the Grove Park Inn in 1913, the trolley line along Charlotte Street was extended to serve patrons of the new mountain resort. Although the extension opened after the inn\'s completion, it was technically built by the Asheville Power & Light Co., which had incorporated and acquired the Asheville Electric Co. the previous year. ',
            location: {
                center: [-82.54074, 35.61679],
                zoom: 14.7,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'groveparkextension-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'groveparkextension-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        },
        {
            id: 'chapter-27',
            alignment: 'left',
            hidden: false,
            openedYear: '1934',
            owner: 'Carolina Power & Light Co.',
            ownerColor: '#706e67',
            title: 'The rest is history',
            image: './assets/san-fran.jpeg',
            description: 'In the years that followed, several improvements were made to Asheville\'s trolley system, including the purchase of new electric streetcars in the 1920s and upgrades to schedules and track infrastructure. No major extensions were built. Instead, the system began to contract. The Weaverville line was abandoned, followed by the Craggy Mountain line and the Sunset Park line.<br><br>The Great Flood of 1916 destroyed Riverside Park and damaged other parts of Asheville. By the 1920s, buses had been introduced, and the growing popularity of the automobile created competition. Then came the Great Depression in 1930, causing ridership to decline dramatically.<br><br>In 1934, Carolina Power & Light replaced Asheville\'s streetcars with buses, bringing the city\'s electric railway era to an end. The final streetcar made its last run to West Asheville on Labor Day in September 1934. During World War II, most of the remaining tracks were removed and scrapped for the war effort.',
            location: {
                center: [-82.56564, 35.59302],
                zoom: 13.12,
                pitch: 0,
                bearing: 0,
                speed: 0.4,
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'groveparkextension-line',
                    opacity: 1,
                    color: highlightLineColor,
                    duration: 1000
                }
            ],
            onChapterExit: [
                {
                    layer: 'groveparkextension-line',
                    opacity: 0,
                    direction: 'up'
                }
            ]
        }
    ]
};

export default config
