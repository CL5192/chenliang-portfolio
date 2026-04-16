import { PageSection } from '../components/PageSection'

export function Contact() {
  return (
    <>
      <h1 className="page-title">Contact</h1>
      <p className="page-lead">
        Placeholder contact page. Wire this form to your provider or replace it with mailto links when
        you are ready.
      </p>

      <PageSection title="Send a message" id="form">
        <form className="form-grid" onSubmit={(e) => e.preventDefault()} noValidate>
          <div>
            <label htmlFor="contact-name">Name</label>
            <input id="contact-name" name="name" type="text" autoComplete="name" placeholder="Your name" />
          </div>
          <div>
            <label htmlFor="contact-email">Email</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="contact-message">Message</label>
            <textarea id="contact-message" name="message" placeholder="Write your message…" />
          </div>
        </form>
        <p className="form-note">
          This form does not submit anywhere yet — it is layout-only so you can hook it up later.
        </p>
      </PageSection>
    </>
  )
}
