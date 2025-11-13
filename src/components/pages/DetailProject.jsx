import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const allProjectsData = {
  car_sales: {
    title: "Car Sales Analysis",
    description:
      "Proyek ini bertujuan untuk menganalisis data historis penjualan mobil dari berbagai wilayah dan produsen.Analisis dilakukan untuk memahami tren pasar otomotif, mengidentifikasi model terlaris, menganalisis pola musiman, serta mendukung peramalan penjualan masa depan. Hasil analisis diharapkan menjadi dasar pengambilan keputusan strategis dalam pemasaran, manajemen stok, dan investasi.",
    techCount: 6,
    featureCount: 5,
    technologies: [
      "Python",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Tableau",
    ],
    keyFeatures: [
      "Analisis tren penjualan berdasarkan wilayah, merek, dan model kendaraan.",
      "Identifikasi pola musiman dan perbandingan performa penjualan antar produsen atau dealer.",
      "Analisis prediktif sederhana menggunakan data historis untuk mendukung perencanaan strategi bisnis.",
      "Feature engineering seperti ekstraksi sales_month & sales_year serta segmentasi pendapatan.",
      "Visualisasi data berupa line chart, bar chart, donut chart, dan scatter plot untuk kebutuhan reporting.",
    ],
    githubUrl: "https://github.com/dikcoding/car_sales_anlysis",
    imageUrl: "/bar_car_sales.png",
  },
  bbpvp_analyst: {
    title: "Analisis Efektivitas Program Pelatihan Vokasi BBPVP Medan",
    description:
      "Analisis efektivitas program pelatihan vokasi di BBPVP Medan menggunakan Python. Proyek ini mencakup pembuatan data sintetis, pembersihan data, analisis eksploratif, pemodelan statistik, serta visualisasi interaktif untuk mengukur dampak pelatihan terhadap produktivitas peserta.",
    techCount: 6,
    featureCount: 5,
    technologies: [
      "Python",
      "Numpy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Statsmodels",
    ],
    keyFeatures: [
      "Analisis efektivitas program pelatihan berdasarkan data peserta dan hasil produktivitas.",
      "Perhitungan tingkat kehadiran, kelulusan, serta produktivitas rata-rata peserta pelatihan.",
      "Visualisasi tren kehadiran dan kelulusan peserta dari waktu ke waktu.",
      "Analisis hubungan antara durasi pelatihan, nilai ujian, dan produktivitas menggunakan korelasi serta regresi linear",
    ],
    githubUrl: "https://github.com/dikcoding/bbpvp_analyst",
    imageUrl: "/bbpvp_analyst.png",
  },
  "dashboard-hr-summary": {
    title: "HR Summary",
    description:
      "Dashboard interaktif untuk memantau data karyawan secara real-time, mencakup statistik keaktifan, demografi, performa, departemen, lokasi, hingga hubungan usia dan gaji.",
    techCount: 3,
    featureCount: 5,
    technologies: ["Tableau", "drawi.io", "Figma"],
    keyFeatures: [
      "Overview jumlah karyawan aktif, karyawan baru, dan terminasi dalam satu tampilan.",
      "Visualisasi departemen dengan jumlah karyawan dan status (hired vs terminated).",
      "Analisis demografi berdasarkan gender, usia, pendidikan, dan lokasi kerja.",
      "Korelasi antara pendidikan & performa karyawan (Excellent, Good, Satisfactory, Needs Improvement).",
      "Insight pendapatan berdasarkan pendidikan dan gender, serta hubungan usia dengan rata-rata gaji.",
      "Pemetaan lokasi kantor/karyawan serta dashboard dapat di-filter berdasarkan gender, status, lokasi, dan hire date.",
    ],
    liveDemoUrl:
      "https://public.tableau.com/app/profile/andika.fadilla.siagian/viz/HRDashboard_17621332585400/HRSummary",
    imageUrl: "/dashboard-hr-sumarry.png",
  },
  sales_dashboard: {
    title: "Sales Dashboard",
    description:
      "Dashboard interaktif untuk memantau metrik penjualan utama (Sales, Profit, Quantity) secara real-time, menampilkan perbandingan 'Year-over-Year' (vs. PY) dan tren bulanan.",
    techCount: 1,
    featureCount: 5,
    technologies: ["Tableau", "drawi.io", "Figma"],
    keyFeatures: [
      "KPI utama (Total Sales, Total Profit, Total Quantity) dengan perbandingan 'vs. Previous Year' (PY).",
      "Grafik tren bulanan untuk KPI yang membandingkan 2023 vs 2022, serta menyoroti bulan tertinggi & terendah.",
      "Analisis 'Sales & Profit' berdasarkan Sub-kategori produk dalam bentuk bar chart.",
      "Visualisasi 'Sales & Profit Trends over Time' yang membandingkan performa dengan nilai rata-rata (Avg).",
      "Filter interaktif (terlihat dari ikon di kanan atas) untuk menganalisis data lebih dalam.",
    ],
    liveDemoUrl:
      "https://public.tableau.com/app/profile/andika.fadilla.siagian/viz/SalesCustomerDashboards_17629040855770/SalesDashboard?publish=yes",
    imageUrl: "/sales_dashboard.png",
  },
  "road-acident-anlytics": {
    title: "Road Acident Analytics",
    description:
      "Dashboard analisis berbasis Excel yang mengeksplorasi data kecelakaan jalan di Inggris (2021–2022). Berfokus pada identifikasi pola kecelakaan, tingkat keparahan korban, dan faktor lingkungan menggunakan insight berbasis data.",
    techCount: 3,
    featureCount: 5,
    technologies: [
      "Microsoft Excel",
      "Pivot Tables & Pivot Charts",
      "Data Cleaning",
      "Data Visualization",
      "Slicer & Interactive Dashboard",
      "Business/Data Analysis",
      "Customer Insights",
    ],
    keyFeatures: [
      "Berapa total jumlah korban berdasarkan tahun dan tingkat keparahan?",
      "Bagaimana perbedaan kecelakaan di wilayah perkotaan dibandingkan dengan pedesaan?",
      "Apa korelasi antara kondisi cuaca, pencahayaan, dan permukaan jalan?",
      "Jenis kendaraan apa yang paling sering terlibat dalam kecelakaan?",
      "Bagaimana perubahan tren kecelakaan dari tahun 2021 ke 2022?",
    ],
    liveDemoUrl:
      "https://drive.google.com/drive/u/4/folders/1hxRaRQ9zW-4p8vz6pjmSrM9edihzBPk4",
    githubUrl: "#",
    imageUrl: "/dashboard-road-accident.png",
  },
  "bike-sales-project": {
    title: "Bike Sales Project",
    description:
      "Dashboard analisis berbasis Excel yang mengeksplorasi data penjualan sepeda. Dashboard ini dirancang untuk mengidentifikasi pola pembelian pelanggan berdasarkan status pernikahan, wilayah, tingkat pendidikan, pendapatan rata-rata, usia, dan jarak perjalanan (commute). Visualisasi data membantu memahami preferensi pelanggan serta faktor-faktor yang memengaruhi keputusan pembelian sepeda.",
    techCount: 3,
    featureCount: 5,
    technologies: [
      "Microsoft Excel",
      "Pivot Tables & Pivot Charts",
      "Data Cleaning",
      "Data Visualization",
      "Slicer & Interactive Dashboard",
      "Business/Data Analysis",
      "Customer Insights",
    ],
    keyFeatures: [
      "Analisis pendapatan rata-rata pembelian berdasarkan gender dan status pembelian (membeli atau tidak).",
      "Perbandingan jumlah pelanggan yang membeli dan tidak membeli sepeda berdasarkan kelompok usia (customer age brackets).",
      "Distribusi pelanggan berdasarkan jarak perjalanan (customer commute) dan hubungannya dengan keputusan membeli sepeda.",
      "Filter interaktif berdasarkan status pernikahan, wilayah, dan pendidikan untuk melihat perubahan data secara dinamis.",
      "Insight demografis untuk memahami profil pelanggan potensial dalam penjualan sepeda.",
    ],
    liveDemoUrl:
      "https://drive.google.com/drive/u/4/folders/1IwwK9wzIRMcuFQubl2fx4ZUjT2DzPClR",
    githubUrl: "#",
    imageUrl: "/dashboard-bike-sales-project.png",
  },
  "uber-rides": {
    title: "Data Warehouse & Data Analyst Uber Rides",
    description:
      "Repository ini berisi proses pengolahan dan analisis dataset Uber Ride Bookings dari Kaggle. Di dalamnya mencakup data transaksi perjalanan secara detail seperti ID pemesanan, informasi penjemputan/pengantaran, jenis kendaraan, dan rincian tarif. Proyek ini mencakup alur kerja data engineering sekaligus menghasilkan insight dari analisis data.",
    techCount: 5,
    featureCount: 5,
    technologies: [
      "SQL Server",
      "draw.io",
      "Microsoft Excel",
      "Notion",
      "Microsoft Word",
    ],
    keyFeatures: [
      "Analisis tren permintaan perjalanan harian dan mingguan.",
      "Identifikasi pola pembatalan perjalanan (driver, customer, no driver found).",
      "Visualisasi lokasi penjemputan dan pengantaran terbanyak (pickup & drop-off hotspots).",
      "Analisis performa jenis kendaraan (Auto, Go Mini, Go Sedan, UberXL, eBike, dll).",
      "Integrasi data cuaca atau lalu lintas untuk melihat pengaruh terhadap permintaan perjalanan dan keterlambatan.",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/dikcoding/dw_da_uber_rides/tree/main",
    imageUrl: "/data_model.drawio.png",
  },
  "walmart-sales": {
    title: "ETL Walmart Sales Forecasting Data",
    description:
      "Walmart Sales Forecasting Project Project ini memanfaatkan dataset Walmart untuk membangun pipeline data menggunakan DBT + Snowflake, serta visualisasi dengan Tableau. Fokus pada prediksi penjualan, manajemen inventaris, dan analisis faktor eksternal seperti libur, suhu, harga BBM, CPI, dan pengangguran.",
    techCount: 3,
    featureCount: 5,
    technologies: ["Data Build Tool (DBT)", "Snowflake", "Data Visualisasi"],
    keyFeatures: [
      "Membangun data pipeline menggunakan DBT dan Snowflake untuk automasi transformasi data.",
      "Forecasting penjualan mingguan menggunakan model analisis time series.",
      "Analisis pengaruh hari libur, suhu, harga BBM, CPI, dan pengangguran terhadap penjualan.",
      "Visualisasi performa penjualan setiap toko dan departemen di Tableau.",
      "Optimasi manajemen inventaris berdasarkan pola permintaan dan prediksi penjualan.",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/dikcoding/walmart-sales-forecasting-data",
    imageUrl: "/etl_walmart.png",
  },
  "dbt-airbnb": {
    title: "ETL Data Warehouse",
    description:
      "Dataset ini didasarkan pada daftar dan ulasan Airbnb, dengan data awal tambahan yang disediakan melalui berkas CSV (misalnya, tanggal bulan purnama). Proyek ini mencakup pembersihan data, pemodelan dimensi, dan pengambilan snapshot.",
    techCount: 3,
    featureCount: 5,
    technologies: ["Data Build Tool (DBT)", "Snowflake", "Preset"],
    keyFeatures: [
      "Membersihkan dan menormalisasi dataset Airbnb (listing, review, host) agar siap digunakan dalam data warehouse.",
      "Membangun data model dimensional (fact & dimension tables) menggunakan DBT untuk menciptakan struktur analitik yang terstandarisasi.",
      "Mengintegrasikan data eksternal seperti tanggal bulan purnama untuk melihat potensi pengaruhnya terhadap tingkat penyewaan atau review.",
      "Mengimplementasikan snapshot untuk melacak perubahan harga, ketersediaan, dan rating seiring waktu.",
      "Menyediakan dasar untuk analisis tren seperti okupansi, rata-rata harga per malam, review score, dan popularitas host.",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/dikcoding/dbt-airbnb-snowflake-project",
    imageUrl: "/etl_data_warehouse.png",
  },
  data_warehouse: {
    title: "SQL Data Warehouse",
    description:
      "Panduan komprehensif untuk membangun gudang data modern dengan SQL Server, termasuk proses ETL, pemodelan data, dan analitik",
    techCount: 3,
    featureCount: 5,
    technologies: ["SQL Server", "drawi.io", "Notion"],
    keyFeatures: [
      "Perancangan arsitektur data warehouse menggunakan pendekatan Star Schema (fact & dimension tables).",
      "Pembangunan proses ETL untuk mengekstrak, membersihkan, dan memuat data ke dalam SQL Server Data Warehouse.",
      "Penerapan konsep slowly changing dimension (SCD) dan snapshot untuk melacak perubahan data historis.",
      "Optimasi performa query menggunakan indexing, partitioning, dan materialized views.",
      "Visualisasi data dan pembuatan dashboard analitik untuk menghasilkan insight bisnis.",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/dikcoding/sql-data-warehouse",
    imageUrl: "/sql_data_warehouse.png",
  },
};

const ArrowLeft = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="19" y1="12" x2="5" y2="12"></line>
    <polyline points="12 19 5 12 12 5"></polyline>
  </svg>
);
const Code = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);
const ListChecks = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="10" x2="21" y1="6" y2="6" />
    <line x1="10" x2="21" y1="12" y2="12" />
    <line x1="10" x2="21" y1="18" y2="18" />
    <polyline points="3 6 4 7 6 5" />
    <polyline points="3 12 4 13 6 11" />
    <polyline points="3 18 4 19 6 17" />
  </svg>
);
const ExternalLink = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
    <polyline points="15 3 21 3 21 9"></polyline>
    <line x1="10" y1="14" x2="21" y2="3"></line>
  </svg>
);
const Github = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const Star = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
  </svg>
);

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = allProjectsData[projectId];
  const navigate = useNavigate();

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold mb-4 text-red-500">
            404 - Not Found
          </h1>
          <p className="text-lg text-gray-300">
            Maaf, proyek yang Anda cari tidak dapat ditemukan.
          </p>
          <button
            onClick={() => navigate("/")}
            className="mt-8 flex items-center justify-center gap-2 px-6 py-3 bg-sky-600 text-white font-semibold rounded-lg hover:bg-sky-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Kembali ke Halaman Utama</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 text-gray-200 font-sans p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <nav className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors w-fit"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>

          <div className="text-sm text-gray-500 mt-4">
            <Link to="/" className="hover:text-white">
              Projects
            </Link>
            <span className="mx-2">&gt;</span>
            <span className="text-white">{project.title}</span>
          </div>
        </nav>

        <main className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <div className="w-24 h-1 bg-purple-600 rounded-full mb-6"></div>
              <p className="text-lg text-gray-300 leading-relaxed">
                {project.description}
              </p>
            </section>

            <section className="flex gap-4">
              <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <Code className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-white">
                    {project.techCount}
                  </span>
                  <p className="text-sm text-gray-400">Total Teknologi</p>
                </div>
              </div>
              <div className="flex-1 bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex items-center gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <ListChecks className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <span className="text-3xl font-bold text-white">
                    {project.featureCount}
                  </span>
                  <p className="text-sm text-gray-400">Fitur Utama</p>
                </div>
              </div>
            </section>

            <section className="flex flex-col sm:flex-row gap-4">
              {project.liveDemoUrl && project.liveDemoUrl !== "#" && (
                <a
                  href={project.liveDemoUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}

              {project.githubUrl && project.githubUrl !== "#" && (
                <a
                  href={project.githubUrl}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 text-gray-200 font-semibold rounded-lg hover:bg-gray-600 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
              )}
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                Technologies Used
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-700 text-purple-300 text-sm font-medium px-4 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <div className="md:col-span-1 space-y-8">
            <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-4">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-auto rounded-md object-cover"
                onError={(e) =>
                  (e.target.src =
                    "https://placehold.co/600x400/1e1b4b/ffffff?text=Image+Not+Found")
                }
              />
            </section>

            <section className="bg-gray-800/50 border border-gray-700 rounded-lg p-6">
              <h2 className="flex items-center gap-2 text-2xl font-semibold text-white mb-4">
                <Star className="w-6 h-6 text-yellow-400" />
                <span>Key Features</span>
              </h2>
              <ul className="space-y-3 list-disc list-inside text-gray-300">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProjectDetail;
