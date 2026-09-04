import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

const sfPro = localFont({
  src: "../../public/fonts/SF-Pro-Display-Regular.woff2",
  variable: "--font-sf-pro",
  display: "swap",
});

const acorn = localFont({
  src: "../../public/fonts/Acorn.woff2",
  variable: "--font-acorn",
  display: "swap",
});

const bruce = localFont({
  src: "../../public/fonts/BruceForeverRegular.woff2",
  variable: "--font-bruce",
  display: "swap",
});

// Update NEXT_PUBLIC_SITE_URL in your Vercel env (or this fallback) to your real domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://harishchaurasia.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Harish Chaurasia - AI Engineer",
    template: "%s | Harish Chaurasia",
  },
  description:
    "Harish Chaurasia is an AI Engineer, software engineer, and forward-deployed engineer (MS CS, AI/ML) building AI agents, MCP servers, RAG and LLM systems, and evaluation pipelines - shipped from research to production, including delivery with Los Alamos National Lab.",
  keywords: [
    "Harish Chaurasia",
    "AI Engineer",
    "Machine Learning Engineer",
    "Software Engineer",
    "Forward Deployed Engineer",
    "AI Agents",
    "Agentic AI",
    "MCP",
    "Model Context Protocol",
    "LLM",
    "LLM Evaluation",
    "RAG",
    "Vector Databases",
    "Prompt Engineering",
    "Reinforcement Learning",
    "Full-Stack Engineer",
    "Arizona State University",
    "New Grad AI Engineer",
  ],
  authors: [{ name: "Harish Chaurasia", url: siteUrl }],
  creator: "Harish Chaurasia",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Harish Chaurasia",
    title: "Harish Chaurasia - AI Engineer",
    description:
      "AI Engineer building AI agents, MCP servers, RL environments, and applied LLM systems. MS CS (AI/ML) at ASU '26.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harish Chaurasia - AI Engineer",
    description:
      "AI Engineer building AI agents, MCP servers, RL environments, and applied LLM systems.",
    creator: "@harischaurasia",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/mtrxk.png",
    shortcut: "/mtrxk.png",
    apple: "/mtrxk.png",
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Harish Chaurasia",
  url: siteUrl,
  image: `${siteUrl}/harish02.webp`,
  jobTitle: "AI Engineer",
  email: "mailto:mail.harishchaurasia@gmail.com",
  description:
    "AI Engineer and full-stack software engineer specializing in agentic AI, MCP servers, RL environments, and applied LLM systems.",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Arizona State University",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Machine Learning",
    "Large Language Models",
    "AI Agents",
    "Multi-Agent Systems",
    "Model Context Protocol",
    "Retrieval-Augmented Generation",
    "LLM Evaluation and Benchmarking",
    "Reinforcement Learning",
    "Forward Deployed Engineering",
    "Full-Stack Development",
  ],
  sameAs: [
    "https://github.com/harishchaurasia",
    "https://www.linkedin.com/in/harishchaurasia",
    "https://x.com/harischaurasia",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${sfPro.variable} ${acorn.variable} ${bruce.variable}`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
