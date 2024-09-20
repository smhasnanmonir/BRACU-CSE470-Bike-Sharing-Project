import { RequestHandler } from "express";
import catchAsync from "../../middleware/catchAsync";
import { rentService } from "./rent.service";

const crateRent: RequestHandler = async (req, res, next) => {
  try {
    const { rent: rentData } = req.body;
    const result = await rentService.createRentIntoDB(rentData);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Rent created successfully",
        data: result,
      });
    }
  } catch (err) {
    next(err);
  }
};

const getSingleRentController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const email: string = req.params.email;
    const result = await rentService.getSingleRentFromDB(email);
    if (result) {
      res.status(200).json({
        success: true,
        message: "Rent fetched successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Rent not found",
        data: [],
      });
    }
  }
);

const getAllRentController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const result = await rentService.getAllRentFromDB();
    if (result) {
      res.status(200).json({
        success: true,
        message: "Rent fetched successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Rents has been not found",
        data: [],
      });
    }
  }
);

const deleteSingleRentController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const _id: string = req.params._id;

    // Call the service function to delete the Rent
    const result = await rentService.deleteSingleRentFromDB(_id);

    if (result) {
      res.status(200).json({
        success: true,
        message: "Rent deleted successfully",
        data: result, // Deleted Rent information can be included
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Rent not found, no Rent deleted",
        data: [],
      });
    }
  }
);

export const rentControllers = {
  crateRent,
  getSingleRentController,
  getAllRentController,
  deleteSingleRentController,
};
