import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div
      id="main-content"
      tabIndex={-1}
      className="page-container container w-full py-[var(--space-page-y)]"
    >
      {children}
    </div>
  );
}
