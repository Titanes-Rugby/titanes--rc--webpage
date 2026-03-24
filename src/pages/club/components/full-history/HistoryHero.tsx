import { BookOpenIcon } from '@heroicons/react/20/solid';

const HistoryHero = () => (
	<div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-900 via-primary-800 to-primary-700 p-8 md:p-12 text-white shadow-2xl">
		<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
			<BookOpenIcon className="h-4 w-4" /> Nuestra historia
		</p>
		<h2 className="mt-2 text-4xl md:text-5xl font-bold">Titanes: Nuestra Herencia, nuestro legado</h2>
		<p className="mt-4 max-w-4xl text-base md:text-lg text-white/90 leading-relaxed">
			Una hermandad formada en Panamá desde "El Infierno" hasta las ramas que hoy llevan nuestro legado, con la
			Universidad Tecnológica de Panamá.
		</p>
	</div>
);

export default HistoryHero;
