import type { Metadata } from "next";
import "./globals.css";
import { PageContainer } from "@/components/layout/PageContainer";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { createPageMetadata, SITE_URL } from "@/lib/metadata";

const homeMetadata = createPageMetadata({
  title: "Katleho Makoro | Junior Software Developer",
  description:
    "Portfolio of Katleho Makoro, a junior software developer building full-stack web applications, enterprise systems, APIs, and relational databases.",
  path: "/",
  socialTitle: "Katleho Makoro | Junior Software Developer",
});

export const metadata: Metadata = {
  ...homeMetadata,
  metadataBase: SITE_URL,
  title: {
    default: "Katleho Makoro | Junior Software Developer",
    template: "%s | Katleho Makoro",
  },
  authors: [{ name: "Katleho Makoro" }],
  creator: "Katleho Makoro",
  icons: {
    icon: "/icon.svg",
  },
};

const themeScript = `
  try {
    const savedTheme = localStorage.getItem("portfolio-theme");
    document.documentElement.dataset.theme = savedTheme === "dark" ? "dark" : "light";
  } catch {
    document.documentElement.dataset.theme = "light";
  }
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA" data-scroll-behavior="smooth" data-theme="light" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="bg-background text-foreground antialiased">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Header />
        <PageContainer>{children}</PageContainer>
        <Footer />
      </body>
    </html>
  );
}
