import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";
const port = 3001;
const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running!!");
});

async function main() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}

main();

export default app;
