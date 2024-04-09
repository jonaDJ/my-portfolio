import mongoose from "mongoose";

const exedSchema = new mongoose.Schema({
  _id: String,
  type: String,
  title: String, //fields for experience
  company: String, //fields for experience
  location: String,
  dates: String,
  description: String,
  // Additional fields specific to education
  degree: String,
  institution: String,
});

const SkillSchema = new mongoose.Schema({
  _id: String,
  name: String,
  logo: String,
});

const CertificationSchema = new mongoose.Schema({
  _id: String,
  title: String,
  url: String,
});

export const SkillsData = mongoose.model("skills-data", SkillSchema);
export const ExEdData = mongoose.model("ex-ed-data", exedSchema);
export const CertificationData = mongoose.model(
  "certificate-data",
  CertificationSchema
);
