// src/components/Portofolio.jsx

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";
import {
  FaPython,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaWarehouse,
  FaFileExcel,
} from "react-icons/fa";
import {
  SiPandas,
  SiNumpy,
  SiPostgresql,
  SiDbt,
  SiSnowflake,
  SiApacheairflow,
  SiTableau,
} from "react-icons/si";
import { TbArrowsRandom } from "react-icons/tb";
import { VscGraph } from "react-icons/vsc";
import { MdDashboard } from "react-icons/md";

const projects = [
  {
    id: "road-acident-anlytics",
    title: "Road Acident Analytics",
    description:
      "Dashboard analisis berbasis Excel yang mengeksplorasi data kecelakaan jalan di Inggris (2021–2022). Berfokus pada identifikasi pola kecelakaan, tingkat keparahan korban, dan faktor lingkungan menggunakan insight berbasis data.",
    imageUrl: "/dashboard-road-accident.png",
    liveDemoUrl:
      "https://drive.google.com/drive/u/4/folders/1hxRaRQ9zW-4p8vz6pjmSrM9edihzBPk4",
  },
  {
    id: "bike-sales-project",
    title: "Bike Sales Project",
    description:
      "Dashboard analisis berbasis Excel yang mengeksplorasi data penjualan sepeda. Dashboard ini dirancang untuk mengidentifikasi pola pembelian pelanggan berdasarkan status pernikahan, wilayah, tingkat pendidikan, pendapatan rata-rata, usia, dan jarak perjalanan (commute). Visualisasi data membantu memahami preferensi pelanggan serta faktor-faktor yang memengaruhi keputusan pembelian sepeda.",
    imageUrl: "/dashboard-bike-sales-project.png",
    liveDemoUrl:
      "https://drive.google.com/drive/u/4/folders/1IwwK9wzIRMcuFQubl2fx4ZUjT2DzPClR",
  },
  {
    id: "uber-rides",
    title: "Data Warehouse & Data Analyst Uber Rides",
    description:
      "Repository ini berisi proses pengolahan dan analisis dataset Uber Ride Bookings dari Kaggle. Di dalamnya mencakup data transaksi perjalanan secara detail seperti ID pemesanan, informasi penjemputan/pengantaran, jenis kendaraan, dan rincian tarif. Proyek ini mencakup alur kerja data engineering sekaligus menghasilkan insight dari analisis data.",
    imageUrl: "/data_model.drawio.png",
    liveDemoUrl: "https://github.com/dikcoding/dw_da_uber_rides/tree/main",
  },
  {
    id: "walmart-sales",
    title: "Walmart Sales Forecasting Data",
    description:
      "Walmart Sales Forecasting Project Project ini memanfaatkan dataset Walmart untuk membangun pipeline data menggunakan DBT + Snowflake, serta visualisasi dengan Tableau. Fokus pada prediksi penjualan, manajemen inventaris, dan analisis faktor eksternal seperti libur, suhu, harga BBM, CPI, dan pengangguran.",
    imageUrl: "/etl_walmart.png",
    liveDemoUrl: "https://github.com/dikcoding/walmart-sales-forecasting-data",
  },
  {
    id: "dbt-airbnb",
    title: "ETL Data Warehouse",
    description:
      "Dataset ini didasarkan pada daftar dan ulasan Airbnb, dengan data awal tambahan yang disediakan melalui berkas CSV (misalnya, tanggal bulan purnama). Proyek ini mencakup pembersihan data, pemodelan dimensi, dan pengambilan snapshot.",
    imageUrl: "/etl_data_warehouse.png",
    liveDemoUrl: "https://github.com/dikcoding/dbt-airbnb-snowflake-project",
  },
  {
    id: "data_warehouse",
    title: "SQL Data Warehouse",
    description:
      "Panduan komprehensif untuk membangun gudang data modern dengan SQL Server, termasuk proses ETL, pemodelan data, dan analitik",
    imageUrl: "/sql_data_warehouse.png",
    liveDemoUrl: "https://github.com/dikcoding/sql-data-warehouse",
  },
];

