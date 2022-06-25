import 'dotenv/config'
import Express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = Express();

const uri = process.env.MONGODB_URI

mongoose.connect(uri, () => console.log("connected to mondo gb"));

app.get("/customers")

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server runs on port ${PORT}`);
})