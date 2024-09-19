import app from "./app";

import mongoose from "mongoose";

const uri =
  "mongodb+srv://learnMongo:YV2ehxtoa79ofLC4@cluster0.pyqmcvy.mongodb.net/cse470?retryWrites=true&w=majority&appName=Cluster0";
const port = 8099;
async function main() {
  try {
    await mongoose.connect(uri as string);
    app.listen(port as number, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
