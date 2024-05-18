import { Model, ModelObject } from "objection";
import { OrdersModel } from "./order.model";

export class CarsModel extends Model {
  id!: number;
  model!: string;
  manufacture!: string;
  plate!: string;
  image_url!: string;
  price!: number;
  category!: string;
  created_at!: Date;
  updated_at!: Date;

  static get tableName() {
    return "cars";
  }

  static get relationMappings() { 
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: OrdersModel,
        join: {
          from: 'cars.id',
          to: 'orders.car_id'
        }
      },
    }
  }
}

export type Cars = ModelObject<CarsModel>;
