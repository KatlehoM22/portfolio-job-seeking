import { SectionTitle } from "@/components/atoms/SectionTitle";

export default function ContactPage() {
  return (
    <main className="space-y-6">
      <SectionTitle
        eyebrow="Contact"
        title="Let us build something useful"
        description="Open to junior full-stack opportunities, internships, and project collaborations."
      />

      <div className="tech-panel rounded-lg p-6 text-sm text-muted-foreground sm:text-base">
        <p>Email: katlehomakoro07@gmail.com</p>
        <p className="mt-2">Location: Johannesburg, South Africa</p>
      </div>
    </main>
  );
}
