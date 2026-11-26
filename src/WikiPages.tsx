import ProjectLink from "./components/ProjectLink";
import wikiPagesJson from "./data/wikiPages.json";

type WikiPage = {
    id: number;
    title: string;
    link: string;
    domain?: string;
    description?: string;
};

// wikiPages.json is generated at build time by scripts/fetch-raindrop.mjs
const wikiPages: WikiPage[] = wikiPagesJson;

function WikiPages() {
    return (
        <main className="flex flex-col items-center text-left mx-auto border-fishing-yellow border-3 m-3 md:px-10 md:py-3 bg-white/50 md:w-5/12 ">
            <h2 className="font-roboto-slab font-semibold text-xl md:text-4xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070] pt-2">
                Wiki pages
            </h2>
            <p className="text-fishing-peach font-bold mb-3">
                Interesting wiki pages I've saved:
            </p>
            {wikiPages.length === 0 && (
                <p className="font-roboto pb-3 text-sm">Nothing saved yet.</p>
            )}
            {wikiPages.map((item) => (
                <section
                    key={item.id}
                    className="w-full px-8 md:px-16 pb-3 font-roboto"
                >
                    <p className="text-base md:text-lg font-bold">
                        <ProjectLink url={item.link} text={item.title} />
                    </p>
                    {item.domain && (
                        <p className="text-xs text-fishing-peach">
                            {item.domain}
                        </p>
                    )}
                    {item.description && (
                        <p className="text-xs md:text-base">
                            {item.description}
                        </p>
                    )}
                </section>
            ))}
        </main>
    );
}

export default WikiPages;
