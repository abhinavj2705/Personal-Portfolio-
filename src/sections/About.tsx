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
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4">
            <SectionHeader index="01" eyebrow="About" title="Engineering with intent." />
          </div>

          <div className="lg:col-span-8">
            <p className="font-display text-2xl leading-snug tracking-tight text-ink sm:text-3xl">
              I build software, explore emerging technologies, and turn ideas into practical
              products.
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                I am a Computer Science and Engineering (IoT) undergraduate at CHRIST University,
                Bengaluru, with a strong interest in full-stack development, software engineering,
                and connected systems.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                My technical stack includes{' '}
                <strong className="font-semibold text-ink">
                  JavaScript, TypeScript, React.js, Node.js, Express.js, C/C++, HTML, CSS, and
                  Tailwind CSS
                </strong>
                . I work on developing responsive web applications, backend services, REST APIs, and
                integrated software solutions, while exploring IoT, embedded systems, sensor
                technologies, and hardware-software integration.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                I enjoy working across the development lifecycle, from designing user interfaces and
                building application architectures to developing backend functionality and
                integrating real-world technologies. My projects reflect an interest in solving
                practical problems through technology, product thinking, and engineering.
              </p>
              <p className="text-sm leading-relaxed text-muted sm:text-base">
                Beyond development, I actively contribute to technical communities, collaborate with
                developers, and take part in initiatives that bring technology and innovation closer
                to students.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-6 border-t border-line pt-5 sm:grid-cols-4">
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

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="bg-surface p-5">
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
