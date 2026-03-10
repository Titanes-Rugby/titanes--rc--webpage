import './App.css';

import Menu from '@components/Menu';
import Parallax, { WithBackground } from '@components/Parallax';

function App() {
	return (
		<main>
			<Menu />
			<Parallax backgroundImage="images/background/1103840.jpg">
				<section className="mx-auto w-full max-w-6xl px-6 pt-20 md:pt-28">
					<div className="max-w-3xl rounded-2xl border border-white/20 bg-black/25 p-6 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.8)] backdrop-blur-sm md:p-9">
						<p className="mb-5 inline-flex rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-titanes-100">
							Titanes Rugby Club
						</p>
						<h1 className="text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
							Rugby de alto nivel,
							<span className="block text-titanes-200">formaci&oacute;n con identidad.</span>
						</h1>
						<p className="mt-5 max-w-2xl text-base leading-relaxed text-titanes-100/90 md:text-lg">
							Competimos con intensidad y construimos una comunidad s&oacute;lida dentro y fuera de la cancha. Descubre
							nuestros equipos, calendario y noticias del club.
						</p>
						<div className="mt-8 flex flex-wrap items-center gap-3">
							<a
								href="#"
								className="rounded-xl bg-titanes-200 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-titanes-900 transition-all hover:-translate-y-0.5 hover:bg-white"
							>
								Ver Fixture
							</a>
							<a
								href="#"
								className="rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/20"
							>
								Unirme al Club
							</a>
						</div>
						<div className="mt-8 grid grid-cols-1 gap-3 text-sm sm:grid-cols-3">
							<div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">
								<p className="text-xl font-semibold text-white">+200</p>
								<p className="text-titanes-100/85">Jugadores activos</p>
							</div>
							<div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">
								<p className="text-xl font-semibold text-white">3</p>
								<p className="text-titanes-100/85">Divisiones competitivas</p>
							</div>
							<div className="rounded-xl border border-white/15 bg-white/10 px-4 py-3">
								<p className="text-xl font-semibold text-white">10+</p>
								<p className="text-titanes-100/85">A&ntilde;os de historia</p>
							</div>
						</div>
					</div>
				</section>
			</Parallax>

			<WithBackground backgroundImage="images/background/1103841.jpg">
				<>
					<div>
						<div className="p-5 text-2xl text-titanes-200">
							<h1>
								<span className="text-titanes-700 font-medium">Titanes</span>
								Rugby Club
							</h1>
						</div>
					</div>
				</>
			</WithBackground>
		</main>
	);
}

export default App;
