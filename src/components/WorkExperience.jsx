import React from "react";

const experiences = [
  {
    role: "Front End Developer",
    company: "Kominfo Sumatera Utara",
    date: "Sep 2023 - Okt 2023",
    desc: [
      "Merancang dan mengembangkan antarmuka situs web GIS Samsat untuk menampilkan lokasi outlet Samsat di seluruh Sumatera Utara.",
      "Membangun dan memelihara antarmuka sistem internal menggunakan React.js.",
      "Bekerja sama dengan tim backend untuk mengintegrasikan API data pemerintah.",
      "Mengoptimalkan performa antarmuka hingga 25% melalui penerapan lazy loading.",
    ],
  },
];

const projectImages = ["/dokumentasi_magang_1.jpg", "dokumentasi_magang_2.jpg"];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0a0a23] text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-4">
          Pengalaman Saya
        </h2>
        <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Perjalanan profesional dan beberapa proyek kunci yang telah saya
          kerjakan selama ini.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="flex flex-col space-y-8">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Riwayat Pekerjaan
            </h3>
            <div className="relative border-l-2 border-purple-500 pl-8">
              {experiences.map((exp, index) => (
                <div key={index} className="mb-8 relative">
                  <div className="absolute -left-10 w-5 h-5 bg-purple-500 rounded-full border-4 border-slate-900"></div>

                  <span className="text-sm font-semibold text-purple-300 tracking-wider">
                    {exp.date}
                  </span>
                  <h4 className="text-2xl font-bold text-white mt-1">
                    {exp.role}
                  </h4>
                  <p className="text-md text-gray-400 mb-2">{exp.company}</p>
                  <ul className="list-disc list-outside ml-5 space-y-1 text-gray-300">
                    {exp.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Documentasi Project
            </h3>
            <p className="text-gray-400 mb-6">
              Beberapa cuplikan visual dari proyek dan dokumentasi saat kerja.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {projectImages.map((src, index) => (
                <div key={index} className="aspect-square">
                  <img
                    src={src}
                    alt={`Proyek ${index + 1}`}
                    className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 hover:shadow-purple-400/30 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <blockquote className="text-xl italic text-gray-400 max-w-3xl mx-auto border-l-4 border-purple-500 pl-6">
            "Pengalaman adalah guru terbaik, terutama ketika dikombinasikan
            dengan data dan kemauan untuk belajar."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Experience;
