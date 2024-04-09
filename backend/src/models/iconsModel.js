import mongoose from "mongoose";

const iconSchema = new mongoose.Schema({
  _id: String,
  type: String,
  iconSrc: String,
  link: String,
  contact: Boolean,
});

const IconData = mongoose.model("icon-data", iconSchema);

export default IconData;
