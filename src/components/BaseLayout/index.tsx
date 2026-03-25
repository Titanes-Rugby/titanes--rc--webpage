import type { PropsWithChildren } from 'react';

import Menu from '@components/Menu';
import Footer from '@components/Footer';

import { cn } from '@/utils/cn';

type BaseLayoutProps = PropsWithChildren<{
	className?: string;
	contentClassName?: string;
}>;

const BaseLayout = ({ children, className, contentClassName }: BaseLayoutProps) => {
	return (
		<div className={cn('min-h-screen bg-primary-50 text-primary-900', className)}>
			<Menu />
			<div className={cn('relative', contentClassName)}>{children}</div>
			<Footer />
		</div>
	);
};

export default BaseLayout;
