const COLLECTION_URL = "https://sinz.raindrop.page/wikipedia-77632222";

function WikiPages() {
    return (
        <main className="flex flex-col items-center text-left mx-auto border-fishing-yellow border-3 m-3 md:px-10 md:py-3 bg-white/50 md:w-5/12 ">
            <h2 className="font-roboto-slab font-semibold text-xl md:text-4xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070] pt-2 pb-5">
                My Favourite Wikipedia Pages
            </h2>
            <iframe
                src={`${COLLECTION_URL}/embed`}
                title="Saved wiki pages"
                loading="lazy"
                className="w-full h-[65vh] md:h-[50vh] border-0 px-2"
            />
        </main>
    );
}

export default WikiPages;
