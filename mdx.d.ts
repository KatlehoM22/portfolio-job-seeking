declare module "*.mdx" {
  import type { ComponentType } from "react";

  const MDXComponent: ComponentType;
  export default MDXComponent;

  export const metadata: {
    title: string;
    summary: string;
    stack: string[];
    screenshot?: string;
    screenshots?: Array<{
      src: string;
      label: string;
      caption: string;
      alt?: string;
    }>;
    github?: {
      status: "public" | "private" | "unavailable";
      url?: string;
    };
  };
}
