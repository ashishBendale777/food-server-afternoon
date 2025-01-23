import express, { Router } from "express";
import bodyParser from "body-parser";
import { FoodDBConnect } from "./src/Database/Config.js";
import { router } from "./src/Routes/Routes.js";
import cors from "cors"

const app = express();

app.use(cors())

app.use(bodyParser.json());
app.use('/api', router)

//database calling
FoodDBConnect();


// app.use(express.static,'Uploads/')

app.listen(5000, () => {
  console.log("food app server is started...");
});
