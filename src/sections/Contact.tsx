import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { AlertCircle, CheckCircle, FileText, Mail, MapPin, Send } from 'lucide-react';
import { ArrowLink } from '../components/ui/ArrowLink';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { profile } from '../data/profile';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setStatusMessage('Please fill in all required fields.');
      return;
    }

    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/xbjnqylw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Thank you. Your message has been sent.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('success');
        setStatusMessage('Message noted. You can also connect directly on LinkedIn or GitHub.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please reach out via LinkedIn or GitHub directly.');
    }
  };

  return (
    <section id="contact" className="section-block">
      <div className="container-editorial">
        <SectionHeader
          index="08"
          eyebrow="Contact"
          title="Let's build something useful."
          description="Open to software engineering roles, product collaborations, and conversations about full-stack or IoT work."
        />

        <div className="grid items-start gap-8 lg:grid-cols-12">
          <div className="space-y-3 lg:col-span-5">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 border border-line p-4 transition-colors hover:border-accent"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-accent">
                <Mail className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-faint">Email</span>
                <span className="mt-1 block truncate text-sm text-ink">{profile.email}</span>
              </span>
            </a>

            <a
              href={profile.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-line p-4 transition-colors hover:border-accent"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-accent">
                <LinkedinIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-faint">LinkedIn</span>
                <span className="mt-1 block truncate text-sm text-ink">abhinav-jadhav</span>
              </span>
            </a>

            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-line p-4 transition-colors hover:border-accent"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-accent">
                <GithubIcon className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-faint">GitHub</span>
                <span className="mt-1 block truncate text-sm text-ink">abhinavj2705</span>
              </span>
            </a>

            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 border border-line p-4 transition-colors hover:border-accent"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-accent">
                <FileText className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-faint">Resume</span>
                <span className="mt-1 block truncate text-sm text-ink">View on Google Drive</span>
              </span>
            </a>

            <div className="flex items-center gap-4 border border-line p-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-line text-accent">
                <MapPin className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="eyebrow block text-faint">Location</span>
                <span className="mt-1 block truncate text-sm text-ink">{profile.location}</span>
              </span>
            </div>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-4 border border-line bg-surface p-6 sm:p-8 lg:col-span-7"
          >
            <h3 className="font-display text-xl text-ink">Send a message</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label
                  htmlFor="contact-name"
                  className="eyebrow block text-muted"
                >
                  Name *
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full border border-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label
                  htmlFor="contact-email"
                  className="eyebrow block text-muted"
                >
                  Email *
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@example.com"
                  className="w-full border border-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-subject"
                className="eyebrow block text-muted"
              >
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Role, collaboration, or project inquiry"
                className="w-full border border-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="contact-message"
                className="eyebrow block text-muted"
              >
                Message *
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="How can we build together?"
                className="w-full resize-none border border-line bg-transparent px-4 py-3 text-sm text-ink placeholder:text-faint transition-colors focus:border-accent focus:outline-none"
              />
            </div>

            {statusMessage ? (
              <div
                className={`flex items-center gap-2.5 border p-3.5 text-xs ${
                  status === 'success'
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-red-500/40 bg-red-500/10 text-red-600 dark:text-red-400'
                }`}
              >
                {status === 'success' ? (
                  <CheckCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                ) : (
                  <AlertCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
                )}
                <span>{statusMessage}</span>
              </div>
            ) : null}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="inline-flex items-center justify-center gap-2 bg-accent px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-contrast transition-colors hover:bg-accent-hover disabled:opacity-50"
            >
              <Send className="h-4 w-4" aria-hidden="true" />
              <span>{status === 'submitting' ? 'Sending...' : 'Send message'}</span>
            </button>
          </form>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-line pt-6">
          <span className="eyebrow text-faint">Prefer a direct link?</span>
          <ArrowLink href={profile.linkedInUrl} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </ArrowLink>
          <ArrowLink href={profile.githubUrl} target="_blank" rel="noopener noreferrer">
            GitHub
          </ArrowLink>
        </div>
      </div>
    </section>
  );
}
