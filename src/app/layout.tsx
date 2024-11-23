import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/styles/custom.css";
import "react-toastify/dist/ReactToastify.css";
import Navigation from "@/components/Navigation";
import RainAnimation from "@/components/RainAnimation";
import Providers from "@/components/Providers";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Café Serenity",
  description: "Experience tranquility in every sip",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="relative min-h-screen bg-gradient-to-br from-amber-50 to-orange-50 overflow-hidden">
            <RainAnimation />
            <Navigation />
            <main className="relative z-10">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
