import express from "express";
import upload from "../middleware/uploadHandler";
import idChecker from "../middleware/idChecker";

import {
  getAllCars,
  getCarById,
  addCar,
  updateCarById,
  deleteCarById,
} from "../services/carServices";

const router = express.Router();

router.get("/", getAllCars);
router.get("/:id", idChecker, getCarById);
router.post("/", upload.single("image"), addCar);
router.put('/:id', idChecker, upload.single('image'), updateCarById);
router.delete("/:id", idChecker, deleteCarById);

export default router;
