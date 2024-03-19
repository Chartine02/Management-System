
import dotenv from "dotenv";
dotenv.config();
import express  from "express";
import mongoose from "mongoose";
import route from "./routes/student-route.js";
import routes from "./routes/facilitator-route.js";

const app = express();

app.use(express.json());
app.use(route);
app.use(routes)

const port = process.env.PORT || 3300;
const db_connection_string = process.env.MONGODB_URI;


mongoose
  .connect(db_connection_string)
  .then(() => {
    console.log("Connected to DB....");
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(() => {
    // console.log(err);
  });




