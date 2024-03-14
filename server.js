require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const route = require("./routes/route");
const connect = require("./db/connect");
const cors = require("cors");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use("/api", route);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const start = async () => {
  try {
    await connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error.message);
  }
};
start();
