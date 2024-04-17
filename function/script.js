//function
//built in function

/*function namaFungsi (a,b){
    console.log (a+" suka "+b);
}

namaFungsi("Anata", "Nana")


function penjumlahan (a, b){
    return a+b;

}

const total=penjumlahan(9,5)+penjumlahan(8,7);

console.log(total);
*/

//cal sederhana, fungsi deklarasi

function penjumlahan(a,b){
    return a+b;
}

function pengurangan (a,b){
    return a-b;
}

function pekalian (a,b){
    return a*b
}


//fungsi ekspresi

const pembagian =function(a,b){
    return a/b;
}

// arrow function

let lanjut;
do{
console.log ("-- APLIKASI KALKULATOR SEDERHANA--");
console.log ("==================================");
console.log ("Silahkan Pilih Menu di Bawah : ");
console.log ("1. Penjumlahan");
console.log ("2. Pengurangan");
console.log ("3. Perkalian");
console.log ("4. Pembagian");
console.log ("0. Keluar");
console.log ("===================================");

const menu = prompt("Pilih Menu : ");
let a,b;

switch (menu) {
    case "1":
        a=parseInt(prompt("Masukan Nilai a: "))
        b=parseInt(prompt("Masukan Nilai b: "))

    console.log(penjumlahan(a,b));
    break;

    case "2":
        a = prompt("Masukan Nilai a: ")
        b = prompt("Masukan Nilai b: ")
        console.log(parseInt(pengurangan(a,b)));
        break;
    case  "3":
        a = prompt("Masukan Nilai a: ")
        b = prompt("Masukan Nilai b: ")
        console.log(parseInt(perkalian(a,b)));
        break;
    case "4": 
        a = prompt("Masukan Nilai a: ")
        b = prompt("Masukan Nilai b: ")
        console.log(parseFloat(pembagian(a,b)));
        break;

        default:
        alert("Menu yang anda pilih tidak tersedia");
        break;
}
lanjut = prompt("Mau Pilih Menu Yang Lain? (Y/T)");
}
    while(lanjut ==="Y"||lanjut==="y");

console.log("--PROGRAM SELESAI--");
