import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle, MapPin, Sparkles } from 'lucide-react';
import { linkedInUrl, githubUrl } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './SocialIcons';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('success');
        setStatusMessage('Message noted! You can also connect directly on LinkedIn or email.');
      }
    } catch {
      setStatus('error');
      setStatusMessage('Network error. Please reach out via LinkedIn or email directly.');
    }
  };

  return (
    <section id="contact" className="py-24 relative border-t border-black/[0.06] dark:border-white/5">
      <div className="max-w-5xl mx-auto px-6">

        {/* Centered Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-300 text-xs font-mono uppercase tracking-widest font-semibold">
            <Sparkles className="w-3 h-3" />
            <span>07. Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Open for software engineering roles, product collaborations, or IoT discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Left Column: Direct Links (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-7 sm:p-8 rounded-3xl bg-white/80 dark:bg-[#080c16]/90 border border-black/[0.08] dark:border-white/10 space-y-6 shadow-xl dark:shadow-2xl backdrop-blur-2xl">
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Direct Connect</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Have an opportunity or an interesting project idea? Let's connect and build together.
                </p>
              </div>

              <div className="space-y-3">
                {/* LinkedIn */}
                <a
                  href={linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/[0.08] dark:border-white/10 hover:border-cyan-500/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-600 dark:text-cyan-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">LinkedIn</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors truncate">
                      abhinav-jadhav
                    </div>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] hover:bg-black/[0.06] dark:hover:bg-white/[0.08] border border-black/[0.08] dark:border-white/10 hover:border-indigo-500/40 transition group"
                >
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 flex-shrink-0 group-hover:scale-105 transition-transform">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">GitHub</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors truncate">
                      abhinavj2705
                    </div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/[0.08] dark:border-white/10">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">Location</div>
                    <div className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                      Bengaluru, Karnataka, India
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-7 sm:p-9 rounded-3xl bg-white/80 dark:bg-[#080c16]/90 border border-black/[0.08] dark:border-white/10 space-y-4 shadow-xl dark:shadow-2xl backdrop-blur-2xl"
            >
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Role, Collaboration, or Project Inquiry"
                  className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-600 dark:text-slate-400 font-bold">
                  Message *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we build together?"
                  className="w-full px-4 py-3 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 text-sm transition resize-none"
                />
              </div>

              {statusMessage && (
                <div
                  className={`p-3.5 rounded-xl flex items-center gap-2.5 text-xs font-medium ${
                    status === 'success'
                      ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border border-rose-500/20'
                  }`}
                >
                  {status === 'success' ? (
                    <CheckCircle className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{statusMessage}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full sm:w-auto px-7 py-3 rounded-xl bg-slate-950 dark:bg-white text-white dark:text-slate-950 font-bold text-sm hover:bg-slate-800 dark:hover:bg-cyan-100 transition-all cursor-pointer flex items-center justify-center gap-2 disabled:opacity-50 shadow-lg"
              >
                <Send className="w-4 h-4" />
                <span>{status === 'submitting' ? 'Sending...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
