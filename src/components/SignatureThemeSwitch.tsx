import { useEffect, useId, useRef, useState } from 'react';
import type { CSSProperties } from 'react';
import { useTheme } from '../theme/useTheme';

type MatrixDotStyle = CSSProperties & { '--column': number; '--row': number };

const MATRIX_DOTS = Array.from({ length: 25 }, (_, index) => ({
  column: index % 5,
  row: Math.floor(index / 5),
}));

interface SignatureThemeSwitchProps {
  compact?: boolean;
}

export function SignatureThemeSwitch({ compact = false }: SignatureThemeSwitchProps) {
  const { theme, toggleTheme } = useTheme();
  const [isSwitching, setIsSwitching] = useState(false);
  const [glowKey, setGlowKey] = useState(0);
  const switchTimer = useRef<number | null>(null);
  const gradientId = useId().replace(/:/g, '');
  const isDark = theme === 'dark';

  useEffect(
    () => () => {
      if (switchTimer.current !== null) {
        window.clearTimeout(switchTimer.current);
      }
    },
    [],
  );

  const handleToggle = () => {
    toggleTheme();
    setIsSwitching(false);
    setGlowKey((key) => key + 1);
    window.requestAnimationFrame(() => setIsSwitching(true));

    if (switchTimer.current !== null) {
      window.clearTimeout(switchTimer.current);
    }
    switchTimer.current = window.setTimeout(() => setIsSwitching(false), 900);
  };

  return (
    <div className="signature-switch-wrap">
      <button
        type="button"
        onClick={handleToggle}
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
        className={`signature-switch ${compact ? 'signature-switch--compact' : ''} ${
          isDark ? 'is-dark' : 'is-light'
        }${isSwitching ? ' is-switching' : ''}`}
      >
        <span className="signature-switch__aura" aria-hidden="true" />
        <span key={glowKey} className="signature-switch__glow" aria-hidden="true" />

        <span className="signature-switch__label signature-switch__label--light" aria-hidden="true">
          Light
        </span>
        <span className="signature-switch__label signature-switch__label--dark" aria-hidden="true">
          Dark
        </span>

        <span className="signature-switch__orb" aria-hidden="true">
          <svg className="signature-switch__ring" viewBox="0 0 100 100" focusable="false">
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="var(--signature-purple)" />
                <stop offset="52%" stopColor="var(--signature-amber)" />
                <stop offset="100%" stopColor="var(--signature-purple)" />
              </linearGradient>
            </defs>
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="1.4"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={`url(#${gradientId})`}
              strokeWidth="5"
              opacity="0.16"
            />
          </svg>

          <span className="signature-switch__matrix">
            {MATRIX_DOTS.map((dot, index) => (
              <span
                key={index}
                className="signature-switch__dot"
                style={{ '--column': dot.column, '--row': dot.row } as MatrixDotStyle}
              />
            ))}
          </span>
          <span className="signature-switch__core" />
        </span>
      </button>

      {!compact ? <p className="signature-switch__hint">Press to shift the atmosphere</p> : null}
    </div>
  );
}
