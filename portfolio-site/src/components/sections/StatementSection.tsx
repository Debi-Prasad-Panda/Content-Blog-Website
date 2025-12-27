'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function StatementSection() {
     const ref = useRef<HTMLDivElement>(null);
     const { scrollYProgress } = useScroll({
          target: ref,
          offset: ['start end', 'end start'],
     });

     const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
     const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.9]);

     return (
          <section
               ref={ref}
               className="relative py-32 md:py-48 overflow-hidden"
          >
               {/* Background gradient */}
               <div
                    className="absolute inset-0 opacity-50"
                    style={{
                         background: 'linear-gradient(180deg, transparent 0%, var(--bg-secondary) 50%, transparent 100%)',
                    }}
               />

               <motion.div
                    style={{ opacity, scale }}
                    className="container relative z-10"
               >
                    <blockquote className="text-center">
                         <motion.p
                              className="text-3xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight max-w-5xl mx-auto"
                         >
                              &ldquo;Great content doesn&apos;t just inform—it{' '}
                              <span className="text-gradient">transforms</span>.
                              It bridges the gap between brands and hearts,
                              turning readers into{' '}
                              <span className="text-gradient">believers</span>.&rdquo;
                         </motion.p>
                         <motion.footer
                              initial={{ opacity: 0 }}
                              whileInView={{ opacity: 1 }}
                              transition={{ delay: 0.5 }}
                              viewport={{ once: true }}
                              className="mt-8 text-[var(--text-muted)]"
                         >
                              — Lumina Narrative
                         </motion.footer>
                    </blockquote>
               </motion.div>
          </section>
     );
}
