const express = require("express");
const path = require("path");
const port = process.env.PORT || 3003;

const app = express();

//setup static folder
app.use(express.static(path.join(__dirname, "public", "index.html")));

let posts = [
  {
    id: 1,
    title: "Post ONE",
  },
  {
    id: 2,
    title: "Post 2",
  },
  {
    id: 3,
    title: "Post 3",
  },
  {
    id: 4,
    title: "Post 4",
  },
];

app.get("/api/posts", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    console.log("noo limit");
  }
  //   res.json(posts);
});

app.get("/api/posts/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html")); // set absolute path
});

app.get("/about", (req, res) => {
  res.send("Hello GYTIS no restart");
});

app.listen(port, () => console.log("server runing 3000 vali", port));
