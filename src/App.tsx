import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Methodology from "./components/Methodology";
import Testimonials from "./components/Testimonials";
import ReadinessQuiz from "./components/ReadinessQuiz";
import Estimator from "./components/Estimator";
import ContactSection from "./components/ContactSection";
import { ArrowUp, Award, MapPin, ShieldCheck, Mail, Phone } from "lucide-react";

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans antialiased selection:bg-primary-100 selection:text-primary-900 scroll-smooth">
      {/* Navigation Header */}
      <Header />

      {/* Hero Banner Section */}
      <Hero 
        onStartQuiz={() => scrollToSection("quiz")} 
        onStartConsultation={() => scrollToSection("contact")} 
      />

      {/* Trust Highlights Strip */}
      <section className="bg-primary-950 text-white py-6 border-y border-primary-900 z-10 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-primary-800/60">
            <div className="pt-2 md:pt-0">
              <span className="block text-2xl font-extrabold text-cyan-400">HACCP</span>
              <span className="block text-[10px] text-slate-300 font-medium tracking-wider uppercase">Hazard Analysis Standard</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="block text-2xl font-extrabold text-cyan-400">ISO 9001</span>
              <span className="block text-[10px] text-slate-300 font-medium tracking-wider uppercase">Sistem Manajemen Mutu</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="block text-2xl font-extrabold text-cyan-400">ISO 22000</span>
              <span className="block text-[10px] text-slate-300 font-medium tracking-wider uppercase">Keamanan Rantai Pangan</span>
            </div>
            <div className="pt-2 md:pt-0">
              <span className="block text-2xl font-extrabold text-cyan-400">PRODUKTIVITAS</span>
              <span className="block text-[10px] text-slate-300 font-medium tracking-wider uppercase">Efisiensi Lean & 5S</span>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Company Background */}
      <AboutUs />

      {/* Detailed Services Portfolio */}
      <Services />

      {/* Consulting Steps Methodology */}
      <Methodology />

      {/* Verified Success Stories Testimonials */}
      <Testimonials />

      {/* Self-Assessment Interactive Quiz */}
      <ReadinessQuiz />

      {/* Interactive Time and complexity Calculator */}
      <Estimator />

      {/* Headquarter Address, Map & Dynamic request form */}
      <ContactSection />

      {/* Corporate Footer */}
      <footer className="bg-slate-950 text-white border-t border-slate-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-slate-900">
            
            {/* Brand details col */}
            <div className="md:col-span-5 space-y-4 text-left">
              <div className="flex items-center space-x-2">
                <div className="bg-primary-900 text-white p-2 rounded-lg">
                  <ShieldCheck className="h-6 w-6 text-cyan-400" />
                </div>
                <div>
                  <span className="font-sans text-xl font-extrabold tracking-tight text-white block leading-tight">
                    PROGRESIVO
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-primary-400 block font-bold">
                    CONSULTING
                  </span>
                </div>
              </div>
              <p className="font-sans text-xs text-slate-400 max-w-sm leading-relaxed">
                Jasa konsultan profesional untuk bimbingan setup Sistem Keamanan Pangan HACCP, ISO 9001:2015, ISO 22000:2018, dan optimalisasi Produktivitas kerja. Bergaransi lulus audit 100%.
              </p>
              
              <div className="space-y-1 pt-2">
                <span className="text-xs font-bold text-slate-300 block">Alamat Resmi Bandung:</span>
                <p className="font-sans text-xs text-slate-400 flex items-start space-x-2">
                  <MapPin className="h-4 w-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>Jl. Situsari IV No. 2A, Buahbatu, Kota Bandung, Jawa Barat 40287</span>
                </p>
              </div>
            </div>

            {/* Quick navigations col */}
            <div className="md:col-span-3 space-y-4 text-left">
              <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                Navigasi Cepat
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400 font-semibold">
                <li>
                  <button 
                    onClick={() => scrollToSection("about")} 
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Tentang Progresivo
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("services")} 
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Program Layanan Setup
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("methodology")} 
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Langkah Kerja Pendampingan
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("quiz")} 
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Kuis Diagnostik Kesiapan
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection("estimator")} 
                    className="hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    Kalkulator Waktu & Biaya
                  </button>
                </li>
              </ul>
            </div>

            {/* Contact quick details col */}
            <div className="md:col-span-4 space-y-4 text-left">
              <h4 className="font-sans text-xs font-bold text-white uppercase tracking-wider">
                Hubungi Kami Langsung
              </h4>
              <ul className="space-y-3 text-xs text-slate-400">
                <li className="flex items-center space-x-2.5">
                  <Phone className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="font-mono font-semibold">+62 812-3456-7890</span>
                </li>
                <li className="flex items-center space-x-2.5">
                  <Mail className="h-4 w-4 text-cyan-400 shrink-0" />
                  <span className="font-mono font-semibold">info@progresivoconsulting.com</span>
                </li>
                <li className="pt-2">
                  <div className="bg-slate-900 border border-slate-800 p-3 rounded-lg">
                    <span className="font-sans text-[10px] font-bold text-slate-300 uppercase block">Wilayah Jangkauan:</span>
                    <span className="font-sans text-[11px] text-slate-400 mt-0.5 block leading-relaxed">
                      Bandung Raya, Cimahi, Sumedang, Garut, Jabodetabek, dan seluruh wilayah Indonesia.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Copyright block */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="font-sans text-[11px] text-slate-500">
              &copy; {new Date().getFullYear()} PROGRESIVO CONSULTING. All rights reserved.
            </p>
            <p className="font-sans text-[11px] text-slate-500 flex items-center justify-center space-x-1">
              <span>Made with dedication in Bandung, Jawa Barat</span>
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col space-y-2">
        {/* WhatsApp Floating Chat */}
        <a
          href="https://wa.me/6281234567890"
          target="_blank"
          rel="noreferrer"
          className="bg-emerald-500 hover:bg-emerald-400 text-white p-3.5 rounded-full shadow-lg hover:shadow-emerald-500/20 transition-all hover:scale-105 flex items-center justify-center"
          title="Chat WhatsApp Konsultan"
        >
          <Phone className="h-5 w-5 fill-current" />
        </a>

        {/* Scroll Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="bg-primary-900 hover:bg-primary-700 text-white p-3.5 rounded-full shadow-lg hover:shadow-primary-700/20 transition-all hover:scale-105 flex items-center justify-center cursor-pointer"
            title="Kembali ke Atas"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        )}
      </div>

    </div>
  );
}
