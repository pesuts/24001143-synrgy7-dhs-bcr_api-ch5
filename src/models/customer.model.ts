import { Model, ModelObject } from "objection";
import { OrdersModel } from "./order.model";

export class CustomersModel extends Model {
  id!: number;
  name!: string;
  email!: string;
  nik!: string;
  password!: string;
  phone_number!: string;
  address!: string;

  static get tableName() {
    return "customers";
  }

  static get relationMappings() { 
    return {
      orders: {
        relation: Model.HasManyRelation,
        modelClass: OrdersModel,
        join: {
          from: 'customers.id',
          to: 'orders.customer_id'
        }
      },
    }
  }
}

export type Customers = ModelObject<CustomersModel>;
