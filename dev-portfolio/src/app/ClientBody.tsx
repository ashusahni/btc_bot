"use client";

import { useEffect } from "react";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export default function ClientBody({
  children,
}: {
  children: React.ReactNode;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = "antialiased";
  }, []);

  return (
    <ThemeProvider defaultTheme="light" storageKey="portfolio-theme">
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </ThemeProvider>
  );
}
