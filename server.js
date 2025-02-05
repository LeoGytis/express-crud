// Use this module to use import instead of require "type": "module",
import express from "express";
import errorHandler from "./middleware/error.js";
import logger from "./middleware/logger.js";
import notFound from "./middleware/notFound.js";
import posts from "./routes/posts.js";

const port = process.env.PORT || 3003;
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//logger middleware
app.use(logger);

//Routes
app.use("/api/posts", posts);

//Error hanlder
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log("Server running on port:", port));
