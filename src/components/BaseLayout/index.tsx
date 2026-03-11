import type { PropsWithChildren } from 'react';

import Menu from '@components/Menu';

import { cn } from '@/utils/cn';

type BaseLayoutProps = PropsWithChildren<{
  className?: string;
  contentClassName?: string;
}>;

const BaseLayout = ({ children, className, contentClassName }: BaseLayoutProps) => {
  return (
    <div className={cn('min-h-screen bg-titanes-50 text-titanes-900', className)}>
      <Menu />
      <div className={cn('relative', contentClassName)}>{children}</div>
    </div>
  );
};

export default BaseLayout;
