
import React, { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cva } from 'class-variance-authority';

const statVariants = cva(
  'inline-flex items-center text-xs font-medium',
  {
    variants: {
      variant: {
        default: 'text-dashboard-green',
        increase: 'text-green-600',
        decrease: 'text-red-600',
        neutral: 'text-gray-500',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

interface StatCardProps {
  title: string;
  value: string | number;
  icon: ReactNode;
  description?: string;
  trend?: {
    value: string;
    variant?: 'increase' | 'decrease' | 'neutral';
  };
  className?: string;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  description,
  trend,
  className,
}) => {
  return (
    <Card className={cn("dashboard-card h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent className="dashboard-stat-card">
        <div className="text-3xl font-bold mb-1">{value}</div>
        <div className="flex items-center gap-2">
          {trend && (
            <span className={statVariants({ variant: trend.variant })}>
              {trend.value}
            </span>
          )}
          {description && (
            <p className="text-xs text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;
