'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import MagneticButton from '../animation/MagneticButton';

const navLinks = [
     { href: '/', label: 'Home' },
     { href: '/work', label: 'Work' },
     { href: '/about', label: 'About' },
     { href: '/services', label: 'Services' },
     { href: '/blog', label: 'Blog' },
     { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
     const [isScrolled, setIsScrolled] = useState(false);
     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
     const pathname = usePathname();

     useEffect(() => {
          const handleScroll = () => {
               setIsScrolled(window.scrollY > 20);
          };

          window.addEventListener('scroll', handleScroll);
          return () => window.removeEventListener('scroll', handleScroll);
     }, []);

     return (
          <>
               <motion.header
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-strong py-3' : 'py-5'
                         }`}
               >
                    <nav className="container flex items-center justify-between">
                         {/* Logo */}
                         <Link href="/" className="group">
                              <motion.div
                                   whileHover={{ scale: 1.05 }}
                                   className="flex items-center gap-2"
                              >
                                   <span className="text-2xl font-display font-bold text-gradient">
                                        LN
                                   </span>
                                   <span className="hidden md:inline text-sm font-medium opacity-60 group-hover:opacity-100 transition-opacity">
                                        Lumina Narrative
                                   </span>
                              </motion.div>
                         </Link>

                         {/* Desktop Nav Links */}
                         <div className="hidden md:flex items-center gap-1">
                              {navLinks.map((link) => (
                                   <MagneticButton key={link.href} strength={0.3}>
                                        <Link
                                             href={link.href}
                                             className={`relative px-4 py-2 text-sm font-medium transition-colors ${pathname === link.href
                                                       ? 'text-[var(--accent-primary)]'
                                                       : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                                  }`}
                                        >
                                             {link.label}
                                             {pathname === link.href && (
                                                  <motion.div
                                                       layoutId="activeNav"
                                                       className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent-primary)]"
                                                       transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                                                  />
                                             )}
                                        </Link>
                                   </MagneticButton>
                              ))}
                         </div>

                         {/* Right Side */}
                         <div className="flex items-center gap-4">
                              <ThemeToggle />

                              {/* Mobile Menu Button */}
                              <button
                                   onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                   className="md:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                                   aria-label="Toggle menu"
                              >
                                   <motion.span
                                        animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                                        className="w-6 h-0.5 bg-[var(--text-primary)] rounded-full"
                                   />
                                   <motion.span
                                        animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                                        className="w-6 h-0.5 bg-[var(--text-primary)] rounded-full"
                                   />
                                   <motion.span
                                        animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                                        className="w-6 h-0.5 bg-[var(--text-primary)] rounded-full"
                                   />
                              </button>
                         </div>
                    </nav>
               </motion.header>

               {/* Mobile Menu */}
               <AnimatePresence>
                    {isMobileMenuOpen && (
                         <motion.div
                              initial={{ opacity: 0, y: -20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              className="fixed inset-0 z-40 md:hidden pt-20"
                         >
                              <div className="absolute inset-0 bg-[var(--bg-primary)]/95 backdrop-blur-xl" />
                              <nav className="relative container py-8">
                                   <div className="flex flex-col gap-2">
                                        {navLinks.map((link, index) => (
                                             <motion.div
                                                  key={link.href}
                                                  initial={{ opacity: 0, x: -20 }}
                                                  animate={{ opacity: 1, x: 0 }}
                                                  transition={{ delay: index * 0.1 }}
                                             >
                                                  <Link
                                                       href={link.href}
                                                       onClick={() => setIsMobileMenuOpen(false)}
                                                       className={`block py-3 text-2xl font-display font-semibold transition-colors ${pathname === link.href
                                                                 ? 'text-gradient'
                                                                 : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                                                            }`}
                                                  >
                                                       {link.label}
                                                  </Link>
                                             </motion.div>
                                        ))}
                                   </div>
                              </nav>
                         </motion.div>
                    )}
               </AnimatePresence>
          </>
     );
}
