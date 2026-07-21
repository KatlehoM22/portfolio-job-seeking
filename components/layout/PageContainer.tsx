import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <div className="page-container w-full px-[var(--space-page-x)] py-[var(--space-page-y)]">
      {children}
    </div>
  );
}
