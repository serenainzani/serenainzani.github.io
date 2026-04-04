import toolsData from "../data/toolsData";
import ProjectLink from "./ProjectLink";

const ToolsCard = ({ tool, last }: { tool: string; last?: boolean }) => {
    const { title, description, link, img } = toolsData[tool];
    return (
        <section className="flex w-full md:mb-5 flex-col px-20 md:px-28">
            <img
                src={`/${img}`}
                className="h-50 w-100 object-cover m-2 self-center"
            />
            <p className="text-xs md:text-base font-roboto font-normal p-2 align-text-bottom">
                <span className="text-base md:text-lg font-bold">{title}</span>
                &nbsp;{description}
            </p>
            <p
                className={`text-sm md:text-base font-roboto font-normal px-2 ${last ? "pb-3" : "pb-0"}`}
            >
                <ProjectLink url={link} text="Link" />
            </p>
            {!last && (
                <p className="flex justify-center pb-3 md:pb-0">
                    .......................
                </p>
            )}
        </section>
    );
};

export default ToolsCard;
