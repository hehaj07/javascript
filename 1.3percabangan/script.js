//IF STATEMENT
/*
const total_belanja=prompt("Masukan Total Belanja: ")*/


// if (total_belanja>100000){
//     console.log("selamat Anda mendapatkan hadiah!");
// }

// console.log("Terima kasih sudah berbelanja");


//if...else statement
/*
if(total_belanja>100000){
    console.log("Selamat Anda mendapatkan piring cantik!")
}else{
    console.log("Maaf, Anda belum dapat hadiah!")
}

console.log("Terima kasih sudah berbelanja")

*/


//login

/*
const password=prompt("Masukan Password!")

if(password==="legendofaang"){
    console.log("Silahkan masuk, ang!")
}else{
    console.log("Password salah, silahkan coba lagi!")
}
*/

//if..else if...else statement

const nilai=prompt("Masukan nilai Anda: ")
if (nilai>=80){
    console.log("Nilai Anda Berpredikat BAIK")
}else if (nilai>=65){
    console.log("Nilai Anda Berpredikat CUKUP")
}else if (nilai>=50){
    console.log("Nilai Anda Berpredikat BURUK")
}else{
    console.log("Nilai Anda Berpredikat SANGAT BURUK")
};


//swtich statement

const warna=prompt("Silahkan pilih warna")
let pesan=""

switch(warna){
    case "merah":
        pesan="Anda memilih warna merah"
        break;
    case "biru":
        pesan="Anda memilih warna biru"
        break;
    case "orange":
        pesan="Anda Memilih warna orange"
        break;

    default:
        pesan="Warna yang Anda pilih tidak ada!"
        break;
}
console.log(pesan)