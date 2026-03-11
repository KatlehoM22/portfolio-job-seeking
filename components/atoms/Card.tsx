import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
};

export function Card({ children }: CardProps) {
  return (
    <article className="tech-panel rise-in rounded-lg p-5">
      {children}
    </article>
  );
}
