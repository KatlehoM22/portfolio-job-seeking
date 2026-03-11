import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/80">
      <div className="mx-auto w-full max-w-5xl px-[var(--space-page-x)] py-5 text-sm text-muted-foreground">
        <p>
          <span className="tech-label text-[0.72rem] text-foreground">{SITE.name}</span>{" "}
          - Built with Next.js, TypeScript, Tailwind, and MDX.
        </p>
      </div>
    </footer>
  );
}
