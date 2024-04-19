//data nilai
const nilaiSiswa = [
  36, 66, 82, 53, 76, 17, 50, 38, 93, 29, 78, 57, 22, 53, 78, 38, 20, 46, 80,
  79,
];
SVGFEPointLightElement
function tentukanIndeks(nilai) {
    let indexArray=[];
  if (nilai > 80) {
    indexArray.push("A");
  } else if (nilai >= 70 && nilai <= 80) {
    indexArray.push("B");
  } else if (nilai >= 55 && nilai < 70) {
    indexArray.push("C");
  } else if (nilai >= 45 && nilai < 55) {
    indexArray.push ("D");
  } else {
    indexArray.push ("E");
  }return indexArray;
}

function Indeks(nilaiArray) {
  console.log(
    "======================================================================================="
  );
  console.log("No\t\t\tNilai Ujian\t\t\tIndex Nilai");
  console.log(
    "======================================================================================="
  );
  for (let i = 0; i < nilaiArray.length; i++) {
    const nilai = nilaiArray[i];
    const idxNilai = tentukanIndeks(nilai);
    console.log(i + 1 + "\t\t\t\t" + nilai + "\t\t\t\t\t" + idxNilai);
  }
  console.log(
    "======================================================================================"
  );
}
Indeks(nilaiSiswa);
