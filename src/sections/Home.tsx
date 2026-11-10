import { motion } from 'framer-motion';
import { ArrowDown, MapPin } from 'lucide-react';
import { ArrowLink } from '../components/ui/ArrowLink';
import { Portrait } from '../components/ui/Portrait';
import { profile } from '../data/profile';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Home() {
  return (
    <section id="home" className="relative">
      <div className="container-editorial flex min-h-svh flex-col justify-center pb-16 pt-28 sm:pt-32 lg:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <motion.div
            className="lg:col-span-7"
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
          >
            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-3 text-muted"
            >
              <span className="flex items-center gap-2 border border-line px-3 py-1.5 text-[10px] uppercase tracking-[0.2em]">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                {profile.availability}
              </span>
              <span className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.18em]">
                <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
                {profile.location}
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-8 font-display text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-ink"
            >
              {profile.firstName}
              <br />
              <span className="text-muted">{profile.lastName}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-[11px] uppercase tracking-[0.22em] text-accent"
            >
              <span>{profile.role}</span>
              <span className="text-faint" aria-hidden="true">
                /
              </span>
              <span>{profile.secondaryRole}</span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <ArrowLink href="#projects" variant="solid">
                View selected work
              </ArrowLink>
              <ArrowLink
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
              >
                Download resume
              </ArrowLink>
            </motion.div>

            <motion.dl
              variants={fadeUp}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="mt-12 grid max-w-xl grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-3"
            >
              <div>
                <dt className="eyebrow text-faint">University</dt>
                <dd className="mt-2 text-sm text-ink">{profile.university}</dd>
              </div>
              <div>
                <dt className="eyebrow text-faint">Degree</dt>
                <dd className="mt-2 text-sm text-ink">{profile.degree}</dd>
              </div>
              <div>
                <dt className="eyebrow text-faint">Graduation</dt>
                <dd className="mt-2 text-sm text-ink">{profile.graduation}</dd>
              </div>
            </motion.dl>
          </motion.div>

          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          >
            <Portrait />
          </motion.div>
        </div>

        <div className="mt-16 hidden items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-faint sm:flex">
          <ArrowDown className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>Scroll to explore</span>
          <span className="h-px flex-1 bg-line" aria-hidden="true" />
          <span>00 / 08</span>
        </div>
      </div>
    </section>
  );
}
