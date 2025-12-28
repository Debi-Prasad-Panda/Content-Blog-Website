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

function GlassmorphicCard({ project, onClick }: { project: Project; onClick: () => void }) {
     return (
          <motion.div
               layout
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.4 }}
               className="glassmorphic-card-wrapper"
          >
               <div
                    className="glassmorphic-card"
                    style={{
                         position: 'relative',
                         display: 'flex',
                         flexDirection: 'column',
                         gap: '1rem',
                         padding: '1.5rem',
                         width: '100%',
                         backgroundColor: 'hsla(240, 15%, 9%, 1)',
                         backgroundImage: `
                              radial-gradient(at 88% 40%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                              radial-gradient(at 49% 30%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                              radial-gradient(at 14% 26%, hsla(240, 15%, 9%, 1) 0px, transparent 85%),
                              radial-gradient(at 0% 64%, hsla(263, 93%, 56%, 1) 0px, transparent 85%),
                              radial-gradient(at 41% 94%, hsla(284, 100%, 84%, 1) 0px, transparent 85%),
                              radial-gradient(at 100% 99%, hsla(306, 100%, 57%, 1) 0px, transparent 85%)
                         `,
                         borderRadius: '1rem',
                         boxShadow: '0px -16px 24px 0px rgba(255, 255, 255, 0.25) inset',
                         overflow: 'hidden',
                    }}
               >
                    {/* Animated Border */}
                    <div
                         className="card-border"
                         style={{
                              overflow: 'hidden',
                              pointerEvents: 'none',
                              position: 'absolute',
                              zIndex: -10,
                              top: '50%',
                              left: '50%',
                              transform: 'translate(-50%, -50%)',
                              width: 'calc(100% + 2px)',
                              height: 'calc(100% + 2px)',
                              backgroundImage: 'linear-gradient(0deg, hsl(0, 0%, 100%) -50%, hsl(0, 0%, 40%) 100%)',
                              borderRadius: '1rem',
                         }}
                    />

                    {/* Title Container */}
                    <div>
                         <span
                              className="text-xs font-medium uppercase tracking-wider mb-1 block"
                              style={{ color: project.thumbnail }}
                         >
                              {project.category}
                         </span>
                         <h3
                              className="font-display font-semibold"
                              style={{ fontSize: '1.25rem', color: 'hsl(0, 0%, 100%)' }}
                         >
                              {project.title}
                         </h3>
                         <p
                              className="mt-1"
                              style={{
                                   fontSize: '0.75rem',
                                   color: 'hsl(0, 0%, 83%)',
                                   width: '80%',
                              }}
                         >
                              {project.description.substring(0, 80)}...
                         </p>
                    </div>

                    {/* Divider */}
                    <hr
                         style={{
                              width: '100%',
                              height: '1px',
                              backgroundColor: 'hsl(240, 9%, 17%)',
                              border: 'none',
                              margin: '0.25rem 0',
                         }}
                    />

                    {/* Features List */}
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                         <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                              <span
                                   style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '1.25rem',
                                        height: '1.25rem',
                                         backgroundColor: 'hsl(266, 92%, 58%)',
                                        borderRadius: '50%',
                                   }}
                              >
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="hsl(240, 15%, 9%)" style={{ width: '0.875rem', height: '0.875rem' }}>
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                   </svg>
                              </span>
                              <span style={{ fontSize: '0.875rem', color: 'hsl(0, 0%, 100%)' }}>
                                   Role: {project.role}
                              </span>
                         </li>
                         <li style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                              <span
                                   style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '1.25rem',
                                        height: '1.25rem',
                                        backgroundColor: 'hsl(43, 96%, 56%)',
                                        borderRadius: '50%',
                                   }}
                              >
                                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="hsl(240, 15%, 9%)" style={{ width: '0.875rem', height: '0.875rem' }}>
                                        <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                   </svg>
                              </span>
                               <span className="gold-spark" style={{ fontSize: '0.875rem', color: 'hsl(43, 96%, 56%)' }}>
                                   {project.outcome}
                              </span>
                         </li>
                         {project.tags.slice(0, 3).map((tag) => (
                              <li key={tag} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                                   <span
                                        style={{
                                             display: 'flex',
                                             justifyContent: 'center',
                                             alignItems: 'center',
                                             width: '1.25rem',
                                             height: '1.25rem',
                                             backgroundColor: 'hsl(266, 92%, 58%)',
                                             borderRadius: '50%',
                                        }}
                                   >
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="hsl(240, 15%, 9%)" style={{ width: '0.875rem', height: '0.875rem' }}>
                                             <path fillRule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
                                        </svg>
                                   </span>
                                   <span style={{ fontSize: '0.875rem', color: 'hsl(0, 0%, 100%)' }}>
                                        {tag}
                                   </span>
                              </li>
                         ))}
                    </ul>

                    {/* Gradient Button */}
                    <button
                         onClick={onClick}
                         style={{
                              cursor: 'pointer',
                              padding: '0.75rem',
                              width: '100%',
                              backgroundImage: 'linear-gradient(0deg, rgba(94, 58, 238, 1) 0%, rgba(197, 107, 240, 1) 100%)',
                              fontSize: '0.875rem',
                              fontWeight: 500,
                              color: 'hsl(0, 0%, 100%)',
                              border: 0,
                              borderRadius: '9999px',
                              boxShadow: 'inset 0 -2px 25px -4px hsl(0, 0%, 100%)',
                              marginTop: 'auto',
                              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                         }}
                         onMouseEnter={(e) => {
                              e.currentTarget.style.transform = 'translateY(-2px)';
                              e.currentTarget.style.boxShadow = 'inset 0 -2px 25px -4px hsl(0, 0%, 100%), 0 10px 30px -10px rgba(168, 85, 247, 0.5)';
                         }}
                         onMouseLeave={(e) => {
                              e.currentTarget.style.transform = 'translateY(0)';
                              e.currentTarget.style.boxShadow = 'inset 0 -2px 25px -4px hsl(0, 0%, 100%)';
                         }}
                    >
                         View Case Study
                    </button>
               </div>
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
          <div className="pt-12">
               {/* Header */}
               <section className="py-8">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              className="text-center max-w-3xl mx-auto mb-4"
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
                              className="sticky top-20 z-30 py-4 -mx-4 px-4 glass-strong rounded-xl mb-4"
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
               <section className="pb-12">
                    <div className="container">
                         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              <AnimatePresence mode="popLayout">
                                   {filteredProjects.map((project) => (
                                        <GlassmorphicCard
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
