import { SparklesIcon } from '@heroicons/react/20/solid';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeCtaPanel = () => (
	<motion.div
		initial={{ opacity: 0, y: 20 }}
		whileInView={{ opacity: 1, y: 0 }}
		viewport={{ once: true }}
		className="grid gap-6 rounded-3xl border-2 border-primary-200 bg-gradient-to-br from-primary-50/80 via-lime-50/50 to-green-50/50 p-8 shadow-lg lg:grid-cols-[1.2fr,0.8fr]"
	>
		<div className="space-y-3">
			<div className="inline-flex items-center gap-2 rounded-full bg-primary-900 px-4 py-1.5 text-xs font-semibold text-white">
				<SparklesIcon className="h-4 w-4" />
				NUESTRA CASA
			</div>
			<h3 className="text-3xl font-bold text-primary-900">Universidad Tecnológica de Panamá</h3>
			<p className="text-base leading-relaxed text-primary-700">
				La UTP sigue siendo nuestro hogar de entrenamiento. En pretemporada nos trasladamos a las escalinatas del
				Canal para forjar el carácter que nos define como Titanes.
			</p>
		</div>
		<Link
			to="/contacto"
			className="group relative overflow-hidden flex items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-primary-700 to-primary-500 px-8 py-6 text-white shadow-xl transition-all hover:shadow-2xl hover:scale-[1.02]"
		>
			<div className="relative z-10">
				<p className="text-xs uppercase tracking-[0.2em] text-white/90 mb-1">Hermandad</p>
				<p className="text-xl font-bold">¿Quieres ser parte de nuestra historia?</p>
			</div>
			<motion.span className="text-lg font-bold" animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
				¡Unete a nosotros!
			</motion.span>
			<div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/20 to-lime-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
		</Link>
	</motion.div>
);

export default HomeCtaPanel;
