import React, { useState, useEffect } from "react";
import { FiExternalLink, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const fullText = "Information Systems graduate";

  useEffect(() => {
    const handleTyping = () => {
      if (isDeleting) {
        setTypedText((prev) => prev.substring(0, prev.length - 1));
      } else {
        setTypedText((prev) => fullText.substring(0, prev.length + 1));
      }
      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
      }
    };
    const typingSpeed = isDeleting ? 80 : 150;
    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting]);

  return (
    <div
      id="home"
      className="dark-grid-background relative flex min-h-screen items-center py-24 text-white"
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <div className="relative z-10 w-full flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold leading-tight lg:leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              <span className="text-slate-100">Data</span> Analyst & Engineer
            </span>
          </h1>

          <p className="mt-4 text-xl lg:text-2xl font-medium text-slate-300 h-8">
            {typedText}
            <span className="inline-block w-1 h-6 ml-1 bg-purple-500 align-text-bottom animate-pulse"></span>
          </p>

          <p className="mt-8 text-base lg:text-lg text-slate-400 max-w-2xl">
            Membangun sistem data yang efisien, akurat, dan siap analisis untuk
            mendukung pengambilan keputusan berbasis data.
          </p>

          <div className="flex flex-wrap gap-3 mt-8 justify-center max-w-3xl">
            {[
              "Python",
              "Pandas",
              "NumPy",
              "SQL",
              "Microsoft SQL Server",
              "PostgreSQL",
              "dbt",
              "Snowflake",
              "Data Warehouse",
              "ETL",
              "Airflow",
              "Docker",
              "Tableau",
              "Dashboarding",
              "Data Visualization",
              "Microsoft Excel",
              "Git",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 text-sm font-light text-slate-300 bg-white/5 border border-white/10 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center flex-col sm:flex-row mt-12 space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#portofolio"
              className="flex items-center px-6 py-3 text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg hover:opacity-90 transition-opacity duration-300"
            >
              Projects <FiExternalLink className="ml-2" />
            </a>
            <a
              href="/CV - Andika Fadilla Siagian.pdf"
              download
              className="flex items-center px-6 py-3 text-base font-semibold text-slate-300 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors duration-300"
            >
              Download CV <FiDownload className="ml-2" />
            </a>
          </div>

          <div className="flex space-x-4 mt-7 justify-center">
            <a
              href="https://github.com/dikcoding"
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-slate-700 text-gray-400 hover:bg-slate-800 hover:text-white transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <FaGithub className="text-2xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/dikkasg/"
              className="flex items-center justify-center w-12 h-12 rounded-xl border border-slate-700 text-gray-400 hover:bg-slate-800 hover:text-white transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedinIn className="text-2xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
