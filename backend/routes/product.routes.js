import express from "express";

// models
import Product from "../models/Product.js";

// controllers
import {
    getAllProducts,
    getProduct,
} from "../controllers/product.controllers.js";

// middlewares
import advancedResults from "../middleware/advancedResults.js";

const Router = express.Router();

Router.route("/").get(advancedResults(Product), getAllProducts);

Router.route("/:id").get(getProduct);

export default Router;
