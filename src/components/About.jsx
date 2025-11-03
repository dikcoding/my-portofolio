import React from "react";
import {
  FaQuoteLeft,
  FaCode,
  FaCertificate,
  FaBriefcase,
} from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  const stats = [
    {
      icon: <FaCode size={20} className="text-slate-400" />,
      number: 7,
      title: "TOTAL PROJECTS",
      subtitle: "Innovative web solutions crafted",
    },
    {
      icon: <FaCertificate size={20} className="text-slate-400" />,
      number: 8,
      title: "CERTIFICATES",
      subtitle: "Professional skills validated",
    },
    {
      icon: <FaBriefcase size={20} className="text-slate-400" />,
      number: 2,
      title: "YEARS OF EXPERIENCE",
      subtitle: "Continuous learning journey",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen bg-[#0a0a23] text-slate-200 flex items-center py-20 sm:py-24"
    >
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "2rem 2rem",
        }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-purple-400">About Me</h2>
          <p className="text-slate-400 mt-2">
            ✨ Turning data and ideas into impactful digital solutions ✨
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 rounded-md text-white">
                Hello, I'm
              </span>
            </h3>

            <h1 className="text-5xl lg:text-5xl font-bold text-white my-2">
              Andika Fadilla Siagian
            </h1>

            <p className="text-slate-400 leading-relaxed mt-4">
              Seorang lulusan Sistem Informasi yang berfokus pada bidang Data
              Engineering dan Data Analysis. Saya memiliki minat yang kuat dalam
              membangun alur data end-to-end mulai dari proses ekstraksi,
              transformasi, hingga penyimpanan data serta melakukan analisis
              mendalam untuk menghasilkan insight yang bernilai. Sebagai Data
              Engineer, saya berkomitmen untuk merancang infrastruktur data yang
              efisien dan terukur. Sebagai Data Analyst, saya berfokus pada
              interpretasi data melalui visualisasi dan storytelling yang
              mendukung pengambilan keputusan strategis. Saya percaya bahwa
              kolaborasi antara rekayasa data dan analisis data dapat menjadi
              fondasi penting dalam menciptakan solusi yang inovatif, efisien,
              dan berbasis fakta.
            </p>

            <div className="my-8 p-4 bg-[#13132d]/50 border-l-4 border-purple-500 rounded-r-lg italic text-slate-400 flex items-start gap-3">
              <FaQuoteLeft className="text-purple-400 mt-1 flex-shrink-0" />
              <span>
                "Leveraging AI as a professional tool, not a replacement."
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-1.5 bg-gradient-to-br from-purple-600 to-blue-500 rounded-full blur-xl opacity-75"></div>
              <img
                src="\dika_foto.jpg"
                alt="Andika Fadilla Siagian"
                className="relative w-64 h-64 md:w-72 md:h-72 object-cover rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-[#13132d] p-6 rounded-2xl border border-slate-800 transition-all duration-300 hover:border-purple-600/50 hover:-translate-y-2 group"
            >
              <div className="flex justify-between items-start">
                <div className="flex flex-col">
                  {item.icon}
                  <h4 className="font-bold text-white tracking-widest mt-4">
                    {item.title}
                  </h4>
                  <p className="text-sm text-slate-400 mt-1">{item.subtitle}</p>
                </div>
                <span className="text-5xl font-bold text-white">
                  {item.number}
                </span>
              </div>
              <GoArrowUpRight className="text-slate-500 mt-4 ml-auto group-hover:text-purple-400 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
