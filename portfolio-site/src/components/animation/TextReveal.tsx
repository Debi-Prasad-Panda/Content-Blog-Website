'use client';

import { motion } from 'framer-motion';

interface TextRevealProps {
     text: string;
     className?: string;
     delay?: number;
     duration?: number;
     staggerDelay?: number;
}

export default function TextReveal({
     text,
     className = '',
     delay = 0,
     duration = 0.8,
     staggerDelay = 0.05,
}: TextRevealProps) {
     const words = text.split(' ');

     const container = {
          hidden: { opacity: 0 },
          visible: (i = 1) => ({
               opacity: 1,
               transition: { staggerChildren: staggerDelay, delayChildren: delay / 1000 },
          }),
     };

     const child = {
          visible: {
               opacity: 1,
               y: 0,
               rotateX: 0,
               transition: {
                    type: 'spring' as const,
                    damping: 12,
                    stiffness: 100,
                    duration: duration,
               },
          },
          hidden: {
               opacity: 0,
               y: 40,
               rotateX: 90,
               transition: {
                    type: 'spring' as const,
                    damping: 12,
                    stiffness: 100,
               },
          },
     };

     return (
          <motion.div
               className={`overflow-hidden ${className}`}
               variants={container}
               initial="hidden"
               animate="visible"
               style={{ perspective: '1000px' }}
          >
               {words.map((word, wordIndex) => (
                    <span key={wordIndex} className="inline-block mr-[0.3em]">
                         {word.split('').map((letter, letterIndex) => (
                              <motion.span
                                   key={letterIndex}
                                   variants={child}
                                   className="inline-block"
                                   style={{ transformStyle: 'preserve-3d' }}
                              >
                                   {letter}
                              </motion.span>
                         ))}
                    </span>
               ))}
          </motion.div>
     );
}
