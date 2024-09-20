import { RequestHandler } from "express";
import catchAsync from "../../middleware/catchAsync";
import { bikeService } from "./bike.service";

const crateBike: RequestHandler = async (req, res, next) => {
  try {
    const { bike: bikeData } = req.body;
    const result = await bikeService.createBikeIntoDB(bikeData);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Bike created successfully",
        data: result,
      });
    }
  } catch (err) {
    next(err);
  }
};

const getSingleBikeController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const _id: string = req.params._id;
    const result = await bikeService.getSingleBikeFromDB(_id);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Bike fetched successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Bike not found",
        data: [],
      });
    }
  }
);

const getAllBikeController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await bikeService.getAllBikeFromDB();
    if (result) {
      res.status(200).json({
        success: true,
        message: "Bike fetched successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No bikes has been not found",
        data: [],
      });
    }
  }
);

//update Bike
const updateSingleBikeController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const _id: string = req.params._id;
    const result = await bikeService.updateSingleBikeFromDB(_id, req.body);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Bike updated successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Bike not found, no Bike deleted",
        data: [],
      });
    }
  }
);

const deleteSingleBikeController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const _id: string = req.params._id;

    // Call the service function to delete the bike
    const result = await bikeService.deleteSingleBikeFromDB(_id);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Bike deleted successfully",
        data: result, // Deleted bike information can be included
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Bike not found, no bike deleted",
        data: [],
      });
    }
  }
);

export const bikeControllers = {
  crateBike,
  getSingleBikeController,
  getAllBikeController,
  updateSingleBikeController,
  deleteSingleBikeController,
};
