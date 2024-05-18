import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('orders', (table: Knex.TableBuilder) => { 
    table.increments('id').primary();
    table.integer('customer_id').notNullable();
    table.integer('car_id').notNullable();
    table.integer('price').notNullable();
    table.dateTime('created_at').notNullable();
    table.dateTime('start_rent').notNullable();
    table.dateTime('finish_rent').notNullable();

    table.foreign('customer_id').references('id').inTable('customers').onDelete('CASCADE');
    table.foreign('car_id').references('id').inTable('cars').onDelete('CASCADE');
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('orders');
}

