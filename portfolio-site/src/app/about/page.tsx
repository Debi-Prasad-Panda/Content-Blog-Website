'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import MagneticButton from '@/components/animation/MagneticButton';

const skills = [
     { name: 'Content Strategy', level: 95 },
     { name: 'SEO Writing', level: 90 },
     { name: 'Brand Storytelling', level: 92 },
     { name: 'Social Media', level: 88 },
     { name: 'Copywriting', level: 94 },
     { name: 'Research & Analysis', level: 87 },
];

const tools = [
     'WordPress', 'Notion', 'Canva', 'Grammarly',
     'SEMrush', 'Google Analytics', 'Figma', 'Adobe Creative Suite',
     'Mailchimp', 'Buffer', 'Ahrefs', 'Jasper AI'
];

const experience = [
     {
          year: '2023 - Present',
          title: 'Senior Content Strategist',
          company: 'Creative Agency XYZ',
          description: 'Leading content strategy for Fortune 500 clients, managing a team of 5 writers.',
     },
     {
          year: '2021 - 2023',
          title: 'Content Writer & Editor',
          company: 'Digital Marketing Inc.',
          description: 'Created 200+ blog posts and managed editorial calendar for 10+ clients.',
     },
     {
          year: '2019 - 2021',
          title: 'Freelance Writer',
          company: 'Self-Employed',
          description: 'Built a portfolio of 50+ clients across tech, lifestyle, and finance niches.',
     },
     {
          year: '2018',
          title: 'BA in English Literature',
          company: 'University Name',
          description: 'Graduated with honors, specializing in creative writing and media studies.',
     },
];

