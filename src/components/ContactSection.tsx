import React, { useState, useEffect } from "react";
import { ConsultationRequest } from "../types";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send, 
  CheckCircle2, 
  MessageSquare, 
  Trash2,
  Building2,
  PhoneCall
} from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    standard: "haccp",
    companySize: "small",
    message: ""
  });

  const [submissions, setSubmissions] = useState<ConsultationRequest[]>([]);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeTab, setActiveTab] = useState<"form" | "history">("form");

  // Load submissions from localStorage on mount
  useEffect(() => {
    const savedSubmissions = localStorage.getItem("progresivo_consultations");
    if (savedSubmissions) {
      try {
        setSubmissions(JSON.parse(savedSubmissions));
      } catch (e) {
        console.error("Failed to parse submissions", e);
      }
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create new submission
    const newSubmission: ConsultationRequest = {
      id: "REQ-" + Math.floor(100000 + Math.random() * 900000),
      companyName: formData.companyName,
      contactPerson: formData.contactPerson,
      email: formData.email,
      phone: formData.phone,
      servicesNeeded: [formData.standard.toUpperCase()],
      companySize: formData.companySize === "micro" ? "Skala Kecil (<500 Porsi/Hari)" :
                   formData.companySize === "small" ? "Skala Standar (500 - 1.500 Porsi/Hari)" :
                   formData.companySize === "medium" ? "Skala Besar (1.500 - 3.000 Porsi/Hari)" : "Skala Hub (>3.000 Porsi/Hari)",
      message: formData.message,
      submittedAt: new Date().toLocaleDateString("id-ID", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }),
      status: "pending"
    };

    const updatedSubmissions = [newSubmission, ...submissions];
    setSubmissions(updatedSubmissions);
    localStorage.setItem("progresivo_consultations", JSON.stringify(updatedSubmissions));

    setIsSubmitted(true);
    
    // Reset form fields
    setFormData({
      companyName: "",
      contactPerson: "",
      email: "",
      phone: "",
      standard: "haccp",
      companySize: "small",
      message: ""
    });

    // Automatically clear success banner after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 6000);
  };

  const deleteSubmission = (id: string) => {
    const updated = submissions.filter(item => item.id !== id);
    setSubmissions(updated);
    localStorage.setItem("progresivo_consultations", JSON.stringify(updated));
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="font-mono text-xs font-bold text-primary-700 tracking-widest uppercase block">
            Hubungi Kami
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kantor Pusat & Formulir Konsultasi
          </h2>
          <p className="font-sans text-sm sm:text-base text-slate-600">
            Kunjungi kantor kami di Bandung Jawa Barat, atau kirimkan pesan di bawah ini untuk menjadwalkan kunjungan tim konsultan kami ke pabrik Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Office Address Details & Map */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl space-y-6 premium-card-shadow-lg">
              <h3 className="font-sans text-base font-extrabold text-slate-900 border-b border-slate-200/60 pb-3">
                Informasi Kontak & Jam Kerja
              </h3>

              {/* Address details */}
              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-white rounded-lg shadow-2xs text-rose-600 shrink-0 border border-slate-100 mt-0.5">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      Alamat Kantor
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 mt-0.5 leading-relaxed">
                      Jl. Situsari IV No. 2A, Kel. Situsaeur, Kec. Bojongloa Kidul, Kota Bandung, Jawa Barat 40234, Indonesia.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-white rounded-lg shadow-2xs text-primary-600 shrink-0 border border-slate-100 mt-0.5">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      WhatsApp / Telepon
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 mt-0.5 font-bold">
                      +62 812-3456-7890 <span className="text-[10px] text-slate-400 font-normal">(Bandung Area Representative)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="p-2 bg-white rounded-lg shadow-2xs text-cyan-600 shrink-0 border border-slate-100 mt-0.5">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      E-mail Layanan
                    </h4>
                    <p className="font-sans text-xs sm:text-sm text-slate-600 mt-0.5 font-bold">
                      info@progresivoconsulting.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5 border-t border-slate-200/60 pt-4 mt-4">
                  <div className="p-2 bg-white rounded-lg shadow-2xs text-amber-600 shrink-0 border border-slate-100 mt-0.5">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs font-extrabold text-slate-900 uppercase tracking-wider">
                      Jam Kerja Operasional
                    </h4>
                    <div className="font-sans text-xs text-slate-600 mt-1 space-y-0.5">
                      <div className="flex justify-between w-48">
                        <span>Senin - Jumat</span>
                        <span className="font-bold text-slate-800">08.00 - 17.00 WIB</span>
                      </div>
                      <div className="flex justify-between w-48">
                        <span>Sabtu</span>
                        <span className="font-bold text-slate-800">08.00 - 13.00 WIB</span>
                      </div>
                      <div className="text-[10px] text-rose-500 font-semibold pt-1">
                        *Minggu & Libur Nasional: Tutup
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Vector Map Layout */}
            <div className="bg-slate-950 text-white rounded-2xl border border-slate-900 p-6 space-y-4 overflow-hidden relative min-h-[220px] flex flex-col justify-between">
              {/* Pulsing indicator background simulation */}
              <div className="absolute inset-0 z-0 opacity-15">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                  {/* Grid Lines */}
                  <line x1="10" y1="0" x2="10" y2="100" stroke="white" strokeWidth="0.2" />
                  <line x1="30" y1="0" x2="30" y2="100" stroke="white" strokeWidth="0.2" />
                  <line x1="50" y1="0" x2="50" y2="100" stroke="white" strokeWidth="0.2" />
                  <line x1="70" y1="0" x2="70" y2="100" stroke="white" strokeWidth="0.2" />
                  <line x1="90" y1="0" x2="90" y2="100" stroke="white" strokeWidth="0.2" />
                  <line x1="0" y1="20" x2="100" y2="20" stroke="white" strokeWidth="0.2" />
                  <line x1="0" y1="40" x2="100" y2="40" stroke="white" strokeWidth="0.2" />
                  <line x1="0" y1="60" x2="100" y2="60" stroke="white" strokeWidth="0.2" />
                  <line x1="0" y1="80" x2="100" y2="80" stroke="white" strokeWidth="0.2" />
                  {/* Curves simulating Bandung roads (Jl Soekarno Hatta, Buahbatu) */}
                  <path d="M0,50 Q40,45 60,70 T100,60" fill="none" stroke="cyan" strokeWidth="1.5" />
                  <path d="M55,0 L55,100" fill="none" stroke="cyan" strokeWidth="1" />
                  <path d="M0,15 Q30,30 55,40 T100,30" fill="none" stroke="gray" strokeWidth="0.5" />
                </svg>
              </div>

              <div className="relative z-10 space-y-1">
                <div className="inline-block bg-rose-600 text-white font-mono text-[9px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md">
                  Lokasi Presisi Map
                </div>
                <h4 className="font-sans text-sm font-extrabold text-white">Area Bandung, Jawa Barat</h4>
                <p className="font-sans text-[11px] text-slate-400">Posisi strategis dekat Jl. Buahbatu & akses Gerbang Tol Buahbatu.</p>
              </div>

              {/* Pulsing Pin Representation */}
              <div className="relative z-10 flex items-center space-x-3 bg-primary-900/80 border border-primary-700 p-3 rounded-xl backdrop-blur-xs self-start">
                <div className="relative h-6 w-6 shrink-0 flex items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                  <MapPin className="relative h-5 w-5 text-rose-500 fill-rose-500" />
                </div>
                <div>
                  <span className="font-sans text-xs font-extrabold block text-white">PROGRESIVO OFFICE</span>
                  <span className="font-sans text-[10px] text-slate-300 block">Situsari IV No. 2A, Bandung</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Form vs. Submission History Tabs */}
          <div className="lg:col-span-7 bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl flex flex-col justify-between premium-card-shadow-lg">
            
            <div className="space-y-6">
              {/* Form / History Switcher tabs */}
              <div className="flex border-b border-slate-200">
                <button
                  type="button"
                  onClick={() => setActiveTab("form")}
                  className={`font-sans text-xs sm:text-sm font-bold pb-3.5 px-4 relative cursor-pointer ${
                    activeTab === "form"
                      ? "text-primary-900 border-b-2 border-primary-900"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  Formulir Konsultasi
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("history")}
                  className={`font-sans text-xs sm:text-sm font-bold pb-3.5 px-4 relative flex items-center space-x-1.5 cursor-pointer ${
                    activeTab === "history"
                      ? "text-primary-900 border-b-2 border-primary-900"
                      : "text-slate-400 hover:text-slate-600"
                  }`}
                >
                  <span>Daftar Pengajuan</span>
                  {submissions.length > 0 && (
                    <span className="bg-primary-900 text-white font-mono text-[10px] h-4 w-4 rounded-full flex items-center justify-center font-bold">
                      {submissions.length}
                    </span>
                  )}
                </button>
              </div>

              {/* TAB 1: Consultation Request Form */}
              {activeTab === "form" && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {isSubmitted && (
                    <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-xl flex items-start space-x-3 animate-fadeIn">
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <h4 className="font-sans text-xs font-bold">Permohonan Terkirim Berhasil!</h4>
                        <p className="font-sans text-[11px] text-emerald-700 mt-0.5 leading-relaxed">
                          Terima kasih. Permohonan konsultasi setup Anda telah kami simpan. Tim perwakilan Progresivo Bandung akan menghubungi Anda via WhatsApp atau E-mail dalam waktu maksimal 1x24 jam kerja.
                        </p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Input: Nama Perusahaan */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Nama SPPG / Unit Usaha *
                      </label>
                      <input
                        type="text"
                        name="companyName"
                        required
                        value={formData.companyName}
                        onChange={handleInputChange}
                        placeholder="Contoh: SPPG Cicendo Raya"
                        className="w-full font-sans text-xs sm:text-sm bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-primary-600 font-medium"
                      />
                    </div>

                    {/* Input: Nama Person */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Nama Penghubung (Contact Person) *
                      </label>
                      <input
                        type="text"
                        name="contactPerson"
                        required
                        value={formData.contactPerson}
                        onChange={handleInputChange}
                        placeholder="Contoh: Bpk. Adi Wijaya"
                        className="w-full font-sans text-xs sm:text-sm bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-primary-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Input: Email */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Alamat E-mail Aktif *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Contoh: adi@ptkuliner.com"
                        className="w-full font-sans text-xs sm:text-sm bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-primary-600 font-medium"
                      />
                    </div>

                    {/* Input: Phone */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        No. HP / WhatsApp Aktif *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Contoh: 0812XXXXXXXX"
                        className="w-full font-sans text-xs sm:text-sm bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-primary-600 font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Select: Standard */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Sistem Setup Utama *
                      </label>
                      <select
                        name="standard"
                        value={formData.standard}
                        onChange={handleInputChange}
                        className="w-full font-sans text-xs sm:text-sm bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-primary-600 font-semibold"
                      >
                        <option value="haccp">HACCP SPPG MBG (Keamanan Pangan Gizi)</option>
                        <option value="iso22000">ISO 22000:2018 (Dapur Sentral / Hub Logistik)</option>
                        <option value="iso9001">ISO 9001:2015 (Tata Kelola Administrasi)</option>
                        <option value="productivity">Efisiensi Layout & Alur Juknis BGN</option>
                      </select>
                    </div>

                    {/* Select: Size */}
                    <div className="space-y-1.5">
                      <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider block">
                        Kapasitas Porsi Produksi SPPG *
                      </label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full font-sans text-xs sm:text-sm bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-primary-600 font-semibold"
                      >
                        <option value="micro">Skala Kecil (&lt; 500 porsi/hari)</option>
                        <option value="small">Skala Standar (500 - 1.500 porsi/hari)</option>
                        <option value="medium">Skala Besar (1.500 - 3.000 porsi/hari)</option>
                        <option value="large">Skala Hub regional (&gt; 3.000 porsi/hari)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Input */}
                  <div className="space-y-1.5">
                    <label className="font-sans text-xs font-bold text-slate-700 uppercase tracking-wider block">
                      Deskripsi Masalah / Kebutuhan Tambahan
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Ceritakan singkat mengenai produk Anda, lokasi produksi, atau tenggat waktu sertifikasi yang diinginkan..."
                      className="w-full font-sans text-xs sm:text-sm bg-white border border-slate-200 rounded-lg p-2.5 focus:outline-none focus:border-primary-600 font-medium resize-none"
                    ></textarea>
                  </div>

                  {/* Submission Button */}
                  <button
                    type="submit"
                    className="w-full font-sans flex items-center justify-center space-x-2 bg-primary-900 hover:bg-primary-700 text-white py-3 px-4 rounded-lg text-sm font-extrabold shadow-md transition-all cursor-pointer"
                  >
                    <Send className="h-4 w-4" />
                    <span>Kirim Formulir Permohonan</span>
                  </button>
                </form>
              )}

              {/* TAB 2: Request History list (localStorage) */}
              {activeTab === "history" && (
                <div className="space-y-4">
                  {submissions.length === 0 ? (
                    <div className="text-center py-10 space-y-2">
                      <MessageSquare className="h-8 w-8 text-slate-300 mx-auto" />
                      <h4 className="font-sans text-sm font-bold text-slate-700">Belum Ada Pengajuan</h4>
                      <p className="font-sans text-[11px] text-slate-400 max-w-xs mx-auto">
                        Anda belum pernah mengirimkan formulir konsultasi dari browser ini. Silakan isi form di tab sebelah kiri.
                      </p>
                    </div>
                  ) : (
                    <div className="space-y-3 max-h-[360px] overflow-y-auto pr-1">
                      {submissions.map((sub) => (
                        <div 
                          key={sub.id} 
                          className="bg-white p-4 rounded-xl border border-slate-200/80 shadow-2xs space-y-2"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-mono text-xs font-bold text-primary-900 bg-primary-50 px-2 py-0.5 rounded border border-primary-100">
                              {sub.id}
                            </span>
                            <div className="flex items-center space-x-2">
                              <span className="font-mono text-[10px] text-slate-400 font-semibold">
                                {sub.submittedAt}
                              </span>
                              <button
                                type="button"
                                onClick={() => deleteSubmission(sub.id)}
                                className="text-slate-300 hover:text-rose-500 p-1 rounded-md transition-colors cursor-pointer"
                                title="Hapus Pengajuan"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-2 border-t border-slate-50 pt-2 text-xs">
                            <div>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Perusahaan:</span>
                              <span className="font-bold text-slate-800 flex items-center space-x-1">
                                <Building2 className="h-3 w-3 text-slate-400" />
                                <span>{sub.companyName}</span>
                              </span>
                            </div>
                            <div>
                              <span className="text-[10px] uppercase font-bold text-slate-400 block">Sistem Fokus:</span>
                              <span className="font-bold text-primary-700">{sub.servicesNeeded.join(", ")}</span>
                            </div>
                          </div>

                          {sub.message && (
                            <p className="text-[11px] text-slate-500 italic bg-slate-50/80 p-2 rounded border border-slate-100 line-clamp-2">
                              &ldquo;{sub.message}&rdquo;
                            </p>
                          )}

                          <div className="flex items-center justify-between pt-1 border-t border-slate-50">
                            <span className="text-[10px] text-slate-400 font-medium">PIC: {sub.contactPerson}</span>
                            <span className="inline-flex items-center space-x-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                              <span>Menunggu Respon</span>
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Simulated Bandung local support line */}
            <div className="bg-primary-900 text-white rounded-xl p-4 flex items-center justify-between mt-6">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-white/10 rounded-lg">
                  <PhoneCall className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h4 className="font-sans text-xs font-extrabold text-white">Hubungi Konsultan Bandung</h4>
                  <p className="font-sans text-[10px] text-slate-300">Respon kilat via WhatsApp Business.</p>
                </div>
              </div>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-sans font-bold text-[10px] px-3.5 py-2 rounded-lg shadow-sm transition-colors cursor-pointer block text-center"
              >
                Chat WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
