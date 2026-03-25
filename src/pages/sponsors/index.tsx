import SponsorsGrid from './components/SponsorsGrid';
import SponsorsHero from './components/SponsorsHero';
import SponsorsMarquee from './components/SponsorsMarquee';
import { sponsors } from './sponsors.data';

const SponsorsPage = () => {
  return (
	<main className="bg-primary-50 min-h-screen">
		<SponsorsHero />
		<section className="mx-auto w-full max-w-6xl space-y-6 px-6 py-10">
			<SponsorsMarquee sponsors={sponsors} />
			<div className="space-y-1">
				<p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary-500">Wall Of Partners</p>
				<h2 className="text-2xl font-bold text-primary-900">Patrocinadores destacados</h2>
			</div>
			<SponsorsGrid sponsors={sponsors} />
			<div className="rounded-2xl bg-primary-800 px-6 py-8 text-white">
				<p className="text-xs font-semibold tracking-[0.2em] uppercase text-primary-100">¿Quieres unirte?</p>
				<h3 className="mt-2 text-2xl font-black leading-tight">¿Te gustaría patrocinarnos?</h3>
				<p className="mt-2 text-sm text-primary-100/90">
					Conviértete en parte de la familia Titanes y potencia el rugby en Panamá.
				</p>
				<a
					href="/contacto"
					className="mt-4 inline-flex rounded-xl bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary-900 transition hover:bg-primary-50"
				>
					Abrir formulario
				</a>
			</div>
		</section>
	</main>
  );
};

export default SponsorsPage;
