const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require('cors');

const connectDB = require("./config/config");

//config dotenv
dotenv.config();

//connection mongodb
connectDB();

const app = express();

//middlewares
app.use(express.json());
app.use(cors({
  origin: '*'
}));
//route
app.use("/api/pizzas", require("./routes/pizzaRoute"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/orders", require("./routes/orderRoute"));

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(
    `Server Running on port no ${port}`
  );
});
