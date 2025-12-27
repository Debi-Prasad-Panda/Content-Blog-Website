'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import MagneticButton from '@/components/animation/MagneticButton';

const services = [
     {
          id: 'content',
          title: 'Content Writing',
          subtitle: 'Words that convert',
          icon: '✍️',
          description: 'Engaging, SEO-optimized content that captures your brand voice and drives meaningful engagement with your target audience.',
          offerings: [
               { name: 'Blog Articles & Posts', description: 'In-depth articles that establish thought leadership' },
               { name: 'Website Copy', description: 'Compelling copy that converts visitors to customers' },
               { name: 'Product Descriptions', description: 'Persuasive descriptions that highlight value' },
               { name: 'Technical Writing', description: 'Clear documentation and guides' },
               { name: 'Scriptwriting', description: 'Video and podcast scripts that engage' },
               { name: 'Case Studies', description: 'Success stories that build trust' },
          ],
          color: '#A855F7',
     },
     {
          id: 'marketing',
          title: 'Digital Marketing',
          subtitle: 'Strategies that scale',
          icon: '📈',
          description: 'Data-driven marketing strategies that amplify your brand presence and connect with your audience across all channels.',
          offerings: [
               { name: 'Social Media Strategy', description: 'Platform-specific content calendars' },
               { name: 'Email Marketing', description: 'Nurture sequences that convert' },
               { name: 'SEO Copywriting', description: 'Content optimized for search' },
               { name: 'Brand Messaging', description: 'Consistent voice across touchpoints' },
               { name: 'Content Strategy', description: 'Long-term content roadmaps' },
               { name: 'Campaign Creation', description: 'Multi-channel integrated campaigns' },
          ],
          color: '#7C3AED',
     },
     {
          id: 'language',
          title: 'Language Support',
          subtitle: 'Polish to perfection',
          icon: '📝',
          description: 'Professional editing and language consultation services to ensure your content meets the highest standards of quality.',
          offerings: [
               { name: 'Proofreading', description: 'Error-free, polished content' },
               { name: 'Copy Editing', description: 'Style, clarity, and flow improvements' },
               { name: 'Style Guide Creation', description: 'Consistent brand documentation' },
               { name: 'Language Consultation', description: 'Expert advice on tone and voice' },
               { name: 'Translation Review', description: 'Quality assurance for translations' },
               { name: 'Academic Editing', description: 'Scholarly content refinement' },
          ],
          color: '#6B21A8',
     },
];

const process = [
     {
          step: 1,
          title: 'Discovery',
          description: 'We start with an in-depth consultation to understand your brand, goals, audience, and unique challenges.',
          icon: '🔍',
     },
     {
          step: 2,
          title: 'Strategy',
          description: 'I develop a tailored content strategy and outline that aligns with your objectives and resonates with your audience.',
          icon: '📋',
     },
     {
          step: 3,
          title: 'Creation',
          description: 'The magic happens here. I craft compelling content, incorporating research, SEO best practices, and your brand voice.',
          icon: '✨',
     },
     {
          step: 4,
          title: 'Refinement',
          description: 'Based on your feedback, I refine and polish the content until it exceeds your expectations.',
          icon: '💎',
     },
];

const testimonials = [
     {
          quote: "Working with Lumina transformed our content strategy. Our blog traffic increased by 200% in just 6 months.",
          author: 'Sarah Chen',
          role: 'Marketing Director',
          company: 'TechFlow Inc.',
          avatar: '#A855F7',
     },
     {
          quote: "The brand voice guide she created has become our content bible. Every team member references it daily.",
          author: 'Marcus Johnson',
          role: 'CEO',
          company: 'Startup Labs',
          avatar: '#7C3AED',
     },
     {
          quote: "Her attention to detail and understanding of our audience made all the difference. Truly exceptional work.",
          author: 'Emily Rodriguez',
          role: 'Content Manager',
          company: 'GrowthCo',
          avatar: '#6B21A8',
     },
];

