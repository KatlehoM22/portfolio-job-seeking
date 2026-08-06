"use client";

import { useForm, ValidationError } from "@formspree/react";
import { FaCheckCircle } from "react-icons/fa";
import { FiRefreshCw, FiSend } from "react-icons/fi";

type ContactFields = {
  name: string;
  email: string;
  message: string;
};

const FORMSPREE_FORM_ID = "mnjerpwn";

export function ContactForm() {
  const [state, handleSubmit, reset] = useForm<ContactFields>(FORMSPREE_FORM_ID);
  const nameErrorId = "contact-name-error";
  const emailErrorId = "contact-email-error";
  const messageErrorId = "contact-message-error";

  if (state.succeeded) {
    return (
      <div className="contact-form contact-form-success" role="status">
        <FaCheckCircle
          className="h-8 w-8 text-primary"
          aria-hidden="true"
        />
        <div>
          <h2 className="text-xl font-semibold text-foreground">
            Message sent successfully
          </h2>
          <p className="mt-2 leading-7 text-muted-foreground">
            Thank you for getting in touch. I&apos;ll respond as soon as I can.
          </p>
        </div>
        <button
          type="button"
          className="button button-secondary contact-submit"
          onClick={reset}
        >
          Send another message
          <FiRefreshCw className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} aria-busy={state.submitting}>
      <input
        type="hidden"
        name="_subject"
        value="New message from the portfolio contact form"
      />
      <input
        type="text"
        name="_gotcha"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <label htmlFor="contact-name" className="form-field">
        <span className="form-label">Name</span>
        <input
          className="form-input"
          id="contact-name"
          type="text"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          aria-invalid={state.errors?.getFieldErrors("name").length ? true : undefined}
          aria-describedby={state.errors?.getFieldErrors("name").length ? nameErrorId : undefined}
          required
        />
        <ValidationError
          prefix="Name"
          field="name"
          errors={state.errors}
          id={nameErrorId}
          className="contact-field-error"
        />
      </label>

      <label htmlFor="contact-email" className="form-field">
        <span className="form-label">Email</span>
        <input
          className="form-input"
          id="contact-email"
          type="email"
          name="email"
          placeholder="you@example.com"
          autoComplete="email"
          aria-invalid={state.errors?.getFieldErrors("email").length ? true : undefined}
          aria-describedby={state.errors?.getFieldErrors("email").length ? emailErrorId : undefined}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          id={emailErrorId}
          className="contact-field-error"
        />
      </label>

      <label htmlFor="contact-message" className="form-field">
        <span className="form-label">Message</span>
        <textarea
          className="form-textarea"
          id="contact-message"
          name="message"
          placeholder="Tell me about the opportunity..."
          rows={5}
          aria-invalid={state.errors?.getFieldErrors("message").length ? true : undefined}
          aria-describedby={state.errors?.getFieldErrors("message").length ? messageErrorId : undefined}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          id={messageErrorId}
          className="contact-field-error"
        />
      </label>

      <ValidationError
        errors={state.errors}
        className="contact-form-error"
        role="alert"
      />

      <button
        type="submit"
        className="button button-primary contact-submit"
        disabled={state.submitting}
      >
        {state.submitting ? "Sending..." : "Send message"}
        <FiSend className="h-4 w-4" aria-hidden="true" />
      </button>
    </form>
  );
}
