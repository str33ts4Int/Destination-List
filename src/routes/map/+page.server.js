import db from "$lib/db.js";

export async function load() {
    return {
        destinations: await db.getDestinations()
    };
}