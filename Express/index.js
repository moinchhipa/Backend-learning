const express = require("express");
const app = express();

let port = 8080;

app.listen(port, () => {
  console.log(`app is listning on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello, i am root");
});

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  let htmlStr = `<h1>welcome to the page of @${username}.</h1>`;
  res.send(htmlStr);
});

app.get("/search", (req, res) => {
  let { q } = req.query;
  if (!q) {
      res.send("<h1>Nothing searched</h1>");
    }
    res.send(`<h1>search result for: ${q}</h1>`);
});
