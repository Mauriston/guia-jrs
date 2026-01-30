import "./globals.css";
import type { Metadata } from "next";
import { META } from "@/lib/data";

export const metadata: Metadata = {
  title: META.title,
  description: "Consulta rápida para militares da JRS (DGPM-406 + Ordem Interna).",
  manifest: "/manifest.webmanifest",
  themeColor: "#020617",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Guia JRS",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
