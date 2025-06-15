"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Alexandra Thompson</h3>
          <p className="text-gray-400 mb-6">
            Dedicated law student with a passion for justice and legal excellence
          </p>
          <div className="flex justify-center space-x-8 mb-8">
            <a 
              href="mailto:alexandra.thompson@law.columbia.edu" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              alexandra.thompson@law.columbia.edu
            </a>
            <a 
              href="https://linkedin.com/in/alexandra-thompson-law" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Alexandra Thompson. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}