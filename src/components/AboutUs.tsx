import React from "react";
import { Check, Target, Compass, Sparkles, MapPin, Building, ShieldCheck } from "lucide-react";

export default function AboutUs() {
  const values = [
    {
      title: "Integrity (Integritas)",
      desc: "Menjunjung tinggi kejujuran dan etika profesional dalam setiap proses audit, pelatihan, dan konsultasi sistem.",
      icon: ShieldCheck,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      title: "Simplicity (Kepraktisan)",
      desc: "Menolak sistem dokumen yang berbelit-belit. Kami mendesain sistem yang ramping, aplikatif, dan mudah diterapkan.",
      icon: Sparkles,
      color: "text-cyan-600 bg-cyan-50",
    },
    {
      title: "Results-Oriented (Berorientasi Hasil)",
      desc: "Bukan sekadar formalitas kertas, kami berfokus pada kelulusan audit resmi dan peningkatan produktivitas nyata.",
      icon: Target,
      color: "text-amber-600 bg-amber-50",
    },
    {
      title: "Collaboration (Kolaboratif)",
      desc: "Bekerja sebagai mitra internal tim Anda, mentransfer pengetahuan agar sistem terus berjalan mandiri pasca sertifikasi.",
      icon: Compass,
      color: "text-blue-600 bg-blue-50",
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Visual Presentation Element */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary-600 to-cyan-500 rounded-2xl blur-lg opacity-15"></div>
              <div className="relative bg-white p-8 rounded-2xl border border-slate-100 premium-card-shadow-lg space-y-6">
                <div className="flex items-center space-x-3 text-primary-900">
                  <div className="p-2.5 bg-primary-50 rounded-xl">
                    <Building className="h-6 w-6 text-primary-700" />
                  </div>
                  <div>
                    <h3 className="font-sans text-xl font-extrabold tracking-tight">Progresivo Consulting</h3>
                    <p className="font-sans text-xs text-gray-500 font-medium">Setup Sistem & Manajemen Produktivitas</p>
                  </div>
                </div>

                <p className="font-sans text-sm text-gray-600 leading-relaxed">
                  Berbasis di kota kuliner dan kreatif, <strong>Bandung</strong>, kami hadir untuk menjawab kebutuhan para pelaku industri makanan, manufaktur, dan jasa yang ingin naik kelas ke standar manajemen internasional.
                </p>

                {/* Location Detail Block */}
                <div className="p-4 bg-slate-50 border border-slate-100 rounded-xl flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-sans text-xs font-bold text-gray-800">Alamat Kantor Pusat:</h4>
                    <p className="font-sans text-xs text-gray-600 mt-0.5 leading-relaxed">
                      Jl. Situsari IV No. 2A, Buahbatu, Kota Bandung, Jawa Barat 40287
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex justify-between text-center divide-x divide-gray-100">
                    <div className="px-2">
                      <p className="text-2xl font-extrabold text-primary-900">15+</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Tahun Pengalaman</p>
                    </div>
                    <div className="px-2">
                      <p className="text-2xl font-extrabold text-primary-900">100%</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Lolos Audit BPOM</p>
                    </div>
                    <div className="px-2">
                      <p className="text-2xl font-extrabold text-primary-900">35%</p>
                      <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Efisiensi Biaya</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Description & Core Values */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs font-bold text-primary-700 tracking-widest uppercase block">
                Tentang Perusahaan
              </span>
              <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Membantu Organisasi Naik Kelas Melalui Standardisasi & Efisiensi
              </h2>
              <p className="font-sans text-base text-slate-600 leading-relaxed">
                Progresivo Consulting adalah konsultan manajemen spesialis dalam perancangan, pendampingan, dan setup sistem manajemen keamanan pangan (HACCP & ISO 22000), manajemen kualitas (ISO 9001), serta peningkatan produktivitas kerja (Lean & 5S).
              </p>
              <p className="font-sans text-base text-slate-600 leading-relaxed">
                Kami percaya bahwa standar internasional tidak harus memperumit bisnis Anda. Pendekatan kami yang sangat operasional (down-to-earth) berfokus pada penciptaan nilai tambah nyata di lantai produksi, bukan sekadar menimbun dokumen di atas meja kerja.
              </p>
            </div>

            {/* Vision & Mission Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-xl border border-slate-100 premium-card-shadow space-y-2 hover:scale-[1.01] transition-transform duration-300">
                <div className="h-9 w-9 rounded-lg bg-primary-50 text-primary-700 flex items-center justify-center font-bold text-sm">
                  V
                </div>
                <h4 className="font-sans text-sm font-bold text-gray-900">Visi Kami</h4>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Menjadi mitra konsultan setup sistem mutu dan produktivitas terdepan di Indonesia yang dikenal karena kepraktisan sistem, integritas tinggi, dan dampak peningkatan nyata.
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border border-slate-100 premium-card-shadow space-y-2 hover:scale-[1.01] transition-transform duration-300">
                <div className="h-9 w-9 rounded-lg bg-cyan-50 text-cyan-700 flex items-center justify-center font-bold text-sm">
                  M
                </div>
                <h4 className="font-sans text-sm font-bold text-gray-900">Misi Kami</h4>
                <p className="font-sans text-xs text-gray-600 leading-relaxed">
                  Menyediakan konsultasi yang ramah operasional, melatih SDM menjadi aset berkompetensi standar global, serta menyederhanakan regulasi demi pertumbuhan bisnis klien.
                </p>
              </div>
            </div>

            {/* Core Values List */}
            <div className="space-y-4">
              <h3 className="font-sans text-lg font-bold text-gray-900">Nilai-Nilai Utama Kami</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div key={i} className="flex items-start space-x-3 p-3 bg-white rounded-lg border border-slate-100 premium-card-shadow hover:scale-[1.01] transition-transform duration-300">
                      <div className={`p-1.5 rounded-md ${v.color} shrink-0`}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <div>
                        <h4 className="font-sans text-xs font-bold text-gray-900">{v.title}</h4>
                        <p className="font-sans text-[11px] text-gray-500 mt-0.5 leading-relaxed">{v.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
