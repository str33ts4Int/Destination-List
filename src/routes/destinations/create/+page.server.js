import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let destination = {
            name: data.get("name"),
            country: data.get("country"),
            description: data.get("description"),
            main_attraction: data.get("main_attraction"),
            best_season_to_visit: data.get("best_season_to_visit"),
            tags: data.get("tags"),
        };
        await db.createDestination(destination);
        return { success: true };
    },
};