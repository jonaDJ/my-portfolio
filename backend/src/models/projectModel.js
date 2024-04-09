import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  _id: {
    type: String,
    requried: true,
  },
  projectName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologies: {
    type: [String],
    required: true,
  },
  gitURL: {
    type: String,
    required: false,
  },
  imageBit: {
    type: String,
    required: false,
  },
});

const ProjectData = mongoose.model("project-data", projectSchema);

export default ProjectData;
