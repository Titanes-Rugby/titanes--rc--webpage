import { useState, useEffect } from 'react';

export function useVisibleWithScroll(minPosition: number = 10) {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [atTop, setAtTop] = useState(true);

  // Handle scroll behavior
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Check if at the top of the page
      setAtTop(currentScrollPos <= minPosition);

      // Determine if scrolling up or down
      const isScrollingDown = prevScrollPos < currentScrollPos;
      const isScrollingUp = prevScrollPos > currentScrollPos;

      // Only hide navbar after scrolling down a bit (50px)
      if (isScrollingDown && currentScrollPos > 50) {
        setVisible(false);
      } else if (isScrollingUp) {
        setVisible(true);
      }

      setPrevScrollPos(currentScrollPos);
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, minPosition]);

  return { visible, atTop };
}
