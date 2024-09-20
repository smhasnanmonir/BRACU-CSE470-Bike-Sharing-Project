/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from "express";
import { TUser } from "./user.interface";
import { User } from "./user.model";

const createUserIntoDB = async (payload: TUser) => {
  console.log(payload);
  try {
    const user = new User({
      email: payload.email,
      password: payload.password,
      role: payload.role,
      name: payload.name,
    });
    await user.save();
    return user;
  } catch (error) {
    console.log(error);
  }
};

//fetch single user
const getSingleUserFromDB = async (email: string) => {
  const result = await User.findOne({ email });
  return result;
};

//fetch all user
const getAllUserFromDB = async () => {
  const result = await User.find({});
  return result;
};

export const userService = {
  createUserIntoDB,
  getSingleUserFromDB,
  getAllUserFromDB,
};
