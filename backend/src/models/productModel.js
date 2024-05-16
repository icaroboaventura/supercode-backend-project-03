import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: [true, "Please provide the product name!"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Please provide the description!"],
      trim: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide the price!"],
      trim: true,
    },
    rating: {
      type: Number,
      default: 0,
      trim: true,
    },
  },
  { collection: "products", timestamps: true }
);

export const User = mongoose.model("Product", productSchema);
