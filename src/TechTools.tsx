import ToolsCard from "./components/ToolsCard";

function TechTools() {
    return (
        <>
            <main className="flex flex-col items-center text-left mx-auto border-fishing-yellow border-3 m-3 md:px-10 md:py-3 bg-white/50 md:w-5/12 ">
                <h2 className="font-roboto-slab font-semibold text-xl md:text-4xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070] pt-2">
                    Tech tools
                </h2>
                <p className="text-fishing-peach font-bold mb-3">
                    Some of the tools I use:
                </p>
                <h3 className="self-start px-20 md:px-28 font-roboto-slab font-semibold text-lg md:text-2xl tracking-tighter text-fishing-aqua">
                    IDE
                </h3>
                <ToolsCard tool="vSCode" />
                <ToolsCard tool="vSCodeThemeLight" />
                <ToolsCard tool="vSCodeThemeDark" last />
                <p className="flex justify-center text-fishing-peach pb-3 md:pb-7">
                    {".".repeat(70)}
                </p>
                <h3 className="self-start px-20 md:px-28 font-roboto-slab font-semibold text-lg md:text-2xl tracking-tighter text-fishing-aqua">
                    AI
                </h3>
                <ToolsCard tool="claude" />
                <ToolsCard tool="googleAdk" last />
            </main>
        </>
    );
}

export default TechTools;
