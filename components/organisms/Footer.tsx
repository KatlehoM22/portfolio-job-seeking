import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/80">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-[var(--space-page-x)] py-7 text-sm text-muted-foreground">
        <p>
          <span className="tech-label text-[0.72rem] text-foreground">{SITE.name}</span>{" "}
          <span className="text-primary"> {"//"} </span>Built with Next.js, TypeScript, Tailwind, and MDX.
        </p>
        <p className="tech-label text-[0.65rem]">Johannesburg, ZA <span className="status-dot" /> Available</p>
      </div>
    </footer>
  );
}
