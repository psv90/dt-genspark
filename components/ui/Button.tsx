import { ButtonHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'accent' | 'ghost' | 'danger';
  size?: 'xs' | 'sm' | 'md';
  compact?: boolean;
};

const Button = forwardRef<HTMLButtonElement, Props>(function Button(
  { className, variant = 'accent', size = 'sm', compact = true, ...props },
  ref
) {
  const base =
    'inline-flex items-center justify-center rounded-compact font-medium transition-colors focus:outline-none focus-visible:ring-2 ring-offset-0 ring-accent/40 disabled:opacity-50 disabled:pointer-events-none';
  const sizes = {
    xs: 'text-[11px] h-7 px-2.5',
    sm: 'text-xs h-8 px-3',
    md: 'text-sm h-9 px-3.5'
  }[size];

  const variants = {
    accent: 'bg-accent text-black hover:bg-accent/90 shadow-glow',
    ghost: 'bg-bg-2 text-gray-200 hover:bg-bg-3 border border-white/5',
    danger: 'bg-[#ff4d4f] text-white hover:bg-[#ff2d2f]'
  }[variant];

  return (
    <button ref={ref} className={clsx(base, sizes, variants, compact && 'rounded-compact', className)} {...props} />
  );
});

export default Button;