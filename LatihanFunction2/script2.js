//fungsi menghitung jumlah angka dari elemen array

function jumlah(array) {
  let jum = 0;
  for (let i = 0; i < array.length; i++) {
    jum += array[i];
  }
  return jum;
}

//fungsi menghitung nilai rata-rata dari array

function rata_rata(array) {
  if (array.length === 0) return 0;
  return jumlah(array) / array.length;
}

//fungsi untuk input dari user

function buatArray() {
  const jum_indeks = parseInt(prompt(" Silahkan Masukan Jumlah Indeks Array"));
  let array = [];
  for (let i = 0; i < jum_indeks; i++) {
    array.push(parseInt(prompt("Masukan Elemen ke-"+ (i + 1) + ":")));
  }
  return array;
}

//input array

const arrayInput = buatArray();

//menghitung jumlah dan rata-rata
const jum = jumlah(arrayInput);
const avg = rata_rata(arrayInput);

console.log("Array yang dimasukan: ", arrayInput);
console.log("Jumlah dari elemen-elemen dalam array: ", jum);
console.log("Rata-rata dari elemen-elemen dalam array: ", avg);
