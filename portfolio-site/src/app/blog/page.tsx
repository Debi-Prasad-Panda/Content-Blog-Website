'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import MagneticButton from '@/components/animation/MagneticButton';

const categories = [
     { id: 'all', name: 'All Posts' },
     { id: 'marketing', name: '#MarketingTips' },
     { id: 'writing', name: '#CreativeWriting' },
     { id: 'strategy', name: '#ContentStrategy' },
     { id: 'personal', name: '#PersonalBrand' },
];

const blogPosts = [
     {
          id: 1,
          title: 'The Art of Storytelling in Brand Marketing',
          excerpt: 'Discover how to weave compelling narratives that resonate with your audience and build lasting brand connections.',
          category: 'marketing',
          date: 'Dec 15, 2024',
          readTime: '8 min read',
          featured: true,
          color: '#A855F7',
     },
     {
          id: 2,
          title: '10 SEO Writing Tips That Actually Work in 2024',
          excerpt: 'Practical strategies to optimize your content for search engines without sacrificing readability or engagement.',
          category: 'writing',
          date: 'Dec 10, 2024',
          readTime: '6 min read',
          featured: false,
          color: '#7C3AED',
     },
     {
          id: 3,
          title: 'Building a Content Calendar That Scales',
          excerpt: 'A step-by-step guide to creating a sustainable content production workflow for growing teams.',
          category: 'strategy',
          date: 'Dec 5, 2024',
          readTime: '10 min read',
          featured: false,
          color: '#6B21A8',
     },
     {
          id: 4,
          title: 'Why Your Personal Brand Matters More Than Ever',
          excerpt: 'In the age of AI, your unique voice and perspective are your greatest competitive advantages.',
          category: 'personal',
          date: 'Nov 28, 2024',
          readTime: '5 min read',
          featured: true,
          color: '#9333EA',
     },
     {
          id: 5,
          title: 'The Psychology Behind Viral Content',
          excerpt: 'Understanding what makes content shareable and how to apply these principles to your own work.',
          category: 'marketing',
          date: 'Nov 20, 2024',
          readTime: '7 min read',
          featured: false,
          color: '#C084FC',
     },
     {
          id: 6,
          title: 'From Blank Page to Published: My Writing Process',
          excerpt: 'A behind-the-scenes look at how I approach writing projects from ideation to final delivery.',
          category: 'writing',
          date: 'Nov 15, 2024',
          readTime: '9 min read',
          featured: false,
          color: '#8B5CF6',
     },
];

