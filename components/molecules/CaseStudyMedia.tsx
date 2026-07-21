import Image from "next/image";
import { FiImage } from "react-icons/fi";
import type { ReactNode } from "react";

type CaseStudyScreenshotProps = {
  label: string;
  caption: string;
  src?: string;
  alt?: string;
  priority?: boolean;
};

export function CaseStudyScreenshot({
  label,
  caption,
  src,
  alt,
  priority = false,
}: CaseStudyScreenshotProps) {
  return (
    <figure className="case-study-media">
      <div className="case-study-media-frame">
        {src ? (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            priority={priority}
            sizes="(max-width: 720px) calc(100vw - 3rem), 960px"
            className="case-study-media-image"
          />
        ) : (
          <div className="case-study-media-placeholder">
            <FiImage className="h-7 w-7" aria-hidden="true" />
            <span className="tech-label">Screenshot placeholder</span>
            <strong>{label}</strong>
            <small>Add an anonymised product screenshot here</small>
          </div>
        )}
      </div>
      <figcaption>
        <span>{label}</span>
        {caption}
      </figcaption>
    </figure>
  );
}

export function CaseStudyGallery({ children }: { children: ReactNode }) {
  return <div className="case-study-gallery">{children}</div>;
}
