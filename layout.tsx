import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Buildertrend KPI Agent",
  description: "AI-agent workflow proposal for KPI automation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
