import { Schema, model, models } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
    //   required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    team: {
      type: String,
    //   required: true,
    },
    designation: {
      type: String,
      // required: true
    },
    status: {
      type: Number,
      enum: [0, 1, 2],
      default: 0,
    },
  },
  { timestamps: true }
);

export const User = models.User || model("User", userSchema);
