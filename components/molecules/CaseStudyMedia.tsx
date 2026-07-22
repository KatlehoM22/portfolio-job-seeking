"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { FiImage, FiMaximize2, FiX } from "react-icons/fi";
import { useEffect, useState, type ReactNode } from "react";

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
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <figure className="case-study-media">
      <div className="case-study-media-frame">
        {src ? (
          <button
            type="button"
            className="case-study-media-open"
            aria-label={`View full-size ${label} screenshot`}
            onClick={() => setIsOpen(true)}
          >
            <Image
              src={src}
              alt={alt ?? label}
              fill
              priority={priority}
              sizes="(max-width: 720px) calc(100vw - 3rem), 960px"
              className="case-study-media-image"
            />
            <span className="case-study-media-zoom" aria-hidden="true">
              <FiMaximize2 />
              Expand
            </span>
          </button>
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

      {src && isOpen
        ? createPortal(
            <div
              className="case-study-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={`${label} screenshot preview`}
              onClick={(event) => {
                if (event.target === event.currentTarget) setIsOpen(false);
              }}
            >
              <div className="case-study-lightbox-dialog">
                <button
                  type="button"
                  className="case-study-lightbox-close"
                  aria-label="Close screenshot preview"
                  autoFocus
                  onClick={() => setIsOpen(false)}
                >
                  <FiX aria-hidden="true" />
                </button>
                <div className="case-study-lightbox-image">
                  <Image
                    src={src}
                    alt={alt ?? label}
                    fill
                    sizes="96vw"
                    className="object-contain"
                  />
                </div>
                <div className="case-study-lightbox-caption">
                  <span>{label}</span>
                  <p>{caption}</p>
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </figure>
  );
}

export function CaseStudyGallery({ children }: { children: ReactNode }) {
  return <div className="case-study-gallery">{children}</div>;
}
