# Pengenalan React Native & Setup Environment (v0.80)

## 1. Konsep Dasar React Native

**React Native** adalah framework *cross-platform* yang memungkinkan pengembang membangun aplikasi **mobile native** untuk **Android dan iOS** menggunakan bahasa **JavaScript** dan **React**. Dengan React Native, logika bisnis dan UI didefinisikan menggunakan *component-based architecture* yang mirip seperti React untuk web, namun hasil akhirnya **dijalankan secara native**, bukan di browser.

### 🔹 Perbedaan Utama React Native vs React (Web)
| Aspek | React (Web) | React Native |
|-------|--------------|--------------|
| Target Platform | Browser (DOM) | Android & iOS (Native Components) |
| Rendering | Menggunakan HTML & CSS | Menggunakan komponen native seperti `<View>`, `<Text>`, `<Image>` |
| Styling | Menggunakan CSS | Menggunakan *StyleSheet API* berbasis JavaScript |
| Runtime | Dijalankan di browser | Dijalankan di *JavaScript bridge* yang berkomunikasi dengan native code |

---

## 2. Peran *New Architecture* di React Native v0.80

React Native v0.80 memperkenalkan **New Architecture** yang mencakup tiga komponen utama:

1. **Fabric Renderer** → sistem rendering baru untuk meningkatkan efisiensi UI.  
2. **TurboModules** → memungkinkan modul native diakses lebih cepat tanpa melalui *bridge* tradisional.  
3. **Codegen** → menghasilkan kode native otomatis untuk menjembatani komunikasi antara JavaScript dan native.

**Dampak terhadap performa:**
- Mengurangi *bridge latency* antara JavaScript dan native layer.  
- Meningkatkan efisiensi memori dan *startup time*.  
- Memungkinkan integrasi yang lebih baik dengan arsitektur *Concurrent React* (React 18+).  

---

## 3. Perbandingan React Native CLI vs Expo

| Aspek | React Native CLI | Expo |
|-------|------------------|------|
| Arsitektur | Akses penuh ke native code (android/ dan ios/) | Lapisan *wrapper* di atas React Native |
| Proses Build | Dikelola manual via Android Studio / Xcode | Build otomatis dengan Expo CLI |
| Kelebihan | Dapat menulis dan mengedit kode native (Java/Kotlin/Swift) | Setup cepat dan mudah untuk pemula |
| Kekurangan | Setup lebih kompleks | Tidak semua modul native didukung tanpa *eject* |

### Skenario Pemilihan
- **Gunakan React Native CLI** untuk proyek **enterprise atau aplikasi kompleks** yang memerlukan akses langsung ke modul native (misalnya Bluetooth, file system tingkat rendah).  
- **Gunakan Expo** untuk **prototipe cepat atau MVP** yang butuh *rapid development* tanpa konfigurasi berat.

---

## 4. Komponen SDK Android yang Dibutuhkan

Dalam setup environment untuk Android, tiga komponen SDK berikut wajib diinstal:

| Komponen | Fungsi | Dampak jika tidak ada |
|-----------|--------|-----------------------|
| **SDK Platforms (android-35)** | Menyediakan API Android versi target agar aplikasi dapat dikompilasi sesuai level sistem operasi | Build gagal karena tidak menemukan target SDK |
| **Build Tools (35.0.0)** | Berisi utilitas seperti `aapt`, `dx`, dan `zipalign` untuk proses kompilasi dan *packaging* APK | Error “Failed to find Build Tools version 35.0.0” |
| **Platform Tools** | Berisi `adb` (Android Debug Bridge) untuk menjalankan, menguji, dan debug aplikasi di emulator/device | VS Code tidak dapat mendeteksi perangkat/emulator Android |

**Contoh masalah umum:**
Jika *Build Tools* hilang, maka saat menjalankan perintah `npx react-native run-android`, build akan gagal dengan pesan error “Could not find aapt2 or dx”.

---

## 5. Prasyarat Setup React Native CLI v0.80

| Komponen | Fungsi | Alasan Diperlukan |
|-----------|--------|-------------------|
| **Node.js (LTS)** | Menjalankan *JavaScript runtime* untuk React Native CLI | Menjalankan kode JS sebelum dikompilasi ke native |
| **Watchman** | Tool dari Meta untuk memantau perubahan file | Mempercepat *hot reload* dan *live reload* |
| **Yarn (atau npm)** | Package manager untuk dependensi proyek | Mengelola library JS & native module |
| **JDK (Java Development Kit)** | Kompilasi kode native Android | Menjalankan Gradle & build sistem Android |

 Kombinasi alat-alat ini menjembatani *JavaScript runtime* dengan lingkungan *native* (Android/iOS), memastikan sinkronisasi kode dan dependensi berjalan mulus.

---

## 6. Struktur Folder Utama Proyek React Native CLI

Setelah menjalankan `npx react-native init`, struktur dasarnya adalah sebagai berikut:

