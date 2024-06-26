import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("cars").del();

    // Inserts seed entries
    await knex("cars").insert([
      { 
        id: 1,
        model: 'Toyota Camry', 
        manufacture: 'Toyota', 
        plate: 'ABC123', 
        image_url: 'https://example.com/toyota_camry.jpg', 
        price: 30000, 
        category: 'Sedan', 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        id: 2,
        model: 'Honda Civic', 
        manufacture: 'Honda', 
        plate: 'DEF456', 
        image_url: 'https://example.com/honda_civic.jpg', 
        price: 25000, 
        category: 'Sedan', 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        id: 3,
        model: 'Ford Mustang', 
        manufacture: 'Ford', 
        plate: 'GHI789', 
        image_url: 'https://example.com/ford_mustang.jpg', 
        price: 40000, 
        category: 'Sports Car', 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        id: 4,
        model: 'Nissan Altima', 
        manufacture: 'Nissan', 
        plate: 'JKL012', 
        image_url: 'https://example.com/nissan_altima.jpg', 
        price: 28000, 
        category: 'Sedan', 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        id: 5,
        model: 'Chevrolet Silverado', 
        manufacture: 'Chevrolet', 
        plate: 'MNO345', 
        image_url: 'https://example.com/chevrolet_silverado.jpg', 
        price: 35000, 
        category: 'Truck', 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        id: 6,
        model: 'BMW 3 Series', 
        manufacture: 'BMW', 
        plate: 'PQR678', 
        image_url: 'https://example.com/bmw_3_series.jpg', 
        price: 45000, 
        category: 'Luxury Sedan', 
        created_at: new Date(), 
        updated_at: new Date() 
      },
      { 
        id: 7,
        model: 'Tesla Model S', 
        manufacture: 'Tesla', 
        plate: 'STU901', 
        image_url: 'https://example.com/tesla_model_s.jpg', 
        price: 60000, 
        category: 'Electric Car', 
        created_at: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000), // 10 hari yang lalu
        updated_at: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000) 
      },
      { 
        id: 8,
        model: 'Jeep Wrangler', 
        manufacture: 'Jeep', 
        plate: 'VWX234', 
        image_url: 'https://example.com/jeep_wrangler.jpg', 
        price: 32000, 
        category: 'SUV', 
        created_at: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000), // 10 hari yang lalu
        updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)  
      },
      { 
        id: 9,
        model: 'Audi A4', 
        manufacture: 'Audi', 
        plate: 'YZA567', 
        image_url: 'https://example.com/audi_a4.jpg', 
        price: 48000, 
        category: 'Luxury Sedan', 
        created_at: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000), // 10 hari yang lalu
        updated_at: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000)    // 5 hari yang lalu
      },
      { 
        id: 10,
        model: 'Subaru Outback', 
        manufacture: 'Subaru', 
        plate: 'BCD890', 
        image_url: 'https://example.com/subaru_outback.jpg', 
        price: 35000, 
        category: 'Wagon', 
        created_at: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000), // 15 hari yang lalu
        updated_at: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)    // 7 hari yang lalu
      }
      
    ]);
};
