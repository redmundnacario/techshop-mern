import mongoose from "mongoose";
import asyncHandler from "express-async-handler";

import Product from "../models/Product.js";
import ErrorResponse from "../utils/errorResponse.js";

// Get all Products

/*
@desc       Get all Products
@url        /api/v1/products
@access     Public    
*/
export const getAllProducts = asyncHandler(async (req, res, next) => {
    res.status(200).json(res.advancedResults);
});

// Get a Product

/*
@desc       Get all Products
@url        /api/v1/products/:id
@access     Public    
*/
export const getProduct = asyncHandler(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(
            new ErrorResponse(
                404,
                ` Product with id of ${req.params.id} was not found`
            )
        );
    }

    res.status(200).json({ success: true, data: product });
});
