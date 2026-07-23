import { ServiceItem } from "../types";

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "haccp-sppg",
    title: "Pendampingan HACCP SPPG MBG",
    subtitle: "Khusus Satuan Pelayanan Program Gizi Makanan Bergizi Gratis",
    shortDesc: "Program pendampingan intensif bergaransi lulus sertifikasi HACCP oleh Lembaga Sertifikasi terakreditasi KAN, mutlak memenuhi Petunjuk Teknis (Juknis) BGN.",
    description: "Layanan utama yang dirancang khusus untuk operator Satuan Pelayanan Program Gizi Makanan Bergizi Gratis (SPPG MBG). Kami membimbing Anda menyusun dokumen, melatih tim, menata layout dapur, hingga lulus sertifikasi HACCP dari Lembaga Sertifikasi (LS) di bawah naungan KAN (Komite Akreditasi Nasional). Pendampingan kami menjamin 100% pemenuhan standar higienitas, sanitasi, dan keamanan pangan yang dipersyaratkan oleh Juknis Badan Gizi Nasional (BGN).",
    iconName: "ShieldCheck",
    keyBenefits: [
      "Jaminan Lulus Sertifikasi HACCP dari Lembaga Sertifikasi KAN",
      "Kepatuhan 100% terhadap Juknis Badan Gizi Nasional (BGN)",
      "Penyusunan 12 Langkah & 7 Prinsip HACCP khusus menu gizi massal",
      "Pencegahan kontaminasi silang dengan desain alur proses dapur higienis",
      "Pendampingan audit langsung di lapangan oleh tim konsultan senior",
      "Menghindari sanksi operasional dan menjaga keberlanjutan kontrak SPPG"
    ],
    processSteps: [
      "Gap Analysis awal kelayakan dapur SPPG MBG berdasarkan Juknis BGN",
      "Pembentukan Tim Keamanan Pangan & Pelatihan Dasar HACCP",
      "Penyusunan Deskripsi Produk, Analisis Bahaya Gizi & Diagram Alir",
      "Penetapan Titik Kendali Kritis (CCP) proses memasak massal",
      "Penyusunan Prosedur Operasional Standar (SOP) & Program Prasyarat (PRP)",
      "Uji coba penerapan sistem, verifikasi, dan audit internal mandiri",
      "Pendampingan pendaftaran dan audit sertifikasi oleh Lembaga Sertifikasi KAN"
    ],
    targetIndustries: [
      "Satuan Pelayanan Program Gizi (SPPG) Mandiri",
      "Dapur Sentral Mitra Badan Gizi Nasional (BGN)",
      "Catering / Jasa Boga penyedia Makanan Bergizi Gratis",
      "Koperasi dan UMKM pengolah bahan pangan lokal MBG",
      "Sekolah dan Yayasan penyelenggara dapur mandiri MBG"
    ]
  },
  {
    id: "juknis-bgn-audit",
    title: "Audit Kepatuhan & Simulasi Juknis BGN",
    subtitle: "Pemeriksaan Kesiapan Operasional & Kelayakan Higiene",
    shortDesc: "Evaluasi menyeluruh layout dapur, higiene sanitasi, dan sistem logistik SPPG Anda sebelum diaudit oleh BGN atau Dinkes.",
    description: "Juknis BGN mensyaratkan standar fisik dapur yang ketat demi menghindari keracunan massal. Melalui layanan audit kepatuhan ini, kami melakukan pre-audit menyeluruh layaknya petugas BGN. Kami memeriksa tata letak (zoning bersih/kotor), kualitas air, fasilitas sanitasi karyawan, pest control, hingga pencatatan suhu penyimpanan bahan segar.",
    iconName: "FileCheck",
    keyBenefits: [
      "Mengetahui gap infrastruktur sebelum mengeluarkan biaya renovasi besar",
      "Rekomendasi perbaikan layout dapur yang efektif menghemat ruang dan biaya",
      "Simulasi audit kelayakan higiene sanitasi jasa boga (SLHS)",
      "Pelatihan kepatuhan administrasi logistik bahan baku s.d. distribusi",
      "Laporan komprehensif rekomendasi koreksi (Corrective Action Plan)"
    ],
    processSteps: [
      "Kunjungan fisik (on-site) ke lokasi dapur SPPG MBG",
      "Audit detail terhadap 4 aspek utama: Bangunan, Peralatan, Personel, Bahan Baku",
      "Pengujian alur kerja untuk mendeteksi potensi kontaminasi silang",
      "Penyusunan matriks temuan dan tingkat risiko bahaya (Minor, Major, Critical)",
      "Penyusunan rancangan tata letak (layout) optimal sesuai standar Juknis BGN",
      "Pemberian sertifikat kesiapan (Readiness Statement) dari Progresivo"
    ],
    targetIndustries: [
      "Pengelola Dapur Satuan Pelayanan Baru",
      "Katering Jasa Boga peserta seleksi penyedia MBG",
      "Fasilitas pengolahan pangan yang sedang renovasi",
      "Gudang penyimpanan bahan pangan basah/kering MBG"
    ]
  },
  {
    id: "sppg-training",
    title: "Pelatihan Kompetensi Personel SPPG",
    subtitle: "Training Higiene Sanitasi, HACCP & Pengendalian Alergen",
    shortDesc: "Pelatihan resmi bersertifikat untuk juru masak, asisten, dan pengawas dapur SPPG agar memahami titik kritis keamanan pangan.",
    description: "Keberhasilan program Makanan Bergizi Gratis bergantung sepenuhnya pada kompetensi penjamah pangan di dapur. Kami menghadirkan program pelatihan praktis berbahasa Indonesia yang mudah dipahami oleh staf operasional, mencakup cara mencuci tangan yang benar, sanitasi peralatan masak skala besar, pengendalian suhu makanan matang, dan pemisahan bahan alergen.",
    iconName: "Award",
    keyBenefits: [
      "Meningkatkan disiplin kebersihan personel dapur secara signifikan",
      "Memenuhi syarat kompetensi penjamah makanan (Food Handler) dalam Juknis",
      "Sertifikat pelatihan resmi dari Progresivo Consulting untuk kelengkapan dokumen KAN",
      "Materi pelatihan interaktif yang disesuaikan dengan menu harian program MBG",
      "Mengurangi risiko kontaminasi akibat kelalaian manusia (human error)"
    ],
    processSteps: [
      "Asesmen awal tingkat pemahaman higiene staf dapur",
      "Penyusunan materi training spesifik sesuai variasi menu SPPG MBG",
      "Pelaksanaan kelas teori dan praktik langsung di dapur (Hygienic Cooking)",
      "Evaluasi pemahaman peserta melalui post-test kompetensi",
      "Penerbitan Sertifikat Pelatihan Personel Keamanan Pangan SPPG",
      "Penyusunan visual poster pengingat (SOP Ringkas) di area dapur"
    ],
    targetIndustries: [
      "Juru Masak (Chef) & Kru Dapur SPPG MBG",
      "Supervisor Keamanan Pangan SPPG",
      "Tenaga Penyaji & Petugas Distribusi Makanan",
      "Pengelola Gudang Bahan Pangan",
      "Karyawan kebersihan dan pencucian wadah"
    ]
  },
  {
    id: "iso22000-sppg",
    title: "ISO 22000:2018 untuk Rantai Pasok MBG",
    subtitle: "Sistem Manajemen Keamanan Pangan Kelas Dunia",
    shortDesc: "Penerapan standar tertinggi keamanan pangan global untuk produsen, integrator, dan distributor skala besar mitra BGN.",
    description: "Bagi distributor logistik pusat, pabrik pengolahan bahan baku, atau dapur sentral wilayah (hub) yang melayani puluhan ribu porsi Program Makanan Bergizi Gratis setiap hari, ISO 22000:2018 adalah keharusan. Kami mendampingi integrasi sistem manajemen mutu dengan HACCP untuk menjamin kontrol rantai pasok pangan yang ketat dari hulu ke hilir.",
    iconName: "TrendingUp",
    keyBenefits: [
      "Pengendalian risiko rantai pasok pangan berskala masif",
      "Kualifikasi utama untuk memenangkan kemitraan eksklusif jangka panjang dengan BGN",
      "Harmonisasi sistem manajemen mutu dengan pengawasan CCP secara digital",
      "Ketertelusuran (traceability) bahan baku cepat dalam hitungan menit",
      "Membangun kredibilitas tinggi di hadapan regulator dan auditor nasional"
    ],
    processSteps: [
      "Kajian komprehensif kesiapan sistem manajemen rantai pasok",
      "Penyusunan SOP terintegrasi, Program Prasyarat Operasional (OPRP), dan PRP",
      "Penerapan sistem ketertelusuran digital bahan baku gizi",
      "Pelatihan Auditor Internal ISO 22000 untuk tim SPPG",
      "Simulasi penanganan krisis pangan (recalled product simulation)",
      "Pendampingan audit tahap 1 & 2 dari Badan Sertifikasi terakreditasi KAN"
    ],
    targetIndustries: [
      "Dapur Sentral Regional & Hub Logistik MBG",
      "Produsen Bahan Baku Pangan (Daging, Telur, Sayur, Beras) Skala Besar",
      "Industri Kemasan Food-Grade ramah lingkungan mitra SPPG",
      "Penyedia Jasa Distribusi Logistik Rantai Dingin (Cold Chain)"
    ]
  }
];
