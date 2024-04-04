let belanja=prompt("Silahkan, Masukan Total Belanja, Kamu!")

console.log("Total Belanja = "+belanja)
let bayar=""

if ((belanja >=100000)&&(belanja<500000))
{bayar=belanja-(belanja*0.1)
    console.log ("Selamat Anda Mendapatkan Diskon 10%")
}else if ((belanja >=500000)&&(belanja <1000000))
{bayar=belanja-(belanja*0.2)
console.log("Selamat Anda Mendapat Diskon 20%")
}else if (belanja>=1000000){
bayar=belanja-(belanja*0.3)
    console.log("Selamat Anda Mendapatkan Diskon 30%")
} else {
    bayar=belanja
    console.log("Maaf! Anda Tidak Dapat Diskon.")
}

console.log("Total Bayar = "+bayar)
 