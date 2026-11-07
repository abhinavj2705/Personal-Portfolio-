import type { ReactNode } from 'react';

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="border border-line px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-muted">
      {children}
    </span>
  );
}
