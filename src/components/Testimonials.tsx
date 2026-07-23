import React from "react";
import { Quote, Star, ShieldCheck, TrendingUp, Award } from "lucide-react";

export default function Testimonials() {
  const stories = [
    {
      company: "Pabrik Roti & Kue Buana",
      location: "Kopo, Bandung",
      standard: "HACCP & BPOM MD",
      impact: "Omset Naik 45% & Masuk Ritel Modern",
      quote: "Sebelumnya produk kami sulit menembus rak supermarket modern. Bersama tim Progresivo Consulting, dapur produksi kami dirapikan sesuai kaidah HACCP. SOP-nya dibuat sangat praktis, bahkan karyawan lulusan SD pun mudah memahaminya. Kini kami telah memiliki sertifikat HACCP dan produk kami lancar didistribusikan ke jaringan ritel nasional.",
      badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-100",
      icon: ShieldCheck,
    },
    {
      company: "PT Metal Presisi Utama",
      location: "Cimahi, Jawa Barat",
      standard: "ISO 9001:2015 & Lean 5S",
      impact: "Scrap Menurun 25% & Lolos Audit Vendor",
      quote: "Kami membutuhkan sertifikat ISO 9001:2015 segera untuk memenuhi kualifikasi tender otomotif nasional. Konsultan Progresivo mendampingi kami secara total. Bukan cuma dokumen di atas meja, mereka terjun langsung ke lantai pabrik melatih operator menyusun layout 5S. Hasilnya pemborosan scrap turun drastis, efisiensi kerja melesat, dan audit tender lulus mulus.",
      badgeColor: "bg-amber-50 text-amber-800 border-amber-100",
      icon: TrendingUp,
    },
    {
      company: "CV Selera Nusantara Boga (Katering Industri)",
      location: "Gedebage, Bandung",
      standard: "ISO 22000:2018",
      impact: "Pemenang Kontrak Suplai 1.500 Porsi/Hari",
      quote: "Syarat menyuplai katering karyawan ke perusahaan manufaktur multinasional sangat ketat di bidang food safety. ISO 22000:2018 adalah harga mati. Berkat bantuan tim Progresivo Consulting yang sabar membimbing dari gap analysis awal hingga pra-audit, sistem dapur kami diakui sangat aman dan kami memenangkan kontrak katering bernilai milyaran.",
      badgeColor: "bg-cyan-50 text-cyan-800 border-cyan-100",
      icon: Award,
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-mono text-xs font-bold text-primary-700 tracking-widest uppercase block">
            Testimoni & Kisah Sukses Klien
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Telah Membimbing Berbagai Industri di Jawa Barat
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Dari industri katering berskala rumah tangga (UMKM) hingga pabrik manufaktur besar, kami berkomitmen mencetak kesuksesan sertifikasi nyata.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {stories.map((story, i) => {
            const Icon = story.icon;
            return (
              <div 
                key={i} 
                className="bg-white border border-slate-100 rounded-2xl p-6 sm:p-8 relative flex flex-col justify-between premium-card-shadow premium-card-hover group"
              >
                {/* Quote Decorative Icon */}
                <div className="absolute top-6 right-8 text-primary-200/50 group-hover:text-primary-300 transition-colors">
                  <Quote className="h-10 w-10 fill-current" />
                </div>

                <div className="space-y-4 relative z-10">
                  {/* Rating Stars */}
                  <div className="flex space-x-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed italic">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </div>

                {/* Client Company details */}
                <div className="border-t border-slate-200/60 pt-5 mt-6 space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5">
                    <span className={`inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-[9px] font-bold uppercase tracking-wider border ${story.badgeColor}`}>
                      <Icon className="h-3 w-3 shrink-0" />
                      <span>{story.standard}</span>
                    </span>
                    <span className="text-[10px] text-slate-400 font-mono font-medium">
                      {story.location}
                    </span>
                  </div>

                  <div>
                    <h4 className="font-sans text-sm font-extrabold text-slate-900 leading-snug">
                      {story.company}
                    </h4>
                    <span className="font-sans text-xs font-bold text-primary-700 block mt-0.5">
                      Dampak: {story.impact}
                    </span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Assurance Brand Band */}
        <div className="mt-14 border-t border-slate-150 pt-10 text-center">
          <p className="font-sans text-xs font-bold text-slate-400 uppercase tracking-widest">
            Konsultan Terakreditasi Mendampingi Sertifikasi dari Badan Sertifikasi Terkemuka:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 mt-6 opacity-40 grayscale hover:grayscale-0 transition-all">
            <span className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-slate-700">KAN (Komite Akreditasi Nasional)</span>
            <span className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-slate-700">SGS</span>
            <span className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-slate-700">TUV Rheinland</span>
            <span className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-slate-700">SUCOFINDO</span>
            <span className="font-sans text-sm sm:text-base font-extrabold tracking-tight text-slate-700">Mutu Certification</span>
          </div>
        </div>

      </div>
    </section>
  );
}
