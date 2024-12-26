import db from "$lib/db.js";

export async function load({ params }) {
    return {
        category: await db.getCategory(params.category_id),
    };
}

