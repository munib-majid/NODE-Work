const mongoose = require("mongoose");
const { array } = require("yup");

const ProductSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },

    productPrice: {
      type: Number,
      required: true,
    },

    subcategoryId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subcategory",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    productType: {
      type: String,
      enum: ["Used Item", "Bidding Item"],
    },
    closeBid: {
      type: Boolean,
      default: false,
    },
    StatusOfActive: {
      type: Boolean,
      default: true,
    },

    // timeStarted: {
    //   type: Date,
    // },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
