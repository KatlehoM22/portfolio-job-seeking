import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="page-container mx-auto w-full max-w-6xl px-[var(--space-page-x)] py-[var(--space-page-y)]">
      {children}
    </div>
  );
}
