"use client";

import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Footer() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const currentYear = 2026;

  return (
    <footer className={`border-t pt-16 pb-8 relative z-10 transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C] border-white/10 text-gray-400" : "bg-[#F8FAFC] border-slate-200 text-slate-600"
    }`}>
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-flex items-center mb-4 select-none">
              <div className="text-2xl font-black tracking-tighter flex items-center">
                <span className={isDark ? "text-white" : "text-slate-900"}>Land</span>
                <span className={`${isDark ? "text-[#C6F432]" : "text-[#4d7c0f]"} font-black`}>
                  exafy
                </span>
                <span className="text-[#C6F432] font-black">.</span>
              </div>
            </Link>
            <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-gray-400" : "text-slate-600"}`}>
              {t("foot_desc")}
            </p>
            <div className="flex items-center gap-4 text-xs font-semibold">
              <a
                href="https://instagram.com/Landexafy"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isDark ? "text-gray-400 hover:text-[#C6F432]" : "text-slate-600 hover:text-black"}`}
              >
                Instagram: @Landexafy
              </a>
              <a
                href="https://x.com/Landexafy"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isDark ? "text-gray-400 hover:text-[#C6F432]" : "text-slate-600 hover:text-black"}`}
              >
                X: @Landexafy
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t("foot_services")}</h4>
            <ul className={`space-y-3 text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
              <li><Link href="#services" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_serv_1")}</Link></li>
              <li><Link href="#services" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_serv_2")}</Link></li>
              <li><Link href="#services" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_serv_3")}</Link></li>
              <li><Link href="#services" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_serv_4")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t("foot_company")}</h4>
            <ul className={`space-y-3 text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
              <li><Link href="#features" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_comp_1")}</Link></li>
              <li><Link href="#portfolio" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_comp_2")}</Link></li>
              <li><Link href="#services" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_comp_3")}</Link></li>
              <li><Link href="#faq" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_comp_4")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className={`font-semibold mb-4 ${isDark ? "text-white" : "text-slate-900"}`}>{t("foot_contact")}</h4>
            <ul className={`space-y-3 text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
              <li><a href="mailto:landexafy@gmail.com" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>landexafy@gmail.com</a></li>
              <li><a href="https://wa.me/6283182368320" target="_blank" rel="noopener noreferrer" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>+62 831-8236-8320</a></li>
              <li>{language === "id" ? "Purbalingga, Jawa Tengah, Indonesia" : "Purbalingga, Central Java, Indonesia"}</li>
            </ul>
          </div>
        </div>

        <div className={`pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-4 ${
          isDark ? "border-white/10" : "border-slate-200"
        }`}>
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} LANDEXAFY. {t("foot_rights")}
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="#" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_privacy")}</Link>
            <Link href="#" className={isDark ? "hover:text-[#C6F432] transition-colors" : "hover:text-black transition-colors"}>{t("foot_terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
