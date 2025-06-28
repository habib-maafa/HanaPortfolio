"use client";

import { motion } from "framer-motion";
import Header from "../components/Header";
import WorkExperienceSection from "../components/WorkExperienceSection";
import EducationSection from "../components/EducationSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100">
      <Header />
      
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-950"
        >
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Finance & Law Enthusiast
              <span className="block text-blue-600">Habib Maafa</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
              Student in finance and international law with experience in audit and sales.
              Always eager to connect and collaborate.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <a
                href="mailto:habib.maafa@gmail.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 inline-flex items-center"
              >
                Get In Touch
              </a>
              <a
                href="https://www.linkedin.com/in/habib-maafa/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 dark:text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 inline-flex items-center"
              >
                View LinkedIn
              </a>
            </motion.div>
          </div>
        </motion.section>

        <WorkExperienceSection />
        <EducationSection />
      </main>
      
      <Footer />
    </div>
  );
}