let nama = prompt("Siapa Nama Kamu?");
let golongan = prompt("Golongan Apa?");
let julker = prompt("Jumlah Jam Kerja");

switch (golongan) {
  case "A":
    gaji_perjam = 6000;
    break;
  case "B":
    gaji_perjam = 7000;
    break;
  case "C":
    gaji_perjam = 8000;
    break;
  case "D":
    gaji_perjam = 10000;
}

const gaji = julker * gaji_perjam;

if (julker - 48 > 0) {
  total_gaji = gaji + (julker - 48) * 5000;
}else {
    total_gaji=gaji
}

console.log("Nama : " + nama);
console.log("Golongan : " + golongan);
console.log("Jumlah Jam Kerja :" + julker);

console.log(nama + " menerima gaji sebesar " + total_gaji + " per minggu");
