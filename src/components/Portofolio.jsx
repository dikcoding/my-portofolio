import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiExternalLink, FiArrowRight } from "react-icons/fi";

import {
  FaBolt,
  FaCloud,
  FaPython,
  FaDatabase,
  FaDocker,
  FaGitAlt,
  FaWarehouse,
  FaFileExcel,
  FaCheckCircle,
  FaChartBar,
  FaSlack,
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
    id: "streamify",
    title: "Data Streaming Spotify",
    description:
      "The project will stream events generated from a fake music streaming service (like Spotify) and create a data pipeline that consumes the real-time data. The data coming in would be similar to an event of a user listening to a song, navigating on the website, authenticating. The data would be processed in real-time and stored to the data lake periodically (every two minutes)",
    imageUrl: "/dshboard-spotify.png",
    liveDemoUrl: "https://github.com/dikcoding/stream_data",
  },
  {
    id: "realtime_spotify",
    title: "Real-time Spotify Pipeline",
    description:
      "This project demonstrates an end-to-end real-time data engineering pipeline for Spotify music analytics using the Modern Data Stack (MDS).",
    imageUrl: "/dashboard-spotify-project.png",
    liveDemoUrl: "https://github.com/dikcoding/realtime-spotify",
  },
  {
    id: "amazon_sale_data_pipeline",
    title: "Amazon Sale Data Pipeline",
    description:
      "End-to-end data pipeline for processing Amazon sales data using Airflow and Astro. Includes ingestion, data quality checks with Soda, transformations with dbt, and delivering analytics-ready data to Metabase. A modern, scalable workflow for reliable data processing.",
    imageUrl: "/dashboard_amazon_sale.png",
    liveDemoUrl: "https://github.com/dikcoding/amazon-sales-data-pipeline",
  },
  {
    id: "retail_data_pipeline",
    title: "Retail Data Pipeline",
    description:
      "Online Retail Data Pipeline is an end-to-end project that builds a complete data processing workflow using a modern data stack. The pipeline includes data ingestion, data quality checks, transformations, and analytics delivery using Airflow, Google Cloud Storage, BigQuery, dbt, Soda, and Metabase.",
    imageUrl: "/retail_analytics_dashboard.png",
    liveDemoUrl: "https://github.com/dikcoding/online-retail-data-pipeline",
  },
  {
    id: "etl_apple_market",
    title: "ETL Apple Market",
    description:
      "ETL pipeline for processing Apple stock prices using Airflow, Spark, MinIO, and Postgres. The pipeline fetches data from an API, stores it as JSON, transforms it with Spark, loads it into a data warehouse, and visualizes it with Metabase. Includes sensors, PythonOperator, DockerOperator, and Slack notifier.",
    imageUrl: "/stock_dashboard.jpg",
    liveDemoUrl: "https://github.com/dikcoding/etl_apple_market",
  },
  {
    id: "car_sales",
    title: "Car Sales Analysis",
    description:
      "This project aims to analyze historical car sales data from various regions and manufacturers. The analysis is conducted to understand automotive market trends, identify best-selling models, analyze seasonal patterns, and support future sales forecasting. The analysis results are expected to serve as a foundation for strategic decision-making in marketing, inventory management, and investment.",
    imageUrl: "/dashboard_car_sales.png",
    liveDemoUrl: "https://github.com/dikcoding/car_sales_anlysis",
  },
  {
    id: "bbpvp_analyst",
    title: "Analisis Efektivitas Program Pelatihan Vokasi BBPVP Medan",
    description:
      "An analysis of the effectiveness of a vocational training program at BBPVP Medan using Python. This project included synthetic data generation, data cleaning, exploratory analysis, statistical modeling, and interactive visualization to measure the training's impact on participant productivity.",
    imageUrl: "/bbpvp_analyst.png",
    liveDemoUrl: "https://github.com/dikcoding/bbpvp_analyst",
  },
  {
    id: "dashboard-hr-summary",
    title: "HR Summary",
    description:
      "Interactive dashboard to monitor employee data in real-time, including statistics on activity, demographics, performance, department, location, and age and salary relationships.",
    imageUrl: "/dashboard-hr-sumarry.png",
    liveDemoUrl:
      "https://public.tableau.com/app/profile/andika.fadilla.siagian/viz/HRDashboard_17621332585400/HRSummary",
  },
  {
    id: "sales_dashboard",
    title: "Sales Dashboard",
    description:
      "Interactive dashboard to monitor key sales metrics (Sales, Profit, Quantity) in real-time, displaying 'Year-over-Year' (vs. PY) comparisons and monthly trends.",
    imageUrl: "/sales_dashboard.png",
    liveDemoUrl:
      "https://public.tableau.com/app/profile/andika.fadilla.siagian/viz/SalesCustomerDashboards_17629040855770/SalesDashboard?publish=yes",
  },
  {
    id: "road-acident-anlytics",
    title: "Road Acident Analytics",
    description:
      "An Excel-based analysis dashboard exploring UK road crash data (2021–2022). Focusing on identifying crash patterns, casualty severity, and environmental factors using data-driven insights.",
    imageUrl: "/dashboard-road-accident.png",
    liveDemoUrl:
      "https://drive.google.com/drive/u/4/folders/1hxRaRQ9zW-4p8vz6pjmSrM9edihzBPk4",
  },
  {
    id: "bike-sales-project",
    title: "Bike Sales Project",
    description:
      "An Excel-based analysis dashboard that explores bicycle sales data. The dashboard is designed to identify customer purchasing patterns based on marital status, region, education level, average income, age, and commute distance. Data visualization helps understand customer preferences and the factors that influence bicycle purchasing decisions.",
    imageUrl: "/dashboard-bike-sales-project.png",
    liveDemoUrl:
      "https://drive.google.com/drive/u/4/folders/1IwwK9wzIRMcuFQubl2fx4ZUjT2DzPClR",
  },
  {
    id: "uber-rides",
    title: "Data Warehouse & Data Analyst Uber Rides",
    description:
      "This repository contains the processing and analysis of the Uber Ride Bookings dataset from Kaggle. It includes detailed trip transaction data such as booking ID, pickup/drop-off information, vehicle type, and fare details. This project includes a data engineering workflow and generates insights from data analysis.",
    imageUrl: "/data_model.drawio.png",
    liveDemoUrl: "https://github.com/dikcoding/dw_da_uber_rides/tree/main",
  },
  {
    id: "walmart-sales",
    title: "Walmart Sales Forecasting Data",
    description:
      "Walmart Sales Forecasting Project This project leverages Walmart's dataset to build a data pipeline using DBT + Snowflake and visualization with Tableau. It focuses on sales forecasting, inventory management, and analysis of external factors such as holidays, temperature, fuel prices, CPI, and unemployment.",
    imageUrl: "/etl_walmart.png",
    liveDemoUrl: "https://github.com/dikcoding/walmart-sales-forecasting-data",
  },
  {
    id: "dbt-airbnb",
    title: "ETL Data Warehouse",
    description:
      "This dataset is based on Airbnb listings and reviews, with additional baseline data provided via CSV files (e.g., full moon dates). The project included data cleaning, dimensional modeling, and snapshotting.",
    imageUrl: "/etl_data_warehouse.png",
    liveDemoUrl: "https://github.com/dikcoding/dbt-airbnb-snowflake-project",
  },
  {
    id: "data_warehouse",
    title: "SQL Data Warehouse",
    description:
      "A comprehensive guide to building a modern data warehouse with SQL Server, including ETL processes, data modeling, and analytics",
    imageUrl: "/sql_data_warehouse.png",
    liveDemoUrl: "https://github.com/dikcoding/sql-data-warehouse",
  },
];

const certificates = [
  {
    title: "Introduction to Python",
    imageUrl: "/10.jpg",
  },
  {
    title: "Data Manipulation with Pandas",
    imageUrl: "/9.jpg",
  },

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
  { name: "Apache Airflow", icon: <SiApacheairflow size={48} /> },
  { name: "Apache Spark", icon: <FaBolt size={48} /> },
  { name: "Docker", icon: <FaDocker size={48} /> },
  { name: "MinIO (S3 Storage)", icon: <FaCloud size={48} /> },
  { name: "Google Cloud Storage (GCS)", icon: <FaCloud size={48} /> },
  { name: "Soda Core (Data Quality)", icon: <FaCheckCircle size={48} /> },
  { name: "Cosmos (dbt + Airflow)", icon: <SiApacheairflow size={48} /> },
  { name: "Metabase", icon: <FaChartBar size={48} /> },
  { name: "Slack Webhook", icon: <FaSlack size={48} /> },
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
