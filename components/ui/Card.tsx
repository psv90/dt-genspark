import { clsx } from 'clsx';
import { HTMLAttributes } from 'react';

export function Card(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={clsx('rounded-compact bg-bg-2 border border-white/5', className)} {...rest} />;
}

export function CardHeader(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={clsx('px-3 py-2.5 border-b border-white/5', className)} {...rest} />;
}

export function CardBody(props: HTMLAttributes<HTMLDivElement>) {
  const { className, ...rest } = props;
  return <div className={clsx('px-3 py-3', className)} {...rest} />;
}