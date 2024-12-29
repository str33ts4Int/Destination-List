import db from "$lib/db.js";

export async function load() {
  return {
    destinations: await db.getDestinations()
  };
}

export const actions = {
  addToMyList: async ({ request }) => {
    let data = await request.formData();

    let id = data.get("id");
    console.log("Adding to my list");
    let destination = {
      _id: id,
      mylist: true
    }
    await db.updateDestination(destination);
  },
  removeFromMyList: async ({ request }) => {
    let data = await request.formData();

    let id = data.get("id");
    console.log("Removing from my list");

    let destination = {
      _id: id,
      mylist: false
    }
    await db.updateDestination(destination);
  }
}