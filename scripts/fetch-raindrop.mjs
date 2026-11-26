// Build-time fetch of the Raindrop.io collection into src/data/wikiPages.json.
// Needs RAINDROP_TOKEN and RAINDROP_COLLECTION_ID in the environment.
// Without them it leaves the existing JSON untouched so local builds still work.
import { writeFileSync } from "node:fs";

const token = process.env.RAINDROP_TOKEN;
const collection = process.env.RAINDROP_COLLECTION_ID;
const out = new URL("../src/data/wikiPages.json", import.meta.url);

if (!token || !collection) {
    console.log("fetch-raindrop: no token/collection set, skipping");
    process.exit(0);
}

const items = [];
for (let page = 0; ; page++) {
    const res = await fetch(
        `https://api.raindrop.io/rest/v1/raindrops/${encodeURIComponent(collection)}?perpage=50&page=${page}&sort=-created`,
        { headers: { Authorization: `Bearer ${token}` } },
    );
    if (!res.ok) {
        console.error(`fetch-raindrop: Raindrop returned ${res.status}`);
        process.exit(1);
    }
    const data = await res.json();
    items.push(...data.items);
    if (data.items.length < 50) break;
}

const slim = items.map(({ _id, title, link, domain, note, excerpt }) => ({
    id: _id,
    title,
    link,
    domain,
    description: note || excerpt || "",
}));
writeFileSync(out, JSON.stringify(slim, null, 2) + "\n");
console.log(`fetch-raindrop: wrote ${slim.length} pages`);
