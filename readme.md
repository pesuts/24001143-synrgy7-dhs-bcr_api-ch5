# SYNRGY7 - CHALLENGE 5 - DANIEL HASIANDO SINAGA

---

# ERD
![ERD](https://raw.githubusercontent.com/pesuts/24001143-synrgy7-dhs-bcr_api-ch5/main/challenge5_erd.jpg)

---

# Ringkasan API

**Detail Dokumentasi API**
https://documenter.getpostman.com/view/25932120/2sA3JT4eQG#4ae08e3d-8fed-4a0f-8073-0b6d35f92f9d

# Ringkasan API

| Nama                                | Deskripsi                                                                              | Endpoint                 | Metode | Status           |
|-------------------------------------|----------------------------------------------------------------------------------------|--------------------------|--------|------------------|
| Get Cars                            | Mengambil daftar mobil.                                                                 | localhost:8000/cars     | GET    | 200 OK           |
| Get Car By Id With Not Valid Id     | Mengambil data mobil berdasarkan ID, tetapi ID tidak valid   | localhost:8000/cars/abc | GET    | 400 Bad Request           |
| Get Car By Id With Not Found Data     | Mengambil data mobil berdasarkan ID, tetapi ID tidak ditemukan   | localhost:8000/cars/9099 | GET    | 404 Not Found           |
| Get Car By Id     | Mengambil data mobil berdasarkan ID  | localhost:8000/cars/1 | GET    | 200 Ok |
| Add Car (With Upload) Not Image File | Menambahkan mobil baru dengan mengungguh file gambar| localhost:8000/cars     | POST   | 201 Created      |
| Add Car (With Upload) Not Image File  | Menambahkan mobil dengan mngunggah gambar, tetapi file yang diunggah bukan file gambar. baru. | localhost:8000/cars     | POST   | 400 Bad Request      | 
| Edit Car Id Not Valid               | Mengedit data mobil berdasarkan ID, tetapi ID tidak valid.                               | localhost:8000/cars/abc | PUT    | 400 Bad Request |
| Edit Car Id Not Found               | Mengedit data mobil berdasarkan ID, tetapi data tidak ditemukan.                          | localhost:8000/cars/99999 | PUT    | 404 Not Found   |
| Edit Car By Id (With Upload) Not Image File | Mengedit data mobil berdasarkan ID dengan mengunggah gambar, tetapi file yang diunggah bukan file gambar. | localhost:8000/cars/1 | PUT    | 400 Bad Request |
| Edit Car By Id (With Upload)        | Mengedit data mobil berdasarkan ID dengan mengunggah gambar.                             | localhost:8000/cars/1 | PUT    | 200 OK           |
| Delete Car Not Valid Id             | Menghapus data mobil berdasarkan ID, tetapi ID tidak valid.                               | localhost:8000/cars/abc | DELETE | 400 Bad Request |
| Delete Car Not Found Data           | Menghapus data mobil berdasarkan ID, tetapi data tidak ditemukan.                          | localhost:8000/cars/99999 | DELETE | 404 Not Found   |
| Delete Car By Id                    | Menghapus data mobil berdasarkan ID.                                                     | localhost:8000/cars/1 | DELETE | 200 OK           |

<hr>

# Get Cars

**Deskripsi**: Mengambil daftar mobil dari server.

**Metode**: GET

**Endpoint**: `localhost:8000/cars`

### Permintaan
Tidak diperlukan parameter tambahan.

### Tanggapan
- **Status**: 200 OK
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 4015`
  - `ETag: W/"faf-px0zChdr0t7GVr9QPVSDOm+FUtc"`
  - `Date: Sat, 18 May 2024 13:43:47 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "Success",
    "data": [
        {
            "id": 10,
            "model": "Edit Model",
            "manufacture": "Edit Manufacture",
            "plate": "Edit Plate",
            "image_url": "/uploads/TNnFg0NRXFCbS7WG.jpg",
            "price": 69,
            "category": "Edit Category",
            "created_at": "2024-05-03T13:17:59.835Z",
            "updated_at": "2024-05-18T13:33:57.184Z",
            "orders": [
                {
                    "id": 4,
                    "customer_id": 2,
                    "car_id": 10,
                    "price": 35000,
                    "created_at": "2024-04-23T13:17:59.848Z",
                    "start_rent": "2024-04-28T13:17:59.848Z",
                    "finish_rent": "2024-06-07T13:17:59.848Z"
                }
            ]
        },
       {
          "id": 1,
          "model": "Edit Model",
          "manufacture": "Edit Manufacture",
          "plate": "Edit Plate",
          "image_url": "/uploads/mlegqiVJ3BspdvhI.jpg",
          "price": 69,
          "category": "Edit Category",
          "created_at": "2024-05-18T13:17:59.835Z",
          "updated_at": "2024-05-18T13:36:30.774Z",
          "orders": [
            {
              "id": 3,
              "customer_id": 3,
              "car_id": 1,
              "price": 28000,
              "created_at": "2024-04-28T13:17:59.848Z",
              "start_rent": "2024-05-03T13:17:59.848Z",
              "finish_rent": "2024-06-02T13:17:59.848Z"
            }
          ]
        },
        ...
    ]
}
```

# Get Car By Id With Not Valid Id

**Deskripsi**: Mengambil mobil berdasarkan ID, tetapi ID yang diberikan tidak valid.

**Metode**: GET

**Endpoint**: `localhost:8000/cars/abc`

### Permintaan
Tidak diperlukan parameter tambahan.

### Tanggapan
- **Status**: 400 Bad Request
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 44`
  - `ETag: W/"2c-OhXsJ7tzHDFpsJy5bXPqiPlpzoQ"`
  - `Date: Sat, 18 May 2024 13:43:59 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "error",
    "message": "Id not valid!"
}
```

