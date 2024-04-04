
console.log("MENU KALKULATOR SEDERHANA")
console.log("1. PENJUMLAHAN")
console.log("2. PENGURANGAN")
console.log("3. PERKALIAN")
console.log("4. PEMBAGIAN")
console.log("5. KELUAR PROGRAM")

const pilih=prompt("Pilih Salah Satu")

if (pilih <=4) {
    angka1=parseInt(prompt("Masukan Angka 1"));
    angka2=parseInt(prompt("Masukan Angka 2"))
    console.log("Angka Pertama : "+angka1)
    console.log("Angka Kedua : "+angka2)
}

let hasil;
switch(pilih){
    case "1":
    hasil=(angka1 + angka2)
    console.log("Hasil dari "+angka1+"+"+angka2+" = "+hasil)
       break;
    case "2":
    hasil=(angka1 - angka2)
    console.log("Hasil dari "+angka1+"-"+angka2+" = "+hasil)
        break;
    case "3":
        hasil=(angka1 * angka2)
        console.log("Hasil dari "+angka1+"x"+angka2+" = "+hasil)
        break;
    case "4":
        hasil=(angka1/angka2)
        console.log("Hasil dari "+angka1+":"+angka2+" = "+hasil)       
    break;
    
    default:
    console.log ("Keluar Program. Terima Kasih")
}

