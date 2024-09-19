import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

router.post("/create-user", userControllers.crateUser);
router.get("/getUser/:email", userControllers.getSingleUserController);

export const userRoutes = router;
