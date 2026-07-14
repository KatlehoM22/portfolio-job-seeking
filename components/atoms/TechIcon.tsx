import type { IconType } from "react-icons";
import {
  FaDatabase,
  FaJava,
  FaLayerGroup,
  FaNodeJs,
  FaProjectDiagram,
  FaServer,
} from "react-icons/fa";
import {
  SiExpress,
  SiJavascript,
  SiMdx,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

const techIcons: Record<string, IconType> = {
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": FaNodeJs,
  "Express.js": SiExpress,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  SQL: FaDatabase,
  Java: FaJava,
  MDX: SiMdx,
  "REST APIs": FaServer,
  "SAP-aligned process design": FaProjectDiagram,
};

type TechIconProps = {
  name: string;
  className?: string;
};

export function TechIcon({ name, className = "h-3.5 w-3.5" }: TechIconProps) {
  const Icon = techIcons[name] ?? FaLayerGroup;

  return <Icon className={className} aria-hidden="true" />;
}
