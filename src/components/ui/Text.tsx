import { ElementType } from 'react';
import { cn } from '@/lib/utils';

interface TextProps<T extends ElementType = 'p'> {
  children: React.ReactNode;
  className?: string;
  as?: T;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'default' | 'muted' | 'primary';
}

const sizeClasses = {
  xs: 'text-xs',
  sm: 'text-sm',
  base: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const weightClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  semibold: 'font-semibold',
  bold: 'font-bold',
};

const colorClasses = {
  default: 'text-gray-900',
  muted: 'text-gray-600',
  primary: 'text-primary',
};

export function Text<T extends ElementType = 'p'>({
  children,
  className,
  as,
  size = 'base',
  weight = 'normal',
  color = 'default',
  ...props
}: TextProps<T> & Omit<React.ComponentPropsWithoutRef<T>, keyof TextProps<T>>) {
  const Component = as || 'p';
  
  return (
    <Component
      className={cn(
        sizeClasses[size],
        weightClasses[weight],
        colorClasses[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
} 