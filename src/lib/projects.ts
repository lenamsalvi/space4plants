export const projects = [
  {
    id: "Plants",
    title: "I Grew This",
    blurb:
      "All the things I've been growing lately",
    cover: "/projects/Igrewthis.jpg",
    posts: [
      {
        id: "post-1",
        title: "Coming Soon",
        date: "2025-08-02",
        body: [
          { type: "title", text: "Coming soon" },
          {
            type: "p",
            text: "Coming soon",
          },
          {
            type: "p",
            text: "Coming soon",
          },
          {
            type: "ul",
            items: [
              "Coming soon",
              "Coming soon",
              "Coming soon",
            ],
          },
          {
            type: "noindent",
            text: "Coming soon",
          },
          { type: "img", src: "/projects/example.png", alt: "Example image" },
          {
            type: "caption",
            text: "Coming soon",
          },
        ],
      },
    ],
  },

//...................................................imwearingawire
  {
    id: "imwearingawire",
    title: "I'm Wearing a Wire",
    blurb:
      "Blutooth Enabled Audio Journaling Device",
    cover: "/projects/wireprototype1.jpg",
    coverPosition: "center",
    Gallery: [
      "/projects/wireprototype1.jpg",
    ],
    overviewImage: "/projects/wireprototype1.jpg",
    overviewText: `A self-reflection audio recording device built on ESP32. Records voice memos to SD card and plays them back via Bluetooth headphones. Explores Bluetooth audio protocols (A2DP and HFP) in depth.`,
    posts: [
      {
        id: "readme",
        title: "README.md",
        date: "2025-08-02",
        tags: [
          "Bluetooth",
          "ESP32",
          "Prototyping",
          "Hardware Development",
          "Embedded Software",
          "Audio Protocol (A2DP & HFP)",
        ],
        body: [
          { type: "title", text: "Project Goals:" },
          {
            type: "ul",
            items: [
              "Deep exploration of Bluetooth Classic audio protocols",
              "Build a portable voice recording device for car-based self-reflection",
              "Learn ESP32 I2S audio processing and SD card storage",
              "Create a functional breadboard prototype before integration into physical device",
            ],
          },
          { type: "title", text: "Hardware Components:" },
           {
            type: "noindent",
            text: "Core Components:",
          },
          {
            type: "ul",
            items: [
              "MCU: Inland ESP32 Development Board (ESP32-WROOM, Bluetooth Classic support)",
              "Microphone: ICS-43434 I2S MEMS Microphone (primary)",
              "Microphone (backup): MAX4466 Electret Microphone Breakout",
              "Storage: MicroSD Card Breakout Board (FAT32 formatted with MBR)",
              "Display: Small OLED Screen (I2C)",
              "Display (optional): E-ink screen (larger, for final build consideration)",
              "Input: 3 buttons with pull-down resistors on breadboard",
              "Power: USB (laptop-powered during development)",
            ],
          },
            {
            type: "noindent",
            text: "Future Components (Not Yet Acquired):",
          },
          {
            type: "ul",
            items: [
              "LiPo battery (700-1500mAh range)",
              "Battery charging module with USB-C",
              "Enclosure (design TBD)",
            ],
          },
          { type: "title", text: "Pin Mapping:" },
           {
            type: "noindent",
            text: "ICS-43434 I2S Microphone",
          },
          {
            type: "ul",
            items: [
              "WS (Word Select): GPIO 25",
              "SCK (Clock): GPIO 26",
              "SD (Data): GPIO 27",
              "VCC: 3.3V",
              "GND: GND",
            ],
          },
          {
            type: "noindent",
            text: "SD Card (SPI)",
          },
          {
            type: "ul",
            items: [
              "MISO: GPIO 19",
              "MOSI: GPIO 23",
              "CLK: GPIO 18",
              "CS: GPIO 5",
              "VCC: 3.3V",
              "GND: GND",
            ],
          },
          {
            type: "noindent",
            text: "OLED Display (I2C)",
          },
          {
            type: "ul",
            items: [
              "SDA: GPIO 21",
              "SCL: GPIO 22",
              "VCC: 3.3V",
              "GND: GND",
              "Address: 0 x 3D",
            ],
          },
           {
            type: "noindent",
            text: "Buttons",
          },
          {
            type: "ul",
            items: [
              "Button Left (Previous Screen): GPIO 32",
              "Button Middle (Record/Select): GPIO 33",
              "Button Right (Next Screen): GPIO 34",
            ],
          },
          { type: "title", text: "Development Roadmap:" },
           {
            type: "noindent",
            text: "Phase 1: Environment Setup",
          },
          {
            type: "ul",
            items: [
              "[x] Assemble hardware components",
              "[x] Format SD card (FAT32, MBR)",
              "[x] Wire buttons with pull-down resistors",
              "[x] Install ESP-IDF development environment (Windows)",
              "[x] Test basic ESP32 connectivity and upload test sketch",
            ],
          },
          {
            type: "noindent",
            text: "Phase 2: Component Testing",
          },
          {
            type: "ul",
            items: [
              "[x] Wire and test OLED display (I2C communication)",
              "[x] Wire and test SD card (FAT32 read/write operations)",
              "[x] Wire and test ICS-43434 microphone (I2S audio capture)",
              "[x] Test button inputs (debouncing and event handling)",
            ],
          },
           {
            type: "noindent",
            text: "Phase 3: Core Functionality",
          },
          {
            type: "ul",
            items: [
              "[x] Implement WAV file recording (I2S mic → SD card)",
              "[ ] Debug and optimize audio quality (sample rate, I2S configuration)",
              "[ ] Implement file management (list, select, delete recordings)",
              "[ ] Add persistent filename counter across reboots",
            ],
          },
           {
            type: "noindent",
            text: "Phase 4: Bluetooth Audio Deep Dive",
          },
          {
            type: "ul",
            items: [
              "[ ] Implement A2DP Bluetooth playback (SD card → headphones)",
              "[ ] Implement HFP/HSP Bluetooth mic input (headphone mic → ESP32)",
              "[ ] Handle Bluetooth pairing and connection management",
              "[ ] Test both profiles simultaneously",
            ],
          },
          {
            type: "noindent",
            text: "Phase 5: Integration",
          },
          {
            type: "ul",
            items: [
              "[ ] Build UI state machine for record/playback modes",
              "[ ] Implement OLED menu system with button controls",
              "[ ] Add audio level indicators and recording status",
              "[ ] Test complete workflow end-to-end",
            ],
          },
          {
            type: "noindent",
            text: "Phase 6: Power and Enclosure (Future)",
          },
          {
            type: "ul",
            items: [
              "[ ] Add battery and charging circuit",
              "[ ] Test power consumption and battery life",
              "[ ] Design and build enclosure",
              "[ ] Consider E-ink display swap for battery efficiency",
            ],
          },
          { type: "title", text: "Technical Stack:" },
          {
            type: "noindent",
            text: "Development Framework: ESP-IDF (switching from Arduino for better Bluetooth control)",
          },
          {
            type: "noindent",
            text: "Key Protocols:",
          },
          {
            type: "ul",
            items: [
              "I2S (Inter-IC Sound) for digital microphone interface",
              "SPI for SD card communication",
              "I2C for OLED display",
              "A2DP (Advanced Audio Distribution Profile) for Bluetooth audio playback",
              "HFP/HSP (Hands-Free Profile/Headset Profile) for Bluetooth microphone input",
            ],
          },
          {
            type: "noindent",
            text: "Audio Format: WAV (uncompressed, 16-bit, configurable sample rate)",
          },
          { type: "title", text: "Current Status:" },
           {
            type: "audio",
            src: "/projects/TEST_REC.wav",
            caption: "First Test Recording"
          },
          {
            type: "noindent",
            text: "Last Updated: 2025-10-28",
          },
          {
            type: "noindent",
            text: "Phase: 3 - Core Functionality (Audio Quality Debugging)",
          },
          {
            type: "noindent",
            text: "Current Task: Diagnosing I2S audio quality issues (choppy playback, speed inconsistency)",
          },
          {
            type: "noindent",
            text: "Hardware Status:",
          },
          {
            type: "ul",
            items: [
              "All components wired and functional on breadboard",
              "I2S microphone capturing audio (quality issues under investigation)",
              "SD card recording WAV files successfully",
              "OLED display showing 6-screen navigation UI",
              "Button-based recording control working",
            ],
          },
          { type: "title", text: "Development Notes:" },
          {
            type: "ul",
            items: [
              "Using breadboard prototype throughout development",
              "USB-powered from laptop until battery integration",
              "ICS-43434 chosen for superior I2S quality over analog MAX4466",
              "ESP-IDF required for full HFP Bluetooth stack (Arduino libraries insufficient)",
              "Will test individual components before integration",
            ],
          },
          {
            type: "noindent",
            text: "Phase 1 Completed: 2025-10-29",
          },
          {
            type: "ul",
            items: [
              "ESP-IDF v5.5.1 installed to `C:\esp\` (custom path to avoid spaces in Windows username)",
              "CP2102 USB-to-UART drivers required manual installation from Silicon Labs",
              "ESP32 board confirmed working on COM3",
              "Project location: `C:\esp\projects\imwearingawire\` (avoiding user folder path issues)",
              "Blink test successful - toolchain verified working",
            ],
          },
          {
            type: "noindent",
            text: "Phase 2 Completed: 2025-10-30",
          },
          {
            type: "ul",
            items: [
              "OLED display (SSD1306) initialized via I2C at 400kHz on GPIO 21/22",
              "SD card mounted via SPI at 4MHz (initially 400kHz for breadboard stability)",
              "Button debouncing implemented (200ms) with pull-down resistors",
              "6-screen navigation UI implemented (Title, SD Status, Record, Playback, Settings, Graphics)",
              "I2S microphone initialized on GPIO 25/26/27 in Philips standard mode",
              "Full WAV recording pipeline: I2S capture → fwrite to SD → WAV header generation",
              "Automatic filename generation (memo_001.wav, memo_002.wav, etc.)",
              "Power management: I2S disabled when not recording",
              "Error handling added for SD card writes and WAV header generation",
            ],
          },
           {
            type: "noindent",
            text: "Code Quality Improvements (Post-Phase2 Review)",
          },
          {
            type: "ul",
            items: [
              "Fixed OLED display bug: removed text overlapping audio level bar",
              "Fixed SD card space allocation: removed hardcoded 16KB cluster size causing mount issues",
              "Added comprehensive error checking: all fwrite operations now verify bytes written",
              "Increased SD SPI speed: 400kHz → 4MHz for better write performance",
              "Implemented power management: I2S channel now disabled between recordings",
              "Enhanced error reporting: SD operations update on-screen status messages",
            ]
          },
          { type: "title", text: "Technical Implementation Details:" },
          {
            type: "noindent",
            text: "Audio Recording Pipeline",
          },
          {
            type: "ul",
            items: [
              "I2S Configuration: 16kHz sample rate, 16-bit mono, Philips standard mode",
              "Capture Loop: 50ms polling, 1024-sample buffer (64ms at 16kHz)",
              "WAV Format: Standard PCM WAV with 44-byte header",
              "Storage: Direct fwrite to SD card with error checking",
              "Power: I2S channel disabled between recordings",
            ]
          },
          {
            type: "noindent",
            text: "Code Architecture",
          },
          {
            type: "ul",
            items: [
              "State Machine: 6-screen UI with button-driven navigation",
              "Recording State: Boolean flags with file handle management",
              "Error Handling: All SD operations check return values and update status display",
              "Concurrency: Single-threaded main loop, no RTOS tasks yet",
            ]
          },
          {
            type: "noindent",
            text: "Performance Characteristics",
          },
          {
            type: "ul",
            items: [
              "SD Write Speed: 4MHz SPI (32 KB/s theoretical, actual varies)",
              "Audio Data Rate: 16kHz × 16-bit × 1 channel = 32 KB/s",
              "Critical timing: Write speed must match or exceed audio data rate to avoid dropouts",
            ]
          },
        ],
      },
    ],
  },
//...............................................................AutoFlora

  {
    id: "AutoFlora",
    title: "AutoFlora",
    blurb: "Generative curation for living landscapes.",
    cover: "/projects/image2.jpg",
    coverPosition: "center top",
    gallery: [
      "/projects/image1.jpg",
      "/projects/image2.jpg",
      "/projects/image3.jpg",
      "/projects/image8.jpg",
    ],
    overviewImage: "/projects/AutoFlora_AIMockUp.jpg",
    overviewText: `AutoFlora is an autonomous plant design app that uses a specialized algorithm to generate
             and curate arrangements for planters or landscapes. It blends horticultural data with design principles 
             to suggest combinations that are both practical and visually balanced. `,

    posts: [
      {
        id: "MVP",
        title: "MVP",
        date: "2025-09-01",
        tags: [
          "Prototyping",
          "Python",
          "Google Cloud Console",
          "Custom Search Engine",
          "AI",
        ],
        excerpt: " ",
        body: [
          {
            type: "p",
            text: `I am not a programmer, but I am an Engineer, and with AI I coded a local desktop program in python that assembles aesthetically pleasing arrangements of plants. Because of the accessibility of LLM’s and AI Assistants, generating python scripts for specific functions was the easiest part of this project - the biggest hurdle in this project was data collection. As demonstrated by this prototype, a mobile application with a cleaner user interface and additional features is viable. This is what I did:`
          },
          {
            type: "p",
            text: `First, I created a substantially large list of ~8,000 unique plant names, saved as a .csv by compiling availability (inventory) lists from multiple wholesale nurseries in Pennsylvania. In this process I also tagged plants with the additional data of which seasons they typically become available for purchase (spring, summer, fall, or a combination of seasons) - I used this as a quick approximation for “planting season”, but this data would require expert validation. `
          },
          {
            type: "img",
            src: "/projects/image1.jpg",
            alt: "images downloaded to desktop file using google console",
          },
          {
            type: "caption",
            text: "Image 1. Images downloaded into desktop file",
          },
          {
            type: "p",
            text: `Then I used Google Cloud Console and Custom Search Engine (CSE), along with a python script to search and download the first three images from Google Images associated with each plant name, saved the .jpg files in a folder, and labeled them with the plant name and a clarifier “_1, 2, or 3”,  to prevent duplicate file names. CSE is accessed through a Custom Search API key provided by Google Console, allowing me to query the search engine with a plant name and return an image URL - each query was tracked in the console and had an associated cost, as well as a maximum number of paid queries per day. Running the program took approximately 4 sessions (1,000 per day), and about $20 total cost. The result was a substantial, yet incomplete, complement of images due to errors that occurred during the image downloading process - 0% of the queries failed to return a URL, but approximately ¼ of the queries that were billed linked to images that could not be  downloaded. Essentially, any image with a source file ending in .webx was not able to be downloaded, probably by design of the image owner. I decided there were a sufficient number of photos to proceed with an MVP- although further work is needed in this process. `
          },
          {
            type: "p",
            text: `Next, I used another python script to analyze each image file for its most dominant colors. The script was iterated multiple times in order to focus primarily on the flower colors and other non-green foliage that otherwise muddied the data - I ultimately landed on a method of Green-Masking and K-Means Clustering in order to select the appropriate dominant colors. The program is limited in its ability to find the dominant colors of mostly green foliage, as well as isolating plants from unrelated objects in images.`
          },
          {
            type: "img",
            src: "/projects/image2.jpg",
            alt: "code for green masking images using python",
          },
          {
            type: "caption",
            text: "Image 2. Python script for Green Masking images",
          },
          {
            type: "img",
            src: "/projects/image3.jpg",
            alt: "code for k-means-clustering method of image pixels using python",
          },
           {
            type: "caption",
            text: "Image 3. Python script for K-Means Clustering method of pixel sorting",
          },
          {
            type: "img",
            src: "/projects/image4.jpg",
            alt: "plant with pink flowers",
          },
           {
            type: "caption",
            text: "Image 4. Astilbe Ostrich Plum",
          },
          {
            type: "img",
            src: "/projects/image5.jpg",
            alt: "pink color scheme created by selecting dominant colors from image of pink flowers",
          },
           {
            type: "caption",
            text: "Image 5. Astilbe flower color scheme",
          },
          {
            type: "img",
            src: "/projects/image6.jpg",
            alt: "plant with orange flowers",
          },
           {
            type: "caption",
            text: "Image 6. Calibrachoa MiniFamous Neo Lava+Red Eye",
          },
          {
            type: "img",
            src: "/projects/image7.jpg",
            alt: "orange color scheme created by selecting dominant colors from image of orange flowers",
          },
           {
            type: "caption",
            text: "Image 7. Calibrachoa flower color scheme",
          },
          {
            type: "p",
            text: `I wrote the final application in python - with the primary goal to create a window on my screen with a single “generate” button that would create randomized arrangements of images based on selected criteria and a few hard coded color theory principles. The logic follow: a random image is “picked” as the base image, then random images selected and the dominant colors are compared to the base image until an acceptable color combination is found. If a color combination is not found, a new random photo is selected. If an acceptable color combination is found, then the photo is “picked”, and it moves onto selecting another photo or, if all photos have been selected, the arrangement is displayed. In the process I also had to create an additional .csv file denoting a lookup table of the dominant colors converted into hex values to eliminate the need to reprocess each image.`
          },
          {
            type: "p",
            text: `I began incorporating metrics like sun and water requirements as additional criteria for selecting an arrangement - filtering out any images that do not meet the criteria before the color selection has begun. This functionality is far from integrated due to the amount of time it would take for me to enrich my original list of plant names with this data. Recently though, AI Agent capabilities have become accessible, and that has sped up the process considerably. Still, data requires expert validation, which would take a considerable amount of time. I don’t intend to continue working on this project in the foreseeable future unless I find a profitable reason to, but I have become very familiar with the concept of vibe-coding, which I have been able to incorporate into other projects, such as building this website.`
          },
          {
            type: "img",
            src: "/projects/image8.jpg",
            alt: "Final MVP of Autoflora app",
          },
          {
            type: "caption",
            text: "Image 8. Final MVP of AutoFlora",
          },
        ],
      },
    ],
  },
//..............................................................GrowGrid

  {
    id: "hydro-chamber",
    title: "GrowGrid",
    blurb: "Interoperable grow system, built to adapt.",
    cover: "/projects/GrowGrid_Render2.jpg",
    coverPosition: "center bottom",
    gallery: [
      "/projects/GrowGrid_Render2.jpg",
      "/projects/GrowGrid_Base.jpg",
      "/projects/GrowGrid_DripPan.jpg",
      "/projects/GrowGrid_Reservoir.jpg",
      "/projects/GrowGrid_Standing_AIMockUp.jpg",
      "/projects/GrowGrid_Tabletop_AIMockUp.jpg",
      "/projects/printpreview1.jpg",
      "/projects/printingbase.jpg",
      "/projects/printeddrippan.jpg",
      "/projects/removingreservoir.jpg",
      "/projects/reservoirfit2.jpg",
      "/projects/reservoirfit.jpg",
      "/projects/removingdrippan.jpg",
      "/projects/scalemodel.jpg",
    ],
    overviewImage: "/projects/GrowGrid_Render2.jpg",
    overviewText: `GrowGrid is a fully modular growing framework 
        where every piece functions independently yet connects 
        seamlessly into the whole. Pods, pumps, and irrigation lines 
        can be removed, serviced, or upgraded without disturbing the 
        rest of the system, eliminating the hidden maintenance burdens 
        found in most grow setups. By prioritizing accessibility and 
        adaptability, GrowGrid makes long-term cultivation cleaner, 
        simpler, and more reliable. Its open architecture also supports 
        future expansion - sensors, lighting, or new pod designs can be 
        integrated without redesigning the core. The result is an engineered 
        system that grows with you while keeping plants, not upkeep, 
        at the center. `,
    posts: [
      {
        id: "PRD",
        title: "Functional Requirements",
        date: "2025-07-01",
        body: [
          { type: "title", text: "Scope:" },
          {
            type: "p",
            text: "GrowGrid is a home appliance for growing edible plants indoors such as strawberries, green beans, or thyme; or nonedible houseplants. The grow method is hydroponics based, but the system encourages personalization/experimentation with growing media, methods, and crops - for the purposes of design the ideal crops will be herbaceous annuals and perennials, excluding root vegetables. ",
          },
          { type: "title", text: "Functional Requirements:" },
          {
            type: "noindent",
            text: "(detailed system features and user interactions)",
          },
          {
            type: "ul",
            items: [
              "Remove the tub while every other part of the system stays in place. ",
              "The entire irrigation/pod system is modular and accessible - active irrigation is decoupled from passive irrigation systems. Grow pods/pod holders can be removed and cleaned individually while every other part of the system stays in place. They can also be changed out or combined with multiple types of growing methods",
              "Upgradeable features based on the mountable structure (grid)- base model includes structure that can be built upon with additions or upgrades - pumps can be inline or submerged - sensors and lights can be added and mounted to the grid",
            ],
          },
           { type: "title", text: "Constraints and Assumptions:" },
           {
            type: "ul",
            items: [
              "US Electronics/Appliance Standards",
              "Food Safety Standards",
            ],
          },
          { type: "title", text: "Acceptance Criteria:" },
          {
            type: "ul",
            items: [
              "Structure holds desired weight capacity (TBD)",
              "Accessory load limit (TBD)",
              "Acceptable Watertightness/Splash  (TBD)",
            ],
          },
           { type: "title", text: "Concept Sketches:" },
          { type: "img", src: "/projects/GrowGrid_Standing_AIMockUp.jpg", alt: "Concept Sketch" },
          {
            type: "caption",
            text: "Image 1. Tabletop Unit",
          },
          { type: "img", src: "/projects/GrowGrid_Tabletop_AIMockUp.jpg", alt: "Concept Sketch" },
          {
            type: "caption",
            text: "Image 2. Tabletop Unit",
          },
        ],
      },

      {
        id: "Prototyping",
        title: "Tabletop Prototype",
        date: "2025-08-02",
        tags: [
          "Solidworks",
          "CAD",
          "Prototyping",
          "3D Printing(PLA)",
          "Ender 3 V2",
          "Cura",
        ],
        excerpt: " ",
        body: [
          {
            type: "p",
            text: `This is my first attempt at bringing this concept to life - my goal with this prototype is to have a small test fixture loosely based on the table-top concept that will allow me to play with the functionality of the system. It will definitely be more Function than Form. Working with physical materials (stuff I already have, cheap things I can buy online/in store, or sometimes just cardboard) is usually one of the first steps I take in the design process - there is a significant amount of information to be gleaned whether I end up using this as a test fixture or not.`,
          },
          {
            type: "p",
            text: `I purchased some materials on Amazon - tub, irrigation tubing and connectors, gridpanel, and pump. Those parts came and I fiddled around with them for a bit - I used zip ties that I already had to secure the irrigation to the gridpanel and decided I will eventually need to design a clip to easily attach and detach the tubing. Then I went to Home Depot and got some wood, L brackets, screws, and wood glue to build a base. Once I had this base made I planned to model some basic parts to 3d print for experimenting.`,
          },
          {
            type: "img",
            src: "/projects/GrowGrid_prototype1.jpg",
            alt: "frame prototype of tabletop hydroponic system made out of wood",
          },
           {
            type: "caption",
            text: "Image 1. Wooden Base Frame",
          },
          {
            type: "img",
            src: "/projects/GrowGrid_prototype4.jpg",
            alt: "frame and water tub prototype",
          },
           {
            type: "caption",
            text: "Image 2. Frame with reservoir",
          },
          {
            type: "img",
            src: "/projects/GrowGrid_prototype3.jpg",
            alt: "frame and water tub prototype with hand holding gridpanel",
          },
           {
            type: "caption",
            text: "Image 3. holding Grid Panel in place",
          },
          {
            type: "p",
            text: `I finished gluing all the pieces of the base and added little dollops of glue to the screw ends that stick out a little. I made some models in Solidworks of a grow cup and some brackets to mount the gridpanel to the base. I use Solidworks primarily but have recently switched to Fusion, primarily because I can buy and maintain my subscription month-to-month and directly from Autodesk - no third party software distributors that charge gratuitous maintenance fees. This has proven to be significantly cheaper and I don’t see any major differences in quality/performance. `,
          },
          {
            type: "p",
            text: `The cup took about 10 hours to print, but first I had to go to Micro Center to get a fresh roll of filament. The PLA I already had was out in the air too long, it became far too brittle, snapped, and unraveled multiple times. At this moment building out my 3d printing capabilities isn’t a priority - I have an Ender 3 V2 that I got on sale for $100 and it works great for me.`,
          },
          {
            type: "img",
            src: "/projects/GrowGrid_prototype2.jpg",
            alt: "frame and water tub with printed brackets holding gridpanel",
          },
            {
            type: "caption",
            text: "Image 4. Printed Brackets holding Grid Panel to Base",
          },
          {
            type: "p",
            text: `In the process of building this prototype, I realized that the largest design challenge is going to be the structure of this thing - not the electronics, not the pump, or even the grow-cup or media. So long as this base is stable (and with this prototype I think it’s becoming very clear that it can be very stable/secure) I can try out as many different varieties of grow-cups and accessories that I want and mount them to the gridpanel. I can even use multiple different growing methods depending on what I’m growing. `,
          },
          {
            type: "noindent",
            text: "Some notes on my first test: ",
          },
          {
            type: "ul",
            items: [
              "The pump does not vibrate the wire grid when it is running like I worried about - it is a little bit loud but again not as loud as I worried. A submersible pump would be quieter but messier. ",
              "Because the pump is mounted on a grid and is activated with a push-button, when - my finger press is enough to vibrate the grid but I believe this could be solved with a more secure bracket mounting, because what I made was super rudimentary. I will keep this in mind when I update the brackets",
              "The water coming out of the cup is actually less splashy than I thought. The flowrate is faster into the cup than out - which tracks with what I should expect based on the diameter of the nozzle and gravity as the driving force - so I should keep that in mind with how long the pump is running - or adjust the model by widening the outlet nozzle. ",
              "Again, I need to create some sort of clip for the irrigation tubing to the gridpanel, and I want it to be in such a way that it is easy to clip on and off, in the case that the tubing needs to be removed/replaced. ",
              "While the splash is not as bad as I thought, I still don’t have a solid solution. My dehumidifier has this dappled area where the water drips off the condenser (and I’ve noticed this same concept with indoor water features). ",
              "I think the wood will hold up fine for this prototype but I won’t last forever. It will need to be coated probably in some water resistant paint but… for now I think this is fine.",
            ],
          },
        ],
      },
      {
        id: "Designing in Fusion",
        title: "Removable Water Reservoir",
        date: "2025-09-10",
        excerpt: " ",
        tags: ["Fusion 360", "CAD", "Plastic Parts", "Injection Molding",],
        body: [
          {
            type: "p",
            text: `The most integral part of this system that sets it apart is a Removable Water Reservoir. In every system I have seen on the market, you have to take the whole thing apart if you want to properly clean and refresh the tank (remove all the buildup/debris associated with growing plants, especially hydroponically), and this simply does not work for me. `,
          },
          {
            type: "p",
            text: `One of my primary goals is to keep the # of parts to an absolute minimum. So, aside from the Grid Panel itself (which may potentially also be modifiable), I’ve broken down the base structure into three parts:`,
          },
           {
            type: "ul",
            items: [
              "the Base that touches the floor and holds the Grid Panel ",
              "the Reservoir tub that slides into its compartment in the base, underneath the Grid Panel, and",
              "the Drip Pan, which sits above the reservoir, below the gridpanel, and funnels all waste water back into the reservoir. ",
            ],
          },
          {
            type: "p",
            text: `I knew when I started the design of these components that they are foundational to the system as a whole - like I said in my last post, every other part of the system can be altered or upgraded based on preferences of the user, while these three components stay the same - and the overall function/benefits of this system remain the same. These parts were designed so far with injection molding in mind - I believe this would be the ideal manufacturing method for these types of components based on the robustness of material, cost to mass produce, and flexibility it lends to design. `,
          },
          {
            type: "p",
            text: `Of these three parts, the Base is by far the one I’ve toiled over the most. It was very difficult to wrap my head around conceptually what it would look like. I started by defining the constraining factors and then building up from there. The Grid Panel is held in place by two mounting holes at the top, and the reservoir and drip pan are held in place relative to each other. `,
          },
          {
            type: "img",
            src: "/projects/GrowGrid_Base.jpg",
            alt: "Base TopView",
          },
          {
            type: "img",
            src: "/projects/GrowGrid_Base2.jpg",
            alt: "Base BottomView",
          },
           {
            type: "caption",
            text: "Image 1&2. Base top and bottom views",
          },
          {
            type: "img",
            src: "/projects/BaseReservoir.jpg",
            alt: "Base BottomView",
          },
           {
            type: "caption",
            text: "Image 3. Base with Grid Panel",
          },
          {
            type: "p",
            text: `The Reservoir is a simple tub - I think there is room for improvement here, but this models the basic shape that is needed to further iterate designs of the Base and Drip Pan. `,
          },
          {
            type: "img",
            src: "/projects/GrowGrid_Reservoir.jpg",
            alt: "DripPan TopView",
          },
          {
            type: "img",
            src: "/projects/GrowGrid_Reservoir2.jpg",
            alt: "DripPan TopView",
          },
           {
            type: "caption",
            text: "Image 4&5. Reservoir top and bottom views",
          },
          {
            type: "img",
            src: "/projects/GridBaseReservoir.jpg",
            alt: "DripPan BottomView",
          },
           {
            type: "caption",
            text: "Image 6. Base with Reservoir and Grid Panel",
          },
          {
            type: "p",
            text: `The Drip Pan slides in on top of the reservoir and is constrained by the base. I like the idea that this is removable and completely decoupled from the growing containers, electronics, and irrigation. It is constrained in place by the Base. `,
          },
          {
            type: "img",
            src: "/projects/GrowGrid_DripPan.jpg",
            alt: "Reservoir TopView",
          },
          {
            type: "img",
            src: "/projects/GrowGrid_DripPan2.jpg",
            alt: "Reservoir BottomView",
          },
          {
            type: "caption",
            text: "Image 7&8. Drip Pan top and bottom views",
          },
          {
            type: "img",
            src: "/projects/GridBaseReservoirPan.jpg",
            alt: "Reservoir BottomView",
          },
          {
            type: "caption",
            text: "Image 9. Full Base Structure(Base, Reservoir, Drip Pan, & Grid Panel)",
          },
        ],
      },
      {
        id: "3d printing",
        title: "3D-Printing Scale Model",
        date: "2025-09-22",
        excerpt: " ",
        tags: ["Prototyping", "Fusion 360", "CAD", "Ender 3 V2", "3D Printing(PLA)", "Cura"],
        body: [
          {
            type: "p",
            text: `I 3D printed a scale model of the parts I made so far - the purpose was simply to hold the parts in my hands and feel how they physically interact with each other. While some could characterize this as a waste of time and energy - I actually enjoy any excuse to use my 3D printer, and I very much like looking at the little model that now sits on my desk. It is like a little drawer inside which I’ve hidden some small samples of clips I printed a couple weeks ago.`,
          },
            {
            type: "p",
            text: `I scaled all the parts with the same scaling factor and resaved the scaled versions of the models. I exported the files as .STL, and sliced them into GCode using Cura. While Cura is provided by Ultimaker, it provides presets for Ender products and is my go-to slicer for printing on my Ender 3 V2. `,
          },
          { type: "img", src: "/projects/printeddrippan.jpg", alt: "" },
            {
            type: "caption",
            text: "Image 1. First part completed, Drip Pan",
          },
          { type: "img", src: "/projects/printingbase.jpg", alt: "" },
            {
            type: "caption",
            text: "Image 2. First layers of Base printing",
          },
          { type: "img", src: "/projects/printpreview1.jpg", alt: "" },
            {
            type: "caption",
            text: "Image 3. Slicer preview of Base",
          },
          { type: "img", src: "/projects/scalemodel.jpg", alt: "" },
            {
            type: "caption",
            text: "Image 4. Completed scale model",
          },
          { type: "img", src: "/projects/removingdrippan.jpg", alt: "" },
            {
            type: "caption",
            text: "Image 5. Removing Drip Pan)",
          },
          {
            type: "p",
            text: `I am extremely pleased with the fit of the reservoir into the base, even in the scaled model. My method of tolerancing is baked into all of my assemblies using a sketchreference file. Essentially, I draw all the sketches for my entire assembly in one part file containing no objects. Then I import that file into all my individual part drawings. In this way, I can make edits to multiple parts simultaneously, minimize sketches, share sketches between parts, and reference sketches between parts, all within the sketch reference file. Not a lot of people do this because they believe that in more complex assemblies it can get very visually cluttered - but I find if you take time to label your sketches then there is no issue, even for complex assemblies. In fact - another benefit aside from tolerancing is that I can minimize the amount of physical constraints applied to my assemblies - I find the more physical constraints that are applied, the poorer the performance of the assembly drawing as a whole. By using a sketch reference in all my parts, everything snaps right into place and I only need to focus on the physical constraints that are needed for whatever simulations or animations I’m running at a given time.  `,
          },
          { type: "img", src: "/projects/reservoirfit.jpg", alt: "" },
          {
            type: "caption",
            text: "Image 6. Observing fit of Reservoir 1",
          },
          { type: "img", src: "/projects/reservoirfit2.jpg", alt: "" },
          {
            type: "caption",
            text: "Image 7. Observing fit of Reservoir 2",
          },
          { type: "img", src: "/projects/removingreservoir.jpg", alt: "" },
          {
            type: "caption",
            text: "Image 8. Removing Reservoir from Base",
          },
          {
            type: "p",
            text: `Overall, I’m happy with how this print turned out, and it is further encouragement to keep moving forward on this project. `,
          },
        ],
      },
    ],
  },



//........................................................Website

  {
    id: "Building My Website",
    title: "Space4Plants",
    blurb: "Portfolio Website",
    cover: "/projects/viewports.jpg",
    gallery: [],
    overviewImage: "/projects/viewports.jpg",
    overviewText: `Building this website from scratch is my second walk into React web development, the first being my original space4plants website which
    never left the dev server. I learned a lot from that first attempt and I believe I have far more to learn from building my portfolio website from scratch,
    as opposed to using a template website builder. This project exemplifies my exploratory and bold nature - I am not afraid of what I do not know, and 
    I welcome the challenge.`,

    posts: [
      {
        id: "Chat Harassment",
        title: "How to Use AI",
        date: "2025-09-21",
        excerpt: " ",
        tags: ["AI", "React",],
        body: [
          {
            type: "p",
            text: `I don't know everything. Let's start there. A significant amount of the time I am finding things out through trial and error and this is no different. But I learn very quickly. `
          },
          {
            type: "p",
            text: `My method of getting Chat to do what I want has continuously evolved over time and because I don't know much about the internal workings of AI, I am regularly testing and retesting postulates to make sure they still hold true. For instance - I used to be on the bandwagon that chat responded best to threats - I don't think that's true anymore - either something was fundamentally changed by OpenAI or threats were never very effective in the first place. I'm finding lately that positive reinforcement is achieving much better results - and I've updated the methodology of how I use the platform to solve problems. `
          },
          {
            type: "p",
            text: `First off - I am not a believer that the obstacle between me and my goal is the perfect prompt - and I think that is proven by typing the same prompt over and over and getting different results every time. I think the biggest obstacle between me getting what I want is context - and digging even deeper - it's that the chat thread is degrading as a function of the amount of context that has been provided and changed - this is a serious issue when you're trying to solve a problem that requires a lot of context and troubleshooting.`
          },
          {
            type: "p",
            text: `In making this website I have created chat threads so complex that attempting to ask a question in the context of these threads will crash the page, and starting a new thread would mean starting from square one with the amount of context I've built with the crashing one. Recently there have been changes to allow chat to “remember” context between chats, but even light prodding yields very lackluster results on this front.`
          },
          {
            type: "p",
            text: `So… Now I ask chat to outline what we are working on - as an example, I'm working on my website which has a lot of different files that link together. Periodically I ask chat to make a file tree with descriptions of what each file is doing and how it relates to the other files.`
          },
          {
            type: "img",
            src: "/projects/contexttree.jpg",
            alt: "file tree with descriptions of each file",
          },
          {
            type: "caption",
            text: "Image 1. File tree with description of each file",
          },
          {
            type: "p",
            text: `I use this tree in order to start new threads without having to provide the full context of all the work we have done before. It is also helpful for me as a reference to remember what we have done without having the dig through the chats. And I don't have to spend a significant amount of time making sure I'm documenting this myself because chat is able to generate this with very little direction. `
          },
          {
            type: "p",
            text: `So, say I take this outline and I start a new chat, and I want to make some changes to the tagging system in my projects page. Which is something I was just working on yesterday. First I provide this outline to a new chat, and then I say something like:`
          },
          {
            type: "caption",
            text: "We're going to be editing the tags on my project page, I think you will need to see x, y, and z files in full, I'm going to provide them now.",
          },
          {
            type: "p",
            text: `… and then I provide the full context of those specific files. At this point I can ask chat to start building the task list for the change I want to make, but in the case where I’m not entirely sure what I actually want, I need to do a bit of brainstorming. Canvas is a very nice feature for this brainstorming.`
          },
          {
            type: "p",
            text: `In the case of my tagging system, I wasn't entirely sure how I wanted it to look, so we did a very basic mock-up in the canvas - which opens a window to preview features. The canvas degrades in quality as the base of code you are working with gets longer - so it works well when brainstorming specific features but not for building a whole website.`
          },
          {
            type: "p",
            text: `I've found that chat can handle approximately 250 lines of code at a single time - that is not to say you cannot edit sections of code within a larger file or across multiple files if you provide the full context of those files, but there is degrading quality in its responses if trying to do sweeping edits over 250 lines long. Say you provide a section of code 300 lines long, and ask it to change the color value on a style - it will attempt to rewrite the entire 300 lines, and in the process can introduce errors. Kind of like a mutation when a cell is copying a strand of DNA.) Anyway, the canvas is a useful tool when used appropriately.`
          },
          {
            type: "img",
            src: "/projects/designcanvas.jpg",
            alt: "designing tag functionality on my project page using canvas",
          },
          {
            type: "caption",
            text: "Image 2. Designing tag functionality using Canvas",
          },
          {
            type: "p",
            text: `The last thing I do before diving into actual edits is that I make a chat and write out a step by step procedure, or task list, and I use this to keep the chat on track with what we are trying to accomplish with the actual edits. I think anyone who has been vibe-coding will know that sometimes chat can easily forget context, or misplace priorities and get very stuck on something you've said, carrying it over to new topics, and generally just forgetting the train of thought, ie - it can be difficult to have a very dynamic conversation, or troubleshoot multifaceted problems. So before I allow it to edit the code at all (sometimes this takes some prompting because its natural inclination is to jump directly into edits) we discuss specifically what we are going to do and make a plan. I review this plan with multiple interactions until it is perfect - and I call out things that don't make sense. `
          },
          {
            type: "p",
            text: `A good task list breaks down the multifaceted problem into distinct sections that we can start and close out like a troubleshooting window - keeping the chat from carrying over information that is no longer relevant, but also providing an outline to keep the train on track.`
          },
          {
            type: "p",
            text: `Gabe pointed out that this is essentially how you manage a junior programmer - and that in this whole process I've just described is “baby learning how to have effective communication.” So take that as you will.`
          },
          { type: "img", src: "/projects/tasklist.jpg", alt: "task list" },
          {
            type: "caption",
            text: "Image 3. Task list",
          },
        ],
      },

      {
        id: "Introduction",
        title: "Rough Draft",
        date: "2025-08-11",
        excerpt: " ",
        tags: [
          "Wireframes",
          "AI",
          "CAD",
          "AutoCAD",
        ],
        body: [
          {
            type: "img",
            src: "/projects/viewports.jpg",
            alt: "Phone viewports",
          },
          {
            type: "caption",
            text: "Image 1. Viewports",
          },
          {
            type: "p",
            text: `In the process of building a website, I also used Autocad - primarily to help me visualize the layout, but also generally to practice for the Autocad Certified User (ACU) and Autocad Certified Professional (ACP) exams.`
          },
        ],
      },
    ],
  },

//.............................................................SeveredFloor

  {
    id: "Severed Floor FloorPlan",
    title: "Severed FloorPlan",
    blurb:
      "Autocad proficiency demonstrated by recreating non-euclidian floorplan",
    cover: "/projects/wellnesscenter.jpg",
    coverPosition: "center",
    gallery: [
      "/projects/MDR-Desks.jpg",
      "/projects/wellnesscenter.jpg",
      "/projects/perpetuitywing.jpg",
    ],
    overviewImage: "/projects/MDR-Desks.jpg",
    overviewText: ` Severed Floor is a scale replica of the office set from the Apple TV+ show Severance. The show’s set designers consistently 
    violated one or more of the five euclidean postulates of geometry when creating the layout of the severed floor in 
    order to foster tones of unease, and validate feelings of anxiety and paranoia in the show characters. With this 
    project, I am seeking to demonstrate my proficiency in AutoCAD, showcasing my technical ability with the software 
    as well as professional grade design and problem-solving skills - to take even the most paradoxical layouts and make them clear.`,

    posts: [
      {
        id: "Beginning",
        title: "Rough Draft",
        date: "2025-09-16",
        tags: ["Layout design","AutoCAD","CAD"],
        excerpt: " ",
        body: [
          {
            type: "p",
            text: `I can already tell the hardest part about this isn't going to be the CAD, but trying to figure out the layout from just photos, reddit posts, and watching the show. On a side note - my soundtrack for the start of this project is Bjorks Post album, which seems fitting.`
          },
          {
            type: "p",
            text: ` I was originally inspired to do this project by the office layout designs in my Autocad study material - there's one default office layout that comes with Autocad that has a bunch of cubicles labeled with employee names. While doing the exercises from the autocad website with this file, I was picturing a Lumon CAD operator updating the desk layout of the MDR office between season 1 and 2, and decided I could do that myself.`
          },
          {
            type: "img",
            src: "/projects/MDR-Desks.jpg",
            alt: "Autocad layout of desks",
          },
          {
            type: "caption",
            text: "Image 1. Rough Draft of MDR Office",
          },
          { type: "title", text: "MDR:" },
          {
            type: "p",
            text: `I'm going to start with the MDR office because I think this should be the easiest and has the most reference material to work with. In this exercise, I learned about block parameters. Basically, I created the general layout of the desks using regular blocks - I edited the default computer block that comes with designstudio to have a keyboard with the characteristic scroller ball rather than a mouse. Then I created a Name Card block with a Name attribute so that I can keep it a uniform block but change the name per desk. I also added a linear stretch parameter to the rectangle around the block so that it can be sized, as well as a move parameter to the text to keep it centered on the rectangle and it is stretched.`
          },
          {
            type: "img",
            src: "/projects/Block_Linear.jpg",
            alt: "Applying Linear Stretch parameter in Block Editor",
          },
          {
            type: "caption",
            text: "Image 2. Applying Linear Stretch parameter in Block Editor",
          },
          {
            type: "img",
            src: "/projects/Block_Move.jpg",
            alt: "Apply Move parameter to text and linear stretch.",
          },
          {
            type: "caption",
            text: "Image 3. Apply Move parameter to text and Linear Stretch",
          },
          {
            type: "img",
            src: "/projects/wellnesscenter.jpg",
            alt: "Autocad layout of wellness center",
          },
          {
            type: "caption",
            text: "Image 4. Rough Draft of Wellness Center",
          },
          { type: "title", text: "Wellness Center:" },
          {
            type: "p",
            text: ` I listed out all the departments I can remember off the top of my head and will be sketching them out one by one as a rough draft from memory. `
          },
          {
            type: "p",
            text: `I had another funny thought of how as the CAD operator, I might have been given the task to remove all the furniture from Ms Casey's wellness office - particularly the tree. I don't think I need to care too much about getting things perfect right now because at the end of the day, one of the things that I am doing as a CAD operator is editing drawings that already exist to be true to life, which will involve scaling and sizing and things - so I think it's better if I get as much out onto the paper as possible, and worry about making things perfect later.`
          },
          { type: "img", src: "/projects/departments.jpg", alt: "" },
          {
            type: "caption",
            text: "Image 4. Department Name Blocks",
          },
          { type: "img", src: "/projects/perpetuitywing.jpg", alt: "" },
          {
            type: "caption",
            text: "Image 5. Rough Draft of Perpetuity Wing",
          },
          { type: "title", text: "Perpetuity" },
          {
            type: "p",
            text: `So, I'm very interested in making all the plant related rooms, there's something very satisfying about doing the landscape layouts - also, again, I'm not really trying to make the rooms to scale right now, and I think that is okay for now because I can always go back and edit in the future - to say again for the millionth time - editing is part of the process.`
          },
          {
            type: "p",
            text: `I learned something interesting about the Perpetuity set - the building is modeled off of the Hudson River Museum, which is kind of crazy because I used to live in New Paltz and have never been here - or maybe I have and I just don't remember. I used an aerial photo from google maps to loosely copy the layout of this house. It would be super interesting if I took a field trip to this place, recorded some videos, and then literally recreated the inside of this house in layers. I may do that, it seems actually really fun. `
          },
          {
            type: "p",
            text: `It's becoming super apparent to me that mapping this floor is as grand of an endeavor as saying "I'm going to map the entire world to scale!" but then google maps literally did that - so why should I limit myself in the feasibility of my goals? I Am Woman... or something like that.`
          },
          { type: "img", src: "/projects/hudsonrivermuseum.jpg", alt: "" },
          {
            type: "caption",
            text: "Image 6. Hudson River Museum aerial view",
          },
        ],
      },
    ],
  },

];