export default function BlogPage() {
     const [activeCategory, setActiveCategory] = useState('all');
     const [email, setEmail] = useState('');
     const [isSubscribed, setIsSubscribed] = useState(false);

     const filteredPosts = activeCategory === 'all'
          ? blogPosts
          : blogPosts.filter((post) => post.category === activeCategory);

     const featuredPosts = blogPosts.filter((post) => post.featured);

     const handleSubscribe = (e: React.FormEvent) => {
          e.preventDefault();
          if (email) {
               setIsSubscribed(true);
               setEmail('');
          }
     };

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
                                   Blog
                              </span>
                              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                                   Insights & <span className="text-gradient">Ideas</span>
                              </h1>
                              <p className="text-lg text-[var(--text-secondary)]">
                                   Thoughts on content strategy, creative writing, digital marketing,
                                   and building a personal brand in the digital age.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* Featured Posts */}
               <section className="section pt-0">
                    <div className="container">
                         <motion.h2
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-2xl font-display font-semibold mb-8"
                         >
                              Featured Articles
                         </motion.h2>

                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
                              {featuredPosts.map((post, index) => (
                                   <motion.article
                                        key={post.id}
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group"
                                   >
                                        <Link href={`/blog/${post.id}`}>
                                             <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-4">
                                                  <div
                                                       className="absolute inset-0 transition-transform duration-500 group-hover:scale-105"
                                                       style={{
                                                            background: `linear-gradient(135deg, ${post.color}40 0%, ${post.color}10 100%)`,
                                                       }}
                                                  />
                                                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                                                  {/* Category Tag */}
                                                  <span
                                                       className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur"
                                                       style={{
                                                            background: `${post.color}30`,
                                                            color: post.color,
                                                       }}
                                                  >
                                                       {categories.find((c) => c.id === post.category)?.name || post.category}
                                                  </span>

                                                  {/* Featured Badge */}
                                                  <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium bg-white/20 backdrop-blur text-white">
                                                       Featured ⭐
                                                  </span>
                                             </div>

                                             <div className="flex items-center gap-4 text-sm text-[var(--text-muted)] mb-2">
                                                  <span>{post.date}</span>
                                                  <span>•</span>
                                                  <span>{post.readTime}</span>
                                             </div>

                                             <h3 className="text-2xl font-display font-semibold mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                                                  {post.title}
                                             </h3>

                                             <p className="text-[var(--text-secondary)] line-clamp-2">
                                                  {post.excerpt}
                                             </p>
                                        </Link>
                                   </motion.article>
                              ))}
                         </div>
                    </div>
               </section>

               {/* All Posts with Filter */}
               <section className="section bg-[var(--bg-secondary)] pt-0">
                    <div className="container">
                         {/* Category Filter */}
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="flex flex-wrap gap-2 mb-12 pt-12"
                         >
                              {categories.map((category) => (
                                   <MagneticButton key={category.id} strength={0.2}>
                                        <button
                                             onClick={() => setActiveCategory(category.id)}
                                             className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === category.id
                                                       ? 'bg-[var(--accent-primary)] text-white'
                                                       : 'bg-[var(--bg-tertiary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                                  }`}
                                        >
                                             {category.name}
                                        </button>
                                   </MagneticButton>
                              ))}
                         </motion.div>

                         {/* Posts Grid */}
                         <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                              <AnimatePresence mode="popLayout">
                                   {filteredPosts.map((post, index) => (
                                        <motion.article
                                             key={post.id}
                                             layout
                                             initial={{ opacity: 0, scale: 0.9 }}
                                             animate={{ opacity: 1, scale: 1 }}
                                             exit={{ opacity: 0, scale: 0.9 }}
                                             transition={{ duration: 0.3, delay: index * 0.05 }}
                                             className="group"
                                        >
                                             <Link href={`/blog/${post.id}`}>
                                                  <div className="card h-full flex flex-col">
                                                       {/* Thumbnail */}
                                                       <div className="relative aspect-[16/10] overflow-hidden">
                                                            <div
                                                                 className="absolute inset-0 transition-transform duration-500 group-hover:scale-110"
                                                                 style={{
                                                                      background: `linear-gradient(135deg, ${post.color}30 0%, ${post.color}10 100%)`,
                                                                 }}
                                                            />

                                                            {/* Category Tag */}
                                                            <span
                                                                 className="absolute bottom-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur"
                                                                 style={{
                                                                      background: `${post.color}20`,
                                                                      color: post.color,
                                                                 }}
                                                            >
                                                                 {categories.find((c) => c.id === post.category)?.name || post.category}
                                                            </span>
                                                       </div>

                                                       {/* Content */}
                                                       <div className="p-6 flex-1 flex flex-col">
                                                            <div className="flex items-center gap-4 text-xs text-[var(--text-muted)] mb-3">
                                                                 <span>{post.date}</span>
                                                                 <span>•</span>
                                                                 <span>{post.readTime}</span>
                                                            </div>

                                                            <h3 className="text-lg font-display font-semibold mb-2 group-hover:text-[var(--accent-primary)] transition-colors line-clamp-2">
                                                                 {post.title}
                                                            </h3>

                                                            <p className="text-sm text-[var(--text-secondary)] line-clamp-2 flex-1">
                                                                 {post.excerpt}
                                                            </p>

                                                            <div className="mt-4 flex items-center text-[var(--accent-primary)] text-sm font-medium group-hover:gap-2 transition-all">
                                                                 Read More
                                                                 <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </Link>
                                        </motion.article>
                                   ))}
                              </AnimatePresence>
                         </motion.div>
                    </div>
               </section>

               {/* Newsletter Signup */}
               <section className="section">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="max-w-2xl mx-auto text-center"
                         >
                              <span className="text-4xl mb-4 block">📬</span>
                              <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
                                   Stay in the <span className="text-gradient">loop</span>
                              </h2>
                              <p className="text-[var(--text-secondary)] mb-8">
                                   Get weekly insights on content strategy, writing tips, and creative inspiration
                                   delivered straight to your inbox.
                              </p>

                              {isSubscribed ? (
                                   <motion.div
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="p-6 rounded-xl bg-green-500/10 border border-green-500/20"
                                   >
                                        <span className="text-2xl mb-2 block">🎉</span>
                                        <p className="text-green-400 font-medium">
                                             Thanks for subscribing! Check your inbox to confirm.
                                        </p>
                                   </motion.div>
                              ) : (
                                   <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                                        <input
                                             type="email"
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                             placeholder="Enter your email"
                                             required
                                             className="flex-1 px-5 py-3 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                                        />
                                        <motion.button
                                             whileHover={{ scale: 1.05 }}
                                             whileTap={{ scale: 0.98 }}
                                             type="submit"
                                             className="btn btn-primary"
                                        >
                                             Subscribe
                                        </motion.button>
                                   </form>
                              )}

                              <p className="text-xs text-[var(--text-muted)] mt-4">
                                   No spam, ever. Unsubscribe anytime.
                              </p>
                         </motion.div>
                    </div>
               </section>
          </div>
     );
}
