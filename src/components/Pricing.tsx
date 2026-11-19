"use client";

import { motion } from "framer-motion";
import {
  Check,
  ShieldCheck,
  Sparkles,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Pricing() {
  const { t, language } = useLanguage();
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const solutions = [
    {
      id: "company-profile",
      name: t("solution_1_name"),
      desc: t("solution_1_desc"),
      features: [
        t("solution_1_f1"),
        t("solution_1_f2"),
        t("solution_1_f3"),
        t("solution_1_f4"),
        t("solution_1_f5"),
      ],
      waMessage: encodeURIComponent(
        language === "id"
          ? "Halo Landexafy, saya ingin konsultasi mengenai pembuatan website Company Profile untuk bisnis saya."
          : "Hello Landexafy, I would like to consult about building a Company Profile website for my business."
      ),
    },
    {
      id: "seo-optimizer",
      name: t("solution_2_name"),
      desc: t("solution_2_desc"),
      features: [
        t("solution_2_f1"),
        t("solution_2_f2"),
        t("solution_2_f3"),
        t("solution_2_f4"),
        t("solution_2_f5"),
      ],
      waMessage: encodeURIComponent(
        language === "id"
          ? "Halo Landexafy, saya ingin konsultasi mengenai layanan SEO Optimizer & optimasi peringkat website."
          : "Hello Landexafy, I would like to consult about SEO Optimizer services and ranking boosts."
      ),
    },
    {
      id: "pos-system",
      name: t("solution_3_name"),
      desc: t("solution_3_desc"),
      features: [
        t("solution_3_f1"),
        t("solution_3_f2"),
        t("solution_3_f3"),
        t("solution_3_f4"),
        t("solution_3_f5"),
      ],
      waMessage: encodeURIComponent(
        language === "id"
          ? "Halo Landexafy, saya ingin konsultasi mengenai pembuatan POS System (Point of Sale) berbasis web."
          : "Hello Landexafy, I would like to consult about developing a modern Web POS (Point of Sale) system."
      ),
    },
    {
      id: "dashboard-website",
      name: t("solution_4_name"),
      desc: t("solution_4_desc"),
      features: [
        t("solution_4_f1"),
        t("solution_4_f2"),
        t("solution_4_f3"),
        t("solution_4_f4"),
        t("solution_4_f5"),
      ],
      waMessage: encodeURIComponent(
        language === "id"
          ? "Halo Landexafy, saya ingin konsultasi mengenai pembuatan Dashboard Website & sistem internal."
          : "Hello Landexafy, I would like to consult about building a Web Dashboard & internal analytics tool."
      ),
    },
  ];

  const customWaMessage = encodeURIComponent(
    language === "id"
      ? "Halo Landexafy, saya memiliki kebutuhan kustom IT Solution & Web Development untuk bisnis saya."
      : "Hello Landexafy, I have a custom IT Solution & Web Development requirement for my business."
  );

  return (
    <section id="services" className={`py-24 relative z-10 overflow-hidden transition-colors duration-300 ${
      isDark ? "bg-[#0B0B0C]" : "bg-[#F8FAFC]"
    }`}>
      {/* Anchor alias so both #services and #pricing links work */}
      <div id="pricing" className="absolute -top-24 left-0 pointer-events-none" />

      {/* Ambient background glow */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[550px] pointer-events-none ${
        isDark
          ? "bg-[radial-gradient(ellipse_at_center,rgba(21,128,61,0.1)_0%,transparent_70%)]"
          : "bg-[radial-gradient(ellipse_at_center,rgba(21,128,61,0.12)_0%,transparent_70%)]"
      }`} />

      <div className="container mx-auto px-6 md:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 ${
              isDark
                ? "bg-[#121214] border border-[#15803d]/40 text-[#16a34a] shadow-[0_0_15px_rgba(21,128,61,0.15)]"
                : "bg-green-50 border border-green-300 text-green-800"
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t("price_badge")}</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className={`text-3xl md:text-5xl font-extrabold tracking-tight mb-4 transform-gpu ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            {t("price_title")}{" "}
            <span className={`italic font-serif ${isDark ? "text-[#16a34a]" : "text-[#15803d]"}`}>
              {t("price_title_highlight")}
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className={`max-w-2xl mx-auto text-base md:text-lg transform-gpu ${
              isDark ? "text-gray-400" : "text-slate-600"
            }`}
          >
            {t("price_subtitle")}
          </motion.p>
        </div>

        {/* 4 Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 max-w-7xl mx-auto items-stretch">
          {solutions.map((solution, index) => {
            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <div className={`group relative flex flex-col justify-between h-full p-7 rounded-3xl transition-all duration-300 transform-gpu hover:-translate-y-1.5 ${
                  isDark
                    ? "bg-[#121214] border border-white/10 hover:border-[#15803d]/50 hover:shadow-[0_0_30px_rgba(21,128,61,0.15)]"
                    : "bg-white border border-slate-200/90 shadow-sm hover:border-green-600 hover:shadow-xl"
                }`}>
                  {/* Title & Description */}
                  <div className="mb-6 pt-1">
                    <h3 className={`text-xl font-bold mb-2.5 tracking-tight transition-colors ${
                      isDark ? "text-white group-hover:text-[#16a34a]" : "text-slate-900 group-hover:text-black"
                    }`}>
                      {solution.name}
                    </h3>
                    <p className={`text-xs md:text-sm leading-relaxed min-h-[64px] ${
                      isDark ? "text-gray-400" : "text-slate-600"
                    }`}>
                      {solution.desc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className={`space-y-3 mb-8 flex-1 pt-4 border-t ${
                    isDark ? "border-white/10" : "border-slate-100"
                  }`}>
                    {solution.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-2xs ${
                          isDark ? "bg-[#15803d]/20 text-[#16a34a]" : "bg-green-100 text-green-800"
                        }`}>
                          <Check className="w-3 h-3 stroke-[2.5]" />
                        </div>
                        <span className={`text-xs md:text-sm leading-relaxed ${
                          isDark ? "text-gray-300" : "text-slate-700"
                        }`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Consultation CTA Button */}
                  <a
                    href={`https://wa.me/6283182368320?text=${solution.waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 mt-auto rounded-xl font-extrabold text-xs md:text-sm text-center transition-all duration-200 flex items-center justify-center gap-2 bg-[#15803d] hover:bg-[#166534] text-white shadow-[0_0_20px_rgba(21,128,61,0.35)] active:scale-[0.98]"
                  >
                    <MessageCircle className="w-4 h-4 text-white stroke-[2.5]" />
                    <span>{t("price_btn")}</span>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom IT Needs Callout Box */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className={`mt-12 max-w-4xl mx-auto p-6 md:p-8 rounded-2xl md:rounded-3xl border flex flex-col md:flex-row items-center justify-between gap-6 ${
            isDark
              ? "bg-[#161618] border-white/10 text-white shadow-2xl"
              : "bg-white border-slate-200 text-slate-900 shadow-xl"
          }`}
        >
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 backdrop-blur-md hidden sm:flex ${
              isDark ? "bg-[#15803d]/15 border border-[#15803d]/35" : "bg-green-50 border border-green-200"
            }`}>
              <Sparkles className={`w-6 h-6 ${isDark ? "text-[#16a34a]" : "text-green-700"}`} />
            </div>
            <div>
              <h4 className={`text-lg md:text-xl font-bold mb-1 tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}>
                {t("price_custom_note")}
              </h4>
              <p className={`text-xs md:text-sm ${isDark ? "text-gray-400" : "text-slate-600"}`}>
                {t("price_guarantee")}
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/6283182368320?text=${customWaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-full bg-[#15803d] text-white hover:bg-[#166534] font-extrabold text-xs md:text-sm transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(21,128,61,0.35)] active:scale-95"
          >
            <span>{t("price_custom_cta")}</span>
            <ArrowRight className="w-4 h-4 text-white stroke-[2.5]" />
          </a>
        </motion.div>

        {/* Trust badge */}
        <div className={`mt-8 text-center flex items-center justify-center gap-2 text-xs md:text-sm ${
          isDark ? "text-gray-400" : "text-slate-600"
        }`}>
          <ShieldCheck className="w-4 h-4 text-[#16a34a]" />
          <span>{t("price_guarantee")}</span>
        </div>
      </div>
    </section>
  );
}
