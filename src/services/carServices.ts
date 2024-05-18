import { CarsModel } from '../models/car.model';
import { Request, Response } from "express"
import fs from "fs"
import path from 'path';

export const getAllCars = async (_: any, res: Response) => {

  const cars = await CarsModel.query()
    .withGraphFetched('orders');

  res.status(200).json({ status: "Success", data: cars });
};

export const getCarById = async (req: Request, res: Response) => {
  const id = req.params.id;
  
  const car = await CarsModel.query().where("id", id).withGraphFetched('orders');

  // if (car.length > 0) res.status(200).json({ status: "Success", data: car });
  // else res.status(404).json({ status: "Error", message: "Data not found!" });
  res.status(200).json({ status: "Success", data: car });

  return;

};

export const addCar = async (req: any, res: Response) => {
  if (!req.file) {
    return res.status(400).send({ status: "error", message: "File must be a picture!" });
  }

  const url = `/uploads/${req.file!.filename}`;

  const {
    model,
    manufacture,
    plate,
    price,
    category
  } = req.body;

  const car = await CarsModel.query()
    .insert({
      model,
      manufacture,
      plate,
      image_url: url,
      price,
      category,
      created_at: new Date(),
      updated_at: new Date(),
    });
  res.status(201).json({ status: "Success", message: "Data sucesfully added", data: car });
};

export const updateCarById = async (req: Request, res: Response) => {
  if (!req.file) {
    return res.status(400).send({ status: "error", message: "File must be a picture!" });
  }

  const id = req.params.id;

  const oldCars = await CarsModel.query().where("id", id);
  
  const PUBLIC_DIR = path.join(__dirname, "../public");

  const oldCar = oldCars[0];
  const oldImageUrl = path.join(PUBLIC_DIR, oldCar.image_url);
  
  fs.unlink(oldImageUrl, () => {})
  
  const url = `/uploads/${req.file!.filename}`;

  const {
    model,
    manufacture,
    plate,
    price,
    category
  } = req.body;

  await CarsModel.query().where("id", id)
    .update({
      model,
      manufacture,
      plate,
      image_url: url,
      price,
      category,
      updated_at: new Date(),
    });

  const car = await CarsModel.query().where("id", id);

  res.status(200).json({status: "Success", message: "Data sucesfully updated", data: car})
};

export const deleteCarById = async (req: Request, res: Response) => {
  const id = req.params.id;

  await CarsModel.query().deleteById(id);

  res.status(200).json({ status: "Success", message: "Data sucesfully deleted" });
};
