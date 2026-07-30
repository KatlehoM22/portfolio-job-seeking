import type { Metadata } from "next";

const productionDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl =
  process.env.SITE_URL ??
  (productionDomain ? `https://${productionDomain}` : "http://localhost:3000");

export const SITE_URL = new URL(siteUrl);

const SITE_NAME = "Katleho Makoro Portfolio";
const DEFAULT_SOCIAL_IMAGE = {
  url: "/projects/portfolio_website/portfolio_screenshot.png",
  width: 1557,
  height: 727,
  alt: "Katleho Makoro software developer portfolio homepage",
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path: string;
  image?: string;
  socialTitle?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
  image,
  socialTitle = `${title} | Katleho Makoro`,
}: PageMetadataOptions): Metadata {
  const images = image
    ? [{ url: image, alt: socialTitle }]
    : [DEFAULT_SOCIAL_IMAGE];

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      type: "website",
      locale: "en_ZA",
      siteName: SITE_NAME,
      title: socialTitle,
      description,
      url: path,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: images.map(({ url }) => url),
    },
  };
}
