import bcrypt from "bcrypt";
import { Schema, model } from "mongoose";
import { TBike } from "./bike.interface";

const bikeSchema = new Schema<TBike>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    area: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Bike = model<TBike>("Bike", bikeSchema);
