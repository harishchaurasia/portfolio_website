import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaFilePdf } from "react-icons/fa";
import Background from "../../components/Background";
import Projects from "../../components/Projects";
import Footer from "../../components/Footer";
import { GearsProvider } from "../../components/gears/GearSystem";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects by Harish Chaurasia - AI agents, LLM evaluation, RAG, RL environments, MCP servers, and full-stack systems.",
};

export default function ProjectsPage() {
  return (
    <GearsProvider>
      <Background />

      <header className="relative z-30 mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-8">
        <Link href="/" className="btn btn-outline btn-sm">
          <FaArrowLeft className="btn-arrow-left" />
          <span>Back to portfolio</span>
        </Link>
        <a
          href="/resume"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline btn-sm"
        >
          <FaFilePdf className="btn-icon" />
          <span>Resume</span>
        </a>
      </header>

      <main className="relative z-20 mx-auto max-w-6xl px-4 pb-10 md:px-8">
        <Projects />
      </main>

      <Footer />
    </GearsProvider>
  );
}
