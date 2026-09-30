import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrainsMono",
});

export const metadata: Metadata = {
  title: {
    default: "Jhonatan Lima | Software Engineer",
    template: "%s | Jhonatan Lima",
  },
  description:
    "Jhonatan Lima — Software Engineer focused on building elegant, robust, and scalable solutions across web applications, cloud architectures, databases, and AI-powered systems.",
  keywords: [
    "Jhonatan Lima",
    "Software Engineer",
    "Full Stack Engineer",
    "React",
    "Next.js",
    "Laravel",
    "Node.js",
    "TypeScript",
    "PHP",
  ],
  authors: [
    {
      name: "Jhonatan Lima",
      url: "https://www.linkedin.com/in/dev-jhone/",
    },
  ],
  creator: "Jhonatan Lima",
  openGraph: {
    type: "website",
    locale: "en_US",
    //url
    siteName: "Jhonatan Lima | Software Engineer",
    title: "Jhonatan Lima | Software Engineer",
    description:
      "Professional portfolio of Jhonatan Lima, Software Engineer focused on building elegant, robust, and scalable solutions.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <NextIntlClientProvider>
          <Header />
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
