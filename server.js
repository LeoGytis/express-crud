// Use this module to use import instead of require "type": "module",
import express from "express";
import posts from "./routes/posts.js";

const port = process.env.PORT || 3003;
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/posts", posts);

// //setup static folder
// // app.use(express.static(path.join(__dirname, "public", "index.html")));

// // router.get("/", (req, res) => {
// //   res.sendFile(path.join(__dirname, "public", "index.html")); // set absolute path
// // });

app.listen(port, () => console.log("Server running on port:", port));
