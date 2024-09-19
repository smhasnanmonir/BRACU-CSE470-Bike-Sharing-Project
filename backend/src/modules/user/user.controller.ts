import { RequestHandler } from "express";
import { userService } from "./user.service";
import catchAsync from "../../middleware/catchAsync";

const crateUser: RequestHandler = async (req, res, next) => {
  try {
    const { user: userData } = req.body;
    const result = await userService.createUserIntoDB(userData);
    res.status(200).json({
      success: true,
      message: "User created successfully",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const getSingleUserController: RequestHandler = catchAsync(
  async (req, res, next) => {
    const email: string = req.params.email;
    const result = await userService.getSingleUserFromDB(email);
    if (result) {
      res.status(200).json({
        success: true,
        message: "User fetched successfully",
        data: result,
      });
    } else {
      res.status(404).json({
        success: false,
        message: "User not found",
        data: [],
      });
    }
  }
);

export const userControllers = {
  crateUser,
  getSingleUserController,
};
