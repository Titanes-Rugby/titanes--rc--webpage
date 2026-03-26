import { useEffect, useMemo, useRef, useState } from 'react';

import { motion } from 'framer-motion';

import Brand from './Brand';
import DesktopMenu from './DesktopMenu';
import MobileMenu from './MobileMenu';
import { Bars3Icon } from './menuConfig';

const Header = () => {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [openKey, setOpenKey] = useState<string | null>(null);
	const [isVisible, setIsVisible] = useState(true);
	const lastScrollY = useRef(0);

	const headerClasses = useMemo(
		() => ['fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8', 'text-white'].join(' '),
		[],
	);

	useEffect(() => {
		const handleScroll = () => {
			const currentY = window.scrollY;
			if (currentY <= 0) {
				setIsVisible(true);
				lastScrollY.current = 0;
				return;
			}

			if (currentY > lastScrollY.current && currentY > 64) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}

			lastScrollY.current = currentY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	useEffect(() => {
		if (mobileMenuOpen) setIsVisible(true);
	}, [mobileMenuOpen]);

	return (
		<motion.header
			className={headerClasses}
			initial={{ y: 0, opacity: 1 }}
			animate={isVisible ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
			transition={{ type: 'tween', duration: 0.32 }}
		>
			<div className="mx-auto max-w-7xl rounded-2xl border border-white/25 bg-gradient-to-r from-primary-600/95 via-primary-500/95 to-primary-700/95 px-5 shadow-[0_20px_40px_-22px_rgba(5,31,31,0.9)] backdrop-blur-md lg:px-8">
				<nav className="flex items-center justify-between py-3.5" aria-label="Global">
					<Brand />
					<DesktopMenu openKey={openKey} setOpenKey={setOpenKey} />
					<div className="flex items-center gap-2 lg:hidden">
						<motion.button
							type="button"
							className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 p-2.5"
							onClick={() => setMobileMenuOpen(true)}
							whileTap={{ scale: 0.94 }}
						>
							<span className="sr-only">Open main menu</span>
							<Bars3Icon className="h-5 w-5 text-white" aria-hidden="true" />
						</motion.button>
					</div>
				</nav>
			</div>
			<MobileMenu setMobileMenuOpen={setMobileMenuOpen} mobileMenuOpen={mobileMenuOpen} />
		</motion.header>
	);
};

export default Header;
