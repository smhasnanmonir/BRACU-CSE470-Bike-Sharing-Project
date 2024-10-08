"use strict";

import express, { Application, Request, Response } from "express";
import cors from "cors";
import { userRoutes } from "./modules/user/user.route";
import { bikeRoutes } from "./modules/bikes/bike.route";
import { rentRoutes } from "./modules/rent/rent.route";

//parser
const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/api", userRoutes);
app.use("/api", bikeRoutes);
app.use("/api", rentRoutes);

export default app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});
