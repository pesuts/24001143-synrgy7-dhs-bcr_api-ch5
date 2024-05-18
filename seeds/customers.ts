import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("customers").del();

    // Inserts seed entries
    await knex("customers").insert([
      { 
        id: 1,
        nama: 'John Doe', 
        email: 'john@example.com', 
        nik: '1234567890', 
        password: 'password123', 
        phone_number: '+1234567890', 
        address: '123 Main Street, City, Country' 
      },
      { 
        id: 2,
        nama: 'Jane Smith', 
        email: 'jane@example.com', 
        nik: '0987654321', 
        password: 'password456', 
        phone_number: '+0987654321', 
        address: '456 Elm Street, Town, Country' 
      },
      // Tambahkan entri lainnya di sini
      { 
        id: 3,
        nama: 'Michael Johnson', 
        email: 'michael@example.com', 
        nik: '2468013579', 
        password: 'password789', 
        phone_number: '+2468013579', 
        address: '789 Oak Street, Village, Country' 
      },
      { 
        id: 4,
        nama: 'Emily Johnson', 
        email: 'emily@example.com', 
        nik: '1357924680', 
        password: 'password246', 
        phone_number: '+1357924680', 
        address: '123 Pine Street, City, Country' 
      },
      { 
        id: 5,
        nama: 'David Brown', 
        email: 'david@example.com', 
        nik: '9876543210', 
        password: 'password789', 
        phone_number: '+9876543210', 
        address: '456 Cedar Street, Town, Country' 
      },
      { 
        id: 6,
        nama: 'Sophia Wilson', 
        email: 'sophia@example.com', 
        nik: '3698521470', 
        password: 'password369', 
        phone_number: '+3698521470', 
        address: '789 Maple Street, Village, Country' 
      },
      { 
        id: 7,
        nama: 'Oliver Taylor', 
        email: 'oliver@example.com', 
        nik: '7539514862', 
        password: 'password852', 
        phone_number: '+7539514862', 
        address: '321 Oak Street, City, Country' 
      },
      { 
        id: 8,
        nama: 'Emma Martinez', 
        email: 'emma@example.com', 
        nik: '1592637480', 
        password: 'password753', 
        phone_number: '+1592637480', 
        address: '654 Elm Street, Town, Country' 
      },
      { 
        id: 9,
        nama: 'Noah Anderson', 
        email: 'noah@example.com', 
        nik: '8527419630', 
        password: 'password159', 
        phone_number: '+8527419630', 
        address: '987 Pine Street, Village, Country' 
      },
      { 
        id: 10,
        nama: 'Isabella Thompson', 
        email: 'isabella@example.com', 
        nik: '4561237890', 
        password: 'password753', 
        phone_number: '+4561237890', 
        address: '123 Oak Street, City, Country' 
      }
    ]);
};
