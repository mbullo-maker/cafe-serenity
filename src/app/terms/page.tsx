import { Metadata } from "next";
import { Shield, Scale, Bell, UserCheck, FileWarning, Link as LinkIcon, AlertTriangle, BookOpen, Gavel, Mail, ExternalLink } from 'lucide-react';
import Link from "next/link";
import Footer from "@/components/layout/Footer";
import { ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: "Terms and Services - Café Serenity",
  description: "Terms and Services for Café Serenity - Your favorite neighborhood cafe",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white">
      {/* Quick Links Navigation */}
      <nav className="bg-amber-100 py-4 sticky top-0 z-10 shadow-md">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-amber-800 hover:text-amber-600 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <div className="flex gap-6">
              <a href="#general-terms" className="text-amber-800 hover:text-amber-600">General Terms</a>
              <a href="#privacy" className="text-amber-800 hover:text-amber-600">Privacy</a>
              <a href="#conduct" className="text-amber-800 hover:text-amber-600">User Conduct</a>
              <a href="#contact" className="text-amber-800 hover:text-amber-600">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <header className="text-center mb-16">
          <h1 className="text-5xl font-bold text-amber-900 mb-6">Terms and Services</h1>
          <div className="flex items-center justify-center text-amber-700 mb-8">
            <Scale className="w-6 h-6 mr-2" />
            <p className="text-lg"><strong>Effective Date: January 10, 2025</strong></p>
          </div>
          <div className="max-w-2xl mx-auto">
            <p className="text-lg text-gray-700">Welcome to Café Serenity! By accessing or using our services, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.</p>
          </div>
        </header>

        <main className="prose prose-amber max-w-none">
          <section id="general-terms" className="mb-12 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Shield className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">1. General Terms</h2>
            </div>
            <p className="text-gray-700">By using Café Serenity's website and services, you agree to these Terms and Services. These terms constitute a legally binding agreement between you and Café Serenity regarding your use of our services.</p>
          </section>

          <section className="mb-12 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Bell className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">2. Changes to Terms</h2>
            </div>
            <p className="text-gray-700">Café Serenity reserves the right to modify these Terms at any time. We will notify you of any changes by posting the new Terms on this page. Your continued use of the services after any changes constitutes your acceptance of the new Terms.</p>
          </section>

          <section id="privacy" className="mb-12 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <UserCheck className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">3. Privacy Policy</h2>
            </div>
            <p className="text-gray-700">Your privacy is important to us. Our Privacy Policy explains how we collect, use, and protect your personal information. By using our services, you agree to our Privacy Policy.</p>
          </section>

          <section id="conduct" className="mb-12 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <FileWarning className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">4. User Conduct</h2>
            </div>
            <p className="text-gray-700">Users of Café Serenity's services must conduct themselves in a respectful manner. Any form of harassment, abuse, or disruptive behavior will not be tolerated and may result in termination of service.</p>
          </section>

          <section className="mb-12 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">5. Disclaimer</h2>
            </div>
            <p className="text-gray-700">Café Serenity's services are provided "as is" without any warranties. We do not guarantee that our services will be uninterrupted, timely, secure, or error-free.</p>
          </section>

          <section className="mb-12 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Gavel className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">6. Governing Law</h2>
            </div>
            <p className="text-gray-700">These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Café Serenity operates, without regard to its conflict of law provisions.</p>
          </section>

          <section id="contact" className="mb-12 p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <div className="flex items-center mb-6">
              <Mail className="w-8 h-8 text-amber-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900 m-0">7. Contact Information</h2>
            </div>
            <p className="text-gray-700">For any questions about these Terms, please contact us at:</p>
            <div className="mt-4">
              <p className="font-medium">Café Serenity</p>
              <p>Email: mbullolewis@gmail.com</p>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
}
