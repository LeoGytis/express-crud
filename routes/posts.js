const express = require("express");
const router = express.Router();

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

router.get("/", (req, res) => {
  const limit = parseInt(req.query.limit);

  if (!isNaN(limit) && limit > 0) {
    res.json(posts.slice(0, limit));
  } else {
    console.log("noo limit");
  }
  //   res.json(posts);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  res.json(posts.filter((post) => post.id === id));
});

export default router;
