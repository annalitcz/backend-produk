# API Product

## Daftar Produk

mengambil daftar produk yang tersedia.

## Endpoint

```bash
GET /products
```
## Parameters

belum buat.

## Response
contoh respon

```json
[
  {
    "id": 1,
    "name": "Product 1",
    "price": 10.99,
    "imageUrl": "https://example.com/product1.jpg"
  },
  {
    "id": 2,
    "name": "Product 2",
    "price": 19.99,
    "imageUrl": "https://example.com/product2.jpg"
  },
  {
    "id": 3,
    "name": "Product 3",
    "price": 7.99,
    "imageUrl": "https://example.com/product3.jpg"
  }
]

```

## Response Fields
* id (integer): ID unik produk.
* name (string): Nama produk.
* price (number): Harga produk.
* imageUrl (string): URL gambar produk.
