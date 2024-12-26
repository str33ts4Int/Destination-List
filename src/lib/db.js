import { MongoClient, ObjectId } from "mongodb"; // See https://www.mongodb.com/docs/drivers/node/current/quick-start/
import { DB_URI } from "$env/static/private";
import { get } from "svelte/store";

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("DestinationList"); // select database

//////////////////////////////////////////
// Destinations
//////////////////////////////////////////

// Get all destinations
async function getDestinations() {
  let destinations = [];
  try {
    const collection = db.collection("destinations");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    destinations = await collection.find(query).toArray();
    destinations.forEach((destinations) => {
      destinations._id = destinations._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    // TODO: errorhandling
  }
  return destinations;
}

// Get all categories
async function getCategories() {
  let categories = [];
  try {
    const collection = db.collection("categories");

    // You can specify a query/filter here
    // See https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/query-document/
    const query = {};

    // Get all objects that match the query
    categories = await collection.find(query).toArray();
    categories.forEach((categories) => {
      categories._id = categories._id.toString(); // convert ObjectId to String
    });
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch categories");
    // TODO: errorhandling
  }
  return categories;
}

// Get category by id
async function getCategory(id) {
  let category = null;
  try {
    const collection = db.collection("categories");
    const query = { _id: new ObjectId(id) }; // filter by id
    category = await collection.findOne(query);

    if (!category) {
      console.log("No category with id " + id);
      // TODO: errorhandling
    } else {
      category._id = category._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return category;
}

// create category
// Example category object:
/* 
{ 
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten"
} 
*/
async function createCategory(category) {
  category.icon = "/images/placeholderIcon.png"; // default icon for new categories
  try {
    const collection = db.collection("categories");
    const result = await collection.insertOne(category);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// update movie
// Example movie object:
/* 
{ 
  _id: "6630e72c95e12055f661ff13",
  title: "Das Geheimnis von Altura",
  year: 2024,
  length: "120 Minuten",
  actors: [
    "Lena Herzog",
    "Maximilian Schröder",
    "Sophia Neumann"
  ],
  poster: "/images/Altura.png",
  watchlist: false
} 
*/
// returns: id of the updated category or null, if category could not be updated
async function updateCategory(category) {
  try {
    let id = category._id;
    delete category._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("categories");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: category });

    if (result.matchedCount === 0) {
      console.log("No category with id " + id);
      // TODO: errorhandling
    } else {
      console.log("category with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete category by id
// returns: id of the deleted category or null, if category could not be deleted
async function deleteCategory(id) {
  try {
    const collection = db.collection("categories");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No category with id " + id);
    } else {
      console.log("category with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// export all functions so that they can be used in other files
export default {
  getDestinations,
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
