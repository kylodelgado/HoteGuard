import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hotel Emergency Beacon System | NYC Safe Hotels Act Compliance",
  description:
    "Ensure your NYC hotel meets the Safe Hotels Act with our advanced emergency beacon system. Bluetooth panic buttons, real-time location tracking, and full compliance support.",
  keywords: [
    "NYC hotel compliance",
    "Safe Hotels Act",
    "panic button system",
    "hotel worker safety",
    "emergency beacon",
    "bluetooth safety device",
    "hotel security NYC",
    "compliance solution",
    "hotel safety law",
    "wearable panic button",
  ],
  openGraph: {
    title: "Hotel Emergency Beacon System | NYC Safe Hotels Act Compliance",
    description:
      "Ensure your NYC hotel meets the Safe Hotels Act with our advanced emergency beacon system. Bluetooth panic buttons, real-time location tracking, and full compliance support.",
    type: "website",
    locale: "en_US",
    url: "https://www.hotelemergencybeacon.com/",
    siteName: "Hotel Emergency Beacon System",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hotel Emergency Beacon System | NYC Safe Hotels Act Compliance",
    description:
      "Ensure your NYC hotel meets the Safe Hotels Act with our advanced emergency beacon system. Bluetooth panic buttons, real-time location tracking, and full compliance support.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <div className="animated-gradient-bg min-h-screen w-full flex flex-col">
          {/* Skip to content link for accessibility */}
          <a href="#main-content" className="sr-only focus:not-sr-only absolute left-2 top-2 bg-blue-700 text-white px-4 py-2 rounded z-50">Skip to main content</a>
          {/* Header */}
          <header className="w-full bg-blue-900 text-white shadow-md sticky top-0 z-40">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 sm:px-8 py-4" aria-label="Main navigation">
              <Link href="/" className="text-xl font-bold tracking-tight hover:underline focus:outline-none focus:ring-2 focus:ring-white">Hotel Emergency Beacon</Link>
              <ul className="flex gap-6 text-base font-medium">
                <li><Link href="/" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Home</Link></li>
                <li><Link href="/compliance" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Compliance</Link></li>
                <li><Link href="/product" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Product</Link></li>
                <li><Link href="/case-studies" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Case Studies</Link></li>
                <li><Link href="/contact" className="hover:underline focus:outline-none focus:ring-2 focus:ring-white">Contact</Link></li>
              </ul>
            </nav>
          </header>
          <div id="main-content" className="flex-1 flex flex-col">
            {children}
          </div>
          {/* Footer */}
          <footer className="w-full bg-blue-950 text-blue-100 py-8 mt-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-sm">&copy; {new Date().getFullYear()} Hotel Emergency Beacon System. All rights reserved.</div>
              <div className="flex gap-4 text-sm">
                <a href="#compliance-heading" className="hover:underline">Compliance</a>
                <a href="#product-heading" className="hover:underline">Product</a>
                <a href="#contact" className="hover:underline">Contact</a>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
