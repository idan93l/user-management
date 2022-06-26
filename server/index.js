import 'dotenv/config'
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRoutes from "./routes/routes.js"

const uri = process.env.MONGODB_URI
const app = express();

app.use(cors());
app.use(express.json());
app.use(userRoutes)

mongoose.connect(uri, () => console.log("connected to mongoDB"));

// app.get("/getUsers", async (req, res) => {
//   try {
//     const data = await UserModel.find()
//     res.send(data);
//   } catch (err) {
//     console.log(err);
//     res.send(err)
//   }
// })

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server runs on port ${PORT}`);
})