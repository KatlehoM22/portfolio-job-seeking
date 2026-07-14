import Link from "next/link";
import Image from "next/image";
import { TechIcon } from "@/components/atoms/TechIcon";

type ProjectCardProps = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  screenshot?: string;
  index?: number;
};

export function ProjectCard({
  slug,
  title,
  summary,
  stack,
  screenshot,
  index = 0,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="tech-panel project-card">
      <div className="project-card-topline">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>case_study()</span>
      </div>

      <div className="project-screenshot-frame">
        {screenshot ? (
          <Image
            src={screenshot}
            alt={`${title} screenshot`}
            fill
            sizes="(max-width: 720px) calc(100vw - 2.5rem), 540px"
            className="project-screenshot-image"
          />
        ) : (
          <div className="project-screenshot-placeholder">
            <span className="tech-label">Project screenshot</span>
            <p>Add screenshot here</p>
          </div>
        )}
      </div>

      <div>
        <h3>{title}</h3>
        <p>{summary}</p>
      </div>

      <ul aria-label={`${title} technology stack`}>
        {stack.map((item) => (
          <li key={item}>
            <TechIcon name={item} />
            <span>-</span>
            {item}
          </li>
        ))}
      </ul>

      <span className="project-card-link">
        View case study <span>↗</span>
      </span>
    </Link>
  );
}
