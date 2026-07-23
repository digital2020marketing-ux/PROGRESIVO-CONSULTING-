import React from "react";
import { ArrowRight, ShieldCheck, Award, Zap, Building2, HelpCircle } from "lucide-react";

interface HeroProps {
  onStartQuiz: () => void;
  onStartConsultation: () => void;
}

export default function Hero({ onStartQuiz, onStartConsultation }: HeroProps) {
  return (
    <section id="hero" className="relative overflow-hidden premium-gradient-bg pt-32 pb-20 md:pt-40 md:pb-28 text-white">
      {/* Abstract Background Design */}
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-500/20 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-accent-500/20 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -rotate-12"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Copy */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center space-x-2 bg-primary-950/80 border border-primary-500/30 px-3.5 py-1.5 rounded-full shadow-md">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="font-sans text-xs font-semibold tracking-wider text-primary-100 uppercase">
                Pendampingan HACCP SPPG MBG Bergaransi - KAN & Juknis BGN
              </span>
            </div>

            <h1 className="font-sans text-3.5xl sm:text-5xl lg:text-5.5xl font-extrabold tracking-tight text-white leading-tight">
              Pendampingan HACCP untuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-primary-100 to-accent-100">
                SPPG MBG Dijamin Lulus Sertifikasi KAN
              </span>
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              <strong>Progresivo Consulting</strong> membimbing Satuan Pelayanan Program Gizi (SPPG) Makanan Bergizi Gratis (MBG) Anda meraih sertifikasi HACCP resmi dari Lembaga Sertifikasi terakreditasi <span className="text-white font-semibold">KAN (Komite Akreditasi Nasional)</span> sesuai dengan ketentuan mutlak <span className="text-white font-semibold">Juknis BGN (Badan Gizi Nasional)</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onStartConsultation}
                className="font-sans flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-800 hover:from-primary-500 hover:to-primary-700 text-white font-bold px-7 py-3.5 rounded-lg shadow-lg hover:shadow-primary-600/20 transform hover:-translate-y-0.5 transition-all cursor-pointer border border-primary-500/30"
              >
                <span>Konsultasi Sekarang</span>
                <ArrowRight className="h-5 w-5 text-cyan-300" />
              </button>
              <button
                onClick={onStartQuiz}
                className="font-sans flex items-center justify-center space-x-2 bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold px-7 py-3.5 rounded-lg transition-all cursor-pointer backdrop-blur-xs"
              >
                <HelpCircle className="h-5 w-5 text-cyan-300" />
                <span>Kuis Kesiapan Sertifikasi</span>
              </button>
            </div>

            {/* Supported Standards Quick Badges */}
            <div className="pt-6 border-t border-slate-800">
              <span className="font-sans text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Ruang Lingkup Pendampingan:
              </span>
              <div className="flex flex-wrap gap-2.5">
                <span className="bg-slate-800/80 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide font-mono">
                  HACCP SPPG MBG
                </span>
                <span className="bg-slate-800/80 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide font-mono">
                  AKREDITASI KAN
                </span>
                <span className="bg-slate-800/80 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide font-mono">
                  JUKNIS BGN COMPLIANCE
                </span>
                <span className="bg-slate-800/80 border border-slate-700 text-slate-200 px-3 py-1.5 rounded-md text-xs font-bold tracking-wide font-mono">
                  LAIK HIGIENE (SLHS)
                </span>
              </div>
            </div>
          </div>

          {/* Side Illustration / Modern Value Prop Box */}
          <div className="lg:col-span-5 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-primary-500/20 rounded-2xl filter blur-xl transform rotate-3"></div>
            
            <div className="relative bg-slate-900/95 border border-slate-800 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-sm space-y-6">
              <h3 className="font-sans text-lg font-bold text-white flex items-center space-x-2 border-b border-slate-800 pb-4">
                <Building2 className="text-cyan-400 h-5 w-5" />
                <span>Kunci Sukses Audit SPPG MBG</span>
              </h3>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 rounded-md bg-emerald-500/20 text-emerald-400 mt-1">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white">Garansi Kelulusan KAN 100%</h4>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">
                      Kami menjamin kelulusan audit sertifikasi HACCP oleh Lembaga Sertifikasi terakreditasi KAN yang diakui Juknis BGN.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 rounded-md bg-cyan-500/20 text-cyan-400 mt-1">
                    <Award className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white">Presisi Juknis BGN</h4>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">
                      SOP dan tata letak dapur dirancang presisi mengikuti standar zonasi higienis dan regulasi Badan Gizi Nasional.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-1.5 rounded-md bg-amber-500/20 text-amber-400 mt-1">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-sm font-bold text-white">Pembinaan Kru Dapur Terpadu</h4>
                    <p className="font-sans text-xs text-slate-400 mt-0.5">
                      Pelatihan kompetensi higiene sanitasi untuk asisten dan juru masak SPPG agar lolos pengawasan kelayakan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Trust Badge Band */}
              <div className="bg-slate-950/80 rounded-xl p-4 border border-slate-800/80 grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-extrabold text-cyan-400">100+</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Klien Tersertifikasi</div>
                </div>
                <div>
                  <div className="text-2xl font-extrabold text-emerald-400">100%</div>
                  <div className="text-[10px] uppercase font-semibold text-slate-500 tracking-wider">Tingkat Kelulusan</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
