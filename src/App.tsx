import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import { Layout } from './components/Layout';
import { IntroSplashScreen } from './components/IntroSplashScreen';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Achievements } from './components/Achievements';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';

export function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  // Global Ctrl+K / Cmd+K keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCommandPaletteOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <ThemeProvider>
      <Layout>
    
          {/* 1. Intro Splash Screen (matching Image 1 with <Abhinav />) */}
        <AnimatePresence>
          {showIntro && (
            <IntroSplashScreen onComplete={() => setShowIntro(false)} />
          )}
        </AnimatePresence>

        {/* 2. Main Page Layout (matching Image 2) */}
        <Header onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        
        <main className="flex flex-col">
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Achievements />
          <Gallery />
          <Contact />
        </main>

        <Footer onReplayIntro={() => setShowIntro(true)} />

        {/* 3. Interactive Command Palette Modal */}
        <CommandPalette
          isOpen={commandPaletteOpen}
          onClose={() => setCommandPaletteOpen(false)}
        />

        
      </Layout>
    </ThemeProvider>
  );
}

export default App;
