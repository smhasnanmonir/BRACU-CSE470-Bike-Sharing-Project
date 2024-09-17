import app from "./app";

import mongoose from "mongoose";

const uri =
  "mongodb+srv://learnMongo:eIeXjL9Br3xZJH1y@cluster0.pyqmcvy.mongodb.net/?appName=Cluster0";
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
