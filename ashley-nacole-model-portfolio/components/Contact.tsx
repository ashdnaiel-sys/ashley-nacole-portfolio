'use client';

import { FormEvent, useState } from 'react';
import { modelData } from '@/data/modelData';
import { siteOverrides } from '@/data/siteOverrides';

const contactEmail = siteOverrides.contactEmail;

export function Contact() {
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') ?? '');
    const company = String(form.get('company') ?? '');
    const email = String(form.get('email') ?? '');
    const note = String(form.get('message') ?? '');
    const honeypot = String(form.get('website') ?? '');

    if (honeypot) {
      setMessage('Thank you.');
      return;
    }

    const subject = encodeURIComponent(`Modeling inquiry for Ashley Nacole — ${company || name}`);
    const body = encodeURIComponent(`Name: ${name}\nAgency / Company: ${company}\nEmail: ${email}\n\n${note}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setMessage('Opening your email app with this inquiry prepared.');
  }

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-shell contact-inner">
        <div className="contact-copy">
          <p className="eyebrow">Representation / Bookings / Castings</p>
          <h2 id="contact-title">Contact / Bookings</h2>
          <p>For representation, bookings, castings, testing, and international placement inquiries.</p>
          <div className="contact-details">
            <p><strong>{modelData.name}</strong></p>
            <p>Email: <a href={`mailto:${contactEmail}`}>{contactEmail}</a></p>
            <p><a href={modelData.instagramUrl} target="_blank" rel="noreferrer">Instagram {modelData.instagramHandle} ↗</a></p>
            <p>
              Current Texas Representation:<br />
              {modelData.representation.agency}<br />
              {modelData.representation.status}
            </p>
          </div>
          <CompCardButton />
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Name
            <input name="name" type="text" autoComplete="name" required />
          </label>
          <label>
            Agency / Company
            <input name="company" type="text" autoComplete="organization" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" required />
          </label>
          <label>
            Message
            <textarea name="message" rows={6} required />
          </label>
          <div className="honeypot" aria-hidden="true">
            <label>Website<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
          </div>
          <button className="button-outline" type="submit">Send Inquiry</button>
          <p className="form-note" aria-live="polite">{message || 'No account required. Uses your email app to send the inquiry.'}</p>
        </form>
      </div>
    </section>
  );
}

export function CompCardButton() {
  if (!modelData.compCard.enabled) {
    return <span className="button-text disabled" aria-disabled="true">{modelData.compCard.label} — add final PDF</span>;
  }
  return <a className="button-text" href={modelData.compCard.path} download>{modelData.compCard.label} ↓</a>;
}
