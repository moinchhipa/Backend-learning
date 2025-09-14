const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts = [
  {
    id: uuidv4(),
    username: "moinchhipa",
    tweet:
      "Hello, i am a aspiring full stack developer who is learning MERN stack development.",
  },
  {
    id: uuidv4(),
    username: "apnacollege",
    tweet: "This is the institute from i am learnign full stack development.",
  },
  {
    id: uuidv4(),
    username: "akbarali",
    tweet:
      "Hello i am also a aspiring full stack developer who is learning from codewithharry haris ali khan.",
  },
];

app.get("/tweets", (req, res) => {
  res.render("index.ejs", { posts });
});

app.get("/tweets/new", (req, res) => {
  res.render("new.ejs");
});

app.post("/tweets", (req, res) => {
  let { username, tweet } = req.body;
  let id = uuidv4();
  posts.push({ id, username, tweet });
  res.redirect("/tweets");
});

app.get("/tweets/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let tweet = posts.find((t) => id === t.id);
  res.render("show.ejs", { tweet });
});

app.patch("/tweets/:id", (req, res) => {
  let { id } = req.params;
  let newTweet = req.body.tweet;
  let tweet = posts.find((t) => id === t.id);
  tweet.tweet = newTweet;
  console.log(tweet);
  res.redirect("/tweets");
});

app.get("/tweets/:id/edit", (req, res) => {
  let { id } = req.params;
  let tweet = posts.find((t) => id === t.id);
  res.render("edit.ejs", { tweet });
});

app.delete("/tweets/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((t) => id !== t.id);
  res.redirect("/tweets");
});

app.listen(port, () => {
  console.log("listning on port 8080");
});
