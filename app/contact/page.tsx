import { SectionTitle } from "@/components/atoms/SectionTitle";
import { SITE } from "@/lib/constants";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail, FiMapPin, FiSend } from "react-icons/fi";

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
              <span><span className="tech-label text-primary">Email</span> - katlehomakoro07@gmail.com</span>
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
          </div>
        </div>

        <form
          className="contact-form"
          action="mailto:katlehomakoro07@gmail.com"
          method="post"
          encType="text/plain"
        >
          <label>
            <span>Name</span>
            <input type="text" name="name" placeholder="Your name" required />
          </label>

          <label>
            <span>Email</span>
            <input type="email" name="email" placeholder="you@example.com" required />
          </label>

          <label>
            <span>Message</span>
            <textarea
              name="message"
              placeholder="Tell me about the opportunity..."
              rows={5}
              required
            />
          </label>

          <button type="submit" className="button button-primary contact-submit">
            Send message <FiSend className="h-4 w-4" aria-hidden="true" />
          </button>
        </form>
      </div>
    </main>
  );
}
