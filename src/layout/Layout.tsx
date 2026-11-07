import type { ReactNode } from 'react';
import { GridBackground } from './GridBackground';

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen bg-background font-sans text-ink">
      <GridBackground />
      <div className="relative z-10 flex min-h-screen flex-col">{children}</div>
    </div>
  );
}
