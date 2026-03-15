import { Blockquote, Button, Loader, Logo, Marquee, UiPreview } from '@components/ui';

import AnimatedTiltCardPreview from './AnimatedTiltCardPreview';
import PlayerCardPreview from './PlayerCardPreview';
import PlayerPortraitPreview from './PlayerPortraitPreview';

const variants = ['primary', 'secondary', 'accent', 'danger'] as const;
const appearances = ['filled', 'outline', 'gosht'] as const;
const sizes = ['sm', 'md', 'lg'] as const;
const marqueeItems = ['UI Kit', 'Animations', 'Buttons', 'Loaders', 'Cards', 'Feedback'];

const UiShowcaseSection = () => {
	return (
		<section id="ui-showcase" data-theme="light" className="bg-primary-50 py-20 text-primary-900">
			<div className="mx-auto w-full max-w-6xl px-6">
				<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">UI Components</p>
				<h2 className="mt-3 text-3xl font-semibold text-primary-900 sm:text-4xl">Design System Showcase</h2>
				<p className="mt-4 max-w-2xl text-sm leading-relaxed text-primary-700">
					Seccion de referencia para validar estilo, estados y consistencia de componentes UI.
				</p>

				<UiPreview title="Button variants" className="mt-8">
					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
						{variants.map((variant) => (
							<div key={variant} className="space-y-2 rounded-xl border border-primary-100 p-4">
								<p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">{variant}</p>
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
				</UiPreview>

				<UiPreview title="Button sizes & states" className="mt-6">
					<div className="flex flex-wrap items-center gap-3">
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
				</UiPreview>

				<div className="mt-6 rounded-2xl bg-primary-900 p-6">
					<h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-primary-200">Light variant on dark backgrounds</h3>
					<div className="mt-4 flex flex-wrap gap-3">
						<Button variant="light" appearance="filled">Light Filled</Button>
						<Button variant="light" appearance="outline">Light Outline</Button>
						<Button variant="light" appearance="gosht">Light Gosht</Button>
					</div>
				</div>

				<UiPreview title="Loader" className="mt-6">
					<div className="grid gap-4 sm:grid-cols-3">
						<div className="rounded-xl border border-primary-100 bg-primary-50/70 p-4">
							<Loader size="sm" label="Loader sm" />
						</div>
						<div className="rounded-xl border border-primary-100 bg-primary-50/70 p-4">
							<Loader size="md" label="Loader md" />
						</div>
						<div className="rounded-xl border border-primary-100 bg-primary-50/70 p-4">
							<Loader size="lg" label="Loader lg" />
						</div>
					</div>
				</UiPreview>

				<UiPreview title="Logo" className="mt-6">
					<div className="grid gap-4 sm:grid-cols-2">
						<div className="rounded-xl border border-primary-100 bg-primary-50/70 p-4">
							<p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">
								Primary tone
							</p>
							<div className="flex items-end gap-4">
								<Logo size="sm" />
								<Logo size="md" />
								<Logo size="lg" />
							</div>
						</div>
						<div className="rounded-xl bg-primary-900 p-4">
							<p className="mb-3 text-xs font-semibold uppercase tracking-[0.12em] text-primary-300">
								Light tone
							</p>
							<div className="flex items-end gap-4">
								<Logo size="sm" tone="light" />
								<Logo size="md" tone="light" />
								<Logo size="lg" tone="light" />
							</div>
						</div>
					</div>
				</UiPreview>

				<UiPreview title="Blockquote" className="mt-6">
					<div className="grid gap-4 sm:grid-cols-2">
						<Blockquote variant="accent" size="md" cite="Grito de guerra">
							Y Hermandad, Honor y Disciplina... Quienes somos TITANES...
						</Blockquote>
						<Blockquote variant="secondary" size="sm" cite="Valores del club">
							Compromiso, trabajo en equipo y respeto en cada partido.
						</Blockquote>
					</div>
				</UiPreview>

				<UiPreview title="Marquee" className="mt-6">
					<Marquee
						items={marqueeItems}
						renderItem={(item) => (
							<div className="flex h-14 min-w-[9rem] items-center justify-center rounded-xl border border-primary-200 bg-primary-50 px-4 text-xs font-semibold uppercase tracking-[0.12em] text-primary-600 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-sm">
								{item}
							</div>
						)}
					/>
				</UiPreview>

				<UiPreview title="Animated Tilt Card" className="mt-6">
					<AnimatedTiltCardPreview />
				</UiPreview>

				<UiPreview title="Player Card" className="mt-6">
					<PlayerCardPreview />
				</UiPreview>

				<UiPreview title="Player Portrait" className="mt-6">
					<PlayerPortraitPreview />
				</UiPreview>
			</div>
		</section>
	);
};

export default UiShowcaseSection;
