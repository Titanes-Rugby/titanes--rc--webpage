import { Link } from 'react-router-dom';

import Logo from '@/components/ui/Logo';

import { footerSections, legalLinks, socialLinks } from './footerLinks';

type FooterLinkItemProps = {
	label: string;
	href: string;
	className: string;
};

const FooterLinkItem = ({ label, href, className }: FooterLinkItemProps) => {
	if (href.startsWith('http')) {
		return (
			<a href={href} className={className} target="_blank" rel="noreferrer">
				{label}
			</a>
		);
	}

	return (
		<Link to={href} className={className}>
			{label}
		</Link>
	);
};

const LandingFooter = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer id="contacto" className="bg-primary-900 text-white">
			<div className="mx-auto w-full max-w-6xl px-6 pb-7 pt-14">
				<div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,minmax(0,1fr))]">
					<div>
						<Link to="/" className="inline-flex">
							<Logo size="lg" tone="light" className="h-16" />
						</Link>
						<p className="mt-6 max-w-xs text-sm text-white/90">
							Titanes es parte orgullosa del rugby panameño y de nuestra comunidad.
						</p>
						<div className="mt-7 space-y-2">
							<p className="text-xs font-semibold uppercase tracking-[0.14em] text-white/80">Redes sociales</p>
							<div className="flex flex-col gap-2">
								{socialLinks.map((item) => (
									<FooterLinkItem
										key={item.label}
										label={item.label}
										href={item.href}
										className="inline-flex items-center gap-2 rounded-full border border-white/30 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-white transition-colors hover:bg-white hover:text-primary-900"
									/>
								))}
							</div>
						</div>
					</div>

					{footerSections.map((section) => (
						<div key={section.title}>
							<p className="text-[1.4rem] font-bold leading-none">{section.title}</p>
							<div className="mt-4 space-y-2">
								{section.links.map((item) => (
									<FooterLinkItem
										key={item.label}
										label={item.label}
										href={item.href}
										className="block text-[0.96rem] font-medium text-white/90 transition-colors hover:text-white"
									/>
								))}
							</div>
						</div>
					))}
				</div>

				<div className="mt-12 border-t border-white/20 pt-6">
					<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
						<p className="text-sm text-white/75">
							&copy; {currentYear} Titanes Rugby Club. Todos los derechos reservados.
						</p>
						<div className="flex flex-wrap items-center gap-x-5 gap-y-2">
							{legalLinks.map((item) => (
								<FooterLinkItem
									key={item.label}
									label={item.label}
									href={item.href}
									className="text-sm text-white/75 transition-colors hover:text-white"
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default LandingFooter;
