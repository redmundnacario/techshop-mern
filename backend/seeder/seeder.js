import mongoose from "mongoose";
import colors from "colors";
import dotenv from "dotenv";
import fs from "fs";
import path from "path";

/*
HOW to run:
node --experimental-json-modules backend/seeder/seeder.js -i dev 
*/

// command
import productsData from "../../data/products.json";

console.log(productsData);
//read env variables
dotenv.config();

// models
import Product from "../models/Product.js";

// read json data
// const products = JSON.parse(
//     fs.readFileSync(`${__dirdatapath}/data/products.json`, "utf-8")
// );

// function to add bootcamp data in database
const addData = async () => {
    try {
        await Product.create(productsData);
        console.log("Data Imported...".green.inverse);
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

// function to delete all bootcamp data in database

const removeData = async () => {
    try {
        await Product.deleteMany();
        console.log("Data deleted...".green.inverse);
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

// connect to db
let mongoDBConnection;
if (process.argv[3] === "test") {
    mongoDBConnection = process.env.TEST_MONGO_URI;
} else if (process.argv[3] === "dev") {
    mongoDBConnection = process.env.MONGO_URI;
} else {
    console.error("No environment selected");
}

const conn = mongoose
    .connect(mongoDBConnection, {})
    .then((res) => {
        console.log(
            `MongoDB connected: ${res.connection.host}`.cyan.underline.bold
        );
    })
    .catch((error) => console.log(error));

// execute
if (process.argv[2] === "-i") {
    addData();
} else if (process.argv[2] === "-d") {
    removeData();
}
