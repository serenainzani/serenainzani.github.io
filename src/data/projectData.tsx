type Project = {
    title: string;
    description: string;
    githubLink: string;
    liveLink?: string;
    img: string;
};

const projectData: { [key: string]: Project } = {
    rpgNotes: {
        title: "RPG Notes App",
        description:
            "A bespoke Next.js web app to manage RPG game notes across multiple campaigns. Features OAuth, tailored categorization and a chronological display to streamline session tracking and storytelling.",
        githubLink: "https://github.com/serenainzani/rpg-notes-app",
        liveLink: "https://rpgnotes.serena.software/",
        img: "rpg-notes.webp",
    },
    aiRestReccs: {
        title: "AI Restaurant Recommender",
        description:
            "Inspired by talks from the React Advance Conference, this web app uses OpenAI to create bespoke dining reccomendations based on unique and specific requirements from the user.",
        githubLink:
            "https://github.com/serenainzani/restaurant-recommender-openai",
        liveLink: "https://airestaurantreccs.serena.software/",
        img: "ai-reccs-diner.webp",
    },
    arduino: {
        title: "Arduino Fundamentals",
        description:
            "Developing my electionical engineering and microcontroller skills by creating mini Arduino projects.",
        githubLink: "https://github.com/serenainzani/arduino-tutorial-notes",
        img: "arduino.webp",
    },
    heartland: {
        title: "Heartland Network Graph",
        description:
            "A Juptyer Notebook project to visualize the connections between characters in the Heartland TV series, using a network graph.",
        githubLink: "https://github.com/serenainzani/heartland-network-graph",
        img: "heartland-graph.webp",
    },
};

export default projectData;
