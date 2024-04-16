console.log ("Bilangan Prima dari 1 sampai 100")


for (let n = 1; n <= 100; n++) {
  let bil_prima = true;

  // Bilangan prima harus lebih besar dari 1
  if (n > 1) {
    // Loop untuk memeriksa apakah num bisa dibagi oleh bilangan lain selain 1 dan num itu sendiri
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        bil_prima = false;
        break; 
      }
    }
  } else {
    bil_prima = false; // Bilangan kurang dari atau sama dengan 1 bukan bilangan prima
  }

  // Cetak nomor dan pesan apakah bilangan prima
  if (bil_prima) {
    console.log(n + " adalah bilangan prima");
  } else {
    console.log(n);
  }
}
