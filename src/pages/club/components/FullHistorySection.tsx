import { BookOpenIcon, FireIcon, HeartIcon, RocketLaunchIcon, ShieldCheckIcon } from "@heroicons/react/20/solid";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const EVENTS = [
  { year: "2004-2005", title: "Los Primeros Pasos", subtitle: "El Misticismo de 'El Infierno' y los 'Diablos Rojos'", body: "Antes de que Titanes Rugby Club fuera una realidad, Jorge D’Orcy y tres amigos sembraron la semilla del rugby el 18 de noviembre de 2004 para promover valores y buenas costumbres. En 2005 el grupo se consolida como Diablos Rojos RC (Rugby XV). El nombre buscaba algo autóctono que hiciera 'match' con nuestro lugar de entrenamiento: 'El Infierno', una cancha junto a la locomotora que forjó el carácter de un grupo de amigos de distintas universidades y trabajos unidos por la misma pasión.", highlight: "Nombre autóctono que hacía 'match' con el lugar de entrenamiento.", icon: FireIcon, image: "https://images.unsplash.com/photo-1759760300494-7378d88180f9?auto=format&fit=crop&w=1400&q=80&sat=-25", gradient: "from-emerald-900/50 via-green-800/50 to-lime-700/50" },
  { year: "2007", title: "Crecimiento y Expansión", subtitle: "El Nacimiento de Titanes", body: "El deporte gana popularidad y llegan exjugadores extranjeros que aportan experiencia. En 2007 decidimos separarnos por afinidades laborales y universitarias para expandirnos y migrar a Rugby 7. El 21 de octubre de 2007 se oficializan Cuervos, Dragones y Titanes; nos establecemos en la UTP y arrancan los reclutamientos.", highlight: "Dato curioso: por votación casi nos llamamos 'Tecno Barbies', pero prevaleció Titanes.", icon: ShieldCheckIcon, image: "https://images.unsplash.com/photo-1641176912780-3fa33fd20a15?auto=format&fit=crop&w=1400&q=80&sat=-18", gradient: "from-lime-600/50 via-green-600/50 to-emerald-600/50" },
  { year: "2012 - Presente", title: "El Corazón Femenino", subtitle: "Titanides y el Efecto Multiplicador", body: "El rugby femenino en Panamá inicia formalmente en 2012 con las Dragones Rugby Girls y Titanes abre su proyecto: Titanides. No solo formó jugadoras, sino líderes con conocimiento profundo que luego fundaron otros equipos en el país.", highlight: "White Lions RC, Lycans, Guerreros y Spartans RC nacen gracias al impulso Titanide.", icon: HeartIcon, image: "https://images.unsplash.com/photo-1612729153740-3f595f81651c?auto=format&fit=crop&w=1400&q=80&sat=-12", gradient: "from-green-700/50 via-emerald-700/50 to-lime-600/50" },
  { year: "Presente", title: "Evolución de Identidad", subtitle: "El Logo que nos Define", body: "Cada versión del escudo recuerda entrenos en la UTP, tackles en las escalinatas y a cada jugador que vistió nuestra armadura.", highlight: "Versiones: 2004, 2007, 2014, 2023; esencia intacta, diseño actualizado.", icon: RocketLaunchIcon, image: "https://images.unsplash.com/photo-1652975863595-a5727ac7a5d6?auto=format&fit=crop&w=1400&q=80&sat=-18", gradient: "from-lime-500/50 via-green-500/50 to-emerald-500/50" },
];

const LEGACY = [
  { name: "White Lions RC", founder: "Norma Ortiz" },
  { name: "Lycans", founder: "Mayzu" },
  { name: "Guerreros", founder: "Manuel Valdivia" },
  { name: "Spartans RC", founder: "Comunidad" },
];

