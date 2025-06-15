"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Habib Maafa</h3>
          <p className="text-gray-400 mb-6">
            Finance and law student passionate about international business and legal studies
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <a
              href="mailto:habib.maafa@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              habib.maafa@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/habib-maafa/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Habib Maafa. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}