# Get Car By Id With Not Found Data

**Deskripsi**: Mengambil mobil berdasarkan ID, tetapi data dengan ID yang diberikan tidak ditemukan.

**Metode**: GET

**Endpoint**: `localhost:8000/cars/99999`

### Permintaan
Tidak diperlukan parameter tambahan.

### Tanggapan
- **Status**: 404 Not Found
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 46`
  - `ETag: W/"2e-xwbXOoJVVY7dNq2wP0SsMBrcMb8"`
  - `Date: Sat, 18 May 2024 13:44:09 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "Error",
    "message": "Data not found!"
}
```

# Get Car By Id

**Deskripsi**: Mengambil mobil berdasarkan ID.

**Metode**: GET

**Endpoint**: `localhost:8000/cars/1`

### Permintaan
Tidak diperlukan parameter tambahan.

### Tanggapan
- **Status**: 200 OK
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 457`
  - `ETag: W/"1c9-5KfAS7t7RqhswLsJS/HGKEhBZKY"`
  - `Date: Sat, 18 May 2024 13:44:25 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "Success",
    "data": [
        {
            "id": 1,
            "model": "Edit Model",
            "manufacture": "Edit Manufacture",
            "plate": "Edit Plate",
            "image_url": "/uploads/mlegqiVJ3BspdvhI.jpg",
            "price": 69,
            "category": "Edit Category",
            "created_at": "2024-05-18T13:17:59.835Z",
            "updated_at": "2024-05-18T13:36:30.774Z",
            "orders": [
                {
                    "id": 3,
                    "customer_id": 3,
                    "car_id": 1,
                    "price": 28000,
                    "created_at": "2024-04-28T13:17:59.848Z",
                    "start_rent": "2024-05-03T13:17:59.848Z",
                    "finish_rent": "2024-06-02T13:17:59.848Z"
                }
            ]
        }
    ]
}
```

# Add Car (With Upload)

**Deskripsi**: Menambahkan mobil baru dengan mengunggah gambar.

**Metode**: POST

**Endpoint**: `localhost:8000/cars`

