import { Button } from '@components/ui';

const variants = ['primary', 'secondary', 'danger'] as const;
const appearances = ['filled', 'outline', 'gosht'] as const;
const sizes = ['sm', 'md', 'lg'] as const;

const UiShowcaseSection = () => {
	return (
		<section id="ui-showcase" className="bg-titanes-50 py-20">
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-500">UI Components</p>
				<h2 className="mt-3 text-3xl font-semibold text-titanes-900 sm:text-4xl">Design System Showcase</h2>
				<p className="mt-4 max-w-2xl text-sm leading-relaxed text-titanes-700">
					Seccion de referencia para validar estilo, estados y consistencia de componentes UI.
				</p>

				<div className="mt-8 rounded-2xl border border-titanes-200 bg-white p-6">
					<h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-titanes-700">Button variants</h3>
					<div className="mt-4 grid gap-4 md:grid-cols-3">
						{variants.map((variant) => (
							<div key={variant} className="space-y-2 rounded-xl border border-titanes-100 p-4">
								<p className="text-xs font-semibold uppercase tracking-[0.12em] text-titanes-500">{variant}</p>
								<div className="flex flex-wrap gap-2">
									{appearances.map((appearance) => (
										<Button key={`${variant}-${appearance}`} variant={variant} appearance={appearance}>
											{appearance}
										</Button>
									))}
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="mt-6 rounded-2xl border border-titanes-200 bg-white p-6">
					<h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-titanes-700">Button sizes & states</h3>
					<div className="mt-4 flex flex-wrap items-center gap-3">
						{sizes.map((size) => (
							<Button key={size} variant="primary" size={size}>
								{size}
							</Button>
						))}
						<Button variant="secondary" loading>
							Loading
						</Button>
						<Button variant="danger" disabled>
							Disabled
						</Button>
						<div className="w-full max-w-xs">
							<Button variant="secondary" fullWidth>
								Full Width
							</Button>
						</div>
					</div>
				</div>

				<div className="mt-6 rounded-2xl bg-titanes-900 p-6">
					<h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-titanes-200">Light variant on dark backgrounds</h3>
					<div className="mt-4 flex flex-wrap gap-3">
						<Button variant="light" appearance="filled">
							Light Filled
						</Button>
						<Button variant="light" appearance="outline">
							Light Outline
						</Button>
						<Button variant="light" appearance="gosht">
							Light Gosht
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default UiShowcaseSection;
