import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('customers', (table: Knex.TableBuilder) => { 
    table.increments('id').primary();
    table.string('nama', 50).unique().notNullable();
    table.string('email', 50).notNullable();
    table.string('nik', 50).unique().notNullable();
    table.string('password', 50).notNullable();
    table.string('phone_number', 50).notNullable();
    table.string('address', 255).notNullable();
  });
}


export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('customers');
}