### Permintaan
- **Body**:
  - **Mode**: formdata
  - **Form Data**:
    - `model`: New Model (text)
    - `manufacture`: New Manufacture (text)
    - `plate`: New Plate (text)
    - `price`: 888 (text)
    - `category`: New Category (text)
    - `image`: [File Upload](/C:/Users/danie/OneDrive/Desktop/0617fe7ad089d48a66c7a8a0f4644cd6ee06087ba29a5a0b14a6b18cfb8842e3_1.jpg)

### Tanggapan
- **Status**: 201 Created
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 308`
  - `ETag: W/"134-vtdKAv7AJtHWdmECmhnqwJNb18k"`
  - `Date: Sat, 18 May 2024 13:44:38 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "Success",
    "message": "Data successfully added",
    "data": {
        "model": "New Model",
        "manufacture": "New Manufacture",
        "plate": "New Plate",
        "image_url": "/uploads/vbX_VMqJ5tiPijB8.jpg",
        "price": "888",
        "category": "New Category",
        "created_at": "2024-05-18T13:44:38.307Z",
        "updated_at": "2024-05-18T13:44:38.307Z",
        "id": 102
    }
}
```

# Add Car (With Upload) Not Image File

**Deskripsi**: Menambahkan mobil baru dengan mengunggah gambar, namun berkas yang diunggah bukan berkas gambar.

**Metode**: POST

**Endpoint**: `localhost:8000/cars`

### Permintaan
- **Body**:
  - **Mode**: formdata
  - **Form Data**:
    - `model`: Model (text)
    - `manufacture`: Manufacture (text)
    - `plate`: Plate (text)
    - `price`: 888 (text)
    - `category`: Category (text)
    - `image`: [File Upload](/C:/Users/danie/OneDrive/Desktop/customers.csv)

### Tanggapan
- **Status**: 400 Bad Request
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 54`
  - `ETag: W/"36-tRowYI7sGUOXcDdlFG3xVaR4RkY"`
  - `Date: Sat, 18 May 2024 13:45:12 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "error",
    "message": "File must be a picture!"
}
```

# Edit Car Id Not Valid

**Deskripsi**: Mengedit mobil dengan ID yang tidak valid.

**Metode**: PUT

**Endpoint**: `localhost:8000/cars/abc`

### Permintaan
- **Body**:
  - **Mode**: formdata
  - **Form Data**:
    - `model`: Edit Model (text)
    - `manufacture`: Edit Manufacture (text)
    - `plate`: Edit Plate (text)
    - `price`: 69 (text)
    - `category`: Edit Category (text)
    - `image`: [File Upload](/C:/Users/danie/OneDrive/Desktop/customers.csv)

### Tanggapan
- **Status**: 400 Bad Request
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 44`
  - `ETag: W/"2c-OhXsJ7tzHDFpsJy5bXPqiPlpzoQ"`
  - `Date: Sat, 18 May 2024 13:45:23 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "error",
    "message": "Id not valid!"
}
```

# Edit Car Id Not Found

**Deskripsi**: Mengedit mobil dengan ID yang tidak ditemukan.

**Metode**: PUT

**Endpoint**: `localhost:8000/cars/99999`

### Permintaan
- **Body**:
  - **Mode**: formdata
  - **Form Data**:
    - `model`: Edit Model (text)
    - `manufacture`: Edit Manufacture (text)
    - `plate`: Edit Plate (text)
    - `price`: 69 (text)
    - `category`: Edit Category (text)
    - `image`: [File Upload (.jpg)](/C:/Users/danie/OneDrive/Desktop/customers.csv)

### Tanggapan
- **Status**: 404 Not Found
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 46`
  - `ETag: W/"2e-xwbXOoJVVY7dNq2wP0SsMBrcMb8"`
  - `Date: Sat, 18 May 2024 13:45:31 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "Error",
    "message": "Data not found!"
}
```

# Edit Car By Id (With Upload) Not Image File

**Deskripsi**: Mengedit mobil dengan ID yang sesuai, tetapi file yang diunggah bukanlah gambar.

**Metode**: PUT

**Endpoint**: `localhost:8000/cars/1`

