import { motion } from 'framer-motion';

type GalleryItem = {
	image: string;
	title: string;
	caption: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
	{
		image: '/images/background/batch_J1P1_-5.jpg',
		title: 'Inicios en la UTP',
		caption: 'Primeros entrenos juntos en la casa que nos vio crecer.',
	},
	{
		image: '/images/background/fecha1-208.JPG',
		title: 'Primer torneo',
		caption: 'Primer torneo de Titanes y la hermandad tomando forma.',
	},
	{
		image: '/images/background/J2_RUGBY-433.jpg',
		title: 'Tackles decisivos',
		caption: 'Jugada clave que nos empujó a semifinales.',
	},
	{
		image: '/images/background/segundafecha-369.JPG',
		title: 'Fortaleza colectiva',
		caption: 'La disciplina diaria reflejada en cada scrum.',
	},
];

const HistoryGallery = () => (
	<section className="rounded-3xl border-2 border-primary-200 bg-white p-8 shadow-lg space-y-6">
		<header className="space-y-2">
			<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-600">Momentos clave</p>
			<h3 className="text-2xl font-bold text-primary-900">Galería de nuestra historia</h3>
			<p className="text-sm text-primary-700">
				Cada foto guarda un instante que moldeó el carácter Titanes.
			</p>
		</header>
		<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
			{GALLERY_ITEMS.map((item, idx) => (
				<motion.figure
					key={item.title}
					initial={{ opacity: 0, y: 12 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: idx * 0.05 }}
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
	</section>
);

export default HistoryGallery;
