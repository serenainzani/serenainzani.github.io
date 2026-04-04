import { Link } from "react-router";

function NotFound() {
    return (
        <>
            <main className="flex flex-col items-center text-left mx-auto border-fishing-yellow border-3 m-3 md:px-10 md:py-3 bg-white/50 md:w-5/12 ">
                <h2 className="font-roboto-slab font-semibold text-4xl md:text-8xl tracking-tighter text-fishing-aqua text-shadow-[2px_2px_0_#f2e070] pt-2 md:py-2 ">
                    404
                </h2>
                <h2 className="font-roboto-slab font-semibold text-xl md:text-4xl tracking-tighter text-fishing-aqua text-shadow-[1px_1px_0_#f2e070] md:py-2">
                    Page not found
                </h2>
                <Link
                    to="/"
                    className="underline text-fishing-peach pb-4 text-sm"
                >
                    Go to homepage
                </Link>
            </main>
        </>
    );
}

export default NotFound;
