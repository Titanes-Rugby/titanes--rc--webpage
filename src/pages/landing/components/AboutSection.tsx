const AboutSection = () => {
	return (
		<section id="club" className="bg-white py-20">
			<div className="mx-auto grid w-full max-w-6xl gap-10 px-6 lg:grid-cols-2">
				<div>
					<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-500">
						Quienes Somos
					</p>
					<h2 className="mt-3 text-3xl font-semibold text-titanes-900 sm:text-4xl">
						Un club construido desde la identidad y la entrega.
					</h2>
					<p className="mt-5 text-base leading-relaxed text-titanes-700">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed posuere consectetur est at
						lobortis. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo
						cursus magna, vel scelerisque nisl consectetur et.
					</p>
				</div>
				<div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
					{['Hermandad', 'Homor', 'Disciplina'].map((pillar) => (
						<article key={pillar} className="rounded-2xl border border-titanes-100 bg-titanes-50/70 p-5">
							<h3 className="text-lg font-semibold text-titanes-900">{pillar}</h3>
							<p className="mt-2 text-sm leading-relaxed text-titanes-700">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta
								felis euismod semper.
							</p>
						</article>
					))}
				</div>
			</div>
		</section>
	);
};

export default AboutSection;
