/**
 * ALGORITMA
 * 1. Memulai Program
 * 2. Melakukan perulangan sebanyak 10 kali (Memandakan Budi itu memasukkan buku ke dalam raknya)
 * 3. Jika buku yang disimpan itu belum 10, maka Tampilkan Banyak buku budi sekarang
 * 4. Jika buku yang disimpan sudah 10, maka tampilkan "Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru."
 */

/**
 * PSEUDOCODE
 * START
 *  FOR bukuBudiSaatIni = 1 TO 10
 *    IF bukuBudiSaatIni < 10 
 *      DISPLAY "Budi memiliki " + bukuBudiSaatIni + " buku di rak buku"
 *    ELSE 
 *      DISPLAY "Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru"
 *    ENDIF
 *  ENDFOR
 * END
 */


// i++ -> i = i + 1
for(let bukuBudiSaatIni = 1; bukuBudiSaatIni <= 10; bukuBudiSaatIni++) {
  if(bukuBudiSaatIni <= 10) {
    console.log("Budi memiliki " + bukuBudiSaatIni + " buku di rak buku")
  }
}

console.log("Rak buku sudah penuh, Budi tidak dapat menyimpan buku baru")