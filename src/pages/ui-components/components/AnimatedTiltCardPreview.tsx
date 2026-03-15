import { motion } from 'framer-motion';

import AnimatedTiltCard from '@components/ui/AnimatedTiltCard';

const AnimatedTiltCardPreview = () => {
  return (
    <div className="[perspective:1400px]">
      <AnimatedTiltCard scrollTilt className="bg-gradient-to-br from-secondary-700 via-secondary-800 to-primary-900 text-white">
        {({ contentX, contentY, contentScale }) => (
          <motion.div className="space-y-5 p-6 sm:p-8" style={{ x: contentX, y: contentY, scale: contentScale }}>
            <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] uppercase">
              Animated Tilt Card
            </p>
            <h3 className="text-3xl leading-tight font-black sm:text-4xl">Reusable 3D Surface</h3>
            <p className="max-w-xl text-sm leading-relaxed text-white/85 sm:text-base">
              Contenedor animado con tilt, shine y profundidad. Puedes pasar cualquier contenido sin depender de PlayerCard.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">Tilt</span>
              <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">Shine</span>
              <span className="rounded-lg border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold">Parallax-ready</span>
            </div>
          </motion.div>
        )}
      </AnimatedTiltCard>
    </div>
  );
};

export default AnimatedTiltCardPreview;
