import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollScaleAnimation: React.FC<{
  children: React.ReactElement;
}> = ({ children }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'center start'],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0.6]);
  return (
    <motion.div ref={ref} style={{ scale }}>
      {children}
    </motion.div>
  );
};
