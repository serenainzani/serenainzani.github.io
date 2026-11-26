import { useEffect, useState } from "react";
import ProjectLink from "./components/ProjectLink";

// Id of the PUBLIC Raindrop.io collection holding the wiki pages.
// Find it in the collection URL: https://app.raindrop.io/my/<id>
// (collection must be shared as public; no API token is needed to read it)
const RAINDROP_COLLECTION_ID: number | null = null;

type Raindrop = {
    _id: number;
    title: string;
    link: string;
    excerpt?: string;
    note?: string;
    domain?: string;
};

type State =
    | { status: "loading" }
    | { status: "error" }
    | { status: "ready"; items: Raindrop[] };

function WikiPages() {
    const [state, setState] = useState<State>(
        RAINDROP_COLLECTION_ID === null
            ? { status: "error" }
            : { status: "loading" },
    );

    useEffect(() => {
        if (RAINDROP_COLLECTION_ID === null) return;
        const controller = new AbortController();
        fetch(
            `https://api.raindrop.io/rest/v1/raindrops/${RAINDROP_COLLECTION_ID}?perpage=50&sort=-created`,
            { signal: controller.signal },
        )
            .then((res) => {
                if (!res.ok) throw new Error(String(res.status));
                return res.json();
            })
            .then((data: { items: Raindrop[] }) =>
                setState({ status: "ready", items: data.items }),
            )
            .catch((err) => {
                if (err.name !== "AbortError") setState({ status: "error" });
            });
        return () => controller.abort();
    }, []);

    return (
        <main className="flex flex-col items-center text-left mx-auto border-fishing-yellow border-3 m-3 md:px-10 md:py-3 bg-white/50 md:w-5/12 ">
            <h2 className="font-roboto-slab font-semibold text-xl md:text-4xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070] pt-2">
                Wiki pages
            </h2>
            <p className="text-fishing-peach font-bold mb-3">
                Interesting wiki pages I've saved:
            </p>
            {state.status === "loading" && (
                <p className="font-roboto pb-3">Loading…</p>
            )}
            {state.status === "error" && (
                <p className="font-roboto pb-3 text-sm">
                    Couldn't load my saved pages right now.
                </p>
            )}
            {state.status === "ready" && state.items.length === 0 && (
                <p className="font-roboto pb-3 text-sm">Nothing saved yet.</p>
            )}
            {state.status === "ready" &&
                state.items.map((item) => (
                    <section
                        key={item._id}
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
                        {(item.note || item.excerpt) && (
                            <p className="text-xs md:text-base">
                                {item.note || item.excerpt}
                            </p>
                        )}
                    </section>
                ))}
        </main>
    );
}

export default WikiPages;
