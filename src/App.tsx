import { useEffect, useState } from 'react';
import { MotionConfig } from 'framer-motion';
import { CommandPalette } from './components/CommandPalette';
import { useLenisScroll } from './hooks/useLenisScroll';
import { BottomNav } from './layout/BottomNav';
import { Footer } from './layout/Footer';
import { Header } from './layout/Header';
import { Layout } from './layout/Layout';
import { About } from './sections/About';
import { Achievements } from './sections/Achievements';
import { Communities } from './sections/Communities';
import { Contact } from './sections/Contact';
import { Experience } from './sections/Experience';
import { Home } from './sections/Home';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { WhyMe } from './sections/WhyMe';
import { ThemeProvider } from './theme/ThemeContext';
import { scrollToTarget } from './utils/scroll';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useLenisScroll();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandPaletteOpen((open) => !open);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <MotionConfig reducedMotion="user">
        <Layout>
          <a
            href="#main-content"
            onClick={(event) => {
              event.preventDefault();
              scrollToTarget(0);
              document.getElementById('main-content')?.focus({ preventScroll: true });
            }}
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:border focus:border-accent focus:bg-background focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
          >
            Skip to content
          </a>

          <Header
            onOpenCommandPalette={() => setCommandPaletteOpen(true)}
            isCommandPaletteOpen={commandPaletteOpen}
          />

          <main id="main-content" tabIndex={-1} className="flex-1 focus:outline-none">
            <Home />
            <About />
            <WhyMe />
            <Projects />
            <Experience />
            <Skills />
            <Achievements />
            <Communities />
            <Contact />
          </main>

          <Footer />

          <BottomNav />

          {commandPaletteOpen ? (
            <CommandPalette
              isOpen
              onClose={() => setCommandPaletteOpen(false)}
            />
          ) : null}
        </Layout>
      </MotionConfig>
    </ThemeProvider>
  );
}

export default App;
