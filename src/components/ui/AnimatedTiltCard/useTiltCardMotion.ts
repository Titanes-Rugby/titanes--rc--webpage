import { useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { MouseEvent } from 'react';

import { useScrollTilt } from './useScrollTilt';

export const useTiltCardMotion = (scrollTilt = false) => {
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, { stiffness: 170, damping: 20, mass: 0.5 });
  const springRotateY = useSpring(rotateY, { stiffness: 170, damping: 20, mass: 0.5 });
  const { scrollTiltX, scrollTiltY } = useScrollTilt();
  const combinedRotateX = useTransform(() => springRotateX.get() + (scrollTilt ? scrollTiltX.get() : 0));
  const combinedRotateY = useTransform(() => springRotateY.get() + (scrollTilt ? scrollTiltY.get() : 0));
  const contentX = useTransform(combinedRotateY, [-14, 14], [-10, 10]);
  const contentY = useTransform(combinedRotateX, [-12, 12], [8, -8]);
  const contentScale = useTransform(combinedRotateY, [-14, 0, 14], [1.01, 1.03, 1.01]);
  const shineX = useTransform(combinedRotateY, [-14, 14], [12, 88]);
  const shineY = useTransform(combinedRotateX, [-12, 12], [24, 76]);
  const shineAngle = useTransform(() => 118 + combinedRotateY.get() * 0.8 - combinedRotateX.get() * 0.5);
  const shineCore = useTransform(() => {
    const intensity = Math.abs(combinedRotateX.get()) + Math.abs(combinedRotateY.get());
    return (0.26 + intensity * 0.012).toFixed(3);
  });
  const shineSoft = useTransform(() => {
    const intensity = Math.abs(combinedRotateX.get()) + Math.abs(combinedRotateY.get());
    return (0.08 + intensity * 0.006).toFixed(3);
  });
  const shine = useMotionTemplate`
    linear-gradient(
      ${shineAngle}deg,
      rgba(255,255,255,0) calc(${shineX}% - 20%),
      rgba(255,255,255,${shineSoft}) calc(${shineX}% - 10%),
      rgba(255,255,255,${shineCore}) calc(${shineX}% - 2%),
      rgba(255,255,255,${shineSoft}) calc(${shineX}% + 6%),
      rgba(255,255,255,0) calc(${shineX}% + 16%)
    ),
    radial-gradient(
      circle at ${shineX}% ${shineY}%,
      rgba(255,255,255,${shineSoft}) 0%,
      rgba(255,255,255,0) 38%
    )
  `;

  const onMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;

    rotateY.set((px - 0.5) * 14);
    rotateX.set((0.5 - py) * 12);
  };

  const onMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return { rotateX: combinedRotateX, rotateY: combinedRotateY, contentX, contentY, contentScale, shine, onMouseMove, onMouseLeave };
};
