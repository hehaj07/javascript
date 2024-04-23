console.log(
  "======================================================================================="
);
console.log("Kode Barang\t\t Nama Produk\t\t Harga\t\tStock");
console.log(
  "======================================================================================="
);

let lanjutkan;
do {
  let kode_barang = prompt("Masukan Kode Barang:");
  let nama_barang = prompt("Masukan Nama Barang:");
  let harga = parseFloat(prompt("Masukan Harga Barang"));
  let stock = prompt("Masukan Stock Barang");

  console.log(
    kode_barang + "\t\t" + nama_barang + "\t\t" + "Rp " + harga + "\t\t" + stock
  );
  lanjutkan = prompt("Apakah mau dilanjutkan mengisi daftar? (Y/T)");
} while (lanjutkan === "Y" || lanjutkan === "y");

console.log(
    "======================================================================================="
  );