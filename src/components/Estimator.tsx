import React, { useState, useEffect } from "react";
import { EstimatorInputs, EstimatorResult } from "../types";
import { 
  Calendar, 
  Users, 
  CheckSquare, 
  MapPin, 
  ArrowRight,
  TrendingUp,
  FileSpreadsheet,
  Zap,
  Info
} from "lucide-react";

export default function Estimator() {
  const [inputs, setInputs] = useState<EstimatorInputs>({
    standard: "haccp",
    companySize: "small",
    currentDocumentation: "none",
  });

  const [result, setResult] = useState<EstimatorResult>({
    durationMonths: 3,
    consultantVisits: 10,
    recommendedSteps: [],
    complexityScore: "Sedang",
    estimatedReadiness: "Siap Audit Akhir Bulan ke-3",
  });

  useEffect(() => {
    // Perform calculation based on inputs
    let duration = 3; // base duration in months
    let visits = 10;  // base consultant site visits
    let complexity: "Rendah" | "Sedang" | "Tinggi" = "Sedang";
    let readiness = "";
    let steps: string[] = [];

    // 1. Calculate base by standard
    switch (inputs.standard) {
      case "haccp":
        duration = 2.5;
        visits = 10;
        steps = [
          "Gap Analysis fisik infrastruktur dapur SPPG berdasarkan Juknis BGN",
          "Pembentukan Tim Keamanan Pangan SPPG & Pelatihan Higiene Kru Dapur",
          "Penyusunan deskripsi menu gizi, diagram alir, dan penetapan batas kritis (CCP)",
          "Penerapan logbook pengawasan (suhu masak, sanitasi alat, higiene staf)",
          "Audit internal HACCP mandiri & simulasi audit KAN",
          "Pendaftaran sertifikasi ke Lembaga Sertifikasi terakreditasi KAN"
        ];
        break;
      case "iso22000":
        duration = 4.5;
        visits = 14;
        steps = [
          "Audit kelayakan program prasyarat (PRP) & cold-chain regional",
          "Penyusunan SOP logistik terintegrasi, penanganan alergen & kontaminasi",
          "Pelatihan kompetensi Lead Auditor Internal ISO 22000 untuk pengawas SPPG",
          "Uji coba sistem ketertelusuran (traceability) bahan pangan lokal",
          "Pra-audit sistem manajemen rantai pasok masif",
          "Pendampingan audit tahap 1 & 2 dari LS Akreditasi KAN"
        ];
        break;
      case "iso9001":
        duration = 3;
        visits = 10;
        steps = [
          "Pemetaan proses bisnis pengadaan, produksi gizi s.d distribusi",
          "Penyusunan sasaran gizi, akuntabilitas anggaran & analisis risiko proses",
          "Pembuatan manual mutu pelayanan & prosedur operasional standar (SOP)",
          "Sosialisasi instruksi kerja penimbangan berat & porsi gizi seimbang",
          "Audit internal kepatuhan administrasi dan tata kelola SPPG",
          "Rapat tinjauan hasil & pendampingan sertifikasi KAN"
        ];
        break;
      case "productivity":
        duration = 2;
        visits = 8;
        steps = [
          "Analisis kemacetan alur (bottlenecks) & gerak kru penyiapan boks porsi",
          "Workshop budaya kerja 5S/5R (Ringkas, Rapi, Resik) area saji",
          "Desain layout ergonomis penempatan kompor masal & sink cuci piring",
          "Penyusunan Standard Work tata cara pencucian & sanitasi wadah makanan",
          "Implementasi visual board instruksi variasi menu harian MBG",
          "Evaluasi kecepatan waktu penyiapan dan ketepatan jam distribusi"
        ];
        break;
      case "all":
        duration = 5.5;
        visits = 20;
        steps = [
          "Gap Analysis komprehensif terpadu Juknis BGN, HACCP, dan ISO",
          "Desain tata letak dapur sekat higienis (one-way flow) & cold storage regional",
          "Penyusunan Dokumen SOP Terintegrasi Mutu & Keamanan Pangan SPPG",
          "Pelatihan serentak kru dapur: Higiene Sanitasi, HACCP, & Disiplin 5S",
          "Audit internal menyeluruh seluruh operasional SPPG & tinjauan manajemen",
          "Pendampingan pendaftaran dan audit sertifikasi KAN multi-standar sekaligus"
        ];
        break;
    }

    // 2. Adjust by SPPG capacity / Company Size
    switch (inputs.companySize) {
      case "micro":
        duration = Math.max(1.5, duration - 1);
        visits = Math.max(6, Math.round(visits * 0.7));
        complexity = "Rendah";
        break;
      case "small":
        duration = Math.max(2, duration - 0.5);
        visits = Math.max(8, Math.round(visits * 0.9));
        complexity = "Sedang";
        break;
      case "medium":
        duration = duration;
        visits = visits;
        complexity = "Sedang";
        break;
      case "large":
        duration = duration + 1;
        visits = Math.round(visits * 1.3);
        complexity = "Tinggi";
        break;
    }

    // 3. Adjust by current documentation
    if (inputs.currentDocumentation === "good") {
      duration = Math.max(1.5, duration - 0.8);
      visits = Math.max(6, Math.round(visits * 0.8));
    } else if (inputs.currentDocumentation === "partial") {
      duration = Math.max(1.5, duration - 0.3);
    }

    // Finalize duration representation
    const roundedDuration = Math.round(duration * 10) / 10;
    readiness = `Siap Sertifikasi KAN Akhir Bulan ke-${Math.ceil(roundedDuration)}`;

    setResult({
      durationMonths: roundedDuration,
      consultantVisits: visits,
      recommendedSteps: steps,
      complexityScore: complexity,
      estimatedReadiness: readiness,
    });
  }, [inputs]);

  const handleInputChange = (field: keyof EstimatorInputs, value: string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="estimator" className="py-20 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-mono text-xs font-bold text-primary-700 tracking-widest uppercase block">
            Tools & Simulasi Kerja
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kalkulator Kesiapan Sertifikasi SPPG MBG
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Dapatkan gambaran instan mengenai durasi pendampingan, estimasi jumlah kunjungan on-site konsultan ke dapur SPPG Anda, tingkat kompleksitas sistem, serta peta jalan (roadmap) pemenuhan Juknis BGN.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Panel: Inputs Form */}
          <div className="lg:col-span-5 bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl premium-card-shadow-lg space-y-6 flex flex-col justify-between">
            <div className="space-y-5">
              <h3 className="font-sans text-base font-extrabold text-slate-900 border-b border-slate-100 pb-3">
                Kriteria SPPG & Kebutuhan Audit
              </h3>

              {/* Input 1: Standard Choice */}
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <CheckSquare className="h-4 w-4 text-primary-600" />
                  <span>Program Pendampingan / Layanan:</span>
                </label>
                <select
                  value={inputs.standard}
                  onChange={(e) => handleInputChange("standard", e.target.value)}
                  className="w-full font-sans text-xs sm:text-sm bg-slate-50 border border-slate-200 text-slate-800 rounded-lg p-3 focus:outline-none focus:border-primary-600 font-semibold"
                >
                  <option value="haccp">HACCP SPPG MBG (Keamanan Pangan Gizi)</option>
                  <option value="iso22000">ISO 22000:2018 (Dapur Sentral / Hub Logistik)</option>
                  <option value="iso9001">ISO 9001:2015 (Tata Kelola Administrasi SPPG)</option>
                  <option value="productivity">Efisiensi Layout & Alur Juknis BGN</option>
                  <option value="all">Integrasi Total (HACCP + Juknis BGN + SLHS)</option>
                </select>
              </div>

              {/* Input 2: Company Size */}
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <Users className="h-4 w-4 text-cyan-600" />
                  <span>Kapasitas Porsi Produksi SPPG:</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: "micro", label: "Skala Kecil (SPPG Mandiri)", sub: "< 500 porsi/hari" },
                    { id: "small", label: "Skala Standar (SPPG Utama)", sub: "500 - 1.500 porsi/hari" },
                    { id: "medium", label: "Skala Besar (SPPG Sentral)", sub: "1.500 - 3.000 porsi/hari" },
                    { id: "large", label: "Skala Hub (Pusat Logistik)", sub: "> 3.000 porsi/hari" }
                  ].map((sz) => (
                    <button
                      key={sz.id}
                      type="button"
                      onClick={() => handleInputChange("companySize", sz.id)}
                      className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                        inputs.companySize === sz.id
                          ? "bg-primary-50 border-primary-600 text-primary-950"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-700"
                      }`}
                    >
                      <div className="font-sans text-xs font-bold leading-tight">{sz.label}</div>
                      <div className="font-mono text-[9px] text-slate-400 mt-0.5 font-semibold">{sz.sub}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Input 3: Current Documentation */}
              <div className="space-y-2">
                <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center space-x-1.5">
                  <FileSpreadsheet className="h-4 w-4 text-amber-600" />
                  <span>Kelengkapan SOP & Logbook Saat Ini:</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "none", label: "Belum Ada SOP" },
                    { id: "partial", label: "SOP Sebagian" },
                    { id: "good", label: "SOP Lengkap" }
                  ].map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => handleInputChange("currentDocumentation", doc.id)}
                      className={`py-2 px-1 rounded-lg border text-center text-xs font-bold cursor-pointer transition-all ${
                        inputs.currentDocumentation === doc.id
                          ? "bg-primary-50 border-primary-600 text-primary-950"
                          : "bg-slate-50 hover:bg-slate-100 border-slate-200 text-slate-600"
                      }`}
                    >
                      {doc.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Informational Note */}
            <div className="bg-slate-50 border border-slate-150 rounded-xl p-4 flex items-start space-x-2.5 mt-4">
              <Info className="h-4 w-4 text-primary-700 shrink-0 mt-0.5" />
              <p className="font-sans text-[10px] text-slate-500 leading-relaxed">
                Kalkulator proyeksi ini menggunakan metodologi audit mandiri Progresivo Consulting yang mengacu langsung pada Petunjuk Teknis (Juknis) Badan Gizi Nasional dan standar penilaian Lembaga Sertifikasi KAN.
              </p>
            </div>
          </div>

          {/* Right Panel: Output Results */}
          <div className="lg:col-span-7 bg-primary-950 text-white rounded-2xl border border-primary-900/60 p-6 sm:p-8 flex flex-col justify-between space-y-6 premium-card-shadow-lg">
            
            <div className="space-y-6">
              <span className="font-mono text-[10px] font-bold text-cyan-400 tracking-widest uppercase block border-b border-primary-900 pb-2">
                Hasil Proyeksi Progresivo
              </span>

              {/* Key projection metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Metric 1 */}
                <div className="bg-primary-900/60 border border-primary-800/60 p-4 rounded-xl space-y-1">
                  <span className="font-sans text-[10px] font-bold text-primary-300 uppercase tracking-wider block">
                    Durasi Pendampingan
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-extrabold text-white">{result.durationMonths}</span>
                    <span className="text-xs font-semibold text-slate-300">Bulan</span>
                  </div>
                  <span className="text-[9px] text-emerald-400 font-semibold block pt-0.5">
                    Garansi Lulus Audit
                  </span>
                </div>

                {/* Metric 2 */}
                <div className="bg-primary-900/60 border border-primary-800/60 p-4 rounded-xl space-y-1">
                  <span className="font-sans text-[10px] font-bold text-primary-300 uppercase tracking-wider block">
                    Estimasi Site Visit
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-extrabold text-cyan-400">{result.consultantVisits}</span>
                    <span className="text-xs font-semibold text-slate-300">Sesi</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-semibold block pt-0.5">
                    Pendampingan On-site & Online
                  </span>
                </div>

                {/* Metric 3 */}
                <div className="bg-primary-900/60 border border-primary-800/60 p-4 rounded-xl space-y-1">
                  <span className="font-sans text-[10px] font-bold text-primary-300 uppercase tracking-wider block">
                    Tingkat Kompleksitas
                  </span>
                  <div className="flex items-baseline space-x-1">
                    <span className={`text-2xl font-extrabold ${
                      result.complexityScore === "Rendah" ? "text-emerald-400" :
                      result.complexityScore === "Sedang" ? "text-cyan-400" : "text-rose-400"
                    }`}>{result.complexityScore}</span>
                  </div>
                  <span className="text-[9px] text-slate-400 font-semibold block pt-1.5">
                    Sistem Manajemen Mutu
                  </span>
                </div>
              </div>

              {/* Roadmap Actions output */}
              <div className="space-y-3 pt-2">
                <h4 className="font-sans text-xs font-extrabold text-cyan-400 uppercase tracking-wider flex items-center space-x-2">
                  <Zap className="h-4 w-4 text-cyan-400" />
                  <span>Peta Jalan Kerja (Roadmap) Rekomendasi:</span>
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pl-1">
                  {result.recommendedSteps.map((step, idx) => (
                    <div key={idx} className="flex items-start space-x-2 bg-primary-900/20 p-2.5 rounded-lg border border-primary-900/50">
                      <span className="h-4 w-4 rounded bg-cyan-950 text-cyan-400 font-mono text-[9px] font-extrabold flex items-center justify-center shrink-0 mt-0.5 border border-cyan-800">
                        {idx + 1}
                      </span>
                      <span className="font-sans text-[11px] text-slate-200 leading-snug">
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA action bottom */}
            <div className="bg-cyan-500/10 border border-cyan-500/20 p-4 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 mt-6">
              <div className="text-left">
                <span className="font-mono text-[9px] font-extrabold text-cyan-400 tracking-wider block uppercase">
                  Target Progres Kerja:
                </span>
                <span className="font-sans text-xs sm:text-sm font-extrabold text-white">
                  {result.estimatedReadiness}
                </span>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-cyan-500 hover:bg-cyan-400 text-primary-950 font-sans font-extrabold text-xs px-5 py-3 rounded-lg shadow-md transition-all cursor-pointer whitespace-nowrap"
              >
                Minta Penawaran Biaya Resmi
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
