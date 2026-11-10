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
              I turn ideas into products that make a real difference — building full-stack systems
              and connected technologies with a focus on what is practical and useful.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                I am pursuing a B.Tech in Computer Science and Engineering (IoT) at CHRIST
                University, Bengaluru, where I explore the intersection of software, hardware, and
                emerging technology.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                My work on <span className="font-medium text-ink">CU Now</span>, a campus
                orientation app used by more than 3,000 students, shaped how I approach
                engineering: solve real problems, build with purpose, and create things people
                actually use. Beyond code, I am active in community building and have led several
                initiatives.
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