export default function AboutPage() {
     const heroRef = useRef<HTMLDivElement>(null);
     const timelineRef = useRef<HTMLDivElement>(null);
     const isTimelineInView = useInView(timelineRef, { once: true, margin: '-100px' });

     const { scrollYProgress: heroScroll } = useScroll({
          target: heroRef,
          offset: ['start start', 'end start'],
     });

     const heroY = useTransform(heroScroll, [0, 1], [0, 200]);
     const heroOpacity = useTransform(heroScroll, [0, 0.5], [1, 0]);

     return (
          <div className="pt-20">
               {/* Hero Section */}
               <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden">
                    {/* Parallax Background */}
                    <motion.div
                         style={{ y: heroY }}
                         className="absolute inset-0 z-0"
                    >
                         <div
                              className="absolute inset-0"
                              style={{
                                   background: 'radial-gradient(ellipse at top right, rgba(168, 85, 247, 0.1) 0%, transparent 50%)',
                              }}
                         />
                    </motion.div>

                    <motion.div style={{ opacity: heroOpacity }} className="container relative z-10">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                              {/* Image */}
                              <motion.div
                                   initial={{ opacity: 0, x: -50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8 }}
                                   className="relative"
                              >
                                   <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
                                        <div
                                             className="absolute inset-0"
                                             style={{
                                                  background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.3) 0%, rgba(107, 33, 168, 0.3) 100%)',
                                             }}
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                             <div className="text-[200px] opacity-20">👤</div>
                                        </div>
                                   </div>
                                   {/* Floating badge */}
                                   <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.5 }}
                                        className="absolute -bottom-4 -right-4 glass rounded-xl p-4"
                                   >
                                        <div className="flex items-center gap-3">
                                             <span className="availability-dot available" />
                                             <span className="text-sm font-medium">Available for work</span>
                                        </div>
                                   </motion.div>
                              </motion.div>

                              {/* Content */}
                              <motion.div
                                   initial={{ opacity: 0, x: 50 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ duration: 0.8, delay: 0.2 }}
                              >
                                   <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-4 block">
                                        About Me
                                   </span>
                                   <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
                                        Crafting stories that{' '}
                                        <span className="text-gradient">inspire action</span>
                                   </h1>
                                   <p className="text-lg text-[var(--text-secondary)] mb-6">
                                        I&apos;m a passionate content strategist and writer with over 5 years
                                        of experience helping brands find their voice and connect with
                                        their audience through compelling narratives.
                                   </p>
                                   <p className="text-[var(--text-secondary)] mb-8">
                                        My approach combines data-driven insights with creative storytelling,
                                        ensuring every piece of content not only engages but also converts.
                                        From startups to Fortune 500 companies, I&apos;ve helped diverse
                                        clients achieve their content goals.
                                   </p>

                                   {/* Quick Facts */}
                                   <div className="grid grid-cols-2 gap-4">
                                        {[
                                             { label: 'Years Experience', value: '5+' },
                                             { label: 'Projects Completed', value: '200+' },
                                             { label: 'Happy Clients', value: '80+' },
                                             { label: 'Articles Published', value: '500+' },
                                        ].map((fact) => (
                                             <div key={fact.label} className="p-4 rounded-xl bg-[var(--bg-secondary)]">
                                                  <div className="text-2xl font-display font-bold text-gradient">
                                                       {fact.value}
                                                  </div>
                                                  <div className="text-sm text-[var(--text-muted)]">
                                                       {fact.label}
                                                  </div>
                                             </div>
                                        ))}
                                   </div>
                              </motion.div>
                         </div>
                    </motion.div>
               </section>

               {/* Skills Section - Bento Grid */}
               <section className="section bg-[var(--bg-secondary)]">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-center mb-12"
                         >
                              <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                                   Expertise
                              </span>
                              <h2 className="text-4xl md:text-5xl font-display font-bold">
                                   Skills & <span className="text-gradient">Tools</span>
                              </h2>
                         </motion.div>

                         {/* Skills Grid */}
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                              {skills.map((skill, index) => (
                                   <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)]"
                                   >
                                        <div className="flex justify-between items-center mb-3">
                                             <span className="font-medium">{skill.name}</span>
                                             <span className="text-sm text-[var(--accent-primary)]">{skill.level}%</span>
                                        </div>
                                        <div className="h-2 rounded-full bg-[var(--bg-tertiary)] overflow-hidden">
                                             <motion.div
                                                  initial={{ width: 0 }}
                                                  whileInView={{ width: `${skill.level}%` }}
                                                  viewport={{ once: true }}
                                                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                                                  className="h-full rounded-full"
                                                  style={{ background: 'var(--accent-gradient)' }}
                                             />
                                        </div>
                                   </motion.div>
                              ))}
                         </div>

                         {/* Tools Marquee */}
                         <div className="relative overflow-hidden py-8">
                              <motion.div
                                   animate={{ x: ['0%', '-50%'] }}
                                   transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                                   className="flex gap-4 whitespace-nowrap"
                              >
                                   {[...tools, ...tools].map((tool, index) => (
                                        <span
                                             key={index}
                                             className="px-6 py-3 rounded-full glass text-sm font-medium"
                                        >
                                             {tool}
                                        </span>
                                   ))}
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* Timeline Section */}
               <section ref={timelineRef} className="section">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-center mb-16"
                         >
                              <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                                   Journey
                              </span>
                              <h2 className="text-4xl md:text-5xl font-display font-bold">
                                   Experience & <span className="text-gradient">Education</span>
                              </h2>
                         </motion.div>

                         {/* Timeline */}
                         <div className="relative max-w-3xl mx-auto">
                              {/* Timeline Line */}
                              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-[var(--glass-border)] -translate-x-1/2">
                                   <motion.div
                                        className="absolute top-0 left-0 w-full bg-[var(--accent-primary)]"
                                        initial={{ height: '0%' }}
                                        animate={isTimelineInView ? { height: '100%' } : { height: '0%' }}
                                        transition={{ duration: 1.5, ease: 'easeInOut' }}
                                   />
                              </div>

                              {/* Timeline Items */}
                              {experience.map((item, index) => (
                                   <motion.div
                                        key={item.year}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true, margin: '-100px' }}
                                        transition={{ duration: 0.6, delay: index * 0.2 }}
                                        className={`relative pl-8 md:pl-0 pb-12 ${index % 2 === 0 ? 'md:pr-[calc(50%+2rem)] md:text-right' : 'md:pl-[calc(50%+2rem)]'
                                             }`}
                                   >
                                        {/* Dot */}
                                        <div className="absolute left-0 md:left-1/2 top-0 w-4 h-4 rounded-full bg-[var(--accent-primary)] -translate-x-1/2 glow-purple" />

                                        {/* Content */}
                                        <div className="p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)] hover:border-[var(--accent-primary)]/50 transition-colors">
                                             <span className="text-sm text-[var(--accent-primary)] font-medium">
                                                  {item.year}
                                             </span>
                                             <h3 className="text-xl font-display font-semibold mt-1 mb-1">
                                                  {item.title}
                                             </h3>
                                             <p className="text-[var(--text-muted)] text-sm mb-2">
                                                  {item.company}
                                             </p>
                                             <p className="text-[var(--text-secondary)]">
                                                  {item.description}
                                             </p>
                                        </div>
                                   </motion.div>
                              ))}
                         </div>
                    </div>
               </section>
          </div>
     );
}