export default function ServicesPage() {
     const [activeService, setActiveService] = useState(services[0].id);
     const currentService = services.find((s) => s.id === activeService) || services[0];

     return (
          <div className="pt-20">
               {/* Header */}
               <section className="section pb-0">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-center max-w-3xl mx-auto mb-16"
                         >
                              <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                                   Services
                              </span>
                              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                                   How I Can <span className="text-gradient">Help You</span>
                              </h1>
                              <p className="text-lg text-[var(--text-secondary)]">
                                   Comprehensive content solutions designed to elevate your brand,
                                   engage your audience, and drive measurable results.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* Three Pillars */}
               <section className="section pt-0">
                    <div className="container">
                         {/* Service Tabs */}
                         <div className="flex flex-wrap justify-center gap-4 mb-12">
                              {services.map((service) => (
                                   <MagneticButton key={service.id} strength={0.2}>
                                        <button
                                             onClick={() => setActiveService(service.id)}
                                             className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${activeService === service.id
                                                       ? 'glass-strong border-[var(--accent-primary)]'
                                                       : 'bg-[var(--bg-secondary)] hover:bg-[var(--bg-tertiary)]'
                                                  }`}
                                             style={{
                                                  borderColor: activeService === service.id ? service.color : 'transparent',
                                                  borderWidth: '2px',
                                             }}
                                        >
                                             <span className="text-2xl">{service.icon}</span>
                                             <span>{service.title}</span>
                                        </button>
                                   </MagneticButton>
                              ))}
                         </div>

                         {/* Active Service Detail */}
                         <motion.div
                              key={activeService}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.4 }}
                              className="max-w-5xl mx-auto"
                         >
                              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                                   {/* Left - Description */}
                                   <div>
                                        <div className="flex items-center gap-4 mb-4">
                                             <span className="text-5xl">{currentService.icon}</span>
                                             <div>
                                                  <h2 className="text-3xl font-display font-bold">{currentService.title}</h2>
                                                  <p style={{ color: currentService.color }} className="font-medium">
                                                       {currentService.subtitle}
                                                  </p>
                                             </div>
                                        </div>
                                        <p className="text-lg text-[var(--text-secondary)] mb-8">
                                             {currentService.description}
                                        </p>

                                        <Link href="/contact">
                                             <motion.button
                                                  whileHover={{ scale: 1.05 }}
                                                  whileTap={{ scale: 0.98 }}
                                                  className="btn btn-primary"
                                             >
                                                  Get Started
                                                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                  </svg>
                                             </motion.button>
                                        </Link>
                                   </div>

                                   {/* Right - Offerings Grid */}
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {currentService.offerings.map((offering, index) => (
                                             <motion.div
                                                  key={offering.name}
                                                  initial={{ opacity: 0, y: 20 }}
                                                  animate={{ opacity: 1, y: 0 }}
                                                  transition={{ delay: index * 0.1 }}
                                                  className="p-4 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-primary)]/30 transition-colors group"
                                             >
                                                  <h3 className="font-medium mb-1 group-hover:text-[var(--accent-primary)] transition-colors">
                                                       {offering.name}
                                                  </h3>
                                                  <p className="text-sm text-[var(--text-muted)]">
                                                       {offering.description}
                                                  </p>
                                             </motion.div>
                                        ))}
                                   </div>
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Process Section */}
               <section className="section bg-[var(--bg-secondary)]">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                                   Process
                              </span>
                              <h2 className="text-4xl md:text-5xl font-display font-bold">
                                   How We <span className="text-gradient">Work Together</span>
                              </h2>
                         </motion.div>

                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {process.map((step, index) => (
                                   <motion.div
                                        key={step.step}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className="relative text-center"
                                   >
                                        {/* Connector Line */}
                                        {index < process.length - 1 && (
                                             <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-px bg-[var(--glass-border)]">
                                                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--accent-primary)]" />
                                             </div>
                                        )}

                                        {/* Step Number */}
                                        <motion.div
                                             whileHover={{ scale: 1.1, rotate: 5 }}
                                             className="w-24 h-24 mx-auto mb-6 rounded-2xl bg-[var(--card-bg)] border border-[var(--glass-border)] flex items-center justify-center text-4xl"
                                        >
                                             {step.icon}
                                        </motion.div>

                                        <span className="text-xs font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                                             Step {step.step}
                                        </span>
                                        <h3 className="text-xl font-display font-semibold mb-2">
                                             {step.title}
                                        </h3>
                                        <p className="text-sm text-[var(--text-secondary)]">
                                             {step.description}
                                        </p>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* Testimonials */}
               <section className="section">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                                   Testimonials
                              </span>
                              <h2 className="text-4xl md:text-5xl font-display font-bold">
                                   What Clients <span className="text-gradient">Say</span>
                              </h2>
                         </motion.div>

                         {/* Bento Grid Testimonials */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              {testimonials.map((testimonial, index) => (
                                   <motion.div
                                        key={testimonial.author}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.15 }}
                                        className={`p-8 rounded-2xl bg-[var(--card-bg)] border border-[var(--glass-border)] ${index === 0 ? 'lg:col-span-2' : ''
                                             }`}
                                   >
                                        {/* Quote Icon */}
                                        <svg
                                             className="w-10 h-10 mb-4 opacity-20"
                                             style={{ color: testimonial.avatar }}
                                             fill="currentColor"
                                             viewBox="0 0 24 24"
                                        >
                                             <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                                        </svg>

                                        <blockquote className="text-lg mb-6">
                                             &ldquo;{testimonial.quote}&rdquo;
                                        </blockquote>

                                        <div className="flex items-center gap-3">
                                             <div
                                                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold"
                                                  style={{ background: testimonial.avatar }}
                                             >
                                                  {testimonial.author.split(' ').map((n) => n[0]).join('')}
                                             </div>
                                             <div>
                                                  <p className="font-medium">{testimonial.author}</p>
                                                  <p className="text-sm text-[var(--text-muted)]">
                                                       {testimonial.role}, {testimonial.company}
                                                  </p>
                                             </div>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>

               {/* CTA */}
               <section className="section bg-[var(--bg-secondary)]">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-center max-w-3xl mx-auto"
                         >
                              <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                                   Ready to start your <span className="text-gradient">project</span>?
                              </h2>
                              <p className="text-lg text-[var(--text-secondary)] mb-8">
                                   Let&apos;s discuss how I can help bring your content vision to life.
                              </p>
                              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                   <MagneticButton strength={0.3}>
                                        <Link href="/contact">
                                             <motion.button
                                                  whileHover={{ scale: 1.05 }}
                                                  whileTap={{ scale: 0.98 }}
                                                  className="btn btn-primary"
                                             >
                                                  Schedule a Call
                                             </motion.button>
                                        </Link>
                                   </MagneticButton>
                                   <MagneticButton strength={0.3}>
                                        <Link href="/work">
                                             <motion.button
                                                  whileHover={{ scale: 1.05 }}
                                                  whileTap={{ scale: 0.98 }}
                                                  className="btn btn-secondary"
                                             >
                                                  View My Work
                                             </motion.button>
                                        </Link>
                                   </MagneticButton>
                              </div>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
}
