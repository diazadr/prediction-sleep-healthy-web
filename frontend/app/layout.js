import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import BackgroundWrapper from "./components/background-wrapper";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Student Admission Predictor",
  description: "Prediksi diterima / ditolak dengan FastAPI + Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased grid grid-rows-[auto_1fr_auto] min-h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <BackgroundWrapper />
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
