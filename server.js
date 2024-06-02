const express = require("express");
const dotenv = require("dotenv");
const { chats } = require("./data/data.js");
const cors = require("cors");
const connectDB = require("./config/db.js");
const colors = require("colors");
const userRoutes = require("./routes/userRoutes.js");
const chatRoutes = require("./routes/chatRoutes.js");
const messageRoutes = require("./routes/messageRoute.js");
const { notFound, errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();
dotenv.config();
connectDB();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/message", messageRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`.yellow.bold);
});
