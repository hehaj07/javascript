let a = 3;
let b = 2;

const c = a + b;

console.log(c);

a2 = 6;
b2 = 3;

c2 = a2 + b2;

console.log(c2);

// 1. penjumlahan

let kalkul1 = 4;
let kalkul2 = 8;

const gab = kalkul1 + kalkul2;

console.log(gab);

// 2. pengurangan
kalkul1 = 25;
kalkul2 = 3;

const kur = kalkul1 + kalkul2;
console.log(kur);
//3. Pembagian
kalkul1 = 80;
kalkul2 = 5;

const bag = kalkul1 / kalkul2;
console.log(bag);
//4. perkalian
kalkul1 = 5;
kalkul2 = 5;

const kal = kalkul1 * kalkul2;
console.log(kal);
//augmented assignment

let x = 3;
let y = 5;
console.log((x += y)); //x=x+y=8
console.log((x += y)); //13
console.log((x -= y));
console.log((x *= y));

//operator unary increment

let f = 5;
console.log(f++);
console.log(f++);
console.log(f++);
console.log(f--);
console.log(f--);
console.log(f--);

//OPERATOR PERBANDINGAN

//operator tenary
const angka1 = 10;
let ganjilGenap =
  angka1 % 2 === 0 ? "Ini bilangan genap" : "Ini bilangan ganjil";
console.log(ganjilGenap);

//operator string

let kata1 = "selamat";
let kata2 = "datang";

console.log(kata1 + " " + kata2);

kata1 = "apakabar";
kata2 = "hari ini";
console.log(kata1 + " " + kata2);

//operator aritmatika
//+,-,/,*,**,%

//operator unary
//+,-,++,--
let i = 10;
i++; //increment (menambahkan 1 kedalam angka sebelumnya)
i++;
++i;
i--; //decrement (mengurangi 1 dari angka sebelumnya)
i--;
console.log(i);

//operator logika
//&&(and), ||(or), !(negasi)=true/false

console.log(10 % 2 === 1 || 10 / 5 === 2);

console.log(!true);

//operator tenary (versi singkat "if//that/else")

const password = "716312gejwdkjan"
const isLogin= password ==="luwakwhitecoffee"?"Anda dapat dua juta rupiah":"Lo bayar gue"  //(kondisi?benar : salah)

console.log(isLogin)



//built in function = prompt, alert, dialog

//Hitung Luas Segitiga

let alas=prompt ("Masukan Alas: ")

console.log("Alas segitiga "+alas)

let tinggi=prompt ("Masukan Tinggi: ")

console.log("Tinggi segitiga "+tinggi)

let segitiga=(alas*tinggi)/2

console.log("Luas segitiga: "+segitiga)