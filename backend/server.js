import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";

import errorHandler from "./middleware/errorHandler.js";

// Route files
import products from "./routes/product.routes.js";

dotenv.config();

const app = express();

app.use(express.json()); // json body parser
app.disable("etag"); // avoid caching

// Dev logging middlewares
// app.use(logger); //--> using custom logger
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// routes
app.use("/api/v1/products", products);

// //fall back error if no routes detected
// app.use((req, res, next) => {
//     return next(new ErrorResponse(404, "404 Not found!"));
// });

// Post-middlewares
app.use(errorHandler);

export default app;
