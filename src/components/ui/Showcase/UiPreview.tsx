import { ReactNode } from 'react';

import { cn } from '@/utils/cn';

interface UiPreviewProps {
	title: string;
	children: ReactNode;
	className?: string;
}

const UiPreview = ({ title, children, className }: UiPreviewProps) => {
	return (
		<div className={cn('rounded-2xl border border-titanes-200 bg-white p-6', className)}>
			<h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-titanes-700">{title}</h3>
			<div className="mt-4">{children}</div>
		</div>
	);
};

export default UiPreview;
