import { useScroll, useSpring, useTransform } from 'framer-motion';

export const useScrollTilt = () => {
  const { scrollY } = useScroll();
  const rawScrollTiltX = useTransform(scrollY, (value) => Math.sin(value / 220) * 3.2);
  const rawScrollTiltY = useTransform(scrollY, (value) => Math.cos(value / 260) * 2.6);
  const scrollTiltX = useSpring(rawScrollTiltX, { stiffness: 95, damping: 24, mass: 0.45 });
  const scrollTiltY = useSpring(rawScrollTiltY, { stiffness: 95, damping: 24, mass: 0.45 });

  return { scrollTiltX, scrollTiltY };
};
