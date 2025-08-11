import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

type Props = InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, Props>(function Input({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      className={clsx(
        'h-8 w-full rounded-compact bg-bg-2 border border-white/5 text-[13px] text-gray-100 placeholder:text-gray-500',
        'px-2.5 focus:outline-none focus:ring-2 ring-accent/30'
      , className)}
      {...props}
    />
  );
});

export default Input;