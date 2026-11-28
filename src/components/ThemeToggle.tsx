import { useEffect, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { useTheme } from '../theme/useTheme';

type DotStyle = CSSProperties & { '--dot-index': number };

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [isAnimating, setIsAnimating] = useState(false);
  const animationTimer = useRef<number | null>(null);
  const isDark = theme === 'dark';

  useEffect(
    () => () => {
      if (animationTimer.current !== null) {
        window.clearTimeout(animationTimer.current);
      }
    },
    [],
  );

  const handleClick = () => {
    toggleTheme();
    setIsAnimating(false);
    window.requestAnimationFrame(() => setIsAnimating(true));

    if (animationTimer.current !== null) {
      window.clearTimeout(animationTimer.current);
    }
    animationTimer.current = window.setTimeout(() => setIsAnimating(false), 620);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`theme-toggle ${isDark ? 'is-dark' : 'is-light'}${
        isAnimating ? ' is-animating' : ''
      }`}
    >
      <span className="theme-toggle__track" aria-hidden="true">
        <span className="theme-toggle__thumb" />
        <span className="theme-toggle__dots">
          {Array.from({ length: 16 }, (_, index) => (
            <span
              key={index}
              className="theme-toggle__dot"
              style={{ '--dot-index': index } as DotStyle}
            />
          ))}
        </span>
      </span>
    </button>
  );
}
