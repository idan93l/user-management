import 'dotenv/config'
import Express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();

mongoose.connect(process.env.MONGODB_URI)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`server runs on port ${PORT}`);
})