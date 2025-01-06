import db from "$lib/db.js";

export async function load() {
    const categories = await db.getCategories();
    return {
        categories
    };
}

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let tags = data.getAll("tags[]"); // Alle Tags auslesen
        let destination = {
            name: data.get("name"),
            country: data.get("country"),
            description: data.get("description"),
            main_attraction: data.get("main_attraction"),
            best_season_to_visit: data.get("best_season_to_visit"),
            tags: data.getAll("tags[]"),
        };
        await db.createDestination(destination);
        return { success: true };
    },
};