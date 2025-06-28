"use client";

import { Mail, Linkedin } from "lucide-react";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
      <header className="border-b border-gray-200 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Habib Maafa</h1>
              <p className="text-lg text-gray-600 dark:text-gray-300 mt-1">Finance and Law Student</p>
            </div>
            <div className="flex items-center space-x-6">
              <DarkModeToggle />
              <a
                href="mailto:habib.maafa@gmail.com"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200 group"
                aria-label="Email contact"
              >
                <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="hidden sm:inline">Contact</span>
              </a>
              <a
                href="https://www.linkedin.com/in/habib-maafa/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors duration-200 group"
                aria-label="LinkedIn profile"
              >
                <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                <span className="hidden sm:inline">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </header>
  );
}
