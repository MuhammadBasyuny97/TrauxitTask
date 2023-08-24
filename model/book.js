
import { Schema, model } from "mongoose";
import Category from "./category.js";

const BookSchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: [true, "must provide title"],
    trim: true,
    maxlength: [20, "title can not be more than 20 characters"],
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
    trim: true,
    required: [true, "must provide description"],
    maxlength: [50, "name can not be more than 50 characters"],
  },
  category: {
    type: Schema.Types.Number,
    ref: "Category",
  },
  images: {
    type: Array,
    required: true,
  },
});
export default model("Book", BookSchema);
