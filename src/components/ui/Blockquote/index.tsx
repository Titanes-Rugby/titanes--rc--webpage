import { ReactNode } from 'react';
import { cva, cx, type VariantProps } from 'class-variance-authority';

const blockquoteVariants = cva('rounded-2xl border-l-4 px-5 py-4 leading-relaxed', {
	variants: {
		variant: {
			accent: 'border-accent-500 bg-accent-50 text-titanes-800',
			primary: 'border-titanes-500 bg-titanes-50 text-titanes-800',
			secondary: 'border-secondary-500 bg-secondary-50 text-secondary-800',
			neutral: 'border-slate-500 bg-slate-50 text-slate-800',
		},
		size: {
			sm: 'text-xs',
			md: 'text-sm',
			lg: 'text-base',
		},
	},
	defaultVariants: {
		variant: 'accent',
		size: 'md',
	},
});

interface BlockquoteProps extends VariantProps<typeof blockquoteVariants> {
	children: ReactNode;
	className?: string;
	cite?: string;
}

const Blockquote = ({
	children,
	className,
	variant = 'accent',
	size = 'md',
	cite,
}: BlockquoteProps) => {
	return (
		<blockquote className={cx(blockquoteVariants({ variant, size }), className)}>
			<p>{children}</p>
			{cite ? (
				<footer className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] opacity-75">
					{cite}
				</footer>
			) : null}
		</blockquote>
	);
};

export default Blockquote;
