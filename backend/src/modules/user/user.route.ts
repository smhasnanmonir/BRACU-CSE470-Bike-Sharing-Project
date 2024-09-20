import express from "express";
import { userControllers } from "./user.controller";

const router = express.Router();

router.post("/create-user", userControllers.crateUser);
router.get("/getUser/:email", userControllers.getSingleUserController);
router.get("/getAllUser", userControllers.getAllUserController);

export const userRoutes = router;
