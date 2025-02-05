const express = require("express");
const path = require("path");
const posts = require("./routes/posts");
const port = process.env.PORT || 3003;

const app = express();

app.use("/api/posts", posts);

//setup static folder
// app.use(express.static(path.join(__dirname, "public", "index.html")));

// router.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html")); // set absolute path
// });

app.listen(port, () => console.log("Server runing on port:", port));
