const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
const cors = require("cors");
const userRoutes = require("./routes/user.js");
const adminRoutes = require("./routes/admin.js");
const responseRoutes = require("./routes/response.js");

dotenv.config({});

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).send({ status: "success", msg: "API is working well." });
});
app.use("/user",userRoutes);
app.use("/admin",adminRoutes);
app.use("/response", responseRoutes);


app.listen(port,()=>{
    console.log(`listen on port ${port}`);
    mongoose
    .connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((err) => {
      console.log(err);
    });
});