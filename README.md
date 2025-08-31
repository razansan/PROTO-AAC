# BICARA AAC - Augmentative and Alternative Communication App

## 🎵 Papan Suara (Sound Board) - Panduan Penggunaan

### Cara Menambahkan Kartu ke Papan Suara

1. **Buka Halaman Utama (Home Screen)**
   - Aplikasi akan menampilkan kartu-kartu yang tersedia
   - **Papan suara hanya tersedia di halaman utama**

2. **Ketuk Kartu untuk Menambahkan ke Papan Suara**
   - Ketuk sekali pada kartu yang ingin ditambahkan
   - Kartu akan otomatis ditambahkan ke papan suara
   - Jika autoplay diaktifkan, suara akan langsung diputar

3. **Akses Papan Suara**
   - Papan suara terletak di bagian bawah halaman utama
   - Menampilkan semua kartu yang telah ditambahkan
   - **Tidak tersedia di halaman pencarian**

### Fitur Papan Suara

#### Kontrol Utama
- **Tombol Play/Stop**: Memutar atau menghentikan semua kartu dalam antrian
- **Tombol Hapus**: Menghapus semua kartu dari antrian
- **Indikator Status**: Menampilkan jumlah kartu dalam antrian

#### Manajemen Kartu
- **Hapus Kartu Individual**: Ketuk kartu untuk menghapus dari antrian
- **Urutan Pemutaran**: Kartu akan diputar sesuai urutan penambahan
- **Auto-play**: Jika diaktifkan, kartu akan langsung diputar saat ditambahkan

#### Pengaturan Audio
- **Bahasa**: Menggunakan Bahasa Indonesia (id-ID)
- **Kecepatan**: Diatur untuk kejelasan maksimal
- **Jeda**: 300ms antara setiap kata untuk kejelasan

### Mode Edit vs Papan Suara

#### Home Screen (Halaman Utama)
- **Tap**: Menambahkan kartu ke papan suara ⭐
- **Long Press**: Membuka mode edit kartu ✏️
- **Papan Suara**: Tersedia di bagian bawah halaman

#### Search Screen (Halaman Pencarian)
- **Tap**: Menambahkan kartu ke papan suara ⭐
- **Long Press**: Membuka mode edit kartu ✏️
- **Papan Suara**: Tidak tersedia (hanya di halaman utama)

### ⚠️ Penting: Edit Hanya Saat Long Press

Di **kedua screen** (Home Screen dan Search Screen), edit kartu **HANYA** dapat dilakukan dengan:
- **Long press** pada kartu → Membuka mode edit
- **Tap biasa** → Menambahkan ke papan suara (BUKAN edit)

Ini memastikan bahwa:
- ✅ User tidak sengaja mengedit kartu saat ingin menambahkan ke papan suara
- ✅ Mode edit tetap mudah diakses dengan long press
- ✅ Pengalaman pengguna yang konsisten dan intuitif
- ✅ Papan suara tersedia di halaman utama untuk akses mudah

### Troubleshooting

#### Kartu Tidak Ditambahkan ke Papan Suara

**Langkah 1: Periksa Console Log**
1. Buka Developer Tools (F12)
2. Lihat console untuk pesan debug
3. Cari pesan "=== CARD PRESS DEBUG ==="
4. Pastikan tidak ada error

**Langkah 2: Test dengan Tombol Debug**
1. Lihat tombol merah "🧪 Test Add to Sound Board"
2. Ketuk tombol tersebut
3. Periksa console untuk pesan "=== TEST BUTTON PRESSED ==="
4. Pastikan tidak ada error

**Langkah 3: Periksa Komponen**
1. Pastikan Anda berada di Home Screen (bukan Search Screen)
2. Ketuk kartu (bukan long press)
3. Periksa apakah SoundBar muncul di bawah
4. Pastikan tidak ada error di console

**Langkah 4: Periksa Provider**
1. Pastikan SoundQueueProvider terdaftar di AppProviders
2. Periksa apakah useSoundQueue tidak error
3. Pastikan semua import benar

