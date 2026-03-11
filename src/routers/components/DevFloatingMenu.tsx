import { CodeBracketIcon, HomeIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import withDevOnly from '@/hocs/withDevOnly';

const baseLinkClassName =
	'flex h-11 w-11 items-center justify-center rounded-xl border border-titanes-200 bg-white text-titanes-700 transition-all hover:-translate-x-0.5 hover:border-titanes-300 hover:text-titanes-900';
const itemVariants = {
	hidden: { opacity: 0, x: 8, scale: 0.92 },
	visible: { opacity: 1, x: 0, scale: 1 },
};

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
				<motion.div
					className="flex flex-col gap-2"
					initial="hidden"
					animate="visible"
					variants={{ visible: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } } }}
				>
					<motion.div variants={itemVariants} transition={{ duration: 0.24, ease: 'easeOut' }} whileHover={{ x: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
						<NavLink to="/" className={baseLinkClassName} title="Landing">
							<HomeIcon className="h-5 w-5" />
						</NavLink>
					</motion.div>
					<motion.div variants={itemVariants} transition={{ duration: 0.24, ease: 'easeOut' }} whileHover={{ x: -2, scale: 1.02 }} whileTap={{ scale: 0.98 }}>
						<NavLink to="/ui-components" className={baseLinkClassName} title="UI Components">
							<CodeBracketIcon className="h-5 w-5" />
						</NavLink>
					</motion.div>
				</motion.div>
			</div>
		</motion.aside>
	);
};

export default withDevOnly(DevFloatingMenu);
