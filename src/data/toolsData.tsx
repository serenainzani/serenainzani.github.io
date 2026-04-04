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
        img: "vscode.png",
    },
    vSCodeTheme: {
        title: "Pink Cat Boo",
        description: "VS Code theme (dark)",
        link: "https://marketplace.visualstudio.com/items?itemName=ftsamoyed.theme-pink-cat-boo",
        img: "pink-cat-boo.png",
    },
};

export default toolsData;
