const texts = ["Web Developer", "Engineering Student", "Professional Sleeper"]; // Array teks yang akan ditampilkan
let count = 0; // Variabel untuk menghitung indeks teks yang sedang ditampilkan
let index = 0; // Variabel untuk menghitung huruf yang sedang ditampilkan
let currentText = ''; // Variabel untuk menyimpan teks yang sedang ditampilkan
let letter = ''; // Variabel untuk menyimpan huruf yang sedang ditampilkan
let isDeleting = false; // Variabel untuk menandakan apakah proses penghapusan teks sedang berlangsung

function type() {
  // Mendapatkan teks yang sedang ditampilkan
  currentText = texts[count];
  // Mengecek apakah proses mengetik atau menghapus
  if (!isDeleting) {
    // Menambahkan huruf satu per satu
    letter = currentText.slice(0, ++index);
    // Menampilkan teks di elemen dengan class 'profecy'
    document.querySelector('.profecy').textContent = letter;
    // Jika semua huruf telah ditampilkan, mulai proses penghapusan
    if (letter.length === currentText.length) {
      isDeleting = true;
      setTimeout(type, 2000); // Waktu jeda sebelum penghapusan dimulai (dalam milidetik)
    } else {
      setTimeout(type, 100); // Waktu jeda sebelum menampilkan huruf berikutnya (dalam milidetik)
    }
  } else {
    // Menghapus huruf satu per satu
    letter = currentText.slice(0, --index);
    document.querySelector('.profecy').textContent = letter;
    // Jika semua huruf telah dihapus, pindah ke teks berikutnya
    if (letter.length === 0) {
      isDeleting = false;
      count++;
      // Jika semua teks telah ditampilkan, kembali ke teks pertama
      if (count === texts.length) {
        count = 0;
      }
      setTimeout(type, 500); // Waktu jeda sebelum menampilkan teks berikutnya (dalam milidetik)
    } else {
      setTimeout(type, 100); // Waktu jeda sebelum menghapus huruf berikutnya (dalam milidetik)
    }
  }
}
// Memanggil fungsi type untuk memulai efek mengetik
type();


document.addEventListener('DOMContentLoaded', function() {
  const moreButton = document.getElementById('moreButton');
  const galleryContainer = document.querySelector('.gallery-container');

  moreButton.addEventListener('click', function(event) {
    event.preventDefault();
    galleryContainer.style.overflowY = 'scroll'; // Aktifkan scroll pada container galeri
    moreButton.style.display = 'none'; // Sembunyikan tombol "More" setelah ditekan
  });
});


