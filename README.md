# Brain Quiz - Pengetahuan Alam

Aplikasi web quiz interaktif tentang pengetahuan alam dengan 100 soal pilihan ganda yang diacak menjadi 50 soal per sesi.

## Fitur Utama

### 🎯 Quiz Interaktif
- 50 soal acak dari 100 soal pengetahuan alam
- Sistem pilihan ganda dengan 4 opsi jawaban
- Progress bar real-time
- Feedback visual untuk jawaban benar/salah

### 🏆 Sistem Skor Global
- Penyimpanan skor dengan nama dan lokasi pemain
- **Deteksi lokasi otomatis** menggunakan GPS browser
- **Papan skor global (leaderboard)** dengan fitur lengkap:
  - Top 3 winners dengan podium visual
  - Statistik real-time (total pemain, rata-rata skor, skor sempurna)
  - Filter berdasarkan lokasi dan tanggal
  - Pagination untuk navigasi mudah
  - Refresh data real-time
- Persentase keberhasilan
- Pesan motivasi berdasarkan performa

### 🎨 Interface Modern
- Desain responsif untuk desktop dan mobile
- Animasi smooth dan transisi yang menarik
- Warna-warna yang eye-catching
- Font modern (Poppins)

### 💾 Penyimpanan Data
- Menggunakan localStorage untuk menyimpan skor
- Data tersimpan di browser pengguna
- Leaderboard dengan 100 skor teratas

### 🔒 Proteksi Konten
- **Right click dinonaktifkan** untuk mencegah akses context menu
- **Keyboard shortcuts diblokir** (F12, Ctrl+U, Ctrl+Shift+I, dll.)
- **Text selection dinonaktifkan** untuk mencegah copy-paste
- **Developer tools detection** dengan monitoring berkala
- **Console logging dinonaktifkan** untuk keamanan
- **Debugging protection** dengan debugger statements

## Cara Menggunakan

1. **Buka aplikasi** di browser web
2. **Masukkan nama** Anda
3. **Masukkan lokasi** atau klik tombol 📍 untuk deteksi otomatis
4. **Klik "Mulai Quiz"** untuk memulai
5. **Jawab 50 pertanyaan** yang muncul secara acak
6. **Lihat hasil** dan bandingkan dengan pemain lain
7. **Main lagi** atau lihat papan skor global

## Struktur File

```
Brain Quiz/
├── index.html          # File HTML utama
├── style.css           # File CSS untuk styling
├── script.js           # File JavaScript dengan logika aplikasi
└── README.md           # Dokumentasi aplikasi
```

## Teknologi yang Digunakan

- **HTML5** - Struktur halaman web
- **CSS3** - Styling dan animasi
- **JavaScript (ES6+)** - Logika aplikasi dan interaktivitas
- **Font Awesome** - Ikon-ikon
- **Google Fonts** - Font Poppins

## Fitur Teknis

### Sistem Acak Soal
- Menggunakan algoritma Fisher-Yates shuffle
- 50 soal dipilih secara acak dari 100 soal tersedia
- Setiap sesi quiz memiliki kombinasi soal yang berbeda

### Sistem Skor
- 1 poin per jawaban benar
- Skor maksimal: 50 poin
- Persentase keberhasilan otomatis dihitung

### Deteksi Lokasi
- Menggunakan Geolocation API browser
- Reverse geocoding dengan Nominatim API
- Mendukung bahasa Indonesia
- Fallback untuk berbagai jenis lokasi (kota, kabupaten, provinsi)

### Keamanan & Proteksi
- **Multi-layer protection** untuk mencegah akses source code
- **Real-time monitoring** untuk developer tools
- **User-friendly messages** saat akses diblokir
- **Input field exceptions** untuk user experience yang baik

### Penyimpanan Data
- Menggunakan localStorage browser
- Data tersimpan dalam format JSON
- Leaderboard diurutkan berdasarkan skor tertinggi

## Kategori Soal

Quiz mencakup berbagai topik pengetahuan alam:

- 🌍 Geografi (gunung, sungai, laut, danau)
- 🐾 Hewan dan keanekaragaman hayati
- 🌱 Tumbuhan dan ekosistem
- 🌪️ Fenomena alam
- 🌍 Lapisan bumi dan atmosfer
- 🌋 Gunung berapi dan bencana alam

## Responsivitas

Aplikasi dirancang responsif untuk berbagai ukuran layar:

- **Desktop** (1200px+): Layout penuh dengan semua fitur
- **Tablet** (768px - 1199px): Layout menyesuaikan dengan layar medium
- **Mobile** (< 768px): Layout vertikal yang optimal untuk layar kecil

## Browser Support

Aplikasi kompatibel dengan browser modern:
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Cara Menjalankan

1. Download semua file ke folder yang sama
2. Buka file `index.html` di browser web
3. Aplikasi siap digunakan!

## Kontribusi

Untuk menambahkan soal baru atau memperbaiki bug:
1. Edit array `quizData` di file `script.js`
2. Tambahkan objek soal dengan format yang sama
3. Test aplikasi untuk memastikan berfungsi dengan baik

## Lisensi

Aplikasi ini dibuat untuk tujuan edukasi dan dapat digunakan secara bebas.

---

**Dibuat dengan ❤️ untuk pembelajaran pengetahuan alam** 
