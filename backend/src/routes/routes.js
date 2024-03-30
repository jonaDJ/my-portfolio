import express from "express";
import { homeData, iconsData } from "../data/icons.js";
import { projectData } from "../data/projects.js";
import aboutData from "../data/about.js";

const router = express.Router();

router.get("/api/home", (req, res) => {
  res.json(homeData);
});

router.get("/api/icons", (req, res) => {
  res.json(iconsData);
});

router.get("/api/projects", (req, res) => {
  res.json(projectData);
});

router.get("/api/about", (req, res) => {
  res.json(aboutData);
});

export default router;
