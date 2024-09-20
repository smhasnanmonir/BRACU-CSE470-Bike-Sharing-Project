import bcrypt from "bcrypt";
import { Schema, Types, model } from "mongoose";
import { TRent } from "./rent.interface";

const rentSchema = new Schema<TRent>(
  {
    email: {
      type: String,
      required: true,
    },
    bike_id: {
      type: Schema.Types.ObjectId,
      required: true,
      unique: true,
      ref: "Bike",
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Rent = model<TRent>("Rent", rentSchema);
