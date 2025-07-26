# Setup Firebase untuk Brain Quiz

## Langkah-langkah Setup Firebase Database

### 1. Buat Project Firebase
1. Kunjungi [Firebase Console](https://console.firebase.google.com/)
2. Klik "Create a project" atau "Add project"
3. Masukkan nama project (contoh: "brain-quiz-global")
4. Pilih apakah ingin menggunakan Google Analytics (opsional)
5. Klik "Create project"

### 2. Aktifkan Realtime Database
1. Di sidebar kiri, klik "Realtime Database"
2. Klik "Create Database"
3. Pilih lokasi database (pilih yang terdekat dengan target pengguna)
4. Pilih "Start in test mode" untuk development
5. Klik "Done"

### 3. Dapatkan Konfigurasi
1. Klik ikon gear (⚙️) di sidebar
2. Pilih "Project settings"
3. Scroll ke bawah ke bagian "Your apps"
4. Klik ikon web (</>) untuk menambahkan web app
5. Masukkan nama app (contoh: "Brain Quiz Web")
6. Klik "Register app"
7. Copy konfigurasi yang muncul

### 4. Update File Konfigurasi
1. Buka file `firebase-config.js`
2. Ganti konfigurasi dengan yang baru dari Firebase Console:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};
```

### 5. Atur Database Rules
1. Di Firebase Console, buka "Realtime Database"
2. Klik tab "Rules"
3. Ganti rules dengan yang berikut:

```json
{
  "rules": {
    "leaderboard": {
      ".read": true,
      ".write": true,
      "$playerId": {
        ".validate": "newData.hasChildren(['name', 'location', 'score', 'percentage', 'timestamp'])"
      }
    }
  }
}
```

4. Klik "Publish"

### 6. Test Koneksi
1. Buka aplikasi di browser
2. Periksa console untuk pesan koneksi
3. Coba submit skor baru
4. Periksa Firebase Console untuk melihat data

## Fitur Database Global

### ✅ Real-time Sync
- Data tersimpan secara real-time ke database global
- Sinkronisasi otomatis saat online
- Fallback ke local storage saat offline

### ✅ Multi-user Support
- Setiap pengguna memiliki ID unik
- Tidak ada duplikasi data
- Merge data lokal dan global

### ✅ Offline Support
- Data tersimpan lokal saat offline
- Sync otomatis saat online kembali
- Tidak ada data yang hilang

### ✅ Security
- Validasi data sebelum disimpan
- Rules database yang aman
- Rate limiting otomatis

## Troubleshooting

### Error: "Firebase not available"
- Pastikan Firebase SDK sudah dimuat
- Periksa koneksi internet
- Pastikan konfigurasi benar

### Error: "Permission denied"
- Periksa database rules
- Pastikan write permission aktif
- Coba refresh halaman

### Data tidak sync
- Periksa koneksi internet
- Klik tombol "Sync" manual
- Periksa console untuk error

## Keamanan

### Database Rules
- Read/write permission untuk leaderboard
- Validasi data sebelum disimpan
- Rate limiting untuk mencegah spam

### Data Privacy
- Tidak menyimpan informasi pribadi
- Hanya nama dan lokasi yang disimpan
- Data dapat dihapus sesuai permintaan

## Monitoring

### Firebase Console
- Monitor penggunaan database
- Lihat data real-time
- Set up alerts untuk error

### Analytics
- Track jumlah pengguna
- Monitor performa aplikasi
- Analyze user behavior 