

/**
 * PROJECT_DATA schema
 * {
 *  name: string,
 *  image: string,
 *  description: string,
 *  tech_stack: string,
 *  links: [
 *      {
 *          name: string,
 *          link: string
 *      }
 *  ]
 * }
 */

export const PROJECTS_DATA = [
    {
        name: "Zelda Like Game with AI NPCs",
        image: "https://img.youtube.com/vi/XXB7nji_nQo/maxresdefault.jpg",
        description: "A 2D, shooting game where the player moves up and down to move between rooms and attack NPCs to clear the way. NPCs have patrol and follow behaviour. The black holes teleport the player to random spots in the map.",
        tech_stack: "C++, SFML & GIT",
        links: [
            {
                name: "Demo Video",
                link: "https://www.youtube.com/watch?v=XXB7nji_nQo",
            }
        ],
    },
    {
        name: "Connect 4 AI",
        image: "https://img.youtube.com/vi/vrW0rEPwL8Y/maxresdefault.jpg",
        description: "Built a connect 4 solving bot for an in-class AI competition. Uses minimax alpha-beta pruning and a state polling algorithm to determine the next step.",
        tech_stack: "Javascript & GIT",
        links: [
            {
                name: "Demo Video",
                link: "https://youtu.be/vrW0rEPwL8Y",
            }
        ],
    },
    {
        name: "Genetic Algorithm Solving Sudoku Board",
        image: "https://img.youtube.com/vi/ZON7kDbg5Jk/maxresdefault.jpg",
        description: "A genetic algorithm trying to solve a sudoku board by determining the fitness of the board on each iteration and taking the best fitnesses, combining and mutating them to generate better boards. ",
        tech_stack: "Javascript & GIT",
        links: [
            {
                name: "Demo Video",
                link: "https://youtu.be/ZON7kDbg5Jk",
            }
        ],
    },
    {
        name: "Grad Rush",
        image: "https://img.youtube.com/vi/nfu2hHxyaJc/maxresdefault.jpg",
        description: "A 2D platformer game done as a group project for COMP 4300. This game is feature packed with a level editor, AI NPC's, moving tiles, shaders, parallax background and a lot more!",
        tech_stack: "C++, SFML & GIT",
        links: [
            {
                name: "Demo Video",
                link: "https://youtu.be/nfu2hHxyaJc",
            }
        ],
    },
    // ass repo links
    {
        name: "Job Application Manager",
        image: "https://cdn.w600.comps.canstockphoto.com/job-application-word-cloud-clipart_csp72292419.jpg",
        description: "An application I built (roughly in a day) to keep track of all the jobs I applied to. All data is stored locally in the browser.",
        tech_stack: "Javascript, Bootstrap, NodeJS, ReactJS, Redux, IndexedDB & GIT",
        links: [
            {
                name: "Github",
                link: "https://github.com/zakwanashfaq/job_application_manager",
            }
        ],
    },
    {
        name: "This Website",
        image: "https://www.shutterstock.com/image-vector/word-portfolio-on-abstract-colorful-260nw-1917315023.jpg",
        description: "A personal website to show off projects and serve other information that could not be placed in a resume",
        tech_stack: "Javascript, Bootstrap, NextJS, NodeJS, ReactJS, Firebase & GIT",
        links: [
            {
                name: "Github",
                link: "https://github.com/zakwanashfaq/resume",
            }
        ],
    },
    {
        name: "Rush Hour Puzzle Solver",
        image: "https://flowingdata.com/wp-content/uploads/2018/07/Rush-Hour-puzzle-solver-and-generator.png",
        description: "An AI puzzle solver made for my thesis. It was made to be used with other games as well with minor modifications",
        tech_stack: "C++ & GIT",
        links: [
            {
                name: "Github",
                link: "https://github.com/zakwanashfaq/rush_hour_AI_solver",
            }
        ],
    }
]

export const EXPERIENCE_DATA = [
    {
        "position": "Software Developer",
        "company": "Rutter Inc.",
        "duration": "4 months",
        "timespan": "May 2023 to Aug 2023",
        "bulletPoints": [
            "Lead the development of a multi-threaded, stress testing application to evaluate and benchmark Rutter systems, networks and other infrastructure components.",
            "Architected a cutting edge reporting system that analyzes the data from simulations and extracts meaningful results and insights from each run. The generated report is stored as a pdf for record.",
            "Identified system limitations through scientific and repeatable tests, ensuring reliability of collected results.",
            "Collaborated closely with Rutter Inc. developers and university peers to solve daily challenges."
        ],
        "techStack" : "Java, Maven, C#, GRPC, Protobuffs, Python, Pandas, Numpy, Jupyter-Lab, GIT"
    },
    {
        "position": "Software Developer",
        "company": "Celtx",
        "timespan": "Sept 2019 to Dec 2022",
        "duration": "1 year 4 months",
        "bulletPoints": [
            "Designed and developed a highly complex multi-tagging and custom assets system for a “AAA” client in record time, this helped to close a custom development contract.",
            "Solved critical bugs in the system that was crashing the production environment in a timely manner to minimize system downtime, this helped maintain a good relation with clients.",
            "Learned concepts fast, which helped boost my productivity and deliverables. This led me to be a part of Celtx Gem, which is the latest and most cutting-edge product in Celtx’s portfolio.",
            "Explored new technologies - for example ThreeJS - that made our app more competitive and demoed it to the product owner for feedback and approval."
        ],
        "techStack" : ": React, Javascript, Typescript, HTML, CSS, Jest, Selenium, Java, GIT, YJS, NodeJS, IndexedDB, DexieJS, Prosemirror, Perl, AWS"
    },
    {
        "position": "Webmaster",
        "company": "Memorial University - MSA",
        "timespan": "Jan 2020 to Dec 2020",
        "duration": "1 year",
        "bulletPoints": [
            "Built and Maintained a web-app used by thousands of students for daily community updates.",
            "Collaborated with other team members to carry out time critical weekly events in a consistent manner."
        ],
        "techStack" : "Python, React, HTML, CSS, Javascript, Django Rest Api, Bootstrap, SQL, SQLite, CPANEL"
    }
]