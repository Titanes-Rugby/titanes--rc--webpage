import { socialLinks } from '@/pages/landing/components/footerLinks';

const SocialCTA = () => {
  return (
    <article className="flex flex-col gap-4 rounded-2xl border border-primary-200 bg-primary-900 p-5 shadow-sm lg:flex-row lg:items-center lg:justify-between">
      <div className="space-y-1">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-100">Síguenos</p>
        <h3 className="text-lg font-semibold text-white">Más info de prácticas, eventos y viajes</h3>
        <p className="text-sm text-primary-100/85">
          Únete a nuestras redes para enterarte de horarios de entreno, activaciones y convocatorias.
        </p>
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full border border-primary-100/50 px-4 text-xs font-bold uppercase tracking-[0.1em] text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-primary-900"
          >
            {item.label}
          </a>
        ))}
      </div>
    </article>
  );
};

export default SocialCTA;
