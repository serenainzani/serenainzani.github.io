import ProjectCard from "./components/ProjectCard";

function App() {
    return (
        <>
            <main className="flex flex-col items-center text-left mx-auto border-fishing-yellow border-3 m-3 md:px-10 md:py-3 bg-white/50 md:w-5/12 ">
                <h2 className="font-roboto-slab font-semibold text-xl md:text-4xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070] py-2">
                    My Projects
                </h2>
                <ProjectCard project="rpgNotes" />
                <ProjectCard project="arduino" />
                <ProjectCard project="heartland" />
                <ProjectCard project="aiRestReccs" />
            </main>
        </>
    );
}

export default App;