// Data Sertifikat
const certificates = [
  { title: "Fundamentals of Analytics on AWS - Part 1", imageUrl: "/1.png" },
  { title: "Fundamentals of Analytics on AWS - Part 2", imageUrl: "/2.png" },
  { title: "Data Engineering on AWS - Foundations", imageUrl: "/3.png" },
  {
    title: "Amazon Redshift - Best Practices for Data Warehousing on AWS",
    imageUrl: "/4.png",
  },
  {
    title: "The Microsoft Excel Data Analysis Toolkit Bundle",
    imageUrl: "/5.png",
  },
  {
    title: "Microsoft Excel - Excel from Beginner to Advanced",
    imageUrl: "/6.png",
  },
  {
    title: "The Business Intelligance Analyst Course 2025",
    imageUrl: "/7.png",
  },
  {
    title: "The Complate dbt (Data Build Tool) Bootcamp: Zero to Hero",
    imageUrl: "/8.png",
  },
];

const techStack = [
  { name: "Python", icon: <FaPython size={48} /> },
  { name: "Pandas", icon: <SiPandas size={48} /> },
  { name: "NumPy", icon: <SiNumpy size={48} /> },
  { name: "SQL", icon: <FaDatabase size={48} /> },
  { name: "PostgreSQL", icon: <SiPostgresql size={48} /> },
  { name: "dbt", icon: <SiDbt size={48} /> },
  { name: "Snowflake", icon: <SiSnowflake size={48} /> },
  { name: "Data Warehouse", icon: <FaWarehouse size={48} /> },
  { name: "ETL", icon: <TbArrowsRandom size={48} /> },
  { name: "Airflow", icon: <SiApacheairflow size={48} /> },
  { name: "Docker", icon: <FaDocker size={48} /> },
  { name: "Tableau", icon: <SiTableau size={48} /> },
  { name: "Dashboarding", icon: <MdDashboard size={48} /> },
  { name: "Data Visualization", icon: <VscGraph size={48} /> },
  { name: "Excel", icon: <FaFileExcel size={48} /> },
  { name: "Git", icon: <FaGitAlt size={48} /> },
];

const Portofolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <section
      id="portofolio"
      className="min-h-screen bg-[#0a0a23] py-20 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold">Portfolio Showcase</h2>
          <p className="text-lg text-slate-300 mt-4 max-w-2xl mx-auto">
            Explore my journey through projects, certifications, and technical
            expertise. Each section represents a milestone in my continuous
            learning path.
          </p>
        </div>

        {/* --- KONTROL TAB --- */}
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2 md:space-x-4 bg-[#1E293B]/50 border border-slate-700 rounded-lg p-2">
            <button
              onClick={() => setActiveTab("projects")}
              className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-semibold rounded-md transition-colors duration-300 ${
                activeTab === "projects"
                  ? "bg-sky-600 text-white"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-semibold rounded-md transition-colors duration-300 ${
                activeTab === "certificates"
                  ? "bg-sky-600 text-white"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setActiveTab("techStack")}
              className={`px-4 py-2 md:px-6 md:py-2 text-sm md:text-base font-semibold rounded-md transition-colors duration-300 ${
                activeTab === "techStack"
                  ? "bg-sky-600 text-white"
                  : "text-slate-300 hover:bg-slate-700"
              }`}
            >
              Tech Stack
            </button>
          </div>
        </div>

        <div>
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group flex flex-col bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden transition-all duration-300 hover:border-sky-500 hover:shadow-2xl hover:shadow-sky-800/20"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-6 flex-grow">
                      {project.description}
                    </p>
                    <div className="mt-auto flex justify-between items-center">
                      <a
                        href={project.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-sky-400 font-semibold hover:text-sky-300 transition-colors"
                      >
                        Live Demo <FiExternalLink />
                      </a>
                      <Link
                        to={`/project/${project.id}`}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-slate-200 text-sm font-semibold rounded-md hover:bg-slate-600 transition-colors"
                      >
                        Details <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-[#1e293b]/60 rounded-lg shadow-lg overflow-hidden border border-slate-700 p-2 transform transition-transform duration-300 hover:scale-105"
                >
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    <img
                      src={cert.imageUrl}
                      alt={cert.title}
                      className="w-full h-auto object-contain rounded-md"
                    />
                  </a>
                </div>
              ))}
            </div>
          )}
          {activeTab === "techStack" && (
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-center">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center justify-center bg-[#1e293b]/60 p-4 rounded-lg border border-slate-700"
                  >
                    <div className="text-sky-400">{tech.icon}</div>
                    <p className="mt-2 text-sm text-slate-300">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portofolio;
