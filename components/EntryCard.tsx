"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";

interface Entry {
  id: number;
  position?: string;
  degree?: string;
  company?: string;
  institution?: string;
  startDate: string;
  endDate: string;
  location: string;
  tasks: string[];
  rating: number;
  recommendations?: { text: string; author: string }[];
  imageUrl?: string;
}

export default function EntryCard({ entry, type = "work" }: { entry: Entry; type?: "work" | "education" }) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-blue-500 fill-current" : "text-gray-300"
        }`}
      />
    ));
  };

  const title = type === "work" ? entry.position : entry.degree;
  const organization = type === "work" ? entry.company : entry.institution;

  return (
    <Link href={`/experience/${entry.id}`} target="_blank">
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.998 }}
        transition={{ duration: 0.2 }}
        tabIndex={0}
        className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg"
        onFocus={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
        onBlur={(e) => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <Card className="h-full hover:shadow-lg transition-all duration-200 border-gray-200 hover:border-blue-200 hover:shadow-blue-50">
          <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
              <p className="text-lg text-blue-600 font-medium mb-2">{organization}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{entry.startDate} - {entry.endDate}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>{entry.location}</span>
                </div>
              </div>
            </div>
            {entry.imageUrl && (
              <div className="ml-4 flex-shrink-0">
                <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-gray-300 rounded-md"></div>
                </div>
              </div>
            )}
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Responsibilities & Achievements</h4>
            <ul className="space-y-2">
              {entry.tasks.map((task, index) => (
                <li key={index} className="text-sm text-gray-700 flex items-start">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  {task}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-2">Performance Rating</h4>
            <div className="flex items-center space-x-1">
              {renderStars(entry.rating)}
              <span className="ml-2 text-sm text-gray-600">({entry.rating}/5)</span>
            </div>
          </div>

          {entry.recommendations && entry.recommendations.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-3">Recommendations</h4>
              <div className="space-y-3">
                {entry.recommendations.map((rec, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-sm text-gray-700 italic mb-2">"{rec.text}"</p>
                    <p className="text-xs text-gray-600 font-medium">— {rec.author}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </motion.div>
    </Link>
  );
}