import UiShowcaseSection from './components/UiShowcaseSection';

const UiComponentsPage = () => {
	return (
		<main>
			<section className="bg-white pb-20 pt-28 sm:pt-32">
				<div className="mx-auto w-full max-w-6xl px-6">
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-500">Design System</p>
					<h1 className="mt-2 text-3xl font-semibold text-primary-900 sm:text-4xl">UI Components</h1>
				</div>
			</section>
			<UiShowcaseSection />
		</main>
	);
};

export default UiComponentsPage;
