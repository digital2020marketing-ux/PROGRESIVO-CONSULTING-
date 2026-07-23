import React, { useState, useEffect } from "react";
import { Menu, X, ShieldAlert, Award, PhoneCall, CheckCircle } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of fixed header
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
    <header
      id="header-navigation"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center space-x-2 cursor-pointer group"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="bg-primary-900 text-white p-2 rounded-lg group-hover:bg-primary-600 transition-colors shadow-sm">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <span className="font-sans text-xl font-extrabold tracking-tight text-primary-900 block leading-tight">
                PROGRESIVO
              </span>
              <span className="font-mono text-[10px] uppercase tracking-widest text-primary-600 block font-semibold">
                CONSULTING
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="font-sans text-sm font-semibold text-gray-700 hover:text-primary-700 cursor-pointer transition-colors"
            >
              Tentang Kami
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="font-sans text-sm font-semibold text-gray-700 hover:text-primary-700 cursor-pointer transition-colors"
            >
              Layanan
            </button>
            <button
              onClick={() => scrollToSection("methodology")}
              className="font-sans text-sm font-semibold text-gray-700 hover:text-primary-700 cursor-pointer transition-colors"
            >
              Metodologi
            </button>
            <button
              onClick={() => scrollToSection("quiz")}
              className="font-sans text-sm font-semibold text-gray-700 hover:text-primary-700 cursor-pointer transition-colors"
            >
              Kuis Kesiapan
            </button>
            <button
              onClick={() => scrollToSection("estimator")}
              className="font-sans text-sm font-semibold text-gray-700 hover:text-primary-700 cursor-pointer transition-colors"
            >
              Simulasi Kesiapan
            </button>
          </nav>

          {/* Call to Action Button */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="font-sans flex items-center space-x-2 bg-primary-900 text-white px-5 py-2.5 rounded-lg text-sm font-bold shadow-md hover:bg-primary-700 transition-all cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="h-4 w-4" />
              <span>Konsultasi Gratis</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-600 hover:text-primary-900 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-lg px-4 pt-2 pb-6 space-y-3 absolute top-full left-0 right-0">
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-900"
          >
            Tentang Kami
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-900"
          >
            Layanan
          </button>
          <button
            onClick={() => scrollToSection("methodology")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-900"
          >
            Metodologi
          </button>
          <button
            onClick={() => scrollToSection("quiz")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-900"
          >
            Kuis Kesiapan
          </button>
          <button
            onClick={() => scrollToSection("estimator")}
            className="block w-full text-left px-3 py-2.5 rounded-md text-base font-semibold text-gray-700 hover:bg-primary-50 hover:text-primary-900"
          >
            Simulasi Kesiapan
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full mt-2 flex items-center justify-center space-x-2 bg-primary-900 text-white py-3 px-4 rounded-md text-base font-bold shadow-md hover:bg-primary-800"
          >
            <PhoneCall className="h-5 w-5" />
            <span>Hubungi Kami</span>
          </button>
        </div>
      )}
    </header>
  );
}
