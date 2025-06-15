"use client";

import { Mail, Linkedin } from "lucide-react";

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Alexandra Thompson</h1>
            <p className="text-lg text-gray-600 mt-1">Law Student & Legal Professional</p>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="mailto:alexandra.thompson@law.columbia.edu" 
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
              aria-label="Email contact"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              <span className="hidden sm:inline">Contact</span>
            </a>
            <a 
              href="https://linkedin.com/in/alexandra-thompson-law" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 group"
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