import GalleryGrid from './history-gallery/GalleryGrid';

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

export default HistoryGallery;
