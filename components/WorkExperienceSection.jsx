"use client";

import { motion } from "framer-motion";
import EntryCard from "./EntryCard";
import { workExperience } from "../data/entries";

export default function WorkExperienceSection() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Professional legal experience gained through internships and clinical programs, 
            demonstrating practical application of legal knowledge and skills.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {workExperience.map((entry, index) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <EntryCard entry={entry} type="work" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}