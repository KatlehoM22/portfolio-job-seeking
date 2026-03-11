import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Katleho Makoro | Full-Stack Developer",
    template: "%s | Katleho Makoro",
  },
  description:
    "Enterprise-ready portfolio showcasing full-stack projects, architecture thinking, and delivery discipline.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jakarta.variable} ${jetbrains.variable} bg-background text-foreground antialiased`}
      >
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </body>
    </html>
  );
}
