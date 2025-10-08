"use client";

import Link from "next/link";
import Image from "next/image";
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
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold z-10">
          Sleep Health Admission Predictor
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-6 text-lg md:text-xl max-w-2xl z-10 text-gray-700 dark:text-gray-300">
          Prediksi jenis kesehatan tidur berdasarkan aktivitas sehari hari dan
          kesehatan, dengan teknologi AI & Machine Learning .
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
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
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12">
            Fitur Unggulan
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Cepat & Akurat",
                desc: "Menggunakan model machine learning dengan akurasi tinggi untuk memprediksi hasil penerimaan.",
              },
              {
                title: "Mudah Digunakan",
                desc: "Isi data secara sederhana dan dapatkan hasil prediksi dalam hitungan detik.",
              },
              {
                title: "Gratis & Terbuka",
                desc: "Dikembangkan sebagai proyek terbuka agar dapat dipelajari dan dikembangkan lebih lanjut.",
              },
            ].map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
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
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Analisis Mendalam
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Tidak hanya menampilkan hasil diterima atau tidak, aplikasi juga
              memberikan insight dan saran pengembangan diri berdasarkan data
              yang dimasukkan.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: 8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/analisis.jpg"
              alt="Ilustrasi Analisis Mendalam"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white/70 dark:bg-black/70">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl overflow-hidden shadow-lg">
            <Image
              src="/images/lightbgm.png"
              alt="Ilustrasi Model LightGBM"
              width={600}
              height={400}
              className="object-cover w-full h-64"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Model Canggih
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Sistem ini didukung oleh model LightGBM (LGBM) yang dikenal
              efisien dan cepat dalam memproses data prediktif.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-white/70 dark:bg-black/70">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-12">
            Teknologi yang Digunakan
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center justify-center">
            {[
              { src: "/nextjs.svg", alt: "Next.js" },
              { src: "/fastapi.svg", alt: "FastAPI" },
              { src: "/kaggle.svg", alt: "Kaggle" },
              { src: "/tailwindcss.svg", alt: "TailwindCSS" },
            ].map((tech, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                className="flex flex-col items-center justify-center">
                <Image
                  src={tech.src}
                  alt={tech.alt}
                  width={80}
                  height={80}
                  className="object-contain grayscale hover:grayscale-0 transition-all"
                />
                <p className="mt-4 text-lg font-semibold">{tech.alt}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-white/70 dark:bg-black/70 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-6">
            Tentang Aplikasi
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Aplikasi ini dikembangkan sebagai proyek akhir mata kuliah{" "}
            <strong>Pembelajaran Mesin</strong> di{" "}
            <strong>Politeknik Manufaktur Bandung</strong>. Tujuannya adalah
            untuk mengintegrasikan konsep microservice, machine learning, dan
            visualisasi data ke dalam solusi nyata yang mudah digunakan.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
