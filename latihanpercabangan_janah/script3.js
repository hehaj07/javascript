const thl=prompt("Harap Masukan Tahun Lahir Anda!")
let lahir=""

if(thl<=1965 ){
    lahir="Baby Boomer"
}else if (thl<=1979){
   lahir="Generasi X"
}else if (thl<=1994){
    lahir="Generasi Y"
}else
    {lahir="Generasi Z"
}
console.log("Kamu termasuk "+lahir)