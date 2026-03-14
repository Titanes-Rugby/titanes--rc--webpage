import {
	BookOpenIcon,
	FireIcon,
	HeartIcon,
	RocketLaunchIcon,
	ShieldCheckIcon,
	SparklesIcon,
} from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const EVENTS = [
	{
		year: '2004-2005',
		title: 'Los Primeros Pasos',
		subtitle: "El Misticismo de 'El Infierno' y los 'Diablos Rojos'",
		body: 'Antes de que Titanes Rugby Club fuera una realidad, hubo eventos que marcaron nuestro ADN para siempre. Todo se remonta al nacimiento del rugby en Panamá, una semilla que plantó Jorge D’Orcy junto a tres amigos el 18 de noviembre de 2004. Con la visión de promover valores y buenas costumbres, invitaron a jóvenes de la Universidad de Panamá a descubrir este deporte.Para el 2005, ese grupo de amigos se consolidó como Diablos Rojos Rugby Club, jugando la modalidad de Rugby XV.El nombre no fue casualidad; buscábamos algo bien autóctono que hiciera "match" con nuestro lugar de entrenamiento: "El Infierno".Era una cancha apodada así porque estaba justo al lado de donde pasaba la locomotora, creando un ambiente único para forjar el carácter.En esos días, el rugby era un conglomerado de amigos de distintas universidades y trabajos que compartían una misma pasión.',
		highlight: "Nombre autóctono que hacía 'match' con el lugar de entrenamiento.",
		icon: FireIcon,
		image: 'https://images.unsplash.com/photo-1759760300494-7378d88180f9?auto=format&fit=crop&w=1400&q=80&sat=-25',
		gradient: 'from-emerald-900/50 via-green-800/50 to-lime-700/50',
	},
	{
		year: '2007',
		title: 'Crecimiento y Expansión',
		subtitle: 'El Nacimiento de Titanes',
		body: 'A medida que el deporte ganaba popularidad y se sumaban exjugadores extranjeros que aportaban su experiencia desinteresadamente, el equipo creció tanto que en 2007 se tomó una decisión estratégica. Decidimos separarnos por afinidades laborales y universitarias para poder expandirnos y buscar más gente. Esta transición dio paso a la modalidad de Sevens (Rugby 7), y el 21 de octubre de 2007 se oficializaron nuevos equipos, entre ellos Cuervos, Dragones y, por supuesto, Titanes. Con la fundación oficial, logramos establecernos en la Universidad Tecnológica de Panamá (UTP), donde iniciamos nuestros primeros reclutamientos.',
		highlight: "Dato curioso: por votación casi nos llamamos 'Tecno Barbies', pero prevaleció Titanes.",
		icon: ShieldCheckIcon,
		image: 'https://images.unsplash.com/photo-1641176912780-3fa33fd20a15?auto=format&fit=crop&w=1400&q=80&sat=-18',
		gradient: 'from-lime-600/50 via-green-600/50 to-emerald-600/50',
	},
	{
		year: '2012 - Presente',
		title: 'El Corazón Femenino',
		subtitle: 'Titanides y el Efecto Multiplicador',
		body: 'El rugby femenino en Panamá inició formalmente en 2012 con las Dragones Rugby Girls, pero pronto Titanes abrió su propio proyecto: Las Titanides. Este equipo no solo formó jugadoras, sino líderes con un conocimiento profundo que luego fundaron otros equipos en el país. Es un orgullo decir que de la familia de las Titanides surgieron grandes ramas del rugby nacional.',
		highlight: 'White Lyons RC, Lycans, Guerreros y Spartans RC nacen gracias al impulso Titanide.',
		icon: HeartIcon,
		image: 'https://images.unsplash.com/photo-1612729153740-3f595f81651c?auto=format&fit=crop&w=1400&q=80&sat=-12',
		gradient: 'from-green-700/50 via-emerald-700/50 to-lime-600/50',
	},
	{
		year: 'Presente',
		title: 'Evolución de Identidad',
		subtitle: 'El Logo que nos Define',
		body: 'Cada versión del escudo recuerda entrenos en la UTP, tackles en las escalinatas y a cada jugador que vistió nuestra armadura.',
		highlight: 'Versiones: 2004, 2007, 2014, 2023; esencia intacta, diseño actualizado.',
		icon: RocketLaunchIcon,
		image: 'https://images.unsplash.com/photo-1652975863595-a5727ac7a5d6?auto=format&fit=crop&w=1400&q=80&sat=-18',
		gradient: 'from-lime-500/50 via-green-500/50 to-emerald-500/50',
	},
];

const LEGACY = [
	{ name: 'White Lyons RC', founder: 'Norma Ortiz' },
	{ name: 'Lycans', founder: 'Mayzu' },
	{ name: 'Guerreros', founder: 'Manuel Valdivia' },
	{ name: 'Spartans RC', founder: 'Comunidad' },
];

