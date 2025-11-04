import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shean Hans Teoh | Portfolio",
  description:
    "Software Design with AI for Cloud Computing student passionate about creating impactful digital solutions. Explore my projects, skills, and journey in technology.",
  keywords: [
    "Shean Hans Teoh",
    "Software Engineer",
    "Portfolio",
    "React",
    "Next.js",
    "AI",
    "Cloud Computing",
  ],
  authors: [{ name: "Shean Hans Teoh" }],
  openGraph: {
    title: "Shean Hans Teoh | Portfolio",
    description:
      "Software Design with AI for Cloud Computing student passionate about creating impactful digital solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
