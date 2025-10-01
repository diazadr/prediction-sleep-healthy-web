"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 left-0 flex justify-between items-center px-6 py-4 transition-colors duration-500 z-50 ${
        scrolled
          ? "bg-white/90 dark:bg-gray-900/90 shadow backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <Link href="/" className="font-bold text-lg text-gray-800 dark:text-gray-100">
        Sleep Health Admission Predictor
      </Link>
      <div className="flex items-center space-x-4">
        <Link href="#features" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Fitur
        </Link>
        <Link href="#about" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Tentang
        </Link>
        <Link href="/predict" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">
          Prediksi
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
