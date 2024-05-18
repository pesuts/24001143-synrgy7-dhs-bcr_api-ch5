import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("orders").del();

    // Inserts seed entries
    await knex("orders").insert([
      { 
        id: 1,
        customer_id: 1, 
        car_id: 2, 
        price: 30000, 
        created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 hari yang lalu
        start_rent: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),    // 5 hari yang lalu
        finish_rent: new Date(Date.now() + 5 * 24 * 60 * 60 * 1000),   // 5 hari ke depan
      },
      { 
        id: 2,
        customer_id: 6, 
        car_id: 3, 
        price: 25000, 
        created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 hari yang lalu
        start_rent: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000),   // 10 hari yang lalu
        finish_rent: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)  // 10 hari ke depan
      },
      { 
        id: 3,
        customer_id: 3, 
        car_id: 1, 
        price: 28000, 
        created_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // 20 hari yang lalu
        start_rent: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),  // 15 hari yang lalu
        finish_rent: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000) // 15 hari ke depan
      },
      // Tambahkan entri lainnya di sini
      { 
        id: 4,
        customer_id: 2, 
        car_id: 10, 
        price: 35000, 
        created_at: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000), // 25 hari yang lalu
        start_rent: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000),  // 20 hari yang lalu
        finish_rent: new Date(Date.now() + 20 * 24 * 60 * 60 * 1000) // 20 hari ke depan
      },
      { 
        id: 5,
        customer_id: 5, 
        car_id: 4, 
        price: 40000, 
        created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 30 hari yang lalu
        start_rent: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000),  // 25 hari yang lalu
        finish_rent: new Date(Date.now() + 25 * 24 * 60 * 60 * 1000) // 25 hari ke depan
      },
      { 
        id: 6,
        customer_id: 4, 
        car_id: 7, 
        price: 45000, 
        created_at: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000), // 35 hari yang lalu
        start_rent: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),  // 30 hari yang lalu
        finish_rent: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000) // 30 hari ke depan
      },
      { 
        id: 7,
        customer_id: 7, 
        car_id: 6, 
        price: 50000, 
        created_at: new Date(Date.now() - 40 * 24 * 60 * 60 * 1000), // 40 hari yang lalu
        start_rent: new Date(Date.now() - 35 * 24 * 60 * 60 * 1000),  // 35 hari yang lalu
        finish_rent: new Date(Date.now() + 35 * 24 * 60 * 60 * 1000) // 35 hari ke depan
      }
    ]);
};
