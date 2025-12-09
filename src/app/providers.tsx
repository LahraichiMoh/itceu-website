"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export function AppProviders({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider defaultTheme="light">
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Header />
          {children}
          <Footer />
        </TooltipProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}