#### Suara Tidak Diputar
1. Periksa pengaturan autoplay di Settings
2. Pastikan volume perangkat tidak di-mute
3. Periksa izin audio di pengaturan aplikasi
4. Pastikan expo-speech terinstall dengan benar

#### Papan Suara Kosong
1. Pastikan kartu telah ditambahkan dengan benar
2. Periksa apakah ada error di console
3. Coba restart aplikasi
4. Periksa AsyncStorage untuk data tersimpan

#### Debug Console Messages
Cari pesan-pesan berikut di console:
- ✅ "=== CARD PRESS DEBUG ==="
- ✅ "addToQueue called successfully"
- ✅ "=== ADD TO QUEUE DEBUG ==="
- ✅ "=== REDUCER DEBUG ==="
- ✅ "=== SOUNDBAR DEBUG ==="

Jika ada pesan error (❌), catat error tersebut untuk troubleshooting lebih lanjut.

### Pengaturan Terkait

Di halaman Settings, Anda dapat mengatur:
- **Autoplay Audio**: Otomatis memutar suara saat kartu ditambahkan
- **Haptic Feedback**: Getaran saat berinteraksi dengan kartu
- **Volume**: Pengaturan volume aplikasi

---

## 🎮 Game Indicators - Ukuran yang Dioptimalkan

### Perubahan yang Dilakukan

#### Game1_AnalysisImage.tsx
- ✅ Indikator opsi: `fontSize: 24` → `fontSize: 16`
- ✅ Overlay benar/salah: `fontSize: 60` → `fontSize: 32`

#### Game3_Matching.tsx
- ✅ Checkmark: `fontSize: 18` → `fontSize: 14`

### Hasil
- Indikator emoji sekarang lebih proporsional
- Tidak mengganggu tampilan game
- Tetap jelas dan mudah dibaca

---

## 📱 Fitur Utama Aplikasi

### Komunikasi AAC
- **Kartu Komunikasi**: Gambar dan teks untuk komunikasi
- **Kategori**: Organisasi kartu berdasarkan tema
- **Pencarian**: Temukan kartu dengan cepat
- **Favorit**: Simpan kartu yang sering digunakan

### Permainan Edukatif
1. **Analisis Gambar**: Identifikasi gambar yang ditampilkan
2. **Analisis Suara**: Dengarkan dan pilih jawaban yang benar
3. **Menjodohkan**: Cocokkan gambar dengan label
4. **Menyusun Kata**: Atur kata menjadi kalimat yang benar

### Personalisasi
- **Profil Pengguna**: Avatar dan pengaturan pribadi
- **Mode Orang Tua**: Kontrol akses dan pengaturan
- **Tema**: Pilihan tampilan terang/gelap
- **Ukuran Font**: Penyesuaian untuk kebutuhan pengguna

### Aksesibilitas
- **Voice Feedback**: Umpan balik suara untuk semua interaksi
- **Haptic Feedback**: Getaran untuk konfirmasi
- **Screen Reader**: Dukungan penuh untuk pembaca layar
- **Touch Targets**: Ukuran tombol yang mudah ditekan

## 🛠️ Teknologi

- **React Native**: Framework utama
- **Expo**: Platform pengembangan
- **TypeScript**: Type safety
- **AsyncStorage**: Penyimpanan lokal
- **Expo Speech**: Text-to-Speech
- **Expo Haptics**: Umpan balik haptic

## 🚀 Instalasi dan Penggunaan

### Prerequisites
- Node.js 16+
- Expo CLI
- Android Studio / Xcode (untuk emulator)

### Setup
```bash
npm install
npx expo start
```

### Build
```bash
npx expo build:android
npx expo build:ios
```

## 📄 Lisensi

Proyek ini dikembangkan untuk tujuan edukasi dan terapi AAC.

---

**BICARA AAC** - Membantu komunikasi yang lebih baik untuk semua.
