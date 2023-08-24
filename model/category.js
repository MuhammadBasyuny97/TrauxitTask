

import { Schema, model,connect } from "mongoose";

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
connect('mongodb://localhost:27017/project');
const Category = model("Category", CategorySchema);
export default Category;