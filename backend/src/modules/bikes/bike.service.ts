/* eslint-disable @typescript-eslint/no-explicit-any */
import { RequestHandler } from "express";
import { TBike } from "./bike.interface";
import { Bike } from "./bike.model";

const createBikeIntoDB = async (payload: TBike) => {
  console.log(payload);
  try {
    const bike = new Bike({
      name: payload.name,
      price: payload.price,
      area: payload.area,
      image: payload.image,
    });
    await bike.save();
    return bike;
  } catch (error) {
    console.log(error);
  }
};

//fetch single bike
const getSingleBikeFromDB = async (_id: string) => {
  const result = await Bike.findById({ _id });
  return result;
};
//get all bikes from db
const getAllBikeFromDB = async () => {
  const result = await Bike.find({});
  return result;
};
//update single bike from db
const updateSingleBikeFromDB = async (_id: string, payload: Partial<TBike>) => {
  const result = await Bike.findByIdAndUpdate(
    {
      _id,
    },
    {
      name: payload.name,
      price: payload.price,
      area: payload.area,
      image: payload.image,
      new: true,
      runValidators: true,
    }
  );
  return result;
};
// Delete single bike from db
const deleteSingleBikeFromDB = async (_id: string) => {
  const result = await Bike.findByIdAndDelete(_id);
  return result;
};

// rent a bike 

export const bikeService = {
  createBikeIntoDB,
  getSingleBikeFromDB,
  getAllBikeFromDB,
  updateSingleBikeFromDB,
  deleteSingleBikeFromDB,
};