const FullHistorySection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const handler = () => {
      if (!containerRef.current) return;
      const mid = window.innerHeight / 2;
      containerRef.current.querySelectorAll('[data-card]').forEach((card, idx) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const center = rect.top + rect.height / 2;
        if (center < mid && center > 0) setActiveIndex(idx);
      });
    };
    window.addEventListener('scroll', handler);
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <section className="space-y-12" ref={containerRef}>
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-titanes-900 via-titanes-800 to-titanes-700 p-8 text-white shadow-2xl">
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/70"><BookOpenIcon className="h-4 w-4" /> Nuestra historia</p>
        <h2 className="mt-2 text-4xl font-bold">La Crónica de Titanes: Nuestra Herencia</h2>
        <p className="mt-3 max-w-4xl text-base text-white/90 leading-relaxed">Heritage and Brotherhood. Forged in Panamá. Desde "El Infierno" hasta las ramas que hoy llevan nuestro legado, con la UTP como casa y las escalinatas del Canal como forja de carácter.</p>
      </div>

      <div className="relative grid gap-10 lg:grid-cols-[minmax(340px,540px),1fr]">
        <div className="absolute top-0 bottom-0 hidden w-[3px] rounded-full bg-titanes-200/60 lg:block" style={{ left: 'calc(540px + 24px)' }}>
          <motion.div className="absolute left-0 right-0 bg-gradient-to-b from-lime-400 via-green-500 to-emerald-600 rounded-full" style={{ height: lineHeight }} />
        </div>

        <div className="space-y-10">
          {EVENTS.map(({ year, title, subtitle, body, highlight, icon: Icon, image, gradient }, idx) => (
            <motion.article
              key={title}
              data-card
              ref={(el) => {
                if (el) cardRefs.current[idx] = el;
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative rounded-3xl bg-white shadow-xl ring-1 ring-titanes-900/5 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={image} alt={title} className="h-full w-full object-cover" />
                <div className={`absolute inset-0 bg-gradient-to-t ${gradient} to-transparent`} />
                <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-black/50 backdrop-blur px-5 py-2 text-lg font-extrabold text-white border border-white/20">{year}</div>
                <div className="absolute right-4 bottom-4 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-white/50 bg-black/50 backdrop-blur text-white"><Icon className="h-7 w-7" /></div>
              </div>
              <div className="space-y-3 bg-gradient-to-br from-titanes-700 via-titanes-600 to-titanes-500 p-8 text-white">
                <h3 className="text-3xl font-bold leading-tight">{title}</h3>
                <p className="text-lg italic text-white/90">{subtitle}</p>
                <p className="text-base leading-relaxed text-white/95">{body}</p>
                {highlight && <p className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white">{highlight}</p>}
              </div>
              {activeIndex === idx && <span className="absolute -right-3 top-8 hidden h-4 w-4 rounded-full bg-lime-400 shadow-lg lg:block" />}
            </motion.article>
          ))}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-24 space-y-6 rounded-3xl bg-gradient-to-br from-titanes-900/30 via-titanes-800/20 to-titanes-900/30 backdrop-blur-sm p-8 border border-titanes-700/30">
            <h3 className="text-2xl font-bold text-titanes-900 mb-4">Línea de tiempo</h3>
            <div className="space-y-3">
              {EVENTS.map((event, index) => (
                <motion.div
                  key={event.year}
                  onClick={() => {
                    setActiveIndex(index);
                    cardRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`p-3 rounded-xl transition-all cursor-pointer ${
                    activeIndex === index
                      ? 'bg-gradient-to-r from-lime-400/20 to-green-400/20 border-l-4 border-lime-500'
                      : 'bg-titanes-50/50 border-l-4 border-transparent hover:border-titanes-300'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <p className="text-sm font-bold text-titanes-900">{event.year}</p>
                  <p className="text-xs text-titanes-700">{event.title}</p>
                </motion.div>
              ))}
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
        <p className="mt-3 text-base leading-relaxed text-titanes-700 mb-6">Titanides impulsó nuevas ramas del rugby nacional. Estas son las huellas directas de nuestra hermandad:</p>
        <div className="grid md:grid-cols-2 gap-4">
          {LEGACY.map((team, index) => (
            <motion.div
              key={team.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -2 }}
              className="rounded-2xl bg-gradient-to-br from-titanes-700 to-titanes-600 p-5 text-white shadow-md border border-titanes-500"
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

      <div className="grid gap-4 rounded-3xl border border-titanes-100 bg-titanes-50/60 p-6 shadow-inner lg:grid-cols-[1.1fr,0.9fr]">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-titanes-900">Nuestra casa y nuestra gente</h3>
          <p className="text-sm leading-relaxed text-titanes-700">La UTP sigue siendo nuestro hogar de entrenamiento. En pretemporada nos trasladamos a las escalinatas del Canal para forjar el carácter que nos define como Titanes.</p>
        </div>
        <Link to="/contacto" className="flex items-center justify-between gap-3 rounded-2xl bg-gradient-to-r from-titanes-700 to-titanes-500 px-5 py-4 text-white shadow-md transition hover:-translate-y-0.5">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/80">Hermandad</p>
            <p className="text-lg font-semibold">¿Quieres ser parte de nuestra historia?</p>
          </div>
          <span className="text-sm font-semibold">Unirme al club →</span>
        </Link>
      </div>
    </section>
  );
};

export default FullHistorySection;
