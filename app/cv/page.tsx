import { SectionTitle } from "@/components/atoms/SectionTitle";

export default function CvPage() {
  return (
    <main className="space-y-6">
      <SectionTitle
        eyebrow="CV"
        title="Experience snapshot"
        description="A concise recruiter-friendly summary of work history, education, and impact."
      />

      <div className="tech-panel rounded-lg p-6">
        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
          Add your detailed employment timeline, education, certifications, and
          quantified achievements here. Keep it scannable and outcome-focused for
          hiring managers.
        </p>
      </div>
    </main>
  );
}
