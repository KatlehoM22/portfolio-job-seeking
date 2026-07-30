import { SectionTitle } from "@/components/atoms/SectionTitle";
import { ContactForm } from "@/components/molecules/ContactForm";
import { SITE } from "@/lib/constants";
import { createPageMetadata } from "@/lib/metadata";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin } from "react-icons/fi";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact Katleho Makoro about junior software development opportunities, internships, and professional collaborations.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main className="space-y-6">
      <SectionTitle
        eyebrow="Contact"
        title="Let us build something useful"
        description="Open to junior full-stack opportunities, internships, and project collaborations."
      />

      <div className="tech-panel contact-panel rounded-lg p-6 text-sm text-muted-foreground sm:text-base">
        <div className="contact-details">
          <p className="section-index">CONTACT DETAILS</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-foreground">
            Let&apos;s connect
          </h2>
          <p className="mt-3 leading-7">
            Send a message about junior developer opportunities, internships, or
            project collaborations. I&apos;ll get back to you as soon as I can.
          </p>

          <div className="mt-6 space-y-3">
            <p className="flex items-center gap-3">
              <FiMail className="h-4 w-4 text-primary" aria-hidden="true" />
              <span>
                <span className="tech-label text-primary">Email</span> -{" "}
                <a className="hover:text-primary" href={SITE.socials.email}>
                  katlehomakoro07@gmail.com
                </a>
              </span>
            </p>
            <p className="flex items-center gap-3">
              <FiMapPin className="h-4 w-4 text-primary" aria-hidden="true" />
              <span><span className="tech-label text-primary">Location</span> - Johannesburg, South Africa</span>
            </p>
          </div>

          <div className="social-links mt-6" aria-label="Social links">
            <a href={SITE.socials.github} target="_blank" rel="noreferrer">
              <FaGithub className="h-4 w-4" aria-hidden="true" />
              <span>GitHub</span>
            </a>
            <a href={SITE.socials.linkedin} target="_blank" rel="noreferrer">
              <FaLinkedin className="h-4 w-4" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <a href={SITE.socials.email}>
              <FaEnvelope className="h-4 w-4" aria-hidden="true" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <ContactForm />
      </div>
    </main>
  );
}
