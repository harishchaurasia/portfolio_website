"use client";

import { useEffect } from "react";

// Marks the splash as already seen for this tab, so navigating back to the
// portfolio from the resume page does not replay the splash screen.
export default function MarkSplashSeen() {
  useEffect(() => {
    try {
      window.sessionStorage.setItem("splashSeen", "1");
    } catch {
      /* ignore */
    }
  }, []);
  return null;
}
