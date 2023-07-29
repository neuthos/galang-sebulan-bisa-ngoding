// ALGORITMA:
// 1. Memulai Program
// 2. Meminta user untuk memasukkan angka
// 3. Jika angka yang dimasukkan itu lebih besar dari 7 maka tampilkan "Hari tidak ditemukan"
// 4. Jika angka = 1 Maka tampilkan "Hari: Senin"
// 5. Jika angka = 2 Maka tampilkan "Hari: Selasa"
// ...
// 12. Jika angka = 7 Maka tampilkan "Hari: Minggu"

// PSEUDOCODE:
// START
//  INPUT angka
//  IF angka > 7
//    DISPLAY "Hari tidak ditemukan"
//  ELSE
//    IF angka === 1 
//      DISPLAY "Hari: Senin"
//    ELSE IF angka === 2
//      DISPLAY "Hari: Selasa"
//    ....
//    ELSE IF angka === 7
//      DISPLAY "Hari: Minggu"
//  ENDIF  
// END

// IMPLEMENTASI:
var angka = 100

if(angka > 7) {
  console.log('Hari tidak ditemukan')
} else {
  if(angka === 1) {
    console.log('Hari: Senin')
  } else if(angka === 2) {
    console.log('Hari: Selasa')
  } else if(angka === 3) {
    console.log('Hari: Rabu')
  } else if(angka === 4) {
    console.log('Hari: Kamis')
  } else if(angka === 5) {
    console.log('Hari: Jumat')
  } else if(angka === 6) {
    console.log('Hari: Sabtu')
  } else if(angka === 7) {
    console.log('Hari: Minggu')
  }
}
// Tulis codemu dibawah (Jalankan dengan memakai perintah "node NAMAFILEMU.js")
