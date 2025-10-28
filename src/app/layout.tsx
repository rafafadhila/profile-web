import type { Metadata } from "next";
import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/themeProvider";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  weight: ['500', '600', '700', '800'],
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Rafa Fadhila Profile Website || Web Developer",
  description: "",
  keywords: ['Rafa Fadhila Putra', 'Web Developer', 'Web Designer', 'Front End Developer', 'Next.Js', 'Javascript'],
  authors: [{
    name: 'Rafa Fadhila Putra',
  }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <ThemeProvider>
        {children}
        <ToastContainer></ToastContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
