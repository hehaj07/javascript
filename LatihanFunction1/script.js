//function
function persegi_panjang(a, b) {
  return a * b;
}

function luas_lingkaran(a, b) {
  return (22 / 7) * a * a;
}

function luas_segitiga(a, b) {
  return (1 / 2) * a * b;
}

//menu

let lanjut;
do {
  console.log("-- APLIKASI KALKULATOR SEDERHANA--");
  console.log("==================================");
  console.log("Silahkan Pilih Menu di Bawah : ");
  console.log("1. Luas Persegi Panjang");
  console.log("2. Luas Lingkaran");
  console.log("3. Luas Segitiga");
  console.log("0. Keluar");
  console.log("==================================");

  const menu = prompt("Hari Ini Mau Menghitung Apa?");
  let a, b;

  switch (menu) {
    case "1":
      a = prompt("Masukan Nilai Panjang: ");
      b = prompt("Masukan Nilai Tinggi: ");

      console.log(persegi_panjang(a, b));
      break;

    case "2":
      a = prompt("Masukan Nilai Jari-jari: ");
      console.log(parseFloat(luas_lingkaran(a, b)));
      break;
    case "3":
      a = prompt("Masukan Nilai Alas: ");
      b = prompt("Masukan Nilai Tinggi: ");
      console.log(parseFloat(luas_segitiga(a, b)));
      break;
    default:
      alert("Menu yang anda pilih tidak tersedia");
      break;
  }
  lanjut = prompt("Mau Pilih Menu Yang Lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log("--PROGRAM SELESAI--");
