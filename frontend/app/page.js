"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-transparent text-gray-900 dark:bg-transparent dark:text-white relative z-10 overflow-x-hidden">
      <section className="relative flex flex-col items-center justify-center min-h-screen text-center px-6 bg-white/70 dark:bg-black/70">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute -top-32 -left-32 w-96 h-96 bg-blue-400 dark:bg-blue-800 rounded-full mix-blend-multiply blur-3xl"
        />
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-400 dark:bg-indigo-800 rounded-full mix-blend-multiply blur-3xl"
        />

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold z-10">
          Student Admission Predictor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg md:text-xl max-w-2xl z-10 text-gray-700 dark:text-gray-300">
          Prediksi peluang diterima kuliah berdasarkan nilai akademik,
          kehadiran, dan aktivitas dengan AI + Machine Learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 z-10">
          <Link href="/predict">
<Button
  size="lg"
  className="bg-white text-gray-700 border border-gray-300 hover:scale-105 hover:bg-gray-200 
  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
  font-semibold px-8 py-6 text-lg rounded-xl shadow-lg transition-transform">
  Mulai Prediksi
</Button>

          </Link>
        </motion.div>
      </section>

      <section className="py-24 bg-white/70 dark:bg-black/70">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12">
            Fitur Utama
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cepat & Akurat",
                desc: "Prediksi berbasis model machine learning dengan akurasi tinggi.",
              },
              {
                title: "Mudah Digunakan",
                desc: "Cukup isi data sederhana lalu dapatkan hasil instan.",
              },
              {
                title: "Gratis & Terbuka",
                desc: "Aplikasi ini gratis dan bisa dikembangkan lebih lanjut.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60, rotate: -3 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: i * 0.2 }}>
                <Card className="p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform border dark:border-gray-700">
                  <CardHeader>
                    <CardTitle>{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300">{f.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/70 dark:bg-black/70">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Analisis Lebih Mendalam
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Tidak hanya prediksi diterima atau tidak, aplikasi ini juga
              memberikan insight faktor mana yang paling mempengaruhi hasil.
            </p>
            <Button
              className="bg-white text-gray-700 hover:bg-gray-200 border border-gray-300 
              dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-semibold px-6 py-4 rounded-xl shadow-md transition-transform hover:scale-105">
              Lihat Detail
            </Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-200 to-blue-400 dark:from-blue-900 dark:to-blue-700 rounded-2xl h-64"
          />
        </div>
      </section>

      <section className="py-24 bg-white/70 dark:bg-black/70">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-indigo-300 to-indigo-500 dark:from-indigo-800 dark:to-indigo-900 rounded-2xl h-64"
          />

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tentang Aplikasi
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Aplikasi ini dikembangkan dengan FastAPI (backend) + Next.js
              (frontend). Menggunakan model Machine Learning untuk memprediksi
              penerimaan mahasiswa secara interaktif, modern, dan mudah
              digunakan.
            </p>
            <Button
              className="bg-white text-gray-700 hover:bg-gray-200 border border-gray-300 
              dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700 font-semibold px-6 py-4 rounded-xl shadow-md transition-transform hover:scale-105">
              Pelajari Lebih Lanjut
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
