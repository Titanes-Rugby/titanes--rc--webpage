import { useLoaderData } from 'react-router-dom';
import RouteErrorBoundary from '@/routers/components/RouteErrorBoundary';

const labelByPath: Record<string, string> = {
	fixture: 'Fixture',
	patrocinadores: 'Patrocinadores',
	contacto: 'Contacto',
	'club/historia': 'Historia del Club',
	'club/staff-tecnico': 'Staff Tecnico',
	'club/instalaciones': 'Instalaciones',
	'equipos/primera-division': 'Primera Division',
	'equipos/juveniles': 'Juveniles',
	'equipos/femenino': 'Equipo Femenino',
	'media/noticias': 'Noticias',
	'media/galeria': 'Galeria',
	'media/videos': 'Videos',
};

const prettify = (value: string) =>
	value
		.replace(/-/g, ' ')
		.replace(/\b\w/g, (letter) => letter.toUpperCase());

export const loader = async ({ params }: { params: { group?: string; slug?: string } }) => {
	const path = params.group ? `${params.group}/${params.slug ?? ''}` : params.slug ?? '';
	const title = labelByPath[path] ?? prettify(path || 'Seccion');
	return { path, title };
};

export const Component = () => {
	const data = useLoaderData() as { path: string; title: string };

	return (
		<main>
			<section className="flex min-h-screen items-center justify-center bg-titanes-50 px-6 pb-20 pt-36">
				<div className="w-full max-w-3xl rounded-2xl border border-titanes-200 bg-white p-8 text-left shadow-sm">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-500">Placeholder</p>
					<h1 className="mt-3 text-3xl font-semibold text-titanes-900">{data.title}</h1>
					<p className="mt-1 text-xs uppercase tracking-[0.12em] text-titanes-500">{data.path}</p>
					<p className="mt-4 text-sm leading-relaxed text-titanes-700">
						Esta pagina es temporal mientras se define el contenido oficial. Aqui integraremos layout,
						copy real, medios y llamadas a la accion finales.
					</p>
					<a
						href="/"
						className="mt-6 inline-flex rounded-xl bg-titanes-600 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-titanes-700"
					>
						Volver al inicio
					</a>
				</div>
			</section>
		</main>
	);
};

export const ErrorBoundary = RouteErrorBoundary;
