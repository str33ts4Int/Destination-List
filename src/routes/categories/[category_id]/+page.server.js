import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    return {
        category: await db.getCategory(params.category_id),
    };
}

export const actions = { 
    delete: async ({ request }) => {
        const data = await request.formData();
        await db.deleteCategory(data.get("id"));
        throw redirect(303, "/categories");
    },
    update: async ({ request }) => {
        const data = await request.formData();
        const id = data.get("id");
        const name = data.get("name");
        const description = data.get("description");

        const updatedCategory = {
            _id: id,
            name,
            description
        };

        const result = await db.updateCategory(updatedCategory);
        return {
            success: !!result
        };
    },
};