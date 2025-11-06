import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/themeProvider";
import { ToastContainer } from "react-toastify";

const montserrat = Montserrat({
  weight: ['500', '600', '700', '800'],
  variable: "--font-montserrat",
  subsets: ["latin"]
})

export const metadata: Metadata = {
  title: "Rafa Fadhila Profile Website || Web Developer",
  description: "Rafa Fadhila — a web developer focused on crafting responsive, efficient, and visually engaging websites with clean, modern code.",
  keywords: ['Rafa Fadhila Putra', 'Web Developer', 'Web Designer', 'Front End Developer', 'Next.Js', 'Javascript'],
  authors: [{
    name: 'Rafa Fadhila Putra',
  }],
  openGraph: {
    title: "Rafa Fadhila Profile Website || Web Developer",
    description: "Rafa Fadhila — a web developer focused on crafting responsive, efficient, and visually engaging websites with clean, modern code.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    siteName: "Future Fitness",
    images: [
      {
        url: "/images/profile-pic.jpg",
        width: 1200,
        height: 630,
        alt: "Rafa Fadhila Web Profile",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rafa Fadhila Profile Website || Web Developer",
    description:
      "Rafa Fadhila — a web developer focused on crafting responsive, efficient, and visually engaging websites with clean, modern code.",
    images: ["https://yourwebsite.com/images/profile-pic.jpg"],
  },
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
