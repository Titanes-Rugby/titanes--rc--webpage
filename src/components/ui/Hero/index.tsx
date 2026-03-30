import type { CSSProperties, ReactNode } from 'react';
import { motion } from 'framer-motion';

import { cn } from '@/utils/cn';

type HeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  sectionStyle?: CSSProperties;
  sectionClassName?: string;
  gradientClassName?: string;
  radialClassName?: string;
  containerClassName?: string;
  contentClassName?: string;
  bodyClassName?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
  descriptionClassName?: string;
  aside?: ReactNode;
  asideClassName?: string;
  watermarkSrc?: string;
  watermarkAlt?: string;
  watermarkClassName?: string;
};

const Hero = ({
  eyebrow,
  title,
  description,
  sectionStyle,
  sectionClassName,
  gradientClassName,
  radialClassName,
  containerClassName,
  contentClassName,
  bodyClassName,
  titleClassName,
  eyebrowClassName,
  descriptionClassName,
  aside,
  asideClassName,
  watermarkSrc,
  watermarkAlt = '',
  watermarkClassName,
}: HeroProps) => {
  return (
    <section
      style={sectionStyle}
      className={cn(
        'relative overflow-hidden px-6 pt-34 text-white sm:pt-40',
        aside ? 'pb-14' : 'pb-12 sm:pb-14',
        gradientClassName ?? 'bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900',
        sectionClassName,
      )}
    >
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(255,255,255,0.16),transparent_45%)]',
          radialClassName,
        )}
      />
      {watermarkSrc ? (
        <motion.div
          className={cn('pointer-events-none absolute opacity-10', watermarkClassName)}
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <img src={watermarkSrc} alt={watermarkAlt} className="h-full w-full" />
        </motion.div>
      ) : null}

      <div className={cn('relative mx-auto w-full max-w-6xl', containerClassName)}>
        <div className={cn(aside ? 'flex flex-wrap items-end justify-between gap-8' : '', contentClassName)}>
          <motion.div
            className={bodyClassName}
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            {eyebrow ? (
              <p className={cn('text-xs font-semibold tracking-[0.2em] text-primary-100 uppercase', eyebrowClassName)}>
                {eyebrow}
              </p>
            ) : null}
            <h1 className={cn('mt-3 text-4xl font-black tracking-tight sm:text-5xl', titleClassName)}>{title}</h1>
            {description ? (
              <p className={cn('mt-4 max-w-2xl text-sm leading-relaxed text-primary-100/90', descriptionClassName)}>
                {description}
              </p>
            ) : null}
          </motion.div>
          {aside ? (
            <motion.div
              className={asideClassName}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              {aside}
            </motion.div>
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Hero;
