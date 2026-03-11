import Link from "next/link";
import { SITE } from "@/lib/constants";
import { ROUTES } from "@/lib/routes";
import { SectionTitle } from "@/components/atoms/SectionTitle";


export default function Home() {
  return (
    <main className="space-y-8">
      <section className="tech-panel grid items-center gap-6 rounded-lg p-6 md:grid-cols-[1.3fr_1fr]">
        <SectionTitle
          
          title={`${SITE.name} - ${SITE.role}`}
          description={SITE.summary}
        />

        <div
          role="img"
          aria-label="Profile picture placeholder"
          className="mx-auto flex aspect-[4/5] w-full max-w-xs items-center justify-center rounded-md border border-dashed border-primary/50 bg-surface-muted p-4 text-center"
        >
          <p className="text-sm text-muted-foreground">
            <span className="tech-label text-[0.68rem] text-primary">Profile Node</span>
            <br />
            Picture placeholder
            <br />
            Upload your profile photo later
          </p>
        </div>
      </section>

      <div className="tech-panel rounded-lg p-6">
        <p className="max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">
          Feel free to explore my architecture approach in
          <Link
            href={ROUTES.projects}
            className="mx-1 font-semibold text-primary hover:underline"
          >
            Projects
          </Link>
          and review capabilities in
          <Link
            href={ROUTES.skills}
            className="mx-1 font-semibold text-primary hover:underline"
          >
            Skills
          </Link>
          and
          <Link
            href={ROUTES.cv}
            className="mx-1 font-semibold text-primary hover:underline"
          >
            CV
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
