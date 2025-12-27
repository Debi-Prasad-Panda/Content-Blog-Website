'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from '../animation/MagneticButton';

export default function CTASection() {
     return (
          <section className="section relative overflow-hidden">
               {/* Background Elements */}
               <div className="absolute inset-0 pointer-events-none">
                    <motion.div
                         animate={{
                              scale: [1, 1.2, 1],
                              opacity: [0.3, 0.5, 0.3],
                         }}
                         transition={{
                              duration: 8,
                              repeat: Infinity,
                              ease: 'linear',
                         }}
                         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
                         style={{
                              background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 60%)',
                              filter: 'blur(80px)',
                         }}
                    />
               </div>

               <div className="container relative z-10">
                    <motion.div
                         initial={{ opacity: 0, y: 30 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ duration: 0.6 }}
                         className="max-w-4xl mx-auto text-center"
                    >
                         <motion.span
                              initial={{ opacity: 0, scale: 0.9 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              viewport={{ once: true }}
                              className="inline-block text-6xl mb-6"
                         >
                              ✨
                         </motion.span>

                         <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                              Ready to{' '}
                              <span className="text-gradient">transform</span>
                              <br />
                              your brand story?
                         </h2>

                         <p className="text-lg md:text-xl text-[var(--text-secondary)] mb-10 max-w-2xl mx-auto">
                              Let&apos;s collaborate to create compelling content that resonates
                              with your audience and drives meaningful results.
                         </p>

                         <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                              <MagneticButton strength={0.3}>
                                   <Link href="/contact">
                                        <motion.button
                                             whileHover={{ scale: 1.05 }}
                                             whileTap={{ scale: 0.98 }}
                                             className="btn btn-primary text-lg px-8 py-4"
                                        >
                                             Start a Project
                                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                             </svg>
                                        </motion.button>
                                   </Link>
                              </MagneticButton>

                              <MagneticButton strength={0.3}>
                                   <Link href="/about">
                                        <motion.button
                                             whileHover={{ scale: 1.05 }}
                                             whileTap={{ scale: 0.98 }}
                                             className="btn btn-ghost text-lg"
                                        >
                                             Learn More About Me
                                        </motion.button>
                                   </Link>
                              </MagneticButton>
                         </div>
                    </motion.div>
               </div>
          </section>
     );
}
