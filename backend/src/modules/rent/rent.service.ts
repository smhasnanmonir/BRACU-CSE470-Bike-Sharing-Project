/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from "express";
import { TRent } from "./rent.interface";
import { Rent } from "./rent.model";

const createRentIntoDB = async (payload: TRent) => {
  console.log(payload);
  try {
    const rent = new Rent({
      email: payload.email,
      bike_id: payload.bike_id,
      price: payload.price,
    });
    await rent.save();
    return rent;
  } catch (error) {
    console.log(error);
  }
};

//fetch single bike
const getSingleRentFromDB = async (email: string) => {
  const result = await Rent.find({ email }).populate("bike_id");
  return result;
};

//get all bikes from db
const getAllRentFromDB = async () => {
  const result = await Rent.find({});
  return result;
};

const deleteSingleRentFromDB = async (_id: string) => {
  const result = await Rent.findByIdAndDelete(_id);
  return result;
};

export const rentService = {
  createRentIntoDB,
  getSingleRentFromDB,
  getAllRentFromDB,
  deleteSingleRentFromDB,
};
