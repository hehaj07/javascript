//array
const mhs = ["Andrew", "Bob", "Clark", "David", "Ethan", "Fernando", "Gabriel"];
console.log(mhs);

//menambahkan elemen baru

mhs.push("Harold", "Iglesias", "Jackson");
console.log(mhs);

//slice

const mhs2 = mhs.slice(1,2);
const mhs3 = mhs.slice(3, 4);
const mhs4 = mhs.slice(5, 6);

console.log(mhs2.join(" "),mhs3.join(" "),mhs4.join(" "));

// menghapus nama "Jackson"

mhs.pop();
console.log(mhs);

//menghapus nama "Andrew"

mhs.shift();
console.log(mhs);

//menambahkan nama "Andy"

mhs.unshift("Andy");
console.log(mhs);

//ubah nama Fernando ke fransesco

mhs.splice(5,1, "Fransesco");
console.log(mhs);

//menghapus nama ethan

mhs.splice(4,1);
console.log(mhs);

//splice (idxAwal, idxAkhir)
const siswa =["Maulana", "Naufal","Faisal", "Topik", "Rian"];

//splice = menghasilkanarray baru
siswa.splice(2,0,"Yudha", "Jabbar", "Dani")
console.log(siswa)

//foreach=sama seperti perulangan "for"

const nilai=[70,75,82,65,58];

nilai.forEach(function(e,i){
console.log("Index ke-"+i+" = "+e);
})

//sort=mengurutkan array

console.log(nilai.sort())

//map, memetakan
const dikaliDua=nilai.map(function(e){
return e*2
});
console.log(dikaliDua)

//filter & find

const bilBul=[2,3,1,7,6,9,11,9];

const bilanganBul=bilBul.filter(function(e){
    return e>5;
});

console.log(bilanganBul);

const bilanganBul2=bilBul.find(function(e){
    return e>5;
});
console.log(bilanganBul2);