import type { Metadata } from "next";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt, FaDownload } from "react-icons/fa";
import MarkSplashSeen from "../../components/MarkSplashSeen";

export const metadata: Metadata = {
  title: "Resume",
  description: "Resume of Harish Chaurasia - AI Engineer.",
};

// Stable /resume URL. The embedded PDF lives at /resume.pdf, so updating the
// resume is just replacing that one file - the shareable link never changes.
const PDF = "/resume.pdf";

export default function ResumePage() {
  return (
    <main className="flex min-h-screen flex-col bg-[#05070c] text-white">
      <MarkSplashSeen />
      <header className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 md:px-6">
        <Link href="/" className="btn btn-outline btn-sm">
          <FaArrowLeft className="btn-arrow-left" />
          <span className="hidden sm:inline">Back to portfolio</span>
          <span className="sm:hidden">Back</span>
        </Link>
        <h1 className="hidden font-acorn text-base font-bold text-[#30c555] sm:block md:text-lg">
          Harish Chaurasia - Resume
        </h1>
        <div className="flex items-center gap-2">
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline btn-sm"
          >
            <FaExternalLinkAlt className="btn-icon" />
            <span>Open</span>
          </a>
          <a
            href={PDF}
            download="Harish_Chaurasia_Resume.pdf"
            className="btn btn-primary btn-sm"
          >
            <FaDownload className="btn-icon" />
            <span>Download</span>
          </a>
        </div>
      </header>

      <object
        data={`${PDF}#view=Fit&zoom=page-fit`}
        type="application/pdf"
        className="w-full flex-1"
        aria-label="Resume PDF"
      >
        {/* Fallback for browsers/devices that can't inline PDFs (e.g. iOS) */}
        <div className="flex flex-col items-center justify-center gap-4 p-10 text-center">
          <p className="text-gray-300">
            Your browser can&apos;t display the PDF inline.
          </p>
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#30c555] px-5 py-2 font-semibold text-zinc-950"
          >
            Open the resume
          </a>
        </div>
      </object>
    </main>
  );
}
