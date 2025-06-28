"use client";

import { useTheme } from "next-themes";
import { Lamp } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const toggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      onClick={toggle}
      title="Toggle dark mode"
      aria-label="Toggle dark mode"
      className="text-gray-600 hover:text-blue-600 transition-colors"
    >
      <Lamp className="w-5 h-5" />
    </button>
  );
}
