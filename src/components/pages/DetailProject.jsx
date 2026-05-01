import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const allProjectsData = {
  streamify: {
    title: "Data Streaming Spotify",
    description:
      "The project will stream events generated from a fake music streaming service (like Spotify) and create a data pipeline that consumes the real-time data. The data coming in would be similar to an event of a user listening to a song, navigating on the website, authenticating. The data would be processed in real-time and stored to the data lake periodically (every two minutes)",
    techCount: 10,
    featureCount: 10,
    technologies: [
      "Google Cloud Platform (GCP)",
      "Terraform (Infrastructure as Code)",
      "Docker & Docker Compose (Containerization)",
      "Apache Kafka & Spark Streaming (Stream Processing)",
      "Apache Airflow (Orchestration)",
      "dbt (Data Transformation)",
      "Google Cloud Storage (Data Lake)",
      "BigQuery (Cloud Data Warehouse)",
      "Tableau (Data Visualization)",
      "Python (Programming Language)",
    ],
    keyFeatures: [
      "Simulates real-time music streaming events (song plays, navigation, authentication) from a fake streaming service.",
      "Streams event data continuously to build a real-time data ingestion pipeline.",
      "Processes streaming events in real-time before landing them into the Data Lake every two minutes.",
      "Stores raw event data in the Data Lake for scalable and reliable storage.",
      "Implements hourly batch processing jobs to transform raw data into structured analytical tables.",
      "Applies transformation logic to create curated datasets for reporting and dashboard consumption.",
      "Generates analytics on key metrics such as popular songs, active users, and user demographics.",
      "Supports dashboard-ready data models for interactive analytics and business insights.",
    ],
    liveDemoUrl:
      "https://public.tableau.com/app/profile/andika.fadilla.siagian/viz/dashboard_17714937104620/DashboardSpotify",
    githubUrl: "https://github.com/dikcoding/stream_data",
    imageUrl: "/dshboard-spotify.png",
  },
  realtime_spotify: {
    title: "Real-time Spotify Pipeline",
    description:
      "This project demonstrates an end-to-end real-time data engineering pipeline for Spotify music analytics using the Modern Data Stack (MDS).",
    techCount: 8,
    featureCount: 8,
    technologies: [
      "Python (Faker) Data Simulator",
      "Apache Kafka Real-time Streaming",
      "MinIO (S3 Storage)",
      "Apache Airflow Orchestration",
      "Snowflake Cloud Data Warehouse",
      "DBT (Data Build Tool)",
      "Docker & Docker Compose",
      "Metabase Analytics & Visualization",
    ],
    keyFeatures: [
      "Simulates realistic Spotify streaming events using Python and Faker.",
      "Real-time data streaming via Kafka Producers and Consumers.",
      "Raw JSON event storage in MinIO S3 buckets.",
      "Airflow DAGs to automate ingestion from MinIO into Snowflake Bronze tables.",
      "dbt transformations for Silver and Gold layers with modular SQL models.",
      "Fully implemented Medallion Architecture (Bronze → Silver → Gold).",
      "Interactive analytics dashboards built in Metabase (top artists, regions, devices).",
      "Fully containerized environment via Docker for reproducible deployment.",
    ],
    githubUrl: "https://github.com/dikcoding/amazon-sales-data-pipeline",
    imageUrl: "/dashboard-spotify-project.png",
  },
  amazon_sale_data_pipeline: {
    title: "Amazon Sale Data Pipeline",
    description:
      "End-to-end data pipeline for processing Amazon sales data using Airflow and Astro. Includes ingestion, data quality checks with Soda, transformations with dbt, and delivering analytics-ready data to Metabase. A modern, scalable workflow for reliable data processing.",
    techCount: 7,
    featureCount: 6,
    technologies: [
      "Python",
      "Apache Airflow",
      "Google Cloud Storage (GCS)",
      "Soda Core (Data Quality)",
      "dbt (Data Build Tool)",
      "Cosmos (dbt + Airflow Integration)",
      "Metabase",
    ],
    keyFeatures: [
      "End-to-end data engineering workflow that simulates real industry practices.",
      "Scalable and robust data architecture design supporting efficient data flow.",
      "Automated ETL/ELT pipelines for extracting, transforming, and loading data.",
      "Comprehensive data quality validation using Soda to ensure accuracy and reliability.",
      "Data warehouse and data mart management for structured analytical storage.",
      "Well-defined data transformations aligned with governance and modeling standards.",
      "Optimized storage and processing to improve pipeline performance and cost efficiency.",
      "Collaboration-oriented data delivery enabling analysts and data scientists to access clean, trusted datasets.",
    ],
    liveDemoUrl:
      "https://drive.google.com/drive/folders/1IkThIkMuJ0I3iuatS7vLEAwF1PeYGxGo?hl=ID",
    githubUrl: "https://github.com/dikcoding/amazon-sales-data-pipeline",
    imageUrl: "/dashboard_amazon_sale.png",
  },
  retail_data_pipeline: {
    title: "Retail Data Pipeline",
    description:
      "Online Retail Data Pipeline is an end-to-end project that builds a complete data processing workflow using a modern data stack. The pipeline includes data ingestion, data quality checks, transformations, and analytics delivery using Airflow, Google Cloud Storage, BigQuery, dbt, Soda, and Metabase.",
    techCount: 7,
    featureCount: 6,
    technologies: [
      "Python",
      "Apache Airflow",
      "Google Cloud Storage (GCS)",
      "Soda Core (Data Quality)",
      "dbt (Data Build Tool)",
      "Cosmos (dbt + Airflow Integration)",
      "Metabase",
    ],
    keyFeatures: [
      "Automated data pipeline for processing the Retail dataset sourced from Kaggle.",
      "Raw data ingestion and centralized storage using Google Cloud Storage (GCS).",
      "Initial and post-transformation data quality checks using Soda to ensure data validity and integrity.",
      "Data transformation using dbt to build dimension tables, fact tables, and analytical datasets.",
      "Cosmos integration enabling each dbt model to appear as individual tasks in the Airflow DAG for full observability.",
      "Interactive dashboards built in Metabase to analyze sales performance, product trends, customer behavior, and revenue metrics.",
    ],
    githubUrl: "https://github.com/dikcoding/online-retail-data-pipeline",
    imageUrl: "/retail_analytics_dashboard.png",
  },
  etl_apple_market: {
    title: "ETL Apple Market",
    description:
      "ETL pipeline for processing Apple stock prices using Airflow, Spark, MinIO, and Postgres. The pipeline fetches data from an API, stores it as JSON, transforms it with Spark, loads it into a data warehouse, and visualizes it with Metabase. Includes sensors, PythonOperator, DockerOperator, and Slack notifier.",
    techCount: 8,
    featureCount: 6,
    technologies: [
      "Python",
      "Apache Airflow",
      "Apache Spark",
      "Docker",
      "MinIO (S3 Storage)",
      "PostgreSQL",
      "Metabase",
      "Slack Webhook",
    ],
    keyFeatures: [
      "Automated ETL pipeline for retrieving Apple stock price data from the Yahoo Finance API.",
      "API Availability Check using an Airflow Sensor to ensure the data source is ready before the pipeline runs.",
      "Data transformation using Apache Spark, including cleaning, schema normalization, and timestamp conversion.",
      "Data storage using MinIO as object storage and PostgreSQL as the data warehouse.",
      "Interactive dashboards built in Metabase, featuring closing price trends, trading volume charts, and average metrics.",
      "Real-time Slack notifications triggered upon successful pipeline execution.",
    ],
    githubUrl: "https://github.com/dikcoding/etl_apple_market",
    imageUrl: "/stock_dashboard.jpg",
  },
  car_sales: {
    title: "Car Sales Analysis",
    description:
      "This project aims to analyze historical car sales data from various regions and manufacturers. The analysis was conducted to understand automotive market trends, identify best-selling models, analyze seasonal patterns, and support future sales forecasting. The insights generated are expected to support strategic decision-making in marketing, inventory management, and investment planning.",
    techCount: 6,
    featureCount: 5,
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Tableau",
    ],
    keyFeatures: [
      "Analyzed sales trends based on regions, brands, and vehicle models.",
      "Identified seasonal patterns and compared sales performance across manufacturers and dealers.",
      "Performed basic predictive analysis using historical data to support business strategy planning.",
      "Implemented feature engineering such as extracting sales_month & sales_year and revenue segmentation.",
      "Created data visualizations including line charts, bar charts, donut charts, and scatter plots for reporting purposes.",
    ],
    liveDemoUrl:
      "https://public.tableau.com/app/profile/andika.fadilla.siagian/viz/car_sales_dashboard_17632894277570/Dashboard",
    githubUrl: "https://github.com/dikcoding/car_sales_anlysis",
    imageUrl: "/dashboard_car_sales.png",
  },
  bbpvp_analyst: {
    title: "BBPVP Medan Vocational Training Program Effectiveness Analysis",
    description:
      "An analysis project focused on evaluating the effectiveness of vocational training programs at BBPVP Medan using Python. This project includes synthetic data generation, data cleaning, exploratory data analysis, statistical modeling, and interactive visualizations to measure the impact of training programs on participant productivity.",
    techCount: 7,
    featureCount: 4,
    technologies: [
      "Python",
      "NumPy",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "Scikit-learn",
      "Statsmodels",
    ],
    keyFeatures: [
      "Analyzed the effectiveness of vocational training programs based on participant data and productivity outcomes.",
      "Calculated attendance rates, graduation rates, and average participant productivity.",
      "Visualized attendance and graduation trends over time using interactive charts.",
      "Analyzed the relationship between training duration, exam scores, and productivity using correlation analysis and linear regression.",
    ],
    githubUrl: "https://github.com/dikcoding/bbpvp_analyst",
    imageUrl: "/bbpvp_analyst.png",
  },
  "dashboard-hr-summary": {
    title: "HR Summary Dashboard",
    description:
      "An interactive dashboard designed to monitor employee data in real-time, including workforce statistics, demographics, performance, departments, locations, and the relationship between age and salary.",
    techCount: 3,
    featureCount: 6,
    technologies: ["Tableau", "draw.io", "Figma"],
    keyFeatures: [
      "Provided an overview of active employees, new hires, and terminated employees in a single dashboard.",
      "Visualized department performance with employee counts and employment status (hired vs terminated).",
      "Analyzed employee demographics based on gender, age, education, and work location.",
      "Explored the correlation between education level and employee performance (Excellent, Good, Satisfactory, Needs Improvement).",
      "Delivered salary insights based on education and gender, including the relationship between age and average salary.",
      "Mapped office and employee locations with interactive filters by gender, employment status, location, and hire date.",
    ],
    liveDemoUrl:
      "https://public.tableau.com/app/profile/andika.fadilla.siagian/viz/HRDashboard_17621332585400/HRSummary",
    imageUrl: "/dashboard-hr-sumarry.png",
  },
  sales_dashboard: {
    title: "Sales Dashboard",
    description:
      "An interactive dashboard designed to monitor key sales metrics such as Sales, Profit, and Quantity in real-time, including Year-over-Year (YoY) comparisons and monthly sales trends.",
    techCount: 3,
    featureCount: 5,
    technologies: ["Tableau", "draw.io", "Figma"],
    keyFeatures: [
      "Displayed key KPIs including Total Sales, Total Profit, and Total Quantity with comparisons against the Previous Year (PY).",
      "Provided monthly trend analysis comparing 2023 vs 2022 performance while highlighting the highest and lowest-performing months.",
      "Analyzed Sales and Profit by product sub-category using interactive bar chart visualizations.",
      "Visualized Sales and Profit trends over time and compared performance against average values (Avg).",
      "Included interactive filters to enable deeper and more flexible data analysis.",
    ],
    liveDemoUrl:
      "https://public.tableau.com/app/profile/andika.fadilla.siagian/viz/SalesCustomerDashboards_17629040855770/SalesDashboard?publish=yes",
    imageUrl: "/sales_dashboard.png",
  },
  "road-accident-analytics": {
    title: "Road Accident Analytics",
    description:
      "An Excel-based analytics dashboard that explores road accident data in the United Kingdom (2021–2022). The project focuses on identifying accident patterns, casualty severity levels, and environmental factors through data-driven insights.",
    techCount: 7,
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
      "Analyzed total casualties based on year and accident severity levels.",
      "Compared accident distribution between urban and rural areas.",
      "Explored the correlation between weather conditions, lighting, and road surface conditions.",
      "Identified the types of vehicles most frequently involved in accidents.",
      "Analyzed accident trend changes between 2021 and 2022.",
    ],
    liveDemoUrl:
      "https://drive.google.com/drive/u/4/folders/1hxRaRQ9zW-4p8vz6pjmSrM9edihzBPk4",
    githubUrl: "#",
    imageUrl: "/dashboard-road-accident.png",
  },
  "bike-sales-project": {
    title: "Bike Sales Project",
    description:
      "An Excel-based analytics dashboard that explores bike sales data to identify customer purchasing patterns. The dashboard analyzes factors such as marital status, region, education level, average income, age, and commute distance to better understand customer preferences and the factors influencing bike purchase decisions.",
    techCount: 7,
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
      "Analyzed average income based on gender and purchase status (purchased vs not purchased).",
      "Compared the number of customers who purchased and did not purchase bikes across different age groups.",
      "Explored customer commute distance distribution and its relationship with bike purchasing decisions.",
      "Provided interactive filters based on marital status, region, and education to enable dynamic data analysis.",
      "Delivered demographic insights to identify potential customer profiles in bike sales.",
    ],
    liveDemoUrl:
      "https://drive.google.com/drive/u/4/folders/1IwwK9wzIRMcuFQubl2fx4ZUjT2DzPClR",
    githubUrl: "#",
    imageUrl: "/dashboard-bike-sales-project.png",
  },
  "uber-rides": {
    title: "Uber Rides Data Warehouse & Analytics",
    description:
      "This project focuses on processing and analyzing the Uber Ride Bookings dataset from Kaggle. It includes detailed ride transaction data such as booking IDs, pickup and drop-off information, vehicle types, and fare details. The project covers both data engineering workflows and analytical processes to generate valuable business insights.",
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
      "Analyzed daily and weekly ride demand trends.",
      "Identified ride cancellation patterns including driver cancellations, customer cancellations, and no-driver-found cases.",
      "Visualized the most frequent pickup and drop-off hotspots.",
      "Analyzed vehicle type performance such as Auto, Go Mini, Go Sedan, UberXL, and eBike.",
      "Integrated weather and traffic-related data to analyze their impact on ride demand and delays.",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/dikcoding/dw_da_uber_rides/tree/main",
    imageUrl: "/data_model.drawio.png",
  },
  "walmart-sales": {
    title: "ETL Walmart Sales Forecasting Data",
    description:
      "This project utilizes the Walmart dataset to build a modern data pipeline using DBT and Snowflake, combined with Tableau for data visualization. The project focuses on sales forecasting, inventory management, and analyzing external factors such as holidays, temperature, fuel prices, CPI, and unemployment rates.",
    techCount: 3,
    featureCount: 5,
    technologies: ["Data Build Tool (DBT)", "Snowflake", "Tableau"],
    keyFeatures: [
      "Built a data pipeline using DBT and Snowflake to automate data transformation workflows.",
      "Performed weekly sales forecasting using time series analysis techniques.",
      "Analyzed the impact of holidays, temperature, fuel prices, CPI, and unemployment on sales performance.",
      "Created Tableau dashboards to visualize sales performance across stores and departments.",
      "Optimized inventory management based on demand patterns and sales forecasting insights.",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/dikcoding/walmart-sales-forecasting-data",
    imageUrl: "/etl_walmart.png",
  },
  "dbt-airbnb": {
    title: "ETL Data Warehouse",
    description:
      "This project is based on Airbnb listings and review datasets, enriched with additional external CSV data such as full moon dates. The project covers data cleaning, dimensional modeling, and snapshot implementation to support scalable analytical workflows.",
    techCount: 3,
    featureCount: 5,
    technologies: ["Data Build Tool (DBT)", "Snowflake", "Preset"],
    keyFeatures: [
      "Cleaned and normalized Airbnb datasets including listings, reviews, and host data for data warehouse readiness.",
      "Built dimensional data models (fact and dimension tables) using DBT to create standardized analytical structures.",
      "Integrated external datasets such as full moon dates to analyze their potential impact on booking activity and review patterns.",
      "Implemented snapshots to track changes in pricing, availability, and ratings over time.",
      "Provided a foundation for analyzing occupancy trends, average nightly prices, review scores, and host popularity.",
    ],
    liveDemoUrl: "#",
    githubUrl: "https://github.com/dikcoding/dbt-airbnb-snowflake-project",
    imageUrl: "/etl_data_warehouse.png",
  },
  data_warehouse: {
    title: "SQL Data Warehouse",
    description:
      "A comprehensive project focused on building a modern data warehouse using SQL Server, covering ETL processes, dimensional data modeling, and analytical workflows.",
    techCount: 3,
    featureCount: 5,
    technologies: ["SQL Server", "draw.io", "Notion"],
    keyFeatures: [
      "Designed a data warehouse architecture using the Star Schema approach with fact and dimension tables.",
      "Built ETL processes to extract, clean, and load data into a SQL Server Data Warehouse environment.",
      "Implemented Slowly Changing Dimensions (SCD) and snapshot techniques to track historical data changes.",
      "Optimized query performance using indexing, partitioning, and materialized views.",
      "Developed analytical dashboards and data visualizations to generate business insights.",
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
