const JoinSection = () => {
	return (
		<section className="bg-titanes-700 py-16">
			<div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-6 px-6 sm:flex-row sm:items-center">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-100">Comunidad</p>
					<h2 className="mt-2 text-3xl font-semibold text-white">Hazte miembro de Titanes</h2>
					<p className="mt-2 max-w-2xl text-sm text-titanes-100/90">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean eu leo quam.
					</p>
				</div>
				<a
					href="#contacto"
					className="rounded-xl bg-white px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-titanes-800 transition-colors hover:bg-titanes-100"
				>
					Inscribirme
				</a>
			</div>
		</section>
	);
};

export default JoinSection;
