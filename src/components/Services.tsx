import React, { useState } from "react";
import { SERVICES_DATA } from "../data/servicesData";
import { ServiceItem } from "../types";
import { 
  ShieldCheck, 
  FileCheck, 
  Award, 
  TrendingUp, 
  Check, 
  Layers, 
  Target, 
  ArrowRight,
  ClipboardList
} from "lucide-react";

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState<"all" | "food-safety" | "quality" | "productivity">("all");
  const [activeServiceId, setActiveServiceId] = useState<string>("haccp");

  const categories = [
    { id: "all", label: "Semua Layanan" },
    { id: "food-safety", label: "Keamanan Pangan" },
    { id: "quality", label: "Mutu ISO" },
    { id: "productivity", label: "Produktivitas & Lean" }
  ] as const;

  const filteredServices = SERVICES_DATA.filter(service => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "food-safety") return service.id === "haccp" || service.id === "iso22000";
    if (selectedCategory === "quality") return service.id === "iso9001";
    if (selectedCategory === "productivity") return service.id === "productivity";
    return true;
  });

  // Ensure active service is always inside filteredServices, or fall back to the first available
  const activeService = SERVICES_DATA.find(s => s.id === activeServiceId) || SERVICES_DATA[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "ShieldCheck":
        return <ShieldCheck className="h-6 w-6 text-emerald-600" />;
      case "FileCheck":
        return <FileCheck className="h-6 w-6 text-cyan-600" />;
      case "Award":
        return <Award className="h-6 w-6 text-amber-600" />;
      case "TrendingUp":
        return <TrendingUp className="h-6 w-6 text-blue-600" />;
      default:
        return <ClipboardList className="h-6 w-6 text-primary-600" />;
    }
  };

  const getBadgeColor = (id: string) => {
    switch (id) {
      case "haccp":
        return "bg-emerald-50 text-emerald-800 border-emerald-100";
      case "iso22000":
        return "bg-cyan-50 text-cyan-800 border-cyan-100";
      case "iso9001":
        return "bg-amber-50 text-amber-800 border-amber-100";
      case "productivity":
        return "bg-blue-50 text-blue-800 border-blue-100";
      default:
        return "bg-slate-50 text-slate-800 border-slate-100";
    }
  };

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="font-mono text-xs font-bold text-primary-700 tracking-widest uppercase block">
            Layanan Spesialisasi Kami
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Layanan Setup Sistem & Konsultasi Manajemen
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Kami mengasistensi bisnis Anda dari awal perancangan, pelatihan staf, pembuatan dokumentasi SOP, hingga pendampingan audit sertifikasi eksternal.
          </p>
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                // Set default active service when switching categories
                if (cat.id === "food-safety") setActiveServiceId("haccp");
                if (cat.id === "quality") setActiveServiceId("iso9001");
                if (cat.id === "productivity") setActiveServiceId("productivity");
              }}
              className={`font-sans text-xs sm:text-sm font-semibold px-4 py-2.5 rounded-full transition-all cursor-pointer border ${
                selectedCategory === cat.id
                  ? "bg-primary-900 text-white border-primary-900 shadow-md"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Master Details Split View */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Services Grid Selectors */}
          <div className="lg:col-span-5 space-y-4">
            <span className="font-sans text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
              Pilih Standar Sistem:
            </span>
            <div className="space-y-3">
              {filteredServices.map((service) => {
                const isActive = service.id === activeService.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setActiveServiceId(service.id)}
                    className={`p-5 rounded-xl border text-left cursor-pointer transition-all duration-300 ${
                      isActive
                        ? "bg-primary-50 border-primary-600 premium-card-shadow"
                        : "bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50/30 shadow-2xs"
                    }`}
                  >
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl bg-white shadow-2xs shrink-0 border border-slate-100`}>
                        {getIcon(service.iconName)}
                      </div>
                      <div className="space-y-1">
                        <span className={`inline-block px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide border ${getBadgeColor(service.id)}`}>
                          {service.id.toUpperCase()}
                        </span>
                        <h3 className="font-sans text-sm sm:text-base font-extrabold text-slate-900 leading-tight">
                          {service.title}
                        </h3>
                        <p className="font-sans text-xs text-slate-500 line-clamp-2">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detailed Pane Viewer */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-slate-100 p-6 sm:p-8 space-y-6 premium-card-shadow-lg">
            
            {/* Header detail */}
            <div className="space-y-3 border-b border-slate-200/60 pb-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider border ${getBadgeColor(activeService.id)}`}>
                  Layanan Fokus: {activeService.id.toUpperCase()}
                </span>
                <span className="text-xs font-mono text-slate-500 font-medium">
                  {activeService.subtitle}
                </span>
              </div>
              <h3 className="font-sans text-xl sm:text-2xl font-extrabold text-slate-900 leading-tight">
                {activeService.title}
              </h3>
              <p className="font-sans text-xs sm:text-sm text-slate-600 leading-relaxed">
                {activeService.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left detail side: Key benefits */}
              <div className="space-y-4">
                <h4 className="font-sans text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                  <Check className="h-4 w-4 text-emerald-600" />
                  <span>Manfaat Kunci Setup</span>
                </h4>
                <ul className="space-y-2">
                  {activeService.keyBenefits.map((benefit, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <div className="h-4 w-4 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="h-2.5 w-2.5" />
                      </div>
                      <span className="font-sans text-xs text-slate-600 leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right detail side: Target Industries */}
              <div className="space-y-4">
                <h4 className="font-sans text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                  <Target className="h-4 w-4 text-primary-600" />
                  <span>Industri Sasaran</span>
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeService.targetIndustries.map((ind, i) => (
                    <span
                      key={i}
                      className="bg-white border border-slate-200 text-slate-700 px-2.5 py-1.5 rounded-lg text-xs font-medium leading-tight shadow-2xs"
                    >
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Steps Timeline in Details */}
            <div className="pt-6 border-t border-slate-200/60 space-y-4">
              <h4 className="font-sans text-xs font-extrabold text-slate-900 uppercase tracking-wider flex items-center space-x-2">
                <Layers className="h-4 w-4 text-cyan-600" />
                <span>Tahapan Kerja Pendampingan</span>
              </h4>
              
              <div className="relative pl-4 border-l border-slate-200 space-y-4">
                {activeService.processSteps.map((step, idx) => (
                  <div key={idx} className="relative">
                    <span className="absolute -left-6 top-0 h-4 w-4 rounded-full bg-primary-900 border-2 border-white text-[9px] text-white flex items-center justify-center font-bold">
                      {idx + 1}
                    </span>
                    <span className="font-sans text-xs font-bold text-slate-800 block leading-tight">
                      {step}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick CTA inside viewer */}
            <div className="bg-primary-950 text-white rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6">
              <div>
                <h5 className="font-sans text-sm font-bold">Butuh Setup {activeService.title}?</h5>
                <p className="font-sans text-xs text-slate-300">Hubungi konsultan kami di Bandung untuk estimasi biaya resmi.</p>
              </div>
              <button
                onClick={() => {
                  const el = document.getElementById("contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-white text-primary-950 font-bold px-4 py-2 rounded-lg text-xs flex items-center justify-center space-x-1 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
              >
                <span>Minta Proposal</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
