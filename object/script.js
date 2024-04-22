const mahasiswa = {
  //key-value pair (pasangan kunci-nilai)
  nama: "Lisa",
  nim: "10115425",
  umur: 19,
};

console.log(mahasiswa.nama);
console.log(mahasiswa.nim);

//menambahkan property ke dalam object
mahasiswa["alamat"] = "Dengklok Pride";
mahasiswa["no_telpon"] = "0888857743";
mahasiswa["sapa"] = function () {
  console.log("Hallo i'm Lisa");
};

console.log(mahasiswa.alamat);
//memanggil properti function di dalam object
console.log(mahasiswa.sapa());

delete mahasiswa["umur"];

console.log(mahasiswa);

const siswaBLK = [
  {
    nama: "Taopik Hidayat",
    alamat: "Baduy",
    umur: 15,
  },
  {
    nama: "Faisal Muhamad",
    alamat: "Majalaya",
    umur: 17,
  },
  {
    nama: "Naufal Zian",
    alamat: "Kosambi",
    umur: 19,
  },
];

console.log(
  "Halo, Nama Saya " + siswaBLK[1].nama,
  "alamat di " + siswaBLK[1].alamat,
  "umur saya " + siswaBLK[1].umur
);

//this

const kependudukan={
    nik: "32098197721462456",
    nama: "Gorbacev",

}
