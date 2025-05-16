import { ElementType } from 'react';
import { cn } from '@/lib/utils';

interface HeadingProps<T extends ElementType = 'h2'> {
  children: React.ReactNode;
  className?: string;
  as?: T;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
}

const sizeClasses = {
  sm: 'text-2xl font-semibold',
  md: 'text-3xl font-semibold',
  lg: 'text-4xl font-bold',
  xl: 'text-5xl font-bold',
  '2xl': 'text-6xl font-bold',
};

export function Heading<T extends ElementType = 'h2'>({
  children,
  className,
  as,
  size = 'lg',
  ...props
}: HeadingProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof HeadingProps<T>>) {
  const Component = as || 'h2';
  
  return (
    <Component
      className={cn(
        'tracking-tight text-gray-900',
        sizeClasses[size],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
} 