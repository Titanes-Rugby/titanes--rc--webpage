import type { PropsWithChildren } from 'react';

type DeferredSectionProps = PropsWithChildren<{
  className?: string;
  size?: string;
}>;

const DeferredSection = ({ children, className, size = '720px' }: DeferredSectionProps) => (
  <div
    className={className}
    style={{
      contentVisibility: 'auto',
      containIntrinsicSize: `1px ${size}`,
    }}
  >
    {children}
  </div>
);

export default DeferredSection;
