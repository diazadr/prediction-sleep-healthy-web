"use client";

export default function Footer() {
  return (
    <footer className="py-6 text-center text-sm text-gray-700 dark:text-gray-400 bg-white/70 dark:bg-black/70">
      © {new Date().getFullYear()} Student Admission Predictor. Dibuat dengan ❤️
    </footer>
  );
}
