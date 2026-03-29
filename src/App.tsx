import githubIcon from "/github-logo.svg";
import logo from "/logo.png";
import linkedInIcon from "/linkedin.svg";
import ProjectCard from "./components/ProjectCard";

function App() {
    return (
        <>
            <nav className="flex justify-between items-center w-full h-14 md:h-16 bg-fishing-aqua fixed">
                <a href="https://www.linkedin.com/in/serenainzani/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={logo}
                        className="logo w-12 md:w-14 m-3"
                        alt="Serena logo"
                    />
                </a>
                <div className="flex">
                    <a
                        href="https://github.com/serenainzani"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={githubIcon}
                            className="logo w-12 md:w-14 m-3"
                            alt="github"
                        />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/serenainzani/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={linkedInIcon}
                            className="logo w-12 md:w-14 mt-3 mr-3"
                            alt="linkedin"
                        />
                    </a>
                </div>
            </nav>
            <hgroup className="font-roboto-slab pt-14 flex flex-col md:pt-18 items-center">
                <div className="font-semibold text-fishing-peach ">
                    <h1 className="text-5xl md:text-7xl tracking-tighter pl-8 md:pl-16 text-shadow-[2px_2px_0_#197978]">
                        Serena
                    </h1>
                    <h1 className="text-8xl md:text-[12rem] tracking-tighter -mt-9 md:-mt-18 text-shadow-[3px_3px_0_#197978]">
                        Inzani
                    </h1>
                </div>
                <div className="flex flex-col items-center text-center justify-center bg-fishing-aqua w-10/12 md:w-2/5 h-10 md:h-14 ">
                    <p className="tracking-tighter text-xl md:text-4xl font-semibold font-roboto-slab text-shadow-[2px_1px_0_#000] text-fishing-yellow">
                        Software Engineer
                    </p>
                </div>
            </hgroup>
            <main className="flex flex-col items-center text-left justify-self-center border-fishing-yellow border-3 m-3 md:px-10 md:py-3 bg-white/50 md:w-5/12 ">
                <h2 className="font-roboto-slab font-semibold text-xl md:text-4xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070] py-2">
                    My Projects
                </h2>
                <ProjectCard project="rpgNotes" />
                <ProjectCard project="arduino" />
                <ProjectCard project="aiRestReccs" />
            </main>
        </>
    );
}

export default App;
