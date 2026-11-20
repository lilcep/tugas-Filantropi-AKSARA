# AKSARA Peduli Umat — situs simulasi akademik

Situs statis tujuh halaman. Tidak memerlukan proses build atau dependensi eksternal untuk fitur inti. Google Fonts digunakan jika koneksi tersedia; jika tidak, font sistem akan dipakai.

## Menjalankan dan menerbitkan

Buka `index.html` di browser untuk melihat versi lokal. Untuk mendapat satu URL publik, buka [Netlify Drop](https://app.netlify.com/drop), lalu seret folder situs ini ke area unggah. Netlify menerbitkan folder statis dan menampilkan URL `netlify.app`; untuk mengelola dan memperbarui situs, masuk ke akun Netlify terlebih dahulu. Detail langkah publikasi manual ada di [dokumentasi Netlify](https://docs.netlify.com/start/quickstarts/netlify-drop-quickstart/).

## Panduan mengganti konten

- **Nama lembaga:** ganti tulisan AKSARA/PEDULI UMAT pada header, footer, dan judul halaman HTML.
- **Foto pengurus:** di `app.js`, cari `GANTI FOTO PENGURUS`. Letakkan foto milik Anda di folder `assets/`, lalu ganti avatar placeholder dengan `<img src="assets/nama-foto.jpg" alt="Nama pengurus">`. Tambahkan gaya gambar pada `styles.css` bila diperlukan.
- **Video Sahur Berbagi:** di fungsi `gallery()` pada `app.js`, ganti panel video dan komentar `GANTI DENGAN LINK VIDEO SAHUR BERBAGI MILIK SAYA` dengan embed YouTube atau `<video controls src="assets/video-anda.mp4">`. Letakkan video lokal pada folder `assets/`.
- **Foto dokumentasi:** di fungsi `gallery()` pada `app.js`, ganti blok `.gallery-art` dengan gambar Anda. Perbarui tanggal, lokasi, keterangan, dan jumlah penerima hanya dari catatan yang benar.
- **Laporan keuangan:** ubah objek `DATA` di bagian atas `app.js`. Pastikan jumlah transaksi sama dengan `totalIn`, jumlah penyaluran cocok dengan `totalOut`, biaya operasional tercatat satu kali, dan saldo sama dengan dana masuk dikurangi seluruh pengeluaran.
- **Program:** ubah daftar `programs` di objek `DATA`; kartu dan progres akan diperbarui dari data itu.
- **WhatsApp dan kontak:** ganti nomor contoh `6281200000000`, kontak email `.example`, dan nomor yang terlihat di footer HTML. Tautan contoh tidak menerima pesan ke lembaga nyata.

## Catatan akademik

Semua angka, transaksi, status, penerima, testimoni, dan visual yang belum Anda ganti adalah simulasi/placeholder. Donasi hanya menghasilkan nomor transaksi simulasi; tidak ada pembayaran, rekening, QRIS, kuitansi, izin, audit, atau bukti kegiatan nyata.
