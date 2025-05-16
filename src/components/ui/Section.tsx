import { ElementType } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps<T extends ElementType = 'section'> {
  children: React.ReactNode;
  className?: string;
  as?: T;
}

export function Section<T extends ElementType = 'section'>({
  children,
  className,
  as,
  ...props
}: SectionProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof SectionProps<T>>) {
  const Component = as || 'section';
  
  return (
    <Component
      className={cn('py-12 sm:py-16 lg:py-20', className)}
      {...props}
    >
      {children}
    </Component>
  );
} 