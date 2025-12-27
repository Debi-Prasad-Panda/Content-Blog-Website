'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import TextReveal from '../animation/TextReveal';
import MagneticButton from '../animation/MagneticButton';
import Link from 'next/link';

export default function HeroSection() {
     const ref = useRef<HTMLDivElement>(null);
     const { scrollYProgress } = useScroll({
          target: ref,
          offset: ['start start', 'end start'],
     });

     const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
     const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
     const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

     return (
          <section
               ref={ref}
               className="relative min-h-screen flex items-center justify-center overflow-hidden"
          >
               {/* Gradient Orbs Background */}
               <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <motion.div
                         animate={{
                              x: [0, 50, 0],
                              y: [0, 30, 0],
                         }}
                         transition={{
                              duration: 20,
                              repeat: Infinity,
                              ease: 'linear',
                         }}
                         className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
                         style={{
                              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
                              filter: 'blur(60px)',
                         }}
                    />
                    <motion.div
                         animate={{
                              x: [0, -30, 0],
                              y: [0, 50, 0],
                         }}
                         transition={{
                              duration: 25,
                              repeat: Infinity,
                              ease: 'linear',
                         }}
                         className="absolute bottom-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
                         style={{
                              background: 'radial-gradient(circle, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
                              filter: 'blur(60px)',
                         }}
                    />
               </div>

               <motion.div
                    style={{ opacity, scale, y }}
                    className="container relative z-10 text-center"
               >
                    {/* Availability Badge */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 0.2, duration: 0.6 }}
                         className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
                    >
                         <span className="availability-dot available" />
                         <span className="text-sm text-[var(--text-secondary)]">
                              Available for new projects
                         </span>
                    </motion.div>

                    {/* Main Heading */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6 leading-tight">
                         <TextReveal text="Words that sell," delay={400} />
                         <span className="text-gradient">
                              <TextReveal text="Content that inspires." delay={800} />
                         </span>
                    </h1>

                    {/* Subtitle */}
                    <motion.p
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 1.2, duration: 0.6 }}
                         className="text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12"
                    >
                         Creative content strategist and writer crafting compelling narratives
                         that drive engagement, build brands, and inspire action.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         transition={{ delay: 1.5, duration: 0.6 }}
                         className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                         <MagneticButton strength={0.3}>
                              <Link href="/work">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn btn-primary group"
                                   >
                                        View My Work
                                        <motion.svg
                                             className="w-4 h-4 transition-transform group-hover:translate-x-1"
                                             fill="none"
                                             stroke="currentColor"
                                             viewBox="0 0 24 24"
                                        >
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </motion.svg>
                                   </motion.button>
                              </Link>
                         </MagneticButton>

                         <MagneticButton strength={0.3}>
                              <Link href="/contact">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn btn-secondary"
                                   >
                                        Get in Touch
                                   </motion.button>
                              </Link>
                         </MagneticButton>
                    </motion.div>
               </motion.div>

               {/* Scroll Indicator - positioned outside content container */}
               <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2, duration: 0.6 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
               >
                    <motion.div
                         animate={{ y: [0, 10, 0] }}
                         transition={{ duration: 1.5, repeat: Infinity }}
                         className="flex flex-col items-center gap-2 text-[var(--text-muted)]"
                    >
                         <span className="text-xs uppercase tracking-wider">Scroll</span>
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                         </svg>
                    </motion.div>
               </motion.div>
          </section>
     );
}
