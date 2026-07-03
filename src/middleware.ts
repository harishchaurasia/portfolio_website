import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Old resume URLs that were shared before the stable /resume page existed.
// Handled in middleware (not next.config redirects) so special characters like
// the apostrophe/space in "Harish's Resume.pdf" match reliably once decoded.
const OLD_RESUME_PATHS = new Set([
  "/harish's resume.pdf",
  "/harish_chaurasia_resume.pdf",
  "/resume2025.pdf",
]);

export function middleware(request: NextRequest) {
  const path = decodeURIComponent(request.nextUrl.pathname).toLowerCase();
  if (OLD_RESUME_PATHS.has(path)) {
    return NextResponse.redirect(new URL("/resume", request.url), 308);
  }
  return NextResponse.next();
}

export const config = {
  // Run on all requests except Next internals; the .pdf check happens in code
  // so encoded special characters (%20, apostrophe) always match reliably.
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
