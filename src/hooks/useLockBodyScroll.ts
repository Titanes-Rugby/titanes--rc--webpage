import { useEffect } from 'react';

export const useLockBodyScroll = (isOpen?: boolean) => {
	useEffect(() => {
		const previousOverflow = document.body.style.overflow;
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.body.style.overflow = previousOverflow || 'visible';
		};
	}, [isOpen]);
};
