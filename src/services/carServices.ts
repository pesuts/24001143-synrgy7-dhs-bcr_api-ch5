import { CarsModel } from "../models/car.model";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import client from "../config/redis"

export const getAllCars = async (_: any, res: Response) => {
  try {
    const KEY = "car";

    const cars = await client.get(KEY);
    if (cars) {
      res.status(200).json({ status: "Success", message: "Success from Cache", data: JSON.parse(cars) });
    } else { 
      const data = await CarsModel.query().withGraphFetched("orders");
      client.setEx(KEY, 600, JSON.stringify(data));

      res.status(200).json({ status: "Success", message: "Success from Server", data });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error", message: "Internal Server Error" });
  }
};

export const getCarById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const car = await CarsModel.query()
      .where("id", id)
      .withGraphFetched("orders");

    res.status(200).json({ status: "Success", data: car });

    return;
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error", message: "Internal Server Error" });
  }
};

export const addCar = async (req: any, res: Response) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .send({ status: "Error", message: "File must be a picture!" });
    }

    const url = `/uploads/${req.file!.filename}`;

    const { model, manufacture, plate, price, category } = req.body;

    const car = await CarsModel.query().insert({
      model,
      manufacture,
      plate,
      image_url: url,
      price,
      category,
      created_at: new Date(),
      updated_at: new Date(),
    });
    res
      .status(201)
      .json({ status: "Success", message: "Data sucesfully added", data: car });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error", message: "Internal Server Error" });
  }
};

export const updateCarById = async (req: Request, res: Response) => {
  try {
    if (!req.file) {
      return res
        .status(400)
        .send({ status: "Error", message: "File must be a picture!" });
    }

    const id = req.params.id;

    const oldCars = await CarsModel.query().where("id", id);

    const PUBLIC_DIR = path.join(__dirname, "../public");

    const oldCar = oldCars[0];
    const oldImageUrl = path.join(PUBLIC_DIR, oldCar.image_url);

    fs.unlink(oldImageUrl, () => {});

    const url = `/uploads/${req.file!.filename}`;

    const { model, manufacture, plate, price, category } = req.body;

    await CarsModel.query().where("id", id).update({
      model,
      manufacture,
      plate,
      image_url: url,
      price,
      category,
      updated_at: new Date(),
    });

    const car = await CarsModel.query().where("id", id);

    res
      .status(200)
      .json({
        status: "Success",
        message: "Data sucesfully updated",
        data: car,
      });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error", message: "Internal Server Error" });
  }
};

export const deleteCarById = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    await CarsModel.query().deleteById(id);

    res
      .status(200)
      .json({ status: "Success", message: "Data sucesfully deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ status: "Error", message: "Internal Server Error" });
  }
};
