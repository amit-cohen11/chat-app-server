const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5000;

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const singleChat = chats.find((c) => c._id === req.params.id);
  res.send(singleChat);
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
