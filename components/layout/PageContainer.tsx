import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
    return <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "24px" }}>{children}</div>;
}