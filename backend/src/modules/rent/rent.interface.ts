import { Types } from "mongoose";

export type TRent = {
  email: string;
  bike_id: Types.ObjectId;
  price: string;
};
