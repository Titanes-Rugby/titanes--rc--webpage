import Logo from '../Logo';

interface LoaderProps {
	label?: string;
	size?: 'sm' | 'md' | 'lg';
	fullScreen?: boolean;
}

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
						<Logo size={size} tone="primary" className="animate-pulse" />
					</div>
				</div>
				<p className="text-xs font-semibold uppercase tracking-[0.12em] text-titanes-500">{label}</p>
			</div>
		</div>
	);
};

export default Loader;
