import { SectionTitle } from "@/components/atoms/SectionTitle";
import { FiMail, FiMapPin } from "react-icons/fi";

export default function ContactPage() {
  return (
    <main className="space-y-6">
      <SectionTitle
        eyebrow="Contact"
        title="Let us build something useful"
        description="Open to junior full-stack opportunities, internships, and project collaborations."
      />

      <div className="tech-panel space-y-3 rounded-lg p-6 text-sm text-muted-foreground sm:text-base">
        <p className="flex items-center gap-3">
          <FiMail className="h-4 w-4 text-primary" aria-hidden="true" />
          <span><span className="tech-label text-primary">Email</span> - katlehomakoro07@gmail.com</span>
        </p>
        <p className="flex items-center gap-3">
          <FiMapPin className="h-4 w-4 text-primary" aria-hidden="true" />
          <span><span className="tech-label text-primary">Location</span> - Johannesburg, South Africa</span>
        </p>
      </div>
    </main>
  );
}