const FullHistorySection = () => {
	const containerRef = useRef<HTMLDivElement>(null);
	const cardRefs = useRef<HTMLDivElement[]>([]);
	const [activeIndex, setActiveIndex] = useState(0);
	const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end end'] });
	const timelineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

	useEffect(() => {
		const handleScroll = () => {
			if (!containerRef.current) return;
			const cards = containerRef.current.querySelectorAll('[data-timeline-card]');
			const windowHeight = window.innerHeight;
			cards.forEach((card, index) => {
				const rect = (card as HTMLElement).getBoundingClientRect();
				const cardCenter = rect.top + rect.height / 2;
				if (cardCenter < windowHeight / 2 && cardCenter > 0) setActiveIndex(index);
			});
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<section className="space-y-12" ref={containerRef}>
			<div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-titanes-900 via-titanes-800 to-titanes-700 p-8 md:p-12 text-white shadow-2xl">
				<p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
					<BookOpenIcon className="h-4 w-4" /> Nuestra historia
				</p>
				<h2 className="mt-2 text-4xl md:text-5xl font-bold">Titanes: Nuestra Herencia, nuestro legado</h2>
				<p className="mt-4 max-w-4xl text-base md:text-lg text-white/90 leading-relaxed">
					Una hermandad formada en Panamá desde "El Infierno" hasta las ramas que hoy llevan nuestro legado, con la
					Universidad Tecnológica de Panamá.
				</p>
			</div>

			<div className="relative">
				<div className="absolute left-0 top-0 bottom-0 hidden lg:block" style={{ left: 'calc(540px + 32px)' }}>
					<div className="sticky top-20 h-screen flex items-center">
						<div className="relative w-1 h-[60vh] bg-titanes-200/30 rounded-full overflow-hidden">
							<motion.div
								className="absolute top-0 left-0 right-0 bg-gradient-to-b from-lime-400 via-green-500 to-emerald-600 rounded-full"
								style={{ height: timelineHeight }}
							/>
							<motion.div
								className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-lime-400 rounded-full shadow-lg shadow-lime-400/50"
								style={{ top: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
								animate={{
									scale: [1, 1.5, 1],
									boxShadow: [
										'0 0 10px rgba(163, 230, 53, 0.5)',
										'0 0 30px rgba(163, 230, 53, 0.8)',
										'0 0 10px rgba(163, 230, 53, 0.5)',
									],
								}}
								transition={{ duration: 2, repeat: Infinity }}
							/>
						</div>
					</div>
				</div>

				<div className="grid gap-10 lg:grid-cols-[minmax(320px,540px),1fr] lg:gap-16">
					<div className="space-y-12">
						{EVENTS.map(({ year, title, subtitle, body, highlight, icon: Icon, image, gradient }, index) => (
							<motion.article
								key={title}
								data-timeline-card
								ref={(el) => {
									if (el) cardRefs.current[index] = el;
								}}
								initial={{ opacity: 0, x: -50 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true, margin: '-100px' }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								className="relative rounded-3xl bg-white shadow-xl ring-1 ring-titanes-900/5 overflow-hidden group"
							>
								<div className="overflow-hidden">
									<div className="relative h-72 overflow-hidden">
										<motion.img
											src={image}
											alt={title}
											className="h-full w-full object-cover"
											whileHover={{ scale: 1.05 }}
											transition={{ duration: 0.4 }}
										/>
										<div className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent`} />
										<motion.div
											className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/50 backdrop-blur-md px-6 py-2.5 text-lg font-extrabold text-white border border-white/20"
											whileHover={{ scale: 1.05 }}
										>
											{year}
										</motion.div>
										<motion.div
											className="absolute right-4 bottom-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/50 bg-black/50 backdrop-blur-md text-white"
											animate={activeIndex === index ? { rotate: [0, 360] } : {}}
											transition={{ duration: 2, ease: 'linear' }}
											whileHover={{ scale: 1.1 }}
										>
											<Icon className="h-7 w-7" />
										</motion.div>
										{activeIndex === index && (
											<motion.div
												layoutId="activeCard"
												className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-lime-400 via-green-400 to-emerald-400"
												initial={{ scaleX: 0 }}
												animate={{ scaleX: 1 }}
												transition={{ duration: 0.5 }}
											/>
										)}
									</div>
								</div>
								<div className="space-y-4 bg-gradient-to-br from-titanes-700 via-titanes-600 to-titanes-500 p-8 text-white">
									<motion.h3
										className="text-3xl font-bold leading-tight"
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.2 }}
									>
										{title}
									</motion.h3>
									<motion.p
										className="text-xl italic text-white/90"
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.3 }}
									>
										{subtitle}
									</motion.p>
									<motion.p
										className="text-base leading-relaxed text-white/95"
										initial={{ opacity: 0, y: 10 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: 0.4 }}
									>
										{body}
									</motion.p>
									{highlight && (
										<motion.div
											initial={{ opacity: 0, scale: 0.95 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ delay: 0.5 }}
											whileHover={{ scale: 1.02 }}
											className="rounded-2xl border-2 border-lime-300/30 bg-white/15 backdrop-blur-sm px-5 py-4 text-sm font-semibold text-white shadow-lg"
										>
											<div className="flex items-start gap-2">
												<SparklesIcon className="h-5 w-5 text-lime-300 flex-shrink-0 mt-0.5" />
												<p>{highlight}</p>
											</div>
										</motion.div>
									)}
								</div>
							</motion.article>
						))}
					</div>

					<div className="hidden lg:block">
						<div className="sticky top-24 space-y-6 rounded-3xl bg-gradient-to-br from-titanes-900/30 via-titanes-800/20 to-titanes-900/30 backdrop-blur-sm p-8 border border-titanes-700/30">
							<h3 className="text-2xl font-bold text-titanes-900 mb-4">Linea de tiempo</h3>
							<div className="space-y-3">
								{EVENTS.map((event, idx) => (
									<button
										key={event.year}
										onClick={() => {
											setActiveIndex(idx);
											cardRefs.current[idx]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
										}}
										className={`w-full text-left p-3 rounded-xl transition ${
											activeIndex === idx
												? 'bg-gradient-to-r from-lime-400/20 to-green-400/20 border-l-4 border-lime-500'
												: 'bg-titanes-50/50 border-l-4 border-transparent hover:border-titanes-300 cursor-pointer'
										}`}
									>
										<p className="text-sm font-bold text-titanes-900">{event.year}</p>
										<p className="text-xs text-titanes-700">{event.title}</p>
									</button>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>

			<motion.article
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="rounded-3xl border-2 border-titanes-200 bg-gradient-to-br from-white via-lime-50/30 to-green-50/30 p-8 shadow-lg"
			>
				<div className="flex items-center gap-3 mb-4">
					<div className="p-3 bg-gradient-to-br from-lime-400 to-green-500 rounded-2xl">
						<HeartIcon className="h-6 w-6 text-white" />
					</div>
					<h3 className="text-2xl font-bold text-titanes-900">Legado que se multiplica</h3>
				</div>
				<p className="mt-3 text-base leading-relaxed text-titanes-700 mb-6">
					Titanides impulsó nuevas ramas del rugby nacional. Estas son las huellas directas de nuestra hermandad:
				</p>
				<div className="grid md:grid-cols-2 gap-4">
					{LEGACY.map((team, index) => (
						<motion.div
							key={team.name}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							whileHover={{ scale: 1.02, y: -2 }}
							className="rounded-2xl bg-gradient-to-br from-titanes-700 to-titanes-600 p-5 text-white shadow-md border border-titanes-500 cursor-pointer"
						>
							<div className="flex items-center gap-3">
								<ShieldCheckIcon className="h-8 w-8 text-lime-300" />
								<div>
									<p className="font-bold text-lg">{team.name}</p>
									<p className="text-sm text-white/80">Fundador: {team.founder}</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</motion.article>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="grid gap-6 rounded-3xl border-2 border-titanes-200 bg-gradient-to-br from-titanes-50/80 via-lime-50/50 to-green-50/50 p-8 shadow-lg lg:grid-cols-[1.2fr,0.8fr]"
			>
				<div className="space-y-3">
					<div className="inline-flex items-center gap-2 rounded-full bg-titanes-900 px-4 py-1.5 text-xs font-semibold text-white">
						<SparklesIcon className="h-4 w-4" />
						NUESTRA CASA
					</div>
					<h3 className="text-3xl font-bold text-titanes-900">Universidad Tecnológica de Panamá</h3>
					<p className="text-base leading-relaxed text-titanes-700">
						La UTP sigue siendo nuestro hogar de entrenamiento. En pretemporada nos trasladamos a las escalinatas del
						Canal para forjar el carácter que nos define como Titanes.
					</p>
				</div>
				<Link
					to="/contacto"
					className="group relative overflow-hidden flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-titanes-700 to-titanes-500 px-8 py-6 text-white shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02]"
				>
					<div className="relative z-10">
						<p className="text-xs uppercase tracking-[0.2em] text-white/90 mb-1">Hermandad</p>
						<p className="text-xl font-bold">¿Quieres ser parte de nuestra historia?</p>
					</div>
					<motion.span
						className="text-lg font-bold"
						animate={{ x: [0, 5, 0] }}
						transition={{ repeat: Infinity, duration: 1.5 }}
					>
						¡Unete a nosotros!
					</motion.span>
					<div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/20 to-lime-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
				</Link>
			</motion.div>
		</section>
	);
};

export default FullHistorySection;
