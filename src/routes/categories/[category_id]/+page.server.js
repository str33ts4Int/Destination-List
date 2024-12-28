import db from "$lib/db.js";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const category = await db.getCategory(params.category_id);
    if (!category) {
        throw error(404, "Category not found");
    }

    const destinations = await db.getDestinationsByTag(category.name);

    // Convert ObjectId to string
    const serializedDestinations = destinations.map(destination => ({
        ...destination,
        _id: destination._id.toString()
    }));

    return {
        category,
        destinations: serializedDestinations
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