import express from "express";
import {
  homeController,
  iconController,
  projectController,
  aboutController,
} from "../controllers/controller.js";

const router = express.Router();

router.get("/api/home", homeController);

router.get("/api/icons", iconController);

router.get("/api/projects", projectController);

router.get("/api/about", aboutController);

export default router;
