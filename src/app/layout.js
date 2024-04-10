import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Wow Dental Center",
    absolute: "Wow Dental Center",
    template: "%s | Wow Dental Center",
  },
  description: "Waves of Welcoming Dental Center",
  keywords: "dental, clinic, health, teeth, smile, care, service, treatment",
  openGraph: {
    title: "Wow Dental Center",
    description: "Waves of Welcoming Dental Center",
    siteName: "Wow Dental Center",
    type: "website",
    locale: "en_US",
    images: ["/logo/logo.svg"],
  },
  appleWebApp: true,
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
