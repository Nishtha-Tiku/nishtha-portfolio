import type { Metadata } from "next";
import { Bricolage_Grotesque, IBM_Plex_Sans } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: "Nishtha Tiku | Java Backend Developer",
  description:
    "Java backend developer building enterprise integration microservices with Spring Boot, Apache Camel and Kafka, and adding LLMs and RAG to them.",
  openGraph: {
    title: "Nishtha Tiku | Java Backend Developer",
    description: "Enterprise ERP integrations, microservices and applied AI.",
    type: "website",
  },
};

const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    document.documentElement.dataset.theme = saved === "light" ? "light" : "dark";
  } catch (e) {
    document.documentElement.dataset.theme = "dark";
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
