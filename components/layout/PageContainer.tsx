import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-[var(--space-page-x)] py-[var(--space-page-y)]">
      {children}
    </div>
  );
}
