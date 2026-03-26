import { motion } from 'framer-motion';

import DesktopMenuItem from './DesktopMenuItem';
import { MENU_ENTRIES } from './menuConfig';

type DesktopMenuProps = {
	openKey: string | null;
	setOpenKey: (key: string | null) => void;
};

const DesktopMenu = ({ openKey, setOpenKey }: DesktopMenuProps) => (
	<motion.div
		className="hidden lg:flex lg:items-center lg:gap-x-9"
		initial={{ opacity: 0, y: -10 }}
		animate={{ opacity: 1, y: 0 }}
		transition={{ duration: 0.32, ease: 'easeOut' }}
	>
		{MENU_ENTRIES.map((entry) => (
			<DesktopMenuItem
				key={entry.label}
				entry={entry}
				isOpen={openKey === entry.label}
				onOpen={() => setOpenKey(entry.label)}
				onClose={() => setOpenKey(null)}
			/>
		))}
	</motion.div>
);

export default DesktopMenu;
