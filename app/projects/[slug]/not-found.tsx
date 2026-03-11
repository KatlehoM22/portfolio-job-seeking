import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Not Found",
  description: "The requested project page could not be found.",
};

export default function NotFound() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-bold text-foreground">Project not found</h1>
      <p className="text-sm text-muted-foreground">
        Check the project URL or choose another case study from the projects
        page.
      </p>
    </main>
  );
}
