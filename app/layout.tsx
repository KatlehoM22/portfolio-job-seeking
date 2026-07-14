import type { Metadata } from "next";
import "./globals.css";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

export const metadata: Metadata = {
  title: {
    default: "Katleho Makoro | Full-Stack Developer",
    template: "%s | Katleho Makoro",
  },
  description:
    "Enterprise-ready portfolio showcasing full-stack projects, architecture thinking, and delivery discipline.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className="bg-background text-foreground antialiased">
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </body>
    </html>
  );
}
