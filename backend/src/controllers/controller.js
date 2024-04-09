import {
  SkillsData,
  ExEdData,
  CertificationData,
} from "../models/aboutModel.js";
import IconData from "../models/iconsModel.js";
import MainData from "../models/mainModel.js";
import ProjectData from "../models/projectModel.js";

const iconController = async (req, res) => {
  try {
    const iconData = await IconData.find();
    res.status(200).json(iconData);
  } catch (error) {
    console.error("Error retrieving iconData:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const homeController = async (req, res) => {
  try {
    const mainData = await MainData.findOne();

    res.status(200).json(mainData);
  } catch (error) {
    console.error("Error retrieving mainData:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const projectController = async (req, res) => {
  try {
    const projectData = await ProjectData.find();

    res.status(200).json(projectData);
  } catch (error) {
    console.error("Error retrieving projectData:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const aboutController = async (req, res) => {
  try {
    const skills = await SkillsData.find();
    const exAndEd = await ExEdData.find();
    const certificates = await CertificationData.find();

    // Combine the data
    const aboutData = {
      skills,
      exAndEd,
      certificates,
    };

    res.status(200).json(aboutData);
  } catch (error) {
    console.error("Error retrieving homeData:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export { homeController, iconController, projectController, aboutController };
