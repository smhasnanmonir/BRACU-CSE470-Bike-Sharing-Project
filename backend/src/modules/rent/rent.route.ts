import express from "express";
import { rentControllers } from "./rent.controller";

const router = express.Router();

router.post("/create-rent", rentControllers.crateRent);
router.get("/getRent/:email", rentControllers.getSingleRentController);
router.get("/getAllRent", rentControllers.getAllRentController);
router.delete("/delete-rent/:_id", rentControllers.deleteSingleRentController);

export const rentRoutes = router;
