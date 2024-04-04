const bulan=prompt("Masukan nomor bulan: ")

let bulan2;
switch (bulan){
    case "1":
       bulan2= ("Januari")
    break;
    case "2":
       bulan2= ("Februari")
    break;
    case "3":
       bulan2= ("Maret")
    break;
    case "4":
       bulan2= ("April")
    break;
    case "5":
       bulan2= ("Mei")
    break;
    case "6":
        bulan2=("Juni")
    break;
    case "7":
        bulan2=("Juli")
    break;
    case "8":
        bulan2=("Agustus")
    break;
    case "9":
        bulan2=("September")
    break;
    case "10":
        bulan2=("Oktober")
        break;
    case "11":
        bulan2=("November")
        break;
    case "12":
        bulan2=("Desember")
    break;
    default:
    console.log("Nomor Bulan Tidak Terdaftar")
    break;
}

console.log("Bulan ke "+bulan+" adalah "+bulan2)