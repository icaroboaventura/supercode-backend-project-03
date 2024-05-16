import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      required: [true, "Please provide your firstname!"],
      trim: true,
    },
    lastname: {
      type: String,
      required: [true, "Please provide your lastname!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please provide your email!"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [validator.isEmail, "Please provide a valid email!"],
    },
    role: { type: String, required: true, trim: true },
    password: {
      type: String,
      required: [true, "Please provide a password!"],
      minlength: 8,
      trim: true,
    },
    passwordConfirm: {
      type: String,
      required: [true, "Please provide a equal password!"],
      trim: true,
    },
  },
  { collection: "users", timestamps: true }
);

export const User = mongoose.model("User", userSchema);
