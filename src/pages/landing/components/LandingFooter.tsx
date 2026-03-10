const LandingFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer id="contacto">
			<div className="bg-titanes-900 py-12">
				<div className="mx-auto w-full max-w-6xl px-6">
					<div className="grid gap-8 text-sm text-titanes-100/85 sm:grid-cols-3">
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-300">Club</p>
							<p className="mt-2 text-white">Titanes Rugby Club</p>
							<p className="mt-1">Lorem ipsum 123, Ciudad Deportiva.</p>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-300">Contacto</p>
							<p className="mt-2">hola@titanesrc.com</p>
							<p className="mt-1">+507 0000-0000</p>
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-titanes-300">Redes</p>
							<p className="mt-2">Instagram / Facebook / YouTube</p>
						</div>
					</div>
				</div>
			</div>
			<div className="w-full border-t border-white/10 bg-titanes-950/70">
				<div className="mx-auto w-full max-w-6xl px-6 py-5">
					<p className="text-xs uppercase tracking-[0.12em] text-titanes-100">
						&copy; {currentYear} Titanes Rugby Club. Todos los derechos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default LandingFooter;
