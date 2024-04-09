import mongoose from "mongoose";

const HomeHeaderSchema = new mongoose.Schema({
  greeting: String,
  title: String,
  welcome: String,
});

const ProjectHeaderSchema = new mongoose.Schema({
  title: String,
  desc: String,
});

const AboutSectionSchema = new mongoose.Schema({
  role: String,
  description: [String],
});

const MainSchema = new mongoose.Schema({
  _id: String,
  homeHeader: HomeHeaderSchema,
  projectHeader: ProjectHeaderSchema,
  aboutHeader: AboutSectionSchema,
});

const MainData = mongoose.model("main-data", MainSchema);

export default MainData;
