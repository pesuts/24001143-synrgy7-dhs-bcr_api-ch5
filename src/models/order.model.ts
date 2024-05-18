import { Model, ModelObject } from "objection";
import { CarsModel } from "./car.model";
import { CustomersModel } from "./customer.model";

export class OrdersModel extends Model {
  id!: number;
  car_id!: number;
  customer_id!: number;
  price!: number;
  created_at!: Date;
  start_rent!: Date;
  finish_rent!: Date;

  static get tableName() {
    return "orders";
  }

  static get relationMappings() { 
    return {
      cars: {
        relation: Model.BelongsToOneRelation,
        modelClass: CarsModel,
        join: {
          from: 'orders.car_id',
          to: 'cars.id'
        }
      },
      customers: {
        relation: Model.BelongsToOneRelation,
        modelClass: CustomersModel,
        join: {
          from: 'orders.customer_id',
          to: 'customers.id'
        }
      }
    }
  }
}

export type Orders = ModelObject<OrdersModel>;
