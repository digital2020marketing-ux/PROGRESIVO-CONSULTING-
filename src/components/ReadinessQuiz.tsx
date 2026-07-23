import React, { useState } from "react";
import { QuizQuestion } from "../types";
import { 
  Award, 
  HelpCircle, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Sparkles,
  PhoneCall,
  Activity
} from "lucide-react";

export default function ReadinessQuiz() {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false);

  const questions: QuizQuestion[] = [
    {
      id: 1,
      category: "haccp",
      text: "Bagaimana rancangan alur proses kerja (layout) dapur SPPG Anda saat ini?",
      options: [
        { text: "Belum ada pemisahan area bersih dan kotor. Bahan baku mentah masih bercampur dekat dengan makanan matang.", points: 0, feedback: "Zonasi adalah syarat primer. Kami akan merancang layout sekat seadanya tanpa renovasi mahal agar memenuhi Juknis BGN." },
        { text: "Ada pemisahan ruang, namun alur prosesnya masih bersilang (cross-flow) yang berpotensi memicu kontaminasi silang.", points: 5, feedback: "Penataan ulang alur gerak panci/personel diperlukan untuk menghentikan silang kontaminasi." },
        { text: "Layout sudah searah (one-way flow) dari penerimaan bahan s.d penyajian matang sesuai standar zonasi higienis Juknis BGN.", points: 10, feedback: "Luar biasa! Tata letak fisik dapur SPPG Anda sudah memenuhi standar baku nasional." }
      ]
    },
    {
      id: 2,
      category: "haccp",
      text: "Apakah seluruh kru dapur (juru masak & asisten) sudah memiliki sertifikat pelatihan Higiene Sanitasi Makanan?",
      options: [
        { text: "Belum ada pelatihan formal. Penanganan makanan massal mengandalkan kebiasaan dapur rumah tangga biasa.", points: 0, feedback: "Pelatihan higiene adalah mandatori Juknis BGN. Kami menyediakan training kilat berlisensi." },
        { text: "Pernah dilatih internal secara lisan oleh pengawas tanpa adanya bukti sertifikat tertulis atau catatan pelatihan.", points: 5, feedback: "Dasar pengetahuan sudah ada. Kami bantu fasilitasi sertifikasi kompetensi formalnya." },
        { text: "Seluruh tim penjamah pangan aktif sudah terlatih dan memegang sertifikat Higiene Sanitasi resmi.", points: 10, feedback: "Sangat bagus! Kru Anda sudah teredukasi dan siap menghadapi interview dari auditor KAN." }
      ]
    },
    {
      id: 3,
      category: "haccp",
      text: "Seberapa cepat SPPG Anda dapat melacak asal bahan baku segar (daging, telur, susu, sayur) jika terjadi klaim ketidaksesuaian mutu?",
      options: [
        { text: "Sangat sulit karena tidak ada rekaman pembelian atau kode batch pemasok di gudang penerimaan.", points: 0, feedback: "Traceability adalah pilar utama HACCP. Kami bantu buat form kartu stok harian praktis." },
        { text: "Butuh waktu >24 jam dengan membongkar tumpukan kuitansi belanja manual atau nota dari pasar.", points: 5, feedback: "Sistem pencatatan manual perlu dikelompokkan per hari masak agar pelacakan lebih cepat." },
        { text: "Sangat cepat (<2 jam) karena tiap batch bahan segar terhubung ke logbook penerimaan dan barcode supplier.", points: 10, feedback: "Hebat! Ketertelusuran bahan gizi Anda aman dan memenuhi syarat ketat Juknis BGN." }
      ]
    },
    {
      id: 4,
      category: "haccp",
      text: "Bagaimana prosedur pemantauan suhu penyimpanan bahan pangan dingin/beku di dapur SPPG Anda?",
      options: [
        { text: "Tidak dipantau secara berkala. Hanya diperiksa jika freezer terasa kurang dingin atau makanan mulai layu.", points: 0, feedback: "Suhu chiller/freezer adalah Critical Control Point. Kami bantu pasang logbook kontrol harian." },
        { text: "Suhu dipantau berkala namun pencatatannya tidak konsisten, sering lupa diisi, atau tidak ada panduan tindakan koreksi.", points: 5, feedback: "Lembar checklist suhu harus ditempel di pintu alat pendingin dan diisi tertib 2 kali sehari." },
        { text: "Suhu dipantau digital/manual rutin 2-3 kali sehari, dicatat di logbook, lengkap dengan SOP tindakan jika suhu naik.", points: 10, feedback: "Sempurna! Rantai dingin (cold chain) bahan baku gizi terjaga dengan sangat disiplin." }
      ]
    },
    {
      id: 5,
      category: "haccp",
      text: "Apakah SPPG Anda telah membentuk Tim Keamanan Pangan / Tim HACCP khusus untuk mengawasi operasional harian?",
      options: [
        { text: "Belum dibentuk. Semua keputusan dan kontrol mutu dipegang langsung oleh kepala SPPG secara lisan.", points: 0, feedback: "Audit KAN mewajibkan adanya SK Tim HACCP tertulis. Kami bantu susun struktur tim & tugasnya." },
        { text: "Sudah ditunjuk personalnya, namun merangkap banyak tugas operasional lain dan belum paham detail 12 Langkah HACCP.", points: 5, feedback: "Pembekalan modul 12 langkah & 7 prinsip HACCP diperlukan agar tim bisa melakukan review mandiri." },
        { text: "Tim Keamanan Pangan aktif dibentuk, memiliki struktur tertulis, dipimpin koordinator terlatih, dan rutin rapat evaluasi.", points: 10, feedback: "Sempurna! Keberadaan tim internal aktif akan menjamin keberhasilan implementasi jangka panjang." }
      ]
    },
    {
      id: 6,
      category: "haccp",
      text: "Bagaimana kesiapan administrasi dan dokumen pre-requisite seperti Program Pengendalian Hama (Pest Control) dan Sanitasi Air?",
      options: [
        { text: "Belum ada dokumen tertulis atau kontrak kerja sama pengendalian hama, air dapur belum pernah diuji laboratorium.", points: 0, feedback: "Uji air laboratorium & bukti pest control adalah syarat mutlak sebelum diaudit Lembaga Sertifikasi KAN." },
        { text: "Pest control dilakukan manual oleh staf dapur sendiri tanpa logbook jebakan, uji air dinkes ada tapi sudah kedaluwarsa.", points: 5, feedback: "Perlu rekonsiliasi dokumen penunjang. Kami hubungkan dengan lab pengujian air terakreditasi." },
        { text: "Dokumen pest control lengkap dengan peta jebakan, hasil lab air bersih terakreditasi update, serta jadwal pembersihan berkala.", points: 10, feedback: "Luar biasa! Dokumen prasyarat (PRP) Anda lengkap dan siap 100% untuk diajukan ke Lembaga Sertifikasi KAN." }
      ]
    }
  ];

  const handleAnswerSelect = (points: number) => {
    const nextAnswers = [...selectedAnswers, points];
    setSelectedAnswers(nextAnswers);

    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setIsQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswers([]);
    setIsQuizFinished(false);
  };

  const totalScore = selectedAnswers.reduce((a, b) => a + b, 0);
  const maxPossibleScore = questions.length * 10;
  const scorePercent = Math.round((totalScore / maxPossibleScore) * 100);

  const getResultDetails = (score: number) => {
    if (score <= 20) {
      return {
        level: "Kesiapan Rendah (Butuh Penataan Layout Dapur & SOP Fondasional)",
        color: "text-amber-700 bg-amber-50 border-amber-200",
        icon: AlertTriangle,
        description: "Dapur SPPG Anda saat ini belum memenuhi kriteria dasar kelayakan yang dipersyaratkan Juknis BGN. Alur proses memasak masih berisiko tinggi terjadi kontaminasi silang, dan administrasi dokumen prasyarat HACCP belum tersusun.",
        recommendation: "Jangan khawatir! Rekomendasi utama kami adalah melakukan penataan ulang layout dapur minimalis (tanpa bongkar tembok besar) demi memenuhi sekat zonasi higienis, disusul pelatihan basic higiene kru dapur. Tim Progresivo akan mendampingi pembuatan SOP dasar agar Anda siap mengajukan izin operasional awal."
      };
    } else if (score <= 45) {
      return {
        level: "Kesiapan Menengah (Siap Pendampingan Penyusunan 12 Langkah HACCP KAN)",
        color: "text-cyan-700 bg-cyan-50 border-cyan-200",
        icon: Activity,
        description: "SPPG Anda telah memiliki pondasi kebersihan yang cukup baik di lapangan. Namun, sistem dokumentasi, kontrol suhu penyimpanan, pembagian CCP, serta ketertelusuran bahan pangan massal belum terintegrasi secara formal sesuai pedoman HACCP KAN.",
        recommendation: "Anda berada di momentum terbaik untuk memulai program pendampingan intensif bersama Progresivo Consulting. Kami akan mematangkan dokumen HACCP, menguji alur ketertelusuran bahan gizi gratis, melatih Tim Keamanan Pangan Anda, dan menjamin 100% lulus sertifikasi oleh Lembaga Sertifikasi terakreditasi KAN."
      };
    } else {
      return {
        level: "Kesiapan Tinggi (Siap Audit Akhir & Pengajuan Sertifikasi KAN Resmi)",
        color: "text-emerald-700 bg-emerald-50 border-emerald-200",
        icon: Sparkles,
        description: "Selamat! Komitmen kebersihan fisik dapur SPPG Anda berada dalam kategori prima. Pencatatan logbook, kesadaran penjamah pangan, serta manajemen prasyarat higiene sanitasi telah berjalan konsisten sesuai Juknis BGN.",
        recommendation: "Langkah Anda berikutnya adalah mengajukan audit formal ke Lembaga Sertifikasi terakreditasi KAN. Pendampingan Progresivo akan difokuskan pada pelaksanaan simulasi audit (Mock Audit), pengawalan penuh saat kunjungan auditor lapangan KAN, serta penutupan temuan jika ada, demi kelancaran penerbitan sertifikat HACCP Anda."
      };
    }
  };

  const result = getResultDetails(totalScore);
  const ResultIcon = result.icon;

  return (
    <section id="quiz" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-4">
          <span className="font-mono text-xs font-bold text-primary-700 tracking-widest uppercase block">
            Self-Assessment SPPG MBG
          </span>
          <h2 className="font-sans text-3xl font-extrabold text-slate-900 tracking-tight">
            Uji Kesiapan Sertifikasi HACCP SPPG
          </h2>
          <p className="font-sans text-xs sm:text-sm text-slate-600">
            Jawab 6 pertanyaan diagnostik singkat berikut untuk mendeteksi kesiapan sistem operasional dapur SPPG Anda dalam menghadapi audit resmi KAN dan pemenuhan Juknis Badan Gizi Nasional.
          </p>
        </div>

        {/* Quiz Box */}
        <div className="bg-slate-50 border border-slate-100/60 rounded-2xl p-6 sm:p-10 premium-card-shadow-lg">
          {!isQuizFinished ? (
            <div className="space-y-6">
              {/* Progress bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                  <span>Pertanyaan {currentQuestionIdx + 1} dari {questions.length}</span>
                  <span>Progress: {Math.round(((currentQuestionIdx) / questions.length) * 100)}%</span>
                </div>
                <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary-900 transition-all duration-300"
                    style={{ width: `${((currentQuestionIdx) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-3 pt-4">
                <span className="inline-block bg-primary-900 text-white font-mono text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-md">
                  Fokus: {questions[currentQuestionIdx].category.toUpperCase()}
                </span>
                <h3 className="font-sans text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
                  {questions[currentQuestionIdx].text}
                </h3>
              </div>

              {/* Options list */}
              <div className="space-y-3 pt-2">
                {questions[currentQuestionIdx].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswerSelect(opt.points)}
                    className="w-full text-left font-sans text-xs sm:text-sm text-slate-700 font-medium p-4 bg-white hover:bg-primary-50/50 border border-slate-200 hover:border-primary-600 rounded-xl transition-all shadow-2xs group flex items-start space-x-3 cursor-pointer"
                  >
                    <span className="h-6 w-6 rounded-full bg-slate-100 group-hover:bg-primary-900 group-hover:text-white transition-colors flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5">
                      {String.fromCharCode(65 + idx)}
                    </span>
                    <span className="leading-relaxed">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          ) : (
            // Quiz Results Display
            <div className="space-y-8 animate-fadeIn">
              {/* Score ring */}
              <div className="text-center space-y-3">
                <div className="inline-flex items-center justify-center p-2 rounded-full bg-primary-50">
                  <Award className="h-10 w-10 text-primary-900" />
                </div>
                <h3 className="font-sans text-lg font-extrabold text-slate-900">
                  Hasil Analisis Kesiapan Anda
                </h3>
                
                {/* Score visualization */}
                <div className="flex items-baseline justify-center space-x-1 pt-2">
                  <span className="text-5xl font-extrabold text-primary-900">{totalScore}</span>
                  <span className="text-sm font-bold text-slate-400">/ {maxPossibleScore} Poin</span>
                </div>
                <p className="font-sans text-xs text-slate-500 max-w-md mx-auto">
                  Skor Anda setara dengan indeks kematangan sistem sebesar <span className="font-bold text-primary-900">{scorePercent}%</span> terhadap kriteria standar audit.
                </p>
              </div>

              {/* Status block */}
              <div className={`p-6 rounded-xl border ${result.color} space-y-4`}>
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-white rounded-lg shadow-2xs shrink-0">
                    <ResultIcon className="h-5 w-5" />
                  </div>
                  <h4 className="font-sans text-sm sm:text-base font-extrabold">
                    {result.level}
                  </h4>
                </div>
                <p className="font-sans text-xs sm:text-sm leading-relaxed text-slate-700">
                  {result.description}
                </p>
                <div className="bg-white/80 p-4 rounded-lg space-y-2 border border-black/5">
                  <h5 className="font-sans text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                    Rekomendasi Konsultan Progresivo:
                  </h5>
                  <p className="font-sans text-xs leading-relaxed text-slate-600">
                    {result.recommendation}
                  </p>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-200">
                <button
                  onClick={resetQuiz}
                  className="font-sans flex items-center justify-center space-x-2 bg-slate-200 hover:bg-slate-300 text-slate-700 px-6 py-3 rounded-lg text-xs font-bold transition-colors cursor-pointer"
                >
                  <RotateCcw className="h-4 w-4" />
                  <span>Ulangi Kuis</span>
                </button>
                <button
                  onClick={() => {
                    const el = document.getElementById("contact");
                    if (el) {
                      // autofill some values or scroll
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="font-sans flex-1 flex items-center justify-center space-x-2 bg-primary-900 hover:bg-primary-700 text-white px-6 py-3 rounded-lg text-xs font-extrabold transition-all shadow-md cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>Diskusikan Hasil Ini (Free Konsultasi)</span>
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
