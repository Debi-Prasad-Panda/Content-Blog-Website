'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MagneticButton from '@/components/animation/MagneticButton';

const categories = ['All', 'Writing', 'Brand Projects', 'Social', 'Video', 'Literary'];

const projects = [
     {
          id: 1,
          title: 'Tech Startup Brand Voice',
          category: 'Brand Projects',
          thumbnail: '#A855F7',
          role: 'Lead Content Strategist',
          outcome: '40% increase in user engagement',
          description: 'Developed comprehensive brand guidelines and voice documentation for a Series A tech startup, establishing their unique market position.',
          tags: ['Brand Strategy', 'Voice Guidelines', 'Content Framework'],
     },
     {
          id: 2,
          title: 'E-commerce Blog Series',
          category: 'Writing',
          thumbnail: '#7C3AED',
          role: 'Senior Content Writer',
          outcome: '150% organic traffic growth',
          description: 'Created a 12-article SEO-optimized blog series targeting high-value keywords, driving substantial organic traffic growth.',
          tags: ['SEO Writing', 'Blog Posts', 'E-commerce'],
     },
     {
          id: 3,
          title: 'Viral Social Campaign',
          category: 'Social',
          thumbnail: '#6B21A8',
          role: 'Campaign Strategist',
          outcome: '2M+ impressions, 50K shares',
          description: 'Designed and executed a multi-platform social media campaign that went viral, significantly boosting brand awareness.',
          tags: ['Social Media', 'Viral Marketing', 'Campaign Strategy'],
     },
     {
          id: 4,
          title: 'Product Launch Video Script',
          category: 'Video',
          thumbnail: '#9333EA',
          role: 'Scriptwriter',
          outcome: '500K views on launch week',
          description: 'Wrote compelling video scripts for a product launch campaign, capturing the brand essence in 90-second spots.',
          tags: ['Video Scripts', 'Product Launch', 'Storytelling'],
     },
     {
          id: 5,
          title: 'Poetry Collection',
          category: 'Literary',
          thumbnail: '#C084FC',
          role: 'Author',
          outcome: 'Featured in 3 literary magazines',
          description: 'A collection of contemporary poetry exploring themes of identity, technology, and human connection in the digital age.',
          tags: ['Poetry', 'Creative Writing', 'Publication'],
     },
     {
          id: 6,
          title: 'SaaS Website Copy',
          category: 'Writing',
          thumbnail: '#8B5CF6',
          role: 'Copywriter',
          outcome: '25% conversion rate improvement',
          description: 'Rewrote entire website copy for a B2B SaaS platform, focusing on clarity and conversion optimization.',
          tags: ['Website Copy', 'B2B', 'Conversion'],
     },
     {
          id: 7,
          title: 'Influencer Brand Partnership',
          category: 'Social',
          thumbnail: '#A78BFA',
          role: 'Content Director',
          outcome: '100K new followers gained',
          description: 'Managed content strategy for a major influencer brand collaboration, creating authentic sponsored content.',
          tags: ['Influencer Marketing', 'Partnerships', 'Content Strategy'],
     },
     {
          id: 8,
          title: 'Corporate Rebrand Story',
          category: 'Brand Projects',
          thumbnail: '#7E22CE',
          role: 'Brand Storyteller',
          outcome: 'Featured in Forbes',
          description: 'Crafted the founding story and mission narrative for a Fortune 500 company undergoing a major rebrand.',
          tags: ['Brand Story', 'Corporate', 'Narrative'],
     },
];

interface Project {
     id: number;
     title: string;
     category: string;
     thumbnail: string;
     role: string;
     outcome: string;
     description: string;
     tags: string[];
}

function FlipCard({ project, onClick }: { project: Project; onClick: () => void }) {
     const [isFlipped, setIsFlipped] = useState(false);

     return (
          <motion.div
               layout
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.4 }}
               className="perspective-1000"
          >
               <motion.div
                    className="relative w-full aspect-[4/5] cursor-pointer preserve-3d"
                    onClick={() => setIsFlipped(!isFlipped)}
                    animate={{ rotateY: isFlipped ? 180 : 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    style={{ transformStyle: 'preserve-3d' }}
               >
                    {/* Front */}
                    <div
                         className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden"
                         style={{ backfaceVisibility: 'hidden' }}
                    >
                         <div
                              className="absolute inset-0"
                              style={{
                                   background: `linear-gradient(135deg, ${project.thumbnail}40 0%, ${project.thumbnail}10 100%)`,
                              }}
                         />
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                         <div className="absolute inset-0 p-6 flex flex-col justify-end">
                              <span
                                   className="text-xs font-medium uppercase tracking-wider mb-2"
                                   style={{ color: project.thumbnail }}
                              >
                                   {project.category}
                              </span>
                              <h3 className="text-xl font-display font-semibold text-white mb-2">
                                   {project.title}
                              </h3>
                              <p className="text-sm text-white/60">
                                   Click to see details
                              </p>
                         </div>

                         {/* Hover indicator */}
                         <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center">
                              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                         </div>
                    </div>

                    {/* Back */}
                    <div
                         className="absolute inset-0 rounded-2xl overflow-hidden backface-hidden bg-[var(--card-bg)] border border-[var(--glass-border)] p-6 flex flex-col"
                         style={{
                              backfaceVisibility: 'hidden',
                              transform: 'rotateY(180deg)',
                         }}
                    >
                         <span
                              className="text-xs font-medium uppercase tracking-wider mb-2"
                              style={{ color: project.thumbnail }}
                         >
                              {project.category}
                         </span>
                         <h3 className="text-xl font-display font-semibold mb-2">
                              {project.title}
                         </h3>

                         <div className="flex-1 overflow-auto">
                              <div className="space-y-3 text-sm">
                                   <div>
                                        <span className="text-[var(--text-muted)]">Role:</span>
                                        <p className="text-[var(--text-primary)]">{project.role}</p>
                                   </div>
                                   <div>
                                        <span className="text-[var(--text-muted)]">Outcome:</span>
                                        <p className="text-[var(--accent-primary)] font-medium">{project.outcome}</p>
                                   </div>
                                   <div>
                                        <span className="text-[var(--text-muted)]">Description:</span>
                                        <p className="text-[var(--text-secondary)]">{project.description}</p>
                                   </div>
                              </div>
                         </div>

                         <div className="mt-4 flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                   <span
                                        key={tag}
                                        className="px-2 py-1 text-xs rounded-full bg-[var(--bg-tertiary)] text-[var(--text-muted)]"
                                   >
                                        {tag}
                                   </span>
                              ))}
                         </div>

                         <button
                              onClick={(e) => {
                                   e.stopPropagation();
                                   onClick();
                              }}
                              className="mt-4 btn btn-primary text-sm"
                         >
                              View Case Study
                         </button>
                    </div>
               </motion.div>
          </motion.div>
     );
}

function CaseStudyModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
     if (!project) return null;

     return (
          <motion.div
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="fixed inset-0 z-50 flex items-center justify-center p-4"
               onClick={onClose}
          >
               <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

               <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-2xl max-h-[90vh] overflow-auto rounded-2xl bg-[var(--card-bg)] border border-[var(--glass-border)] p-8"
                    onClick={(e) => e.stopPropagation()}
               >
                    {/* Close button */}
                    <button
                         onClick={onClose}
                         className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center hover:bg-[var(--accent-primary)]/20 transition-colors"
                    >
                         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                         </svg>
                    </button>

                    {/* Content */}
                    <div className="mb-6">
                         <span
                              className="text-sm font-medium uppercase tracking-wider mb-2 inline-block"
                              style={{ color: project.thumbnail }}
                         >
                              {project.category}
                         </span>
                         <h2 className="text-3xl font-display font-bold mb-4">{project.title}</h2>

                         {/* Hero image placeholder */}
                         <div
                              className="w-full aspect-video rounded-xl mb-6"
                              style={{
                                   background: `linear-gradient(135deg, ${project.thumbnail}30 0%, ${project.thumbnail}10 100%)`,
                              }}
                         />
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                         <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                              <span className="text-sm text-[var(--text-muted)]">Role</span>
                              <p className="font-medium">{project.role}</p>
                         </div>
                         <div className="p-4 rounded-xl bg-[var(--bg-tertiary)]">
                              <span className="text-sm text-[var(--text-muted)]">Outcome</span>
                              <p className="font-medium text-[var(--accent-primary)]">{project.outcome}</p>
                         </div>
                    </div>

                    <div className="prose prose-invert max-w-none">
                         <h3 className="text-xl font-display font-semibold mb-3">Overview</h3>
                         <p className="text-[var(--text-secondary)] mb-6">{project.description}</p>

                         <h3 className="text-xl font-display font-semibold mb-3">The Challenge</h3>
                         <p className="text-[var(--text-secondary)] mb-6">
                              The client needed a comprehensive content strategy that would differentiate them
                              in a crowded market while maintaining authenticity and driving measurable results.
                         </p>

                         <h3 className="text-xl font-display font-semibold mb-3">The Solution</h3>
                         <p className="text-[var(--text-secondary)] mb-6">
                              Through in-depth research and collaborative workshops, we developed a unique
                              content framework that aligned with their brand values and resonated with their target audience.
                         </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-[var(--glass-border)]">
                         {project.tags.map((tag) => (
                              <span
                                   key={tag}
                                   className="px-3 py-1 text-sm rounded-full"
                                   style={{
                                        background: `${project.thumbnail}20`,
                                        color: project.thumbnail,
                                   }}
                              >
                                   {tag}
                              </span>
                         ))}
                    </div>
               </motion.div>
          </motion.div>
     );
}

export default function WorkPage() {
     const [activeCategory, setActiveCategory] = useState('All');
     const [selectedProject, setSelectedProject] = useState<Project | null>(null);

     const filteredProjects = activeCategory === 'All'
          ? projects
          : projects.filter((p) => p.category === activeCategory);

     return (
          <div className="pt-20">
               {/* Header */}
               <section className="section pb-0">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-center max-w-3xl mx-auto mb-12"
                         >
                              <span className="text-sm font-medium uppercase tracking-wider text-[var(--accent-primary)] mb-2 block">
                                   Portfolio
                              </span>
                              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                                   Selected <span className="text-gradient">Work</span>
                              </h1>
                              <p className="text-lg text-[var(--text-secondary)]">
                                   A curated collection of projects showcasing my expertise in content strategy,
                                   writing, and brand storytelling.
                              </p>
                         </motion.div>

                         {/* Filter Bar */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                              className="sticky top-20 z-30 py-4 -mx-4 px-4 glass-strong rounded-xl mb-8"
                         >
                              <div className="flex flex-wrap justify-center gap-2">
                                   {categories.map((category) => (
                                        <MagneticButton key={category} strength={0.2}>
                                             <button
                                                  onClick={() => setActiveCategory(category)}
                                                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category
                                                            ? 'bg-[var(--accent-primary)] text-white'
                                                            : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                                       }`}
                                             >
                                                  {category}
                                             </button>
                                        </MagneticButton>
                                   ))}
                              </div>
                         </motion.div>
                    </div>
               </section>

               {/* Projects Grid */}
               <section className="section pt-0">
                    <div className="container">
                         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              <AnimatePresence mode="popLayout">
                                   {filteredProjects.map((project) => (
                                        <FlipCard
                                             key={project.id}
                                             project={project}
                                             onClick={() => setSelectedProject(project)}
                                        />
                                   ))}
                              </AnimatePresence>
                         </motion.div>
                    </div>
               </section>

               {/* Case Study Modal */}
               <AnimatePresence>
                    {selectedProject && (
                         <CaseStudyModal
                              project={selectedProject}
                              onClose={() => setSelectedProject(null)}
                         />
                    )}
               </AnimatePresence>
          </div>
     );
}
