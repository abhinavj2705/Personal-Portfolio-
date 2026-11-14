import { SectionHeader } from '../components/ui/SectionHeader';

const pillars = [
  {
    title: 'Full-stack engineering',
    description:
      'Responsive interfaces, typed frontends, REST APIs, and data models built to survive real usage.',
  },
  {
    title: 'IoT and hardware',
    description:
      'Firmware, sensor integration, MQTT telemetry, and dashboards that connect the physical to the digital.',
  },
  {
    title: 'Product thinking',
    description:
      'I care about adoption, clarity, and the small details that make a tool feel dependable.',
  },
  {
    title: 'Leadership',
    description:
      'Organizing teams, reviewing work, and helping other developers grow across campus communities.',
  },
];

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="container-editorial">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeader index="01" eyebrow="About" title="Engineering with intent." />
          </div>

          <div className="lg:col-span-8">
            <p className="font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl">
              I am a Computer Science and Engineering (IoT) undergraduate at CHRIST University,
              Bengaluru, passionate about building technologies, innovating and implementing my
              ideas in order to create something that has tangible value.
            </p>

            <div className="mt-8 space-y-5">
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                I am interested in various areas of technology and innovation, including
                full-stack development, software engineering, IoT, and connected systems. It's
                fascinating to me to understand how things function, explore new technologies and
                tools and to build innovative and impactful products through these processes.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                In addition to the technical aspects, I am actively participating in student
                communities and organizations where I was able to take up various responsibilities,
                collaborate with teams, organize initiatives, and participate in community-building
                processes within the realm of technology.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                At the same time, I am very interested in the business and product aspects of
                technologies – in other words, in understanding not only how certain solutions or
                products are created, but why they are needed, for whom, and how they should be
                developed and expanded.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                I am a constant learner, a builder, and an explorer of new opportunities, and I
                would not want to confine myself only to one area.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-6 sm:grid-cols-4">
              <div>
                <dt className="eyebrow text-faint">Based in</dt>
                <dd className="mt-2 text-sm text-ink">Bengaluru</dd>
              </div>
              <div>
                <dt className="eyebrow text-faint">Studying</dt>
                <dd className="mt-2 text-sm text-ink">CSE (IoT)</dd>
              </div>
              <div>
                <dt className="eyebrow text-faint">Focus</dt>
                <dd className="mt-2 text-sm text-ink">Full-stack</dd>
              </div>
              <div>
                <dt className="eyebrow text-faint">Status</dt>
                <dd className="mt-2 text-sm text-ink">Open to work</dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="bg-surface p-6">
              <p className="font-mono text-[11px] tracking-[0.24em] text-accent">
                {String(index + 1).padStart(2, '0')}
              </p>
              <h3 className="mt-3 font-display text-lg text-ink">{pillar.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
