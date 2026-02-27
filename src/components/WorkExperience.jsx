import React from "react";

const experiences = [
  {
    role: "Data Engineer Intern",
    company: "Dinas Komunikasi dan Informatika Provinsi Sumatera Utara",
    date: "Sep 2023 - Okt 2023",
    image: "/dokumentasi_magang_1.jpg",
    desc: [
      "Mengembangkan data pipeline untuk memproses dan mendistribusikan data lokasi outlet Samsat di seluruh Sumatera Utara, meningkatkan akurasi data hingga 98%.",
      "Membangun dan memelihara proses ETL menggunakan Python untuk mengintegrasikan data pemerintah melalui API, mengurangi waktu pemrosesan data sekitar 40%.",
      "Menerapkan otomatisasi data cleaning dan validasi sehingga menurunkan error data hingga 30%.",
      "Berkoordinasi dengan tim backend untuk mengoptimalkan query dan struktur data, meningkatkan performa API hingga 25%.",
    ],
  },
  {
    role: "Analis Sistem Informasi Statistik",
    company: "Badan Pusat Statistik (BPS) Deli Serdang",
    date: "Des 2025 – Saat ini",
    image: "/BPS-Dokumentasi.jpeg",
    desc: [
      "Melakukan analisis kebutuhan sistem informasi statistik yang mencakup alur pengolahan data, penyimpanan, dan lapisan penyajian.",
      "Menyusun dokumentasi kebutuhan teknis, termasuk perancangan struktur basis data, flowchart proses, serta spesifikasi antarmuka pengguna.",
      "Melakukan pemeriksaan kualitas sistem, validasi integrasi API, serta pengujian ketepatan data antar-sumber untuk memastikan hasil yang andal.",
      "Mendukung pemeliharaan sistem berbasis web dan dashboard statistik, termasuk automasi pengolahan data dan optimasi tata letak publikasi digital.",
      "Berkoordinasi dengan unit fungsional statistik untuk memastikan sistem sesuai kebutuhan data tematik dan standar BPS.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0a0a23] text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12">
          Riwayat Pekerjaan
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative border-l-2 border-purple-500 pl-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 relative">
              {/* Dot Timeline */}
              <div className="absolute -left-10 w-5 h-5 bg-purple-500 rounded-full border-4 border-slate-900"></div>

              {/* Grid per Experience */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
                {/* LEFT SIDE - TEXT */}
                <div>
                  <span className="text-sm font-semibold text-purple-300 tracking-wider">
                    {exp.date}
                  </span>

                  <h3 className="text-2xl font-bold text-white mt-1">
                    {exp.role}
                  </h3>

                  <p className="text-md text-gray-400 mb-4">{exp.company}</p>

                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-300">
                    {exp.desc.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>

                {/* RIGHT SIDE - IMAGE */}
                <div>
                  <img
                    src={exp.image}
                    alt={exp.role}
                    className="w-full rounded-xl shadow-lg hover:scale-105 hover:shadow-purple-400/30 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
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
