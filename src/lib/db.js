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

// Get destination by id
async function getDestination(id) {
  let destination = null;
  try {
    const collection = db.collection("destinations");
    const query = { _id: new ObjectId(id) }; // filter by id
    destination = await collection.findOne(query);
    if (!destination) {
      console.log("No destination with id " + id);
      // TODO: errorhandling
    } else {
      destination._id = destination._id.toString(); // convert ObjectId to String
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return destination;
}

// create destination
async function createDestination(destination) {
  destination.image = "/images/placeholderImage.png"; // default image for new destinations
  try {
    const collection = db.collection("destinations");
    const result = await collection.insertOne(destination);
    return result.insertedId.toString(); // convert ObjectId to String
  } catch (error) {
    // TODO: error handling
    console.log(error.message);
  }
  return null;
}

// update destination
// returns: id of the updated destination or null, if destination could not be updated
async function updateDestination(destination) {
  try {
    let id = destination._id;
    delete destination._id; // delete the _id from the object, because the _id cannot be updated
    const collection = db.collection("destinations");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.updateOne(query, { $set: destination });

    if (result.matchedCount === 0) {
      console.log("No destination with id " + id);
      // TODO: errorhandling
    } else {
      console.log("destination with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

// delete destination by id
// returns: id of the deleted destination or null, if destination could not be deleted
async function deleteDestination(id) {
  try {
    const collection = db.collection("destinations");
    const query = { _id: new ObjectId(id) }; // filter by id
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No destination with id " + id);
    } else {
      console.log("destination with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    // TODO: errorhandling
    console.log(error.message);
  }
  return null;
}

//////////////////////////////////////////
// Categories
//////////////////////////////////////////

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

// update category
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

//////////////////////////////////////////
// Special functions
//////////////////////////////////////////

async function getDestinationsByTag(tag) {
  const collection = db.collection("destinations");
  const query = { tags: tag }; // Filter by tag
  const destinations = await collection.find(query).toArray();
  return destinations;
}


// export all functions so that they can be used in other files
export default {
  getDestinations,
  getDestination,
  createDestination,
  updateDestination,
  deleteDestination,
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  getDestinationsByTag
};
