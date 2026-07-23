import React from "react";
import { 
  ClipboardCheck, 
  FileText, 
  GraduationCap, 
  Activity, 
  CheckCircle,
  HelpCircle,
  ChevronRight
} from "lucide-react";

export default function Methodology() {
  const steps = [
    {
      title: "1. Gap Analysis",
      subtitle: "Kajian Kesenjangan",
      desc: "Konsultan kami mengidentifikasi kesenjangan antara infrastruktur/sistem berjalan Anda dengan persyaratan regulasi (HACCP/ISO). Menghasilkan peta jalan (roadmap) kerja yang komprehensif.",
      icon: ClipboardCheck,
      bgColor: "bg-emerald-50 text-emerald-700 border-emerald-100",
    },
    {
      title: "2. Penyusunan SOP",
      subtitle: "Desain Sistem & Dokumen",
      desc: "Pembuatan dokumentasi sistem mutu (Manual Mutu, SOP, Instruksi Kerja, Formulir rekaman) yang disederhanakan agar mudah dimengerti staf lapangan tanpa birokrasi berlebihan.",
      icon: FileText,
      bgColor: "bg-cyan-50 text-cyan-700 border-cyan-100",
    },
    {
      title: "3. Pelatihan Tim",
      subtitle: "Transfer Pengetahuan",
      desc: "Pelatihan interaktif pemahaman standar, kesadaran higienitas (untuk pangan), hingga pelatihan formal sertifikasi Audit Internal untuk mendewasakan kompetensi tim kerja Anda.",
      icon: GraduationCap,
      bgColor: "bg-amber-50 text-amber-700 border-amber-100",
    },
    {
      title: "4. Uji Penerapan",
      subtitle: "Implementasi & Audit Internal",
      desc: "Pendampingan pengisian form rekaman kerja, pelaksanaan simulasi Audit Internal mandiri oleh tim Anda, serta fasilitasi rapat tinjauan manajemen (RTM) untuk evaluasi performa.",
      icon: Activity,
      bgColor: "bg-blue-50 text-blue-700 border-blue-100",
    },
    {
      title: "5. Kelulusan Audit",
      subtitle: "Sertifikasi Resmi",
      desc: "Pendampingan langsung saat auditor eksternal datang mengaudit. Kami menjamin asistensi penuh dalam penyelesaian tindakan korektif jika ada temuan, hingga sertifikat terbit.",
      icon: CheckCircle,
      bgColor: "bg-purple-50 text-purple-700 border-purple-100",
    }
  ];

  return (
    <section id="methodology" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-primary-100/40 blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="font-mono text-xs font-bold text-primary-700 tracking-widest uppercase block">
            Alur Kerjasama Kami
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Metode Kerja Terstruktur Menjamin Kelulusan 100%
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Kami tidak meninggalkan Anda sendirian dengan tumpukan dokumen. Metode kami mendampingi staf Anda di setiap langkah, memastikan kemandirian sistem secara berkelanjutan.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div 
                key={idx} 
                className="bg-white border border-slate-100 rounded-xl p-6 relative flex flex-col justify-between group premium-card-shadow premium-card-hover"
              >
                {/* Arrow Connector for Desktop */}
                {idx < 4 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 z-20 bg-white border border-slate-100 p-1 rounded-full text-slate-400 shadow-xs">
                    <ChevronRight className="h-4 w-4" />
                  </div>
                )}

                <div className="space-y-4">
                  {/* Badge & Icon */}
                  <div className="flex items-center justify-between">
                    <div className={`p-3 rounded-lg border ${step.bgColor}`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-sm font-bold text-slate-300">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Text Details */}
                  <div className="space-y-1">
                    <h3 className="font-sans text-sm font-extrabold text-slate-950">
                      {step.title}
                    </h3>
                    <h4 className="font-sans text-[11px] font-bold text-primary-700 uppercase tracking-wider">
                      {step.subtitle}
                    </h4>
                    <p className="font-sans text-xs text-slate-500 leading-relaxed pt-1">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="border-t border-slate-50 pt-4 mt-4 text-[10px] text-slate-400 flex items-center justify-between font-medium">
                  <span>Hasil Tahapan</span>
                  <span className="font-bold text-slate-700">Terverifikasi</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Methodology Assurance banner */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-6 justify-between premium-card-shadow-lg">
          <div className="space-y-2">
            <h4 className="font-sans text-base font-extrabold text-slate-900">
              Apakah Bisnis Anda Siap Dimulai Bulan Ini?
            </h4>
            <p className="font-sans text-xs text-slate-500 max-w-xl">
              Kami menyesuaikan waktu kunjungan, ritme dokumentasi, dan frekuensi pelatihan agar tidak mengganggu jalannya produktivitas kerja harian tim operasional Anda.
            </p>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById("estimator");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            className="bg-primary-900 text-white font-bold text-xs px-5 py-3 rounded-lg shadow-sm hover:bg-primary-700 transition-colors whitespace-nowrap cursor-pointer"
          >
            Mulai Hitung Roadmap Estimasi
          </button>
        </div>

      </div>
    </section>
  );
}
