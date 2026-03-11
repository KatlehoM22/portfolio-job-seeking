import Link from "next/link";
import { Card } from "@/components/atoms/Card";

type ProjectCardProps = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
};

export function ProjectCard({ slug, title, summary, stack }: ProjectCardProps) {
  return (
    <Card>
      <div className="space-y-4">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            {title}
          </h2>
          <p className="text-sm text-muted-foreground">{summary}</p>
        </div>

        <ul className="flex flex-wrap gap-2" aria-label={`${title} technology stack`}>
          {stack.map((item) => (
            <li
              key={item}
              className="tech-label rounded border border-border bg-surface-muted px-2.5 py-1 text-[0.62rem] font-semibold text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>

        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center text-sm font-semibold text-primary hover:underline"
        >
          View case study
        </Link>
      </div>
    </Card>
  );
}
