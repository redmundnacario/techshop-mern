import app from "./server.js";
import colors from "colors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

dotenv.config();

// Connect to dB
connectDB();

const PORT = process.env.PORT || 5000;

const server = app.listen(
    PORT,
    console.log(
        `Server running in ${[process.env.NODE_ENV]} mode with port ${PORT}`
            .yellow.bold
    )
);

// Handle unhandled rejections
process.on("unhandledRejection", (err, promise) => {
    console.log(`Error: ${err.message}`.red.bold);
    server.close(() => process.exit(1));
});
