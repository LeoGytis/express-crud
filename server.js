import cors from "cors";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import errorHandler from "./middleware/error.js";
import logger from "./middleware/logger.js";
import notFound from "./middleware/notFound.js";
import posts from "./routes/posts.js";
const port = process.env.PORT || 3003;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS for all routes
app.use(cors());

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// setup static folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/api/posts", posts);

// Error handler
app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
