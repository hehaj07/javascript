//function
function vol_kubus(a) {
  return a * a * a;
}

function vol_balok(a, b, c) {
  return a * b * c;
}

function vol_tabung(a, b) {
  return 3.14 * (a * a) * b;
}

function vol_bola(a) {
  return (4 / 3) * 3.14 * (a * a * a);
}

function vol_kerucut(a, b) {
  return (1 / 3) * 3.14 * (a * a) * b;
}
//menu

let lanjut;
do {
  console.log("-- APLIKASI KALKULATOR SEDERHANA--");
  console.log("==================================");
  console.log("Silahkan Pilih Menu di Bawah : ");
  console.log("1. Volume Kubus");
  console.log("2. Volume Balok");
  console.log("3. Volume Tabung");
  console.log("4. Volume Bola");
  console.log("5. Volume Kerucut");
  console.log("0. Keluar");
  console.log("==================================");

  const menu = prompt("Hari Ini Mau Menghitung Apa?");
  let a, b, c;

  switch (menu) {
    case "1":
      a = prompt("Masukan Nilai Sisi Kubus: ");
      console.log("Sisi Kubus " + a + " Cm");

      console.log("Kubus ini memilik volume sebesar " + parseInt(vol_kubus(a)));
      break;

    case "2":
      a = prompt("Masukan Nilai Panjang ");
      console.log("Nilai panjang balok " + a + " Cm");
      b = prompt("Masukan Nilai Lebar ");
      console.log("Nilai lebar balok " + b + " Cm");
      c = prompt("Masukan Nilai Tinggi ");
      console.log("Nilai tinggi balok " + c + " Cm");
      console.log(
        "Balok ini memiliki volume sebesar " +
          parseInt(vol_balok(a, b, c) + " c3")
      );
      break;

    case "3":
      a = prompt("Masukan Nilai Jari-jari: ");
      console.log("Nilai jari-jari tabung " + a + " Cm");
      b = prompt("Masukan Nilai Tinggi: ");
      console.log("Nilai tinggi tabung " + b + " Cm");
      console.log("Tabung ini memiliki volume sebesar " + vol_tabung(a, b));
      break;

    case "4":
      a = prompt("Masukan Nilai Jari-jari: ");
      console.log("Nilai jari-jari bola " + a + " Cm");
      console.log("Bola ini memiliki volume sebesar " + vol_bola(a));
      break;

    case "5":
      a = prompt("Masukan Nilai Jari-jari: ");
      console.log("Nilai jari-jari kerucut " + a + " Cm");
      b = prompt("Masukan Nilai Tinggi: ");
      console.log("Nilai tinggi kerucut " + b + " Cm");
      console.log("Kerucut ini memiliki volume sebesar " + vol_kerucut(a, b));
      break;

    default:
      alert("Menu yang anda pilih tidak tersedia");
      break;
  }
  lanjut = prompt("Mau Pilih Menu Yang Lain? (Y/T)");
} while (lanjut === "Y" || lanjut === "y");

console.log("--PROGRAM SELESAI--");
