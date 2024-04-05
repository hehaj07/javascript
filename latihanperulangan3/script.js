const anak_ayam=parseInt(prompt("Masukan jumlah anak ayam:"))

console.log("Anak ayam "+anak_ayam);

for (let i=anak_ayam; i>0; i--){
    if (i>1){
        console.log("Anak ayam turun "+i+", mati satu, tinggal "+(i-1))
    }else{
        console.log("Anak ayam turun 1, mati satu, tinggal induknya")
    }
}