import express from "express";
import {
  homeController,
  iconController,
  projectController,
  aboutController,
} from "../controllers/controller.js";
import ContactForm from "../models/contactSubmitModel.js";

const router = express.Router();

router.get("/api/home", homeController);

router.get("/api/icons", iconController);

router.get("/api/projects", projectController);

router.get("/api/about", aboutController);

router.post("/api/contacts", async (req, res) => {
  try {
    const contact = new ContactForm(req.body);
    await contact.save();
    res.status(201).send(contact);
  } catch (error) {
    if (error.name === "ValidationError") {
      res.status(400).json({ error: error.message });
    } else {
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
});

export default router;
