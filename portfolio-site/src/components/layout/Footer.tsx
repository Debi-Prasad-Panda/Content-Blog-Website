'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import MagneticButton from '../animation/MagneticButton';

const footerLinks = {
     navigation: [
          { href: '/work', label: 'Work' },
          { href: '/about', label: 'About' },
          { href: '/services', label: 'Services' },
          { href: '/blog', label: 'Blog' },
          { href: '/contact', label: 'Contact' },
     ],
     social: [
          { href: 'https://linkedin.com', label: 'LinkedIn', icon: 'linkedin' },
          { href: 'https://instagram.com', label: 'Instagram', icon: 'instagram' },
          { href: 'https://behance.net', label: 'Behance', icon: 'behance' },
     ],
};

const SocialIcon = ({ type }: { type: string }) => {
     switch (type) {
          case 'linkedin':
               return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
               );
          case 'instagram':
               return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
               );
          case 'behance':
               return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                         <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.573 1.188 2.11 2.473 2.11 1.002 0 1.83-.572 2.102-1.082h3.18zM15.97 12.4c-.063-1.197-.914-2.022-2.188-2.022-1.395 0-2.145.848-2.297 2.022h4.485zM9.307 19H3.003V5h6.304c2.836 0 4.744 1.36 4.744 4.043 0 1.688-.986 2.88-2.467 3.387 1.785.418 2.846 1.712 2.846 3.683 0 2.883-2.325 3.887-5.123 3.887zM6.01 8.063v2.844h2.857c1.189 0 1.865-.522 1.865-1.422s-.676-1.422-1.865-1.422H6.01zm0 5.813v3.113h3.145c1.277 0 2.012-.637 2.012-1.557 0-.92-.735-1.556-2.012-1.556H6.01z" />
                    </svg>
               );
          default:
               return null;
     }
};

export default function Footer() {
     const currentYear = new Date().getFullYear();

     return (
          <footer className="relative border-t border-[var(--glass-border)] bg-[var(--bg-secondary)]">
               {/* CTA Section */}
               <div className="container py-16 md:py-24">
                    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
                         {/* Left - CTA */}
                         <div className="max-w-md">
                              <motion.h2
                                   initial={{ opacity: 0, y: 20 }}
                                   whileInView={{ opacity: 1, y: 0 }}
                                   viewport={{ once: true }}
                                   className="text-3xl md:text-4xl font-display font-bold mb-4"
                              >
                                   Let&apos;s work{' '}
                                   <span className="text-gradient">together</span>
                              </motion.h2>
                              <p className="text-[var(--text-secondary)] mb-6">
                                   Ready to elevate your brand with compelling content?
                                   Let&apos;s create something extraordinary.
                              </p>
                              <Link href="/contact">
                                   <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="btn btn-primary"
                                   >
                                        Start a Project
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                   </motion.button>
                              </Link>
                         </div>

                         {/* Right - Links & Resume */}
                         <div className="flex flex-col sm:flex-row gap-12">
                              {/* Quick Links */}
                              <div>
                                   <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
                                        Navigation
                                   </h3>
                                   <ul className="space-y-2">
                                        {footerLinks.navigation.map((link) => (
                                             <li key={link.href}>
                                                  <MagneticButton strength={0.2}>
                                                       <Link
                                                            href={link.href}
                                                            className="text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                                                       >
                                                            {link.label}
                                                       </Link>
                                                  </MagneticButton>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              {/* Resume & Social */}
                              <div>
                                   <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)] mb-4">
                                        Connect
                                   </h3>
                                   <motion.a
                                        href="/resume.pdf"
                                        download
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                        className="inline-flex items-center gap-2 btn btn-secondary mb-6"
                                   >
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                        Download Resume
                                   </motion.a>

                                   {/* Social Icons */}
                                   <div className="flex gap-3">
                                        {footerLinks.social.map((social) => (
                                             <MagneticButton key={social.icon} strength={0.4}>
                                                  <a
                                                       href={social.href}
                                                       target="_blank"
                                                       rel="noopener noreferrer"
                                                       aria-label={social.label}
                                                       className="w-10 h-10 rounded-full bg-[var(--bg-tertiary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--accent-primary)]/10 transition-all"
                                                  >
                                                       <SocialIcon type={social.icon} />
                                                  </a>
                                             </MagneticButton>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>

               {/* Bottom Bar */}
               <div className="border-t border-[var(--glass-border)]">
                    <div className="container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                         <p className="text-sm text-[var(--text-muted)]">
                              © {currentYear} Lumina Narrative. All rights reserved.
                         </p>
                         <p className="text-sm text-[var(--text-muted)] flex items-center gap-1">
                              Made with{' '}
                              <motion.span
                                   animate={{ scale: [1, 1.2, 1] }}
                                   transition={{ repeat: Infinity, duration: 1.5 }}
                                   className="text-red-500"
                              >
                                   ♥
                              </motion.span>{' '}
                              by Lumina Narrative
                         </p>
                    </div>
               </div>
          </footer>
     );
}
