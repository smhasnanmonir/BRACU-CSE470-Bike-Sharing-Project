"use strict";

import express, { Application, Request, Response } from "express";
import cors from "cors";

//parser
const app: Application = express();

app.use(express.json());
app.use(cors());

export default app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
