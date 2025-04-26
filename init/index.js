const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/nestgo";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  // delete all listings in the database and add new ones
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    //.data  is an array from data.js file which  contains objects of different listings
    ...obj, // deconstructing the object
    owner: "67f77bc0b4ca8d8697caa60a", // assign a owner to each listing
  }));

  // 'initData' is a  json file that contains 'data' to be added into the database
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();
