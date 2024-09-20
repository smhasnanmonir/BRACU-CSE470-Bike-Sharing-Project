import express from "express";
import { bikeControllers } from "./bike.controller";

const router = express.Router();

router.post("/create-bike", bikeControllers.crateBike);
router.get("/getBike/:id", bikeControllers.getSingleBikeController);
router.get("/getAllBike", bikeControllers.getAllBikeController);
router.patch("/updateBike/:_id", bikeControllers.updateSingleBikeController);
router.delete("/deleteBike/:_id", bikeControllers.deleteSingleBikeController);

export const bikeRoutes = router;
