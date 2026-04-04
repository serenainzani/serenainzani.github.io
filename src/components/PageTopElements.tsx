import githubIcon from "/github-logo.svg";
import linkedInIcon from "/linkedin.svg";
import { NavLink } from "react-router";

function TopPageElements() {
    return (
        <>
            <nav className="flex justify-between items-center w-full h-14 md:h-16 bg-fishing-aqua fixed">
                <div>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `${isActive && "underline"} text-fishing-yellow  ml-3 text-sm md:text-xl`
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/tools"
                        className={({ isActive }) =>
                            `${isActive && "underline"}  text-fishing-yellow ml-3 text-sm md:text-xl`
                        }
                    >
                        Tech Tools
                    </NavLink>
                </div>
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
        </>
    );
}

export default TopPageElements;
