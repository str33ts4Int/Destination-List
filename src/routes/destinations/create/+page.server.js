import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let destination = {
            name: data.get("name"),
            description: data.get("description"),
        };
        await db.createDestination(destination);
        return { success: true };
    },
};