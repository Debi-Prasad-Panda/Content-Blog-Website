'use client';

import { motion } from 'framer-motion';
import MagneticButton from '../animation/MagneticButton';
import Link from 'next/link';

const services = [
     {
          icon: (
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
               </svg>
          ),
          title: 'Content Writing',
          description: 'Engaging blog posts, web copy, and articles that captivate your audience and drive results.',
          features: ['Blog Articles', 'Website Copy', 'Product Descriptions', 'Technical Writing'],
     },
     {
          icon: (
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
               </svg>
          ),
          title: 'Digital Marketing',
          description: 'Strategic content marketing and social media campaigns that amplify your brand presence.',
          features: ['Social Media Strategy', 'Email Campaigns', 'SEO Copywriting', 'Brand Messaging'],
     },
     {
          icon: (
               <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
               </svg>
          ),
          title: 'Editing & Support',
          description: 'Professional editing services and language support to polish your content to perfection.',
          features: ['Proofreading', 'Copy Editing', 'Style Guides', 'Language Consultation'],
     },
];

const containerVariants = {
     hidden: {},
     visible: {
          transition: {
               staggerChildren: 0.15,
          },
     },
};

const cardVariants = {
     hidden: { opacity: 0, y: 30 },
     visible: {
          opacity: 1,
          y: 0,
          transition: {
               duration: 0.6,
               ease: [0.16, 1, 0.3, 1] as const,
          },
     },
};

export default function ServicesSection() {
     return (
          <section className="section bg-[var(--bg-secondary)]">
               <div className="container">
                    {/* Section Header */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="text-center max-w-2xl mx-auto mb-16"
                    >
                         <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                              What I Do
                         </span>
                         <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                              Core <span className="text-gradient">Services</span>
                         </h2>
                         <p className="text-[var(--text-secondary)]">
                              Comprehensive content solutions tailored to elevate your brand
                              and connect with your audience on a deeper level.
                         </p>
                    </motion.div>

                    {/* Services Grid */}
                    <motion.div
                         variants={containerVariants}
                         initial="hidden"
                         whileInView="visible"
                         viewport={{ once: true, margin: '-100px' }}
                         className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
                    >
                         {services.map((service, index) => (
                              <motion.div
                                   key={service.title}
                                   variants={cardVariants}
                                   className="group"
                              >
                                   <div className="h-full p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-primary)]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[var(--accent-primary)]/5">
                                        {/* Icon */}
                                        <motion.div
                                             whileHover={{ scale: 1.1, rotate: 5 }}
                                             className="w-16 h-16 rounded-xl bg-[var(--accent-primary)]/10 flex items-center justify-center text-[var(--accent-primary)] mb-6"
                                        >
                                             {service.icon}
                                        </motion.div>

                                        {/* Content */}
                                        <h3 className="text-xl font-display font-semibold mb-3 group-hover:text-[var(--accent-primary)] transition-colors">
                                             {service.title}
                                        </h3>
                                        <p className="text-[var(--text-secondary)] mb-6">
                                             {service.description}
                                        </p>

                                        {/* Features */}
                                        <ul className="space-y-2">
                                             {service.features.map((feature) => (
                                                  <li
                                                       key={feature}
                                                       className="flex items-center gap-2 text-sm text-[var(--text-muted)]"
                                                  >
                                                       <svg className="w-4 h-4 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                       </svg>
                                                       {feature}
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              </motion.div>
                         ))}
                    </motion.div>

                    {/* CTA */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="text-center mt-12"
                    >
                         <MagneticButton strength={0.3}>
                              <Link href="/services">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn btn-secondary"
                                   >
                                        Explore All Services
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                   </motion.button>
                              </Link>
                         </MagneticButton>
                    </motion.div>
               </div>
          </section>
     );
}
