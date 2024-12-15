// components/MouseFollower.tsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './MouseFollower.module.scss';

interface MousePosition {
  x: number;
  y: number;
}

const MouseFollower: React.FC = () => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className={styles.mouseFollower}
      animate={{
        x: mousePosition.x - 10,
        y: mousePosition.y - 10,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    />
  );
};

export default MouseFollower;
