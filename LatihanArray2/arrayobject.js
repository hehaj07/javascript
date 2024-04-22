const warung = [
    {
      kode_barang: "MIE-001",
      nama_produk: "Indomie Goreng",
      harga: 3000,
      stock: 15,
    },
    {
      kode_barang: "MIE-002",
      nama_produk: "Indomie Ayam Bawang",
      harga: 2500,
      stock: 25,
    },
    {
      kode_barang: "SHP-003",
      nama_produk: "Shampoo Clear Menthol",
      harga: 8000,
      stock: 40,
    },
    {
      kode_barang: "SBN-004",
      nama_produk: "Sabun Lifebouy Merah",
      harga: 7000,
      stock: 20,
    },
    {
      kode_barang: "SBN-005",
      nama_produk: "Sabun Lifebouy Kuning",
      harga: 7000,
      stock: 15,
    },
    {
      kode_barang: "SBN-006",
      nama_produk: "Sabun Biore",
      harga: 10000,
      stock: 13,
    },
  ];

  function daftarbarang(warung){
    warung.forEach(item => {
        console.log("Kode Barang:"+(item.kode_barang));
        console.log("Nama Barang:"+(item.nama_produk));
        console.log("Harga: Rp "+(item.harga));
        console.log("Stock: "+(item.stock));   
        console.log(" ");
    });
}

daftarbarang(warung);
/*
  console.log(
    "======================================================================================="
  );
  console.log("Kode Barang\t\tNama Produk\t\tHarga\t\tStock");
  console.log(
    "======================================================================================="
  );*/