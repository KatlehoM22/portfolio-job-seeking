"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import {
  FiChevronLeft,
  FiChevronRight,
  FiImage,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import { useEffect, useRef, useState, type ReactNode } from "react";

type CaseStudyScreenshotProps = {
  label: string;
  caption: string;
  src?: string;
  alt?: string;
  priority?: boolean;
};

export type CaseStudyCarouselImage = {
  src: string;
  label: string;
  caption: string;
  alt?: string;
};

export function CaseStudyScreenshot({
  label,
  caption,
  src,
  alt,
  priority = false,
}: CaseStudyScreenshotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    const trigger = openButtonRef.current;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        return;
      }

      if (event.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
        'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      trigger?.focus();
    };
  }, [isOpen]);

  return (
    <figure className="case-study-media">
      <div className="case-study-media-frame">
        {src ? (
          <button
            ref={openButtonRef}
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
              <div className="case-study-lightbox-dialog" ref={dialogRef}>
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

type CaseStudyCarouselProps = {
  screenshots: CaseStudyCarouselImage[];
  title: string;
};

export function CaseStudyCarousel({
  screenshots,
  title,
}: CaseStudyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const ignoreClick = useRef(false);

  if (screenshots.length === 0) {
    return (
      <CaseStudyScreenshot
        label="Product overview"
        caption="Add representative product screenshots to this case study."
      />
    );
  }

  const currentScreenshot = screenshots[currentIndex] ?? screenshots[0];
  const hasMultipleScreenshots = screenshots.length > 1;

  function showPrevious() {
    setCurrentIndex((index) =>
      index === 0 ? screenshots.length - 1 : index - 1,
    );
  }

  function showNext() {
    setCurrentIndex((index) => (index + 1) % screenshots.length);
  }

  function handleSwipe(endX: number) {
    if (touchStartX.current === null || !hasMultipleScreenshots) return;

    const distance = endX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(distance) < 50) return;

    ignoreClick.current = true;
    if (distance > 0) showPrevious();
    else showNext();

    window.setTimeout(() => {
      ignoreClick.current = false;
    }, 400);
  }

  return (
    <section
      className="case-study-carousel"
      aria-label={`${title} screenshots`}
      aria-roledescription="carousel"
      tabIndex={0}
      onKeyDown={(event) => {
        if (!hasMultipleScreenshots) return;
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          showPrevious();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          showNext();
        }
      }}
      onTouchStart={(event) => {
        touchStartX.current = event.touches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        handleSwipe(event.changedTouches[0]?.clientX ?? 0);
      }}
      onClickCapture={(event) => {
        if (!ignoreClick.current) return;
        event.preventDefault();
        event.stopPropagation();
        ignoreClick.current = false;
      }}
    >
      <p className="sr-only" aria-live="polite">
        Screenshot {currentIndex + 1} of {screenshots.length}:{" "}
        {currentScreenshot.label}
      </p>

      <div className="case-study-carousel-stage">
        <CaseStudyScreenshot
          key={currentScreenshot.src}
          src={currentScreenshot.src}
          alt={currentScreenshot.alt ?? `${title} — ${currentScreenshot.label}`}
          label={currentScreenshot.label}
          caption={currentScreenshot.caption}
          priority={currentIndex === 0}
        />

        {hasMultipleScreenshots && (
          <>
            <button
              type="button"
              className="case-study-carousel-arrow is-previous"
              aria-label="Show previous screenshot"
              onClick={showPrevious}
            >
              <FiChevronLeft aria-hidden="true" />
            </button>
            <button
              type="button"
              className="case-study-carousel-arrow is-next"
              aria-label="Show next screenshot"
              onClick={showNext}
            >
              <FiChevronRight aria-hidden="true" />
            </button>
          </>
        )}
      </div>

      {hasMultipleScreenshots && (
        <div className="case-study-carousel-controls">
          <div className="case-study-carousel-dots" aria-label="Choose screenshot">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.src}
                type="button"
                className={index === currentIndex ? "is-active" : ""}
                aria-label={`Show screenshot ${index + 1}: ${screenshot.label}`}
                aria-current={index === currentIndex ? "true" : undefined}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <span className="case-study-carousel-count" aria-hidden="true">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(screenshots.length).padStart(2, "0")}
          </span>
        </div>
      )}
    </section>
  );
}
