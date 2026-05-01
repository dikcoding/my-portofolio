import React from "react";

const experiences = [
  {
    role: "Data Engineer",
    company: "Badan Pusat Statistik (BPS) Deli Serdang",
    date: "Dec 2025 – Present",
    image: "/BPS-Dokumentasi.jpeg",
    desc: [
      "Collected and processed statistical data using Python.",
      "Performed data cleaning and validation for statistical datasets.",
      "Automated ETL workflows and scheduling using Apache Airflow.",
      "Managed centralized data storage using Google Cloud Storage (GCS).",
      "Built data transformation models using dbt.",
      "Integrated dbt workflows with Airflow using Cosmos.",
      "Monitored data quality and consistency using Soda Core.",
      "Created dashboards and statistical reports using Tableau.",
    ],
  },
  {
    role: "Data Engineer Intern",
    company: "Dinas Komunikasi dan Informatika Provinsi Sumatera Utara",
    date: "Sep 2023 - Dec 2023",
    image: "/dokumentasi_magang_1.jpg",
    desc: [
      "Collected Government Public Service data from multiple APIs using Python.",
      "Built ELT pipelines with Bronze, Silver, and Gold layers in SQL Server.",
      "Performed data cleaning, transformation, and validation for analytics datasets.",
      "Designed data models and warehouse schemas using draw.io.",
      "Managed project workflows and documentation using Notion.",
      "Created dashboards and reports using Tableau.",
      "Monitored and maintained stable data pipeline operations.",
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#0a0a23] text-white py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-purple-400 text-center mb-12">
          Work Experience
        </h2>

        {/* Timeline Wrapper */}
        <div className="relative pl-8">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-16 relative">
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
                <div className="flex justify-center lg:justify-end">
                  <img
                    src={exp.image}
                    alt={exp.role}
                    className="w-full max-w-md rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-20 text-center">
          <blockquote className="text-xl italic text-gray-400 max-w-3xl mx-auto border-l-4 border-purple-500 pl-6">
            "Experience is the best teacher, especially when combined with data
            and a willingness to learn."
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Experience;