### Permintaan
- **Body**:
  - **Mode**: formdata
  - **Form Data**:
    - `model`: Edit Model (text)
    - `manufacture`: Edit Manufacture (text)
    - `plate`: Edit Plate (text)
    - `price`: 69 (text)
    - `category`: Edit Category (text)
    - `image`: [File Upload (.csv)](/C:/Users/danie/OneDrive/Desktop/customers.csv)

### Tanggapan
- **Status**: 400 Bad Request
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 54`
  - `ETag: W/"36-tRowYI7sGUOXcDdlFG3xVaR4RkY"`
  - `Date: Sat, 18 May 2024 13:45:38 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "error",
    "message": "File must be a picture!"
}
```

# Edit Car By Id (With Upload)

**Deskripsi**: Mengedit mobil dengan ID yang sesuai, dengan mengunggah file gambar.

**Metode**: PUT

**Endpoint**: `localhost:8000/cars/1`

### Permintaan
- **Body**:
  - **Mode**: formdata
  - **Form Data**:
    - `model`: Edit Model (text)
    - `manufacture`: Edit Manufacture (text)
    - `plate`: Edit Plate (text)
    - `price`: 69 (text)
    - `category`: Edit Category (text)
    - `image`: [File Upload (.jpg)](/C:/Users/danie/OneDrive/Desktop/414470407_755909363247167_5973227874154298308_n.jpg)

### Tanggapan
- **Status**: 200 OK
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 311`
  - `ETag: W/"137-DSl6Zbz3Cs4WJNa33VHNj9dogIw"`
  - `Date: Sat, 18 May 2024 13:45:46 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "Success",
    "message": "Data sucesfully updated",
    "data": [
        {
            "id": 1,
            "model": "Edit Model",
            "manufacture": "Edit Manufacture",
            "plate": "Edit Plate",
            "image_url": "/uploads/dfW25BV69SHl_qE3.jpg",
            "price": 69,
            "category": "Edit Category",
            "created_at": "2024-05-18T13:17:59.835Z",
            "updated_at": "2024-05-18T13:45:46.453Z"
        }
    ]
}
```

# Delete Car Not Valid Id

**Deskripsi**: Menghapus mobil dengan ID yang tidak valid.

**Metode**: DELETE

**Endpoint**: `localhost:8000/cars/abc`

### Permintaan
- **Metode**: DELETE
- **URL**: `localhost:8000/cars/abc`

### Tanggapan
- **Status**: 400 Bad Request
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 44`
  - `ETag: W/"2c-OhXsJ7tzHDFpsJy5bXPqiPlpzoQ"`
  - `Date: Sat, 18 May 2024 13:45:53 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "error",
    "message": "Id not valid!"
}
```

# Delete Car Not Found Data

**Deskripsi**: Menghapus data mobil yang tidak ditemukan.

**Metode**: DELETE

**Endpoint**: `localhost:8000/cars/99999`

### Permintaan
- **Metode**: DELETE
- **URL**: `localhost:8000/cars/99999`

### Tanggapan
- **Status**: 404 Not Found
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 46`
  - `ETag: W/"2e-xwbXOoJVVY7dNq2wP0SsMBrcMb8"`
  - `Date: Sat, 18 May 2024 13:46:00 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "Error",
    "message": "Data not found!"
}
```
# Delete Car By Id

**Deskripsi**: Menghapus data mobil berdasarkan ID.

**Metode**: DELETE

**Endpoint**: `localhost:8000/cars/1`

### Permintaan
- **Metode**: DELETE
- **URL**: `localhost:8000/cars/1`

### Tanggapan
- **Status**: 200 OK
- **Headers**:
  - `X-Powered-By: Express`
  - `Content-Type: application/json; charset=utf-8`
  - `Content-Length: 56`
  - `ETag: W/"38-Xv4o4XPmL6Ozwca9Lz54Zd/ffdM"`
  - `Date: Sat, 18 May 2024 13:46:13 GMT`
  - `Connection: keep-alive`
  - `Keep-Alive: timeout=5`

#### Body
```json
{
    "status": "Success",
    "message": "Data sucesfully deleted"
}
```