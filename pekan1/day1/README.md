# 1. Definisi Mobile App Development

Mobile App Development adalah proses merancang, membangun, dan memelihara aplikasi yang dijalankan pada perangkat mobile seperti smartphone dan tablet.
Fokus utamanya meliputi:

User Experience (UX) yang optimal di layar kecil.

Performa dan efisiensi sumber daya seperti baterai, RAM, dan CPU.

Integrasi dengan hardware perangkat, misalnya kamera, GPS, sensor, dan penyimpanan lokal.

 Output teknis: File instalasi seperti .apk (Android) atau .ipa (iOS) yang dapat dijalankan langsung di perangkat.

# 2. Perbedaan Web Development vs Mobile App Development
Aspek	Web Development	Mobile App Development
Target Eksekusi	Browser (Chrome, Safari, dll.)	Sistem operasi mobile (Android/iOS)
Distribusi	Melalui URL atau hosting web	Melalui App Store / Play Store
Akses Hardware	Terbatas (melalui API browser)	Lebih luas, langsung ke sensor dan hardware
Implikasi Praktis	Web tidak bisa berjalan offline penuh dan terbatas pada API browser	Mobile app bisa bekerja offline dan memanfaatkan fitur native seperti kamera & GPS

 Contoh: Aplikasi peta di web hanya menampilkan lokasi, sementara aplikasi mobile dapat memanfaatkan GPS untuk navigasi real-time dan penyimpanan cache offline.

# 3. Tahapan Discovery & Requirement

Tahapan Discovery & Requirement bertujuan memahami:

Masalah yang ingin diselesaikan.

Kebutuhan pengguna dan bisnis.

Target platform (Android/iOS).

Kebutuhan offline/online.

 Dampak terhadap keputusan:

Jika target pengguna dominan Android → fokus pengembangan ke Android lebih dahulu.

Jika aplikasi harus tetap berfungsi tanpa internet → perlu perencanaan local storage dan data synchronization.

# 4. Perancangan Arsitektur & Teknologi (React Native)

Tahapan ini menentukan struktur logika, modul, dan integrasi teknologi yang akan digunakan.
Dalam konteks React Native, perancangan melibatkan:

Pemilihan State Management (misalnya Redux, Zustand, atau Context API).

Perancangan Navigasi (React Navigation atau Expo Router).

 Mengapa krusial?

State management yang baik mencegah bug data tidak sinkron.

Navigasi menentukan alur antar-halaman dan pengalaman pengguna secara keseluruhan.

# 5. Native vs Hybrid Development
Aspek	Native Development	Hybrid Development
Deskripsi	Aplikasi dikembangkan khusus untuk platform tertentu (Android/iOS).	Aplikasi dibuat dengan web technologies dan dibungkus agar bisa berjalan di mobile.
Keuntungan	Performa tinggi, akses penuh ke hardware.	Waktu pengembangan cepat, satu basis kode untuk dua platform.
Kekurangan	Biaya dan waktu lebih besar karena dua versi.	Kinerja dan UI tidak sehalus native.
Contoh Framework	Android Studio, Swift, Kotlin	Ionic, Cordova, Capacitor
# 6. Cross-Platform Native Development

Cross-Platform Native Development adalah pendekatan membuat aplikasi menggunakan satu basis kode yang dapat menghasilkan aplikasi native di berbagai platform.

🔹 Keuntungan:

Efisiensi waktu & biaya.

Kemudahan maintenance.

🔸 Kekurangan:

Tidak selalu mampu memanfaatkan semua fitur spesifik platform.

Potensi bug lintas platform.

Contoh framework: React Native, Flutter, Xamarin.

# 7. Posisi React Native dalam Ekosistem

React Native berada di kategori Cross-Platform Native Development Framework.
Dibangun di atas ReactJS, tetapi ditujukan untuk mobile.

Aspek	ReactJS	React Native
Target	Browser (Web App)	Mobile App (Android & iOS)
Sintaks	Menggunakan HTML & CSS	Menggunakan komponen seperti <View>, <Text>
Styling	CSS tradisional	StyleSheet berbasis JavaScript (mirip CSS-in-JS)
# 8. Tantangan Mobile vs Web

Tantangan utama pengembangan aplikasi mobile:

Adaptasi terhadap berbagai ukuran layar dan perangkat.

Manajemen performa dan konsumsi baterai.

Proses build dan distribusi lebih kompleks.

 Peran React Native:

Menyediakan bridge agar JavaScript dapat berkomunikasi langsung dengan komponen native.

Memungkinkan developer menggunakan satu kode untuk dua platform tanpa kehilangan performa signifikan.

# 9. Tahapan Pengujian & Release (React Native)

Testing:

Unit testing (Jest, React Testing Library)

Integration testing

Debugging dengan Metro Bundler / Flipper

Build:

Menghasilkan file .apk (Android) dan .ipa (iOS).

Signing:

Penandatanganan digital untuk keamanan dan identitas developer.

Release:

Distribusi ke Google Play Store / Apple App Store.

# 10. Mengapa React Native Banyak Dipilih Saat Ini

React Native populer karena:

 Kode sekali, jalan di dua platform.

 Performa mendekati native.

 Ekosistem besar dan dukungan komunitas kuat.

 Integrasi cepat dengan backend (API, Firebase, dll).

 Dukungan tooling modern seperti Expo dan Metro.