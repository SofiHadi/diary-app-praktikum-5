# Diary App - Tugas Praktikum

**Nama:** Sofi Hadi Permana  
**NIM:** 2440511004  
**Prodi:** Teknik Informatika  

## Cara Menjalankan Project
1. Pastikan Node.js sudah terinstal di komputer.
2. Buka terminal pada folder project ini.
3. Jalankan perintah `npm install` untuk mengunduh semua *dependencies*.
4. Jalankan perintah `npx expo start` untuk memulai server lokal.
5. Tekan `a` untuk membuka di Emulator Android, `i` untuk iOS Simulator, atau *scan* QR code menggunakan aplikasi Expo Go di *smartphone*.

## Struktur Route Aplikasi
Berikut adalah struktur *routing* menggunakan Expo Router pada aplikasi ini:
```text
app/
 ├── _layout.tsx         (Root Layout)
 ├── about.tsx           (Stack Screen / Extra Route)
 ├── (tabs)/
 │    ├── _layout.tsx    (Tabs Layout)
 │    ├── index.tsx      (Home Screen)
 │    ├── favorites.tsx  (Favorites Screen)
 │    ├── create.tsx     (Tambah Entri Screen)
 │    └── settings.tsx   (Pengaturan Screen)
 └── detail/
      └── [id].tsx       (Dynamic Route Detail Entri)
