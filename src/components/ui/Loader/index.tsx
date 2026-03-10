import Logo from '@/assets/logo.svg?react';

interface LoaderProps {
	label?: string;
	size?: 'sm' | 'md' | 'lg';
	fullScreen?: boolean;
}

const sizeClasses = {
	sm: 'h-10 w-10',
	md: 'h-14 w-14',
	lg: 'h-20 w-20',
} as const;

const Loader = ({ label = 'Cargando...', size = 'md', fullScreen = false }: LoaderProps) => {
	const containerClassName = fullScreen
		? 'flex min-h-screen items-center justify-center bg-white'
		: 'flex items-center justify-center py-6';

	return (
		<div className={containerClassName} role="status" aria-live="polite" aria-label={label}>
			<div className="flex flex-col items-center gap-3">
				<div className="relative">
					<div className="absolute inset-0 animate-ping rounded-full bg-titanes-200/60" />
					<div className="relative rounded-full border border-titanes-100 bg-white p-2 shadow-sm">
						<Logo className={`${sizeClasses[size]} animate-pulse fill-titanes-500`} />
					</div>
				</div>
				<p className="text-xs font-semibold uppercase tracking-[0.12em] text-titanes-500">
					{label}
				</p>
			</div>
		</div>
	);
};

export default Loader;
