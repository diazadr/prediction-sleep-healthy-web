"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form, FormField, FormItem, FormLabel, FormControl, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";

// Validasi pake Zod
const schema = z.object({
  usia: z.coerce.number().min(0).max(120),
  durasi_tidur: z.coerce.number().min(0).max(24),
  kualitas_tidur: z.coerce.number().min(0).max(10),
  level_aktivitas_fisik: z.coerce.number().min(0).max(100),
  level_stres: z.coerce.number().min(0).max(10),
  denyut_jantung: z.coerce.number().min(0).max(250),
  langkah_harian: z.coerce.number().min(0).max(100000),
  sistolik: z.coerce.number().min(50).max(250),
  diastolik: z.coerce.number().min(30).max(150),
  jenis_kelamin: z.string(),
  pekerjaan: z.string(),
  kategori_bmi: z.string(),
});

export default function PredictPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (values) => {
    setLoading(true);
    setResult(null);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": process.env.NEXT_PUBLIC_API_KEY,
      },
      body: JSON.stringify(values),
    });
      const data = await res.json();
      setResult(data);
    } catch {
      setResult({ error: "Gagal memproses prediksi." });
    } finally {
      setLoading(false);
    }
  };

  const numericFields = [
    { name: "usia", label: "Usia (tahun)" },
    { name: "durasi_tidur", label: "Durasi Tidur (jam)" },
    { name: "kualitas_tidur", label: "Kualitas Tidur (0-10)" },
    { name: "level_aktivitas_fisik", label: "Aktivitas Fisik (0-100)" },
    { name: "level_stres", label: "Level Stres (0-10)" },
    { name: "denyut_jantung", label: "Denyut Jantung (bpm)" },
    { name: "langkah_harian", label: "Langkah Harian" },
    { name: "sistolik", label: "Tekanan Darah Sistolik" },
    { name: "diastolik", label: "Tekanan Darah Diastolik" },
  ];

  return (
<main className="min-h-screen bg-transparent text-gray-900 dark:text-white relative z-10 overflow-x-hidden">


<section className="relative flex flex-col items-center justify-center text-center px-6 py-24 bg-white/70 dark:bg-black/70 overflow-hidden">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold z-10 text-center mb-12"
        >
          Formulir Prediksi Gangguan Tidur
        </motion.h1>

        <div className="w-full max-w-5xl mx-auto z-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {numericFields.map((field) => (
                  <FormField
                    key={field.name}
                    control={form.control}
                    name={field.name}
                    render={({ field: f }) => (
                      <FormItem>
                        <FormLabel>{field.label}</FormLabel>
                        <FormControl>
                          <Input type="number" {...f} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                ))}

                <FormField
                  control={form.control}
                  name="jenis_kelamin"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Jenis Kelamin</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Female">Perempuan</SelectItem>
                          <SelectItem value="Male">Laki-laki</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="pekerjaan"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Pekerjaan</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {[
                            "Engineer", "Teacher", "Doctor", "Nurse",
                            "Scientist", "Software Engineer", "Salesperson",
                            "Sales Representative", "Lawyer", "Accountant",
                          ].map((job) => (
                            <SelectItem key={job} value={job}>{job}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="kategori_bmi"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Kategori BMI</FormLabel>
                      <Select onValueChange={field.onChange}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Pilih" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Normal">Normal</SelectItem>
                          <SelectItem value="Normal Weight">Normal Weight</SelectItem>
                          <SelectItem value="Overweight">Overweight</SelectItem>
                          <SelectItem value="Obese">Obese</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled={loading}
                  className="bg-white text-gray-700 border border-gray-300 hover:scale-105 hover:bg-gray-200 
  dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 
  font-semibold px-8 py-6 text-lg rounded-xl shadow-lg transition-transform"
                >
                  {loading ? "Memproses..." : "Prediksi Sekarang"}
                </Button>
              </div>

              {result && (
                <div className="mt-8 bg-white/70 dark:bg-gray-900/70 p-6 rounded-xl shadow">
                  {result.error ? (
                    <p className="text-red-600">{result.error}</p>
                  ) : (
                    <>
                      <p className="text-lg font-semibold">
                        Status: <span>{result.label}</span>
                      </p>
                      <p className="text-sm opacity-80">
                        Probabilitas: {result.probability ? (result.probability * 100).toFixed(2) + "%" : "N/A"}
                      </p>
                    </>
                  )}
                </div>
              )}
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
}
