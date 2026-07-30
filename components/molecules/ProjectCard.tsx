import Link from "next/link";
import Image from "next/image";
import { TechIcon } from "@/components/atoms/TechIcon";
import type { ProjectGitHub } from "@/lib/projects";

type ProjectCardProps = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  screenshot?: string;
  github: ProjectGitHub;
  index?: number;
};

export function ProjectCard({
  slug,
  title,
  summary,
  stack,
  screenshot,
  github,
  index = 0,
}: ProjectCardProps) {
  const githubLabel =
    github.status === "private" ? "GitHub private" : "GitHub unavailable";

  return (
    <article className="tech-panel project-card">
      <div className="project-card-topline">
        <span>{String(index + 1).padStart(2, "0")}</span>
        <span>case_study()</span>
      </div>

      <Link href={`/projects/${slug}`} aria-label={`View ${title} case study`}>
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
      </Link>

      <div>
        <h3>
          <Link href={`/projects/${slug}`}>{title}</Link>
        </h3>
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

      <div className="project-card-actions">
        <Link href={`/projects/${slug}`} className="project-card-link">
          View case study <span>↗</span>
        </Link>
        {github.status === "public" ? (
          <a
            href={github.url}
            className="project-card-link"
            target="_blank"
            rel="noreferrer"
          >
            View GitHub <span>↗</span>
          </a>
        ) : (
          <span
            className="project-card-github-unavailable"
            aria-label={githubLabel}
            aria-disabled="true"
          >
            {githubLabel}
          </span>
        )}
      </div>
    </article>
  );
}
