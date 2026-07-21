import type { MDXComponents } from "mdx/types";
import {
  CaseStudyGallery,
  CaseStudyScreenshot,
} from "@/components/molecules/CaseStudyMedia";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-2xl font-bold tracking-tight text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="tech-label text-[0.78rem] font-bold text-primary">{children}</h2>
    ),
    p: ({ children }) => (
      <p className="text-sm leading-7 text-muted-foreground sm:text-base">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground sm:text-base">
        {children}
      </ul>
    ),
    code: ({ children }) => (
      <code className="rounded border border-border bg-surface-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="overflow-x-auto rounded-md border border-border bg-surface-muted p-4 text-xs text-foreground">
        {children}
      </pre>
    ),
    CaseStudyGallery,
    CaseStudyScreenshot,
    ...components,
  };
}
