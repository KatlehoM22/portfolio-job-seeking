import Image from "next/image";
import Link from "next/link";
import { TechIcon } from "@/components/atoms/TechIcon";
import type { ProjectGitHub } from "@/lib/projects";

type ProjectCardProps = {
  slug: string;
  title: string;
  summary: string;
  stack: string[];
  screenshot?: string;
  github: ProjectGitHub;
  context: string;
  role: string;
  status: string;
  challenge: string;
  index?: number;
};

export function ProjectCard({
  slug,
  title,
  summary,
  stack,
  screenshot,
  github,
  context,
  role,
  status,
  challenge,
}: ProjectCardProps) {
  const visibility = github.status === "public" ? "Public source" : "Source private";

  return (
    <article className="card card--elevated project-card" aria-labelledby={`project-${slug}`}>
      <div className="project-card-topline">
        <span>{context}</span>
        <span className="project-status">{status}</span>
      </div>

      <div>
        <h3 id={`project-${slug}`}>
          <Link href={`/projects/${slug}`}>{title}</Link>
        </h3>
        <p className="project-problem">{summary}</p>
      </div>

      <Link href={`/projects/${slug}`} aria-label={`View ${title} case study images`}>
        <div className="screenshot-frame project-screenshot-frame">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={`${title} interface overview`}
              fill
              sizes="(max-width: 720px) calc(100vw - 2.5rem), 540px"
              className="project-screenshot-image"
            />
          ) : (
            <div className="project-screenshot-placeholder">
              <span className="tech-label">Technical case study</span>
              <p>Interface evidence available in the case study</p>
            </div>
          )}
        </div>
      </Link>

      <dl className="project-evidence">
        <div><dt>Role</dt><dd>{role}</dd></div>
        <div><dt>Engineering challenge</dt><dd>{challenge}</dd></div>
      </dl>

      <ul aria-label={`${title} main technologies`}>
        {stack.slice(0, 4).map((item) => (
          <li key={item}>
            <TechIcon name={item} />
            {item}
          </li>
        ))}
      </ul>

      <p className="project-visibility">{visibility}</p>

      <div className="project-card-actions">
        <Link href={`/projects/${slug}`} className="project-card-link">
          View {title} case study <span aria-hidden="true">↗</span>
        </Link>
        {github.status === "public" ? (
          <a href={github.url} className="project-card-link" target="_blank" rel="noreferrer">
            View source code
            <span className="sr-only"> for {title} (opens in a new tab)</span>
            <span aria-hidden="true">↗</span>
          </a>
        ) : null}
      </div>
    </article>
  );
}
