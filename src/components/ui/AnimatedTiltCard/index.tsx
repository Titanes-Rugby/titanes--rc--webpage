import { motion, type MotionValue } from 'framer-motion';
import type { ReactNode } from 'react';

import { cn } from '@/utils/cn';

import { useTiltCardMotion } from './useTiltCardMotion';

type AnimatedTiltCardRenderProps = {
  contentX: MotionValue<number>;
  contentY: MotionValue<number>;
  contentScale: MotionValue<number>;
};

type AnimatedTiltCardProps = {
  children: ReactNode | ((props: AnimatedTiltCardRenderProps) => ReactNode);
  className?: string;
  shineClassName?: string;
  scrollTilt?: boolean;
};

const AnimatedTiltCard = ({ children, className, shineClassName, scrollTilt = false }: AnimatedTiltCardProps) => {
  const { rotateX, rotateY, contentX, contentY, contentScale, shine, onMouseMove, onMouseLeave } = useTiltCardMotion(scrollTilt);

  return (
    <motion.article
      className={cn(
        'group/card relative overflow-hidden rounded-[2rem] border border-primary-900/15 bg-primary-600 shadow-[0_28px_60px_-26px_rgba(2,18,17,0.7),0_8px_20px_-14px_rgba(2,18,17,0.45)] transition-shadow duration-300 hover:shadow-[0_36px_78px_-24px_rgba(2,18,17,0.78),0_14px_30px_-16px_rgba(2,18,17,0.5)] [transform-style:preserve-3d] will-change-transform',
        className,
      )}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileHover={{ scale: 1.01 }}
      style={{ rotateX, rotateY }}
      transition={{ type: 'spring', stiffness: 220, damping: 20 }}
    >
      <motion.div
        className={cn('pointer-events-none absolute inset-0 z-20 rounded-[2rem] mix-blend-screen', shineClassName)}
        style={{ background: shine }}
      />
      {typeof children === 'function' ? children({ contentX, contentY, contentScale }) : children}
    </motion.article>
  );
};

export default AnimatedTiltCard;
