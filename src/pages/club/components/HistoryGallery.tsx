import { motion } from 'framer-motion';
import { useState } from 'react';

type GalleryItem = {
	image: string;
	title: string;
	caption: string;
};

const BASE_ITEMS: GalleryItem[] = [
	{
		image: '/images/background/galeria1.jpeg',
		title: 'Primer torneo - 21 Oct 2007',
		caption: 'El dia que marco el inicio de nuestro equipo.',
	},
	{
		image: '/images/background/galeria2.jpeg',
		title: 'Segundo uniforme',
		caption: 'Estreno del segundo uniforme en nuestro segundo torneo.',
	},
	{
		image: '/images/background/galeria15.jpeg',
		title: 'Las escalinatas',
		caption: 'Nuestro lugar de acondicionamiento fisico un lugar digno para un titan.',
	},
	{
		image: '/images/background/galeria18.jpeg',
		title: 'Nuestra casa UTP',
		caption: 'Entrenamientos en la Universidad tecnologica de Panamá de trineos con pesas.',
	},
];

const EXTRA_ITEMS: GalleryItem[] = [
	{
		image: '/images/background/galeria3.jpeg',
		title: 'Nueva piel',
		caption: 'Nuevo uniforme mostrando nuestra identidad con logo mejorado.',
	},
	{
		image: '/images/background/galeria4.jpeg',
		title: 'Rugby playa 2012',
		caption: 'El rugby no solo esta en el cesped, tambien en la arena junto a las olas.',
	},
	{
		image: '/images/background/galeria5.jpeg',
		title: 'Titanides en accion',
		caption: 'El pilar femenino en el cesped y en la playa.',
	},
	{
		image: '/images/background/galeria6.jpeg',
		title: 'Reclutamientos',
		caption: 'Primeros reclutamientos en la Universidad Tecnologica de Panama',
	},
	{
		image: '/images/background/galeria7.jpeg',
		title: 'Celebracion de ensayo',
		caption: 'Los valores de nuestro equipo no solo es disciplina, tambien una hermandad.',
	},
	{
		image: '/images/background/galeria8.jpeg',
		title: 'Tiempo de equipo',
		caption: 'El rugby dandose a conocer en la comunidad universitaria.',
	},
	{
		image: '/images/background/galeria10.jpeg',
		title: 'Velocidad al ala',
		caption: 'Corriendo lineas de fondo en cada entrenamiento.',
	},
	{
		image: '/images/background/galeria23.jpeg',
		title: 'Orgullo Titanes',
		caption: 'Una familia dentro y fuera de la canca, lo que nos define como hermanos.',
	},
];

const HistoryGallery = () => (
	<section className="rounded-3xl border-2 border-primary-200 bg-white p-8 shadow-lg space-y-6">
		<header className="space-y-2">
			<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">Momentos clave</p>
			<h3 className="text-2xl font-bold text-primary-900">Galeria de nuestra historia</h3>
			<p className="text-sm text-primary-700">Cada foto guarda un instante que moldeo el caracter Titanes.</p>
		</header>
		<GalleryGrid />
	</section>
);

const GalleryGrid = () => {
	const [expanded, setExpanded] = useState(false);
	const items = expanded ? [...BASE_ITEMS, ...EXTRA_ITEMS] : BASE_ITEMS;

	return (
		<>
			<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
				{items.map((item, idx) => (
					<motion.figure
						key={`${item.title}-${item.image}`}
						initial={{ opacity: 0, y: 12 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: Math.min(idx * 0.05, 0.4) }}
						className="flex flex-col overflow-hidden rounded-2xl border border-primary-100 bg-primary-50/60 shadow-sm"
					>
						<div className="relative h-44 w-full overflow-hidden">
							<img src={item.image} alt={item.title} className="h-full w-full object-cover" />
						</div>
						<figcaption className="p-4 space-y-1">
							<p className="text-sm font-semibold text-primary-900">{item.title}</p>
							<p className="text-xs text-primary-700 leading-relaxed">{item.caption}</p>
						</figcaption>
					</motion.figure>
				))}
			</div>
			<div className="flex justify-center">
				<button
					type="button"
					onClick={() => setExpanded((prev) => !prev)}
					className="mt-4 inline-flex items-center gap-2 rounded-full border border-primary-300 bg-primary-50 px-4 py-2 text-sm font-semibold text-primary-800 transition hover:border-primary-500 hover:bg-white"
				>
					{expanded ? 'Ver menos' : 'Ver mas'}
				</button>
			</div>
		</>
	);
};

export default HistoryGallery;
