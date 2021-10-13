import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please add a product name"],
        maxlength: [100, "Name cannot be more than 100 characters"],
    },
    image: {
        type: String,
        default: "no-photo.jpg",
    },
    description: {
        type: String,
        required: [true, "Please add a product description"],
        maxlength: [500, "Name cannot be more than 500 characters"],
    },
    brand: {
        type: String,
        required: [true, "Please add a product brand"],
    },
    category: {
        type: String,
        required: [true, "Please add a product category"],
    },
    price: {
        type: Number,
        required: [true, "Please add a product price"],
        min: [1, "Product price must atleast be 1 value"],
    },
    countInStock: {
        type: Number,
        required: [true, "Please add a count in stock"],
        min: [0, "Real minimum value of stock is zero"],
    },
    rating: {
        type: Number,
        default: null,
        min: [0, "Product rating must atleast be 0"],
        max: [5, "Product rating allowd maximum value is 5"],
    },
    numReviews: {
        type: Number,
        default: 0,
        min: [0, "Minimum value allowed for number of reviews is 0"],
    },
});

const Product = mongoose.model("Product", ProductSchema);

export default Product;
