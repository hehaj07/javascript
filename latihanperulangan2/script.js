/*
//buat prompt untuk input nilai n
let n = prompt("Masukan nilai n");


//inisialisasi nilai awal jumlah 
let total = 0;


for (let i = 1; i <= n; i++) {
  total += i;
}

console.log(
  "Jumlah nilai deret \n antara 1 sampai " + n + " adalah = " + total
);
*/


let n=prompt("masukan nilai n");
let total=0

//inisialisai nilai awal perulangan
let i=1

//eksekusi perulangan

while (i<=n){
    total=total+i;
    i++
}
console.log("Hasil dari penjumlahan \n deret 1 sampai dengan "+n+" adalah "+total);