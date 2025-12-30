import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Your Name - Full Stack Developer Portfolio",
  description: "Modern portfolio showcasing full-stack development projects, AI applications, and innovative web solutions",
  keywords: ["full stack developer", "web developer", "Next.js", "React", "TypeScript", "portfolio"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Your Name - Full Stack Developer Portfolio",
    description: "Modern portfolio showcasing full-stack development projects",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
