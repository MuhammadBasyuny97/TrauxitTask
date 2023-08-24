import { connect } from "mongoose";

const connectDB = async () => {
  return await connect("mongodb://127.0.0.1:27017/project",{useNewUrlParser: true});
};

export default connectDB;