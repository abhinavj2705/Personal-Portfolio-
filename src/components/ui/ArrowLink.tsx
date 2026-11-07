import { ArrowUpRight } from 'lucide-react';
import type { AnchorHTMLAttributes, ReactNode } from 'react';

type ArrowLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: 'text' | 'solid' | 'outline';
};

const variantStyles = {
  text: 'text-accent hover:text-accent-hover',
  solid: 'bg-accent text-accent-contrast hover:bg-accent-hover',
  outline: 'border border-line-strong text-ink hover:border-accent hover:text-accent',
};

export function ArrowLink({
  children,
  className = '',
  variant = 'text',
  ...props
}: ArrowLinkProps) {
  const base =
    variant === 'text'
      ? 'inline-flex items-center gap-2 text-sm font-medium'
      : 'inline-flex items-center gap-2 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.18em]';

  return (
    <a
      {...props}
      className={`group ${base} ${variantStyles[variant]} transition-colors ${className}`}
    >
      <span>{children}</span>
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        aria-hidden="true"
      />
    </a>
  );
}
