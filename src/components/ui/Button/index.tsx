import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react';
import { cva, cx, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva(
	[
		'inline-flex items-center justify-center gap-2 rounded-xl font-semibold uppercase tracking-[0.08em] transition-all',
		'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-200 focus-visible:ring-offset-2',
		'disabled:cursor-not-allowed disabled:opacity-60',
	],
	{
		variants: {
			variant: {
				primary: '',
				secondary: '',
				accent: '',
				danger: '',
				light: '',
			},
			appearance: {
				filled: '',
				outline: '',
				gosht: '',
			},
			size: {
				sm: 'h-9 px-3 text-xs',
				md: 'h-11 px-4 text-sm',
				lg: 'h-12 px-5 text-sm',
			},
			fullWidth: {
				true: 'w-full',
				false: '',
			},
		},
		compoundVariants: [
			{ variant: 'primary', appearance: 'filled', className: 'bg-primary-600 text-white hover:bg-primary-700' },
			{ variant: 'primary', appearance: 'outline', className: 'border border-primary-500 text-primary-600 hover:bg-primary-50' },
			{ variant: 'primary', appearance: 'gosht', className: 'text-primary-700 hover:bg-primary-100/70' },
			{ variant: 'secondary', appearance: 'filled', className: 'bg-secondary-500 text-white hover:bg-secondary-600' },
			{ variant: 'secondary', appearance: 'outline', className: 'border border-secondary-500 text-secondary-700 hover:bg-secondary-50' },
			{ variant: 'secondary', appearance: 'gosht', className: 'text-secondary-700 hover:bg-secondary-50' },
			{ variant: 'accent', appearance: 'filled', className: 'bg-accent-500 text-primary-950 hover:bg-accent-600' },
			{ variant: 'accent', appearance: 'outline', className: 'border border-accent-500 text-accent-700 hover:bg-accent-50' },
			{ variant: 'accent', appearance: 'gosht', className: 'text-accent-700 hover:bg-accent-50' },
			{ variant: 'danger', appearance: 'filled', className: 'bg-red-600 text-white hover:bg-red-700' },
			{ variant: 'danger', appearance: 'outline', className: 'border border-red-500 text-red-600 hover:bg-red-50' },
			{ variant: 'danger', appearance: 'gosht', className: 'text-red-600 hover:bg-red-50' },
			{ variant: 'light', appearance: 'filled', className: 'bg-white text-primary-900 hover:-translate-y-0.5 hover:bg-white/90' },
			{ variant: 'light', appearance: 'outline', className: 'border border-white/40 bg-white/10 text-white hover:bg-white/20' },
			{ variant: 'light', appearance: 'gosht', className: 'text-white hover:bg-white/20' },
		],
		defaultVariants: {
			variant: 'primary',
			appearance: 'filled',
			size: 'md',
			fullWidth: false,
		},
	},
);

interface Props
	extends ButtonHTMLAttributes<HTMLButtonElement>,
		VariantProps<typeof buttonVariants> {
	fullWidth?: boolean;
	loading?: boolean;
	leftIcon?: ReactNode;
	rightIcon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, Props>(
	(
		{
			className,
			children,
			variant = 'primary',
			appearance = 'filled',
			size = 'md',
			fullWidth = false,
			loading = false,
			leftIcon,
			rightIcon,
			disabled,
			type = 'button',
			...props
		},
		ref,
	) => {
		const isDisabled = disabled || loading;

		return (
			<button
				ref={ref}
				type={type}
				disabled={isDisabled}
				className={cx(buttonVariants({ variant, appearance, size, fullWidth }), className)}
				{...props}
			>
				{loading ? (
					<span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-r-transparent" />
				) : (
					leftIcon
				)}
				<span>{children}</span>
				{!loading && rightIcon}
			</button>
		);
	},
);

Button.displayName = 'Button';

export default Button;
