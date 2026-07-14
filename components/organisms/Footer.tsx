import { SITE } from "@/lib/constants";
import { FiMapPin } from "react-icons/fi";
import { SiMdx, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border/80">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 px-[var(--space-page-x)] py-7 text-sm text-muted-foreground">
        <p className="flex flex-wrap items-center gap-2">
          <span className="tech-label text-[0.72rem] text-foreground">{SITE.name}</span>{" "}
          <span className="text-primary"> {"//"} </span>Built with
          <span className="inline-flex items-center gap-1 text-primary" aria-label="Build stack icons">
            <SiNextdotjs className="h-3.5 w-3.5" aria-hidden="true" />
            <SiTypescript className="h-3.5 w-3.5" aria-hidden="true" />
            <SiTailwindcss className="h-3.5 w-3.5" aria-hidden="true" />
            <SiMdx className="h-3.5 w-3.5" aria-hidden="true" />
          </span>
        </p>
        <p className="tech-label inline-flex items-center text-[0.65rem]">
          <FiMapPin className="mr-1.5 h-3.5 w-3.5 text-primary" aria-hidden="true" />
          Johannesburg, ZA <span className="status-dot" /> Available
        </p>
      </div>
    </footer>
  );
}
