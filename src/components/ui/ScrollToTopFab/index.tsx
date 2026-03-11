import { ChevronUpIcon } from '@heroicons/react/24/solid';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const SHOW_AFTER_PX = 320;

const ScrollToTopFab = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > SHOW_AFTER_PX);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          type="button"
          aria-label="Scroll to top"
          onClick={handleScrollTop}
          className="fixed right-5 bottom-5 z-[60] inline-flex h-12 w-12 items-center justify-center rounded-full border border-titanes-200 bg-white/95 text-titanes-700 shadow-[0_16px_30px_-18px_rgba(3,21,21,0.75)] backdrop-blur-sm transition-colors hover:border-titanes-300 hover:text-titanes-900"
          initial={{ opacity: 0, y: 20, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 12, scale: 0.92 }}
          transition={{ duration: 0.24, ease: 'easeOut' }}
          whileHover={{ y: -2, scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <ChevronUpIcon className="h-5 w-5" aria-hidden="true" />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
};

export default ScrollToTopFab;
