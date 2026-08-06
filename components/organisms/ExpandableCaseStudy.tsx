"use client";

import { useId, useRef, useState, type ReactNode } from "react";

type ExpandableCaseStudyProps = {
  children: ReactNode;
};

export function ExpandableCaseStudy({ children }: ExpandableCaseStudyProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentId = useId();
  const articleRef = useRef<HTMLElement>(null);

  function toggleExpanded() {
    if (isExpanded) {
      setIsExpanded(false);
      requestAnimationFrame(() => {
        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        articleRef.current?.scrollIntoView({
          behavior: reducedMotion ? "auto" : "smooth",
          block: "start",
        });
      });
      return;
    }

    setIsExpanded(true);
  }

  return (
    <article
      ref={articleRef}
      className={`case-study tech-panel max-w-none rounded-lg${isExpanded ? " case-study-expanded" : ""}`}
    >
      <div id={contentId} className="case-study-content space-y-4 p-6 pb-20">
        {children}
      </div>

      {!isExpanded ? <div className="case-study-fade" aria-hidden="true" /> : null}

      <button
        type="button"
        className="case-study-toggle"
        aria-expanded={isExpanded}
        aria-controls={contentId}
        onClick={toggleExpanded}
      >
        {isExpanded ? "Show less" : "Read more"}
        <span aria-hidden="true">{isExpanded ? "↑" : "↓"}</span>
      </button>
    </article>
  );
}
