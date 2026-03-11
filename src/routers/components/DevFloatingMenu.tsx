import { CodeBracketIcon, HomeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import withDevOnly from '@/hocs/withDevOnly';

const baseLinkClassName =
	'flex h-11 w-11 items-center justify-center rounded-xl border border-titanes-200 bg-white text-titanes-700 transition-all hover:-translate-x-0.5 hover:border-titanes-300 hover:text-titanes-900';

const DevFloatingMenu = () => {
	return (
		<motion.aside
			className="fixed right-4 top-1/2 z-[70] hidden -translate-y-1/2 md:block"
			initial={{ opacity: 0, x: 16 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.28, ease: 'easeOut' }}
		>
			<div className="rounded-2xl border border-titanes-200 bg-white/90 p-2 shadow-lg backdrop-blur-sm">
				<p className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-titanes-500">
					Dev
				</p>
				<div className="flex flex-col gap-2">
					<NavLink to="/" className={baseLinkClassName} title="Landing">
						<HomeIcon className="h-5 w-5" />
					</NavLink>
					<NavLink to="/ui-components" className={baseLinkClassName} title="UI Components">
						<CodeBracketIcon className="h-5 w-5" />
					</NavLink>
				</div>
			</div>
		</motion.aside>
	);
};

export default withDevOnly(DevFloatingMenu);
