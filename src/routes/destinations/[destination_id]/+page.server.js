import db from "$lib/db.js";
import { redirect, error } from "@sveltejs/kit";

export async function load({ params }) {
    console.log("Received destination_id:", params.destination_id);

    const destination = await db.getDestination(params.destination_id);

    if (!destination) {
        console.log("Destination not found:", params.destination_id);
        throw error(404, "Destination not found");
    }

    return { destination };
}

export const actions = { 
    delete: async ({ request }) => {
        const data = await request.formData();
        await db.deleteDestination(data.get("id"));
        throw redirect(303, "/destinations");
    },
    update: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        const name = data.get("name");
        const country = data.get("country");
        const description = data.get("description");
        const main_attraction = data.get("main_attraction");
        const best_season_to_visit = data.get("best_season_to_visit");
        const tags = data.get("tags");

        const updatedDestination = {
            _id: id,
            name,
            country,
            description,
            main_attraction,
            best_season_to_visit,
            tags
        };

        const result = await db.updateDestination(updatedDestination);
        return {
            success: !!result
        };
    },
};