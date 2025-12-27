'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import MagneticButton from '../animation/MagneticButton';

const featuredProjects = [
     {
          id: 1,
          title: 'Brand Voice Strategy',
          category: 'Content Strategy',
          description: 'Developed a comprehensive brand voice guide for a tech startup, resulting in 40% increase in engagement.',
          image: '/projects/project-1.jpg',
          color: '#A855F7',
     },
     {
          id: 2,
          title: 'E-commerce Blog Series',
          category: 'Content Writing',
          description: 'Created a 12-article blog series driving organic traffic growth of 150% over 6 months.',
          image: '/projects/project-2.jpg',
          color: '#7C3AED',
     },
     {
          id: 3,
          title: 'Social Media Campaign',
          category: 'Digital Marketing',
          description: 'Designed and executed a viral social media campaign reaching 2M+ impressions.',
          image: '/projects/project-3.jpg',
          color: '#6B21A8',
     },
     {
          id: 4,
          title: 'Corporate Storytelling',
          category: 'Brand Narrative',
          description: 'Crafted the founding story and mission for a Fortune 500 company rebrand.',
          image: '/projects/project-4.jpg',
          color: '#9333EA',
     },
];

interface ProjectCardProps {
     project: typeof featuredProjects[0];
     index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
     const cardRef = useRef<HTMLDivElement>(null);
     const { scrollYProgress } = useScroll({
          target: cardRef,
          offset: ['start end', 'end start'],
     });

     const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
     const imageY = useTransform(scrollYProgress, [0, 1], [50, -50]);

     return (
          <motion.div
               ref={cardRef}
               initial={{ opacity: 0, y: 50 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, margin: '-100px' }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group"
          >
               <Link href={`/work/${project.id}`}>
                    <motion.div
                         style={{ y }}
                         className="relative overflow-hidden rounded-2xl aspect-[4/5] card cursor-pointer"
                    >
                         {/* Image with parallax */}
                         <motion.div
                              style={{ y: imageY }}
                              className="absolute inset-0 scale-110"
                         >
                              <div
                                   className="w-full h-full"
                                   style={{
                                        background: `linear-gradient(135deg, ${project.color}40 0%, ${project.color}10 100%)`,
                                   }}
                              />
                              {/* Placeholder for actual image */}
                              <div className="absolute inset-0 flex items-center justify-center">
                                   <div
                                        className="w-24 h-24 rounded-full opacity-30"
                                        style={{ background: project.color }}
                                   />
                              </div>
                         </motion.div>

                         {/* Overlay gradient */}
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                         {/* Content */}
                         <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <motion.span
                                   className="text-xs font-medium uppercase tracking-wider mb-2 opacity-70"
                                   style={{ color: project.color }}
                              >
                                   {project.category}
                              </motion.span>
                              <h3 className="text-xl md:text-2xl font-display font-semibold text-white mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                   {project.title}
                              </h3>
                              <p className="text-sm text-white/70 line-clamp-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                   {project.description}
                              </p>
                         </div>

                         {/* Arrow indicator */}
                         <motion.div
                              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                              whileHover={{ scale: 1.1 }}
                         >
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                              </svg>
                         </motion.div>
                    </motion.div>
               </Link>
          </motion.div>
     );
}

export default function FeaturedProjects() {
     return (
          <section className="section">
               <div className="container">
                    {/* Section Header */}
                    <motion.div
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12"
                    >
                         <div>
                              <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                                   Portfolio
                              </span>
                              <h2 className="text-4xl md:text-5xl font-display font-bold">
                                   Featured <span className="text-gradient">Work</span>
                              </h2>
                         </div>
                         <MagneticButton strength={0.3}>
                              <Link
                                   href="/work"
                                   className="inline-flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors group"
                              >
                                   View all projects
                                   <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                   </svg>
                              </Link>
                         </MagneticButton>
                    </motion.div>

                    {/* Projects Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                         {featuredProjects.map((project, index) => (
                              <ProjectCard key={project.id} project={project} index={index} />
                         ))}
                    </div>
               </div>
          </section>
     );
}
