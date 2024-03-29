const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const cors = require("cors");
const connectDB = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// app.get("/api/chat", (req, res) => {
//   res.send(chats);
// });

// app.get("/api/chat/:id", (req, res) => {
//   const singleChat = chats.find((c) => c._id === req.params.id);
//   res.send(singleChat);
// });

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`.yellow.bold);
});
