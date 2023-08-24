

import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
  _id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  image: {
    type: String,
    required: true,
  },
});
const Category = model("Category", CategorySchema);

export default Category;