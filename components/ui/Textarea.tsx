import { TextareaHTMLAttributes, forwardRef } from 'react';
import { clsx } from 'clsx';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, Props>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={clsx(
        'w-full rounded-compact bg-bg-2 border border-white/5 text-[13px] text-gray-100 placeholder:text-gray-500',
        'px-2.5 py-2 focus:outline-none focus:ring-2 ring-accent/30 resize-none'
      , className)}
      {...props}
    />
  );
});

export default Textarea;