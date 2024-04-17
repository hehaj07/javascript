//cara membuat array

// cara pertama

const angka=new Array(1,3,5,7,9);

console.log (angka);

//cara kedua

const angka2= new Array(5);
console.log(angka2);

//cara ketiga
const angka3= [2,4,6,8,10]

console.log(angka3)

//cara menampilkan isi array

console.log(angka[0])
console.log(angka[1])

//cara menampilkan isi array dengan for

for (let i=0; i<angka.length;i++){
    console.log("Index ke- "+i+" = "+angka[i])
}


//cara menambahkan isi pada array

angka2[0]=5;
angka2[1]=12;
angka2[2]=17;
angka2[3]=21;
angka2[4]=28;
console.log(angka2);

//menghitung jumlah indeks dari string

console.log("Hello World".length);

//cara menghapus elemen array

angka3[2]=undefined
angka3[4]=undefined


console.log(angka3)

//cara menghapus elemen array dengan "delete"

delete angka3[0];

console.log(angka3);

