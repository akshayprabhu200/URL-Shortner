const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const hash = require("./src/middlewares/hash");

const app = express();
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const hashTable = {};

app.use("/api/generateHash", hash.djb2);

app.post("/api/generateHash", (req, res) => {
  let url = req.body.URL;
  let hashedURL = req.body.hashedURL;
  hashTable[hashedURL] = url;
  return res.status(201).json({ URL: url, hashedURL: hashedURL });
});

app.get("/api/decodeHash/:hashedURL", (req, res) => {
  let hashedURL = req.params.hashedURL;

  if (hashedURL in hashTable) {
    return res
      .status(200)
      .send({ URL: hashTable[hashedURL], hashedURL: hashedURL });
  } else {
    return res.status(400).send({ Error: "URL not found!" });
  }
});

app.use(express.static("../client/build"));

app.get("/", (req, res) => {
  res.sendFile("../client/build/index.html");
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
