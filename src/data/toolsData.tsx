type Tool = {
    title: string;
    description: string;
    link: string;
    img: string;
};

const toolsData: { [key: string]: Tool } = {
    vSCode: {
        title: "VS Code",
        description: "IDE",
        link: "https://code.visualstudio.com",
        img: "vscode.webp",
    },
    vSCodeThemeLight: {
        title: "Cute Pink Light Theme",
        description: "VS Code theme (light)",
        link: "https://marketplace.visualstudio.com/items?itemName=webfreak.cute-theme",
        img: "cute-theme.webp",
    },
    vSCodeThemeDark: {
        title: "Pink Cat Boo",
        description: "VS Code theme (dark)",
        link: "https://marketplace.visualstudio.com/items?itemName=ftsamoyed.theme-pink-cat-boo",
        img: "pink-cat-boo.webp",
    },
    claude: {
        title: "Claude",
        description: "AI assistant",
        link: "https://claude.com",
        img: "claude-mascot.webp",
    },
    googleAdk: {
        title: "Google ADK",
        description: "Agent Development Kit",
        link: "https://google.github.io/adk-docs/",
        img: "gcp-adk.webp",
    },
};

export default toolsData;
