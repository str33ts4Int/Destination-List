import db from "$lib/db.js";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        let category = {
            name: data.get("name"),
            description: data.get("description"),
        };
        await db.createCategory(category);
        return { success: true };
    },
};