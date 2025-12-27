'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import MagneticButton from '@/components/animation/MagneticButton';

export default function ContactPage() {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          message: '',
     });
     const [focusedField, setFocusedField] = useState<string | null>(null);
     const [isSubmitting, setIsSubmitting] = useState(false);
     const [isSubmitted, setIsSubmitted] = useState(false);
     const [copied, setCopied] = useState(false);

     const email = 'hello@luminanarrative.com';

     const handleCopyEmail = async () => {
          try {
               await navigator.clipboard.writeText(email);
               setCopied(true);
               setTimeout(() => setCopied(false), 2000);
          } catch (err) {
               console.error('Failed to copy:', err);
          }
     };

     const handleSubmit = async (e: React.FormEvent) => {
          e.preventDefault();
          setIsSubmitting(true);

          // Simulate form submission
          await new Promise((resolve) => setTimeout(resolve, 1500));

          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: '', email: '', message: '' });
     };

     const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
          setFormData((prev) => ({
               ...prev,
               [e.target.name]: e.target.value,
          }));
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
                                   Contact
                              </span>
                              <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
                                   Let&apos;s <span className="text-gradient">Connect</span>
                              </h1>
                              <p className="text-lg text-[var(--text-secondary)]">
                                   Have a project in mind? I&apos;d love to hear about it.
                                   Let&apos;s discuss how I can help bring your vision to life.
                              </p>
                         </motion.div>
                    </div>
               </section>

               {/* Main Content */}
               <section className="section pt-0">
                    <div className="container">
                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                              {/* Left Side - Contact Info */}
                              <motion.div
                                   initial={{ opacity: 0, x: -30 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ delay: 0.2 }}
                              >
                                   {/* Availability Status */}
                                   <div className="flex items-center gap-3 mb-8">
                                        <span className="availability-dot available" />
                                        <span className="text-sm font-medium">Currently accepting new projects</span>
                                   </div>

                                   {/* Direct Email */}
                                   <div className="mb-12">
                                        <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-4">
                                             Email Me Directly
                                        </h2>
                                        <MagneticButton strength={0.3}>
                                             <motion.button
                                                  onClick={handleCopyEmail}
                                                  whileHover={{ scale: 1.02 }}
                                                  whileTap={{ scale: 0.98 }}
                                                  className="group relative text-left"
                                             >
                                                  <span className="text-2xl md:text-3xl font-display font-semibold text-gradient hover:opacity-80 transition-opacity">
                                                       {email}
                                                  </span>
                                                  <motion.span
                                                       initial={{ opacity: 0, y: 10 }}
                                                       animate={{ opacity: copied ? 1 : 0, y: copied ? 0 : 10 }}
                                                       className="absolute -top-8 left-0 text-sm text-green-400 font-medium"
                                                  >
                                                       ✓ Copied to clipboard!
                                                  </motion.span>
                                                  <span className="block text-sm text-[var(--text-muted)] mt-1 group-hover:text-[var(--accent-primary)] transition-colors">
                                                       Click to copy
                                                  </span>
                                             </motion.button>
                                        </MagneticButton>
                                   </div>

                                   {/* Response Time */}
                                   <div className="p-6 rounded-2xl bg-[var(--bg-secondary)] border border-[var(--glass-border)] mb-8">
                                        <div className="flex items-start gap-4">
                                             <span className="text-3xl">⚡</span>
                                             <div>
                                                  <h3 className="font-medium mb-1">Quick Response</h3>
                                                  <p className="text-sm text-[var(--text-secondary)]">
                                                       I typically respond within 24-48 hours. For urgent inquiries,
                                                       please mention it in your message.
                                                  </p>
                                             </div>
                                        </div>
                                   </div>

                                   {/* Social Links */}
                                   <div>
                                        <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-4">
                                             Find Me Online
                                        </h2>
                                        <div className="flex gap-3">
                                             {[
                                                  { name: 'LinkedIn', icon: 'in', href: 'https://linkedin.com' },
                                                  { name: 'Instagram', icon: 'ig', href: 'https://instagram.com' },
                                                  { name: 'Twitter', icon: 'X', href: 'https://twitter.com' },
                                             ].map((social) => (
                                                  <MagneticButton key={social.name} strength={0.4}>
                                                       <a
                                                            href={social.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="w-12 h-12 rounded-full bg-[var(--bg-secondary)] border border-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:border-[var(--accent-primary)] transition-all"
                                                       >
                                                            <span className="text-sm font-semibold">{social.icon}</span>
                                                       </a>
                                                  </MagneticButton>
                                             ))}
                                        </div>
                                   </div>
                              </motion.div>

                              {/* Right Side - Contact Form */}
                              <motion.div
                                   initial={{ opacity: 0, x: 30 }}
                                   animate={{ opacity: 1, x: 0 }}
                                   transition={{ delay: 0.3 }}
                              >
                                   {isSubmitted ? (
                                        <motion.div
                                             initial={{ opacity: 0, scale: 0.9 }}
                                             animate={{ opacity: 1, scale: 1 }}
                                             className="h-full flex items-center justify-center"
                                        >
                                             <div className="text-center p-8 rounded-2xl bg-[var(--bg-secondary)]">
                                                  <span className="text-6xl mb-4 block">🎉</span>
                                                  <h3 className="text-2xl font-display font-bold mb-2">
                                                       Message Sent!
                                                  </h3>
                                                  <p className="text-[var(--text-secondary)] mb-6">
                                                       Thank you for reaching out. I&apos;ll get back to you within 24-48 hours.
                                                  </p>
                                                  <button
                                                       onClick={() => setIsSubmitted(false)}
                                                       className="btn btn-secondary"
                                                  >
                                                       Send Another Message
                                                  </button>
                                             </div>
                                        </motion.div>
                                   ) : (
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                             {/* Name Field */}
                                             <div className="relative">
                                                  <motion.label
                                                       initial={false}
                                                       animate={{
                                                            y: focusedField === 'name' || formData.name ? -24 : 0,
                                                            scale: focusedField === 'name' || formData.name ? 0.85 : 1,
                                                            color: focusedField === 'name'
                                                                 ? 'var(--accent-primary)'
                                                                 : 'var(--text-muted)',
                                                       }}
                                                       className="absolute left-0 top-4 origin-left pointer-events-none transition-colors"
                                                  >
                                                       Your Name
                                                  </motion.label>
                                                  <input
                                                       type="text"
                                                       name="name"
                                                       value={formData.name}
                                                       onChange={handleInputChange}
                                                       onFocus={() => setFocusedField('name')}
                                                       onBlur={() => setFocusedField(null)}
                                                       required
                                                       className="w-full pt-4 pb-2 bg-transparent border-b-2 border-[var(--glass-border)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                                                  />
                                             </div>

                                             {/* Email Field */}
                                             <div className="relative">
                                                  <motion.label
                                                       initial={false}
                                                       animate={{
                                                            y: focusedField === 'email' || formData.email ? -24 : 0,
                                                            scale: focusedField === 'email' || formData.email ? 0.85 : 1,
                                                            color: focusedField === 'email'
                                                                 ? 'var(--accent-primary)'
                                                                 : 'var(--text-muted)',
                                                       }}
                                                       className="absolute left-0 top-4 origin-left pointer-events-none transition-colors"
                                                  >
                                                       Your Email
                                                  </motion.label>
                                                  <input
                                                       type="email"
                                                       name="email"
                                                       value={formData.email}
                                                       onChange={handleInputChange}
                                                       onFocus={() => setFocusedField('email')}
                                                       onBlur={() => setFocusedField(null)}
                                                       required
                                                       className="w-full pt-4 pb-2 bg-transparent border-b-2 border-[var(--glass-border)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors"
                                                  />
                                             </div>

                                             {/* Message Field */}
                                             <div className="relative">
                                                  <motion.label
                                                       initial={false}
                                                       animate={{
                                                            y: focusedField === 'message' || formData.message ? -24 : 0,
                                                            scale: focusedField === 'message' || formData.message ? 0.85 : 1,
                                                            color: focusedField === 'message'
                                                                 ? 'var(--accent-primary)'
                                                                 : 'var(--text-muted)',
                                                       }}
                                                       className="absolute left-0 top-4 origin-left pointer-events-none transition-colors"
                                                  >
                                                       Tell me about your project
                                                  </motion.label>
                                                  <textarea
                                                       name="message"
                                                       value={formData.message}
                                                       onChange={handleInputChange}
                                                       onFocus={() => setFocusedField('message')}
                                                       onBlur={() => setFocusedField(null)}
                                                       required
                                                       rows={4}
                                                       className="w-full pt-4 pb-2 bg-transparent border-b-2 border-[var(--glass-border)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors resize-none"
                                                  />
                                             </div>

                                             {/* Submit Button */}
                                             <motion.button
                                                  type="submit"
                                                  disabled={isSubmitting}
                                                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                                                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                                                  className="w-full btn btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                                             >
                                                  {isSubmitting ? (
                                                       <span className="flex items-center justify-center gap-2">
                                                            <motion.span
                                                                 animate={{ rotate: 360 }}
                                                                 transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                                                                 className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                                                            />
                                                            Sending...
                                                       </span>
                                                  ) : (
                                                       <>
                                                            Send Message
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                                            </svg>
                                                       </>
                                                  )}
                                             </motion.button>
                                        </form>
                                   )}
                              </motion.div>
                         </div>
                    </div>
               </section>

               {/* FAQ Section */}
               <section className="section bg-[var(--bg-secondary)]">
                    <div className="container">
                         <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              className="text-center mb-12"
                         >
                              <h2 className="text-3xl md:text-4xl font-display font-bold">
                                   Frequently Asked <span className="text-gradient">Questions</span>
                              </h2>
                         </motion.div>

                         <div className="max-w-2xl mx-auto space-y-4">
                              {[
                                   {
                                        q: 'What is your typical turnaround time?',
                                        a: 'Most projects are completed within 1-2 weeks, depending on scope. Rush projects can be accommodated with advance notice.',
                                   },
                                   {
                                        q: 'Do you offer revisions?',
                                        a: 'Yes! All projects include two rounds of revisions to ensure the final deliverable meets your expectations.',
                                   },
                                   {
                                        q: 'What are your rates?',
                                        a: 'Rates vary based on project scope and complexity. I offer both per-project and retainer pricing. Let\'s chat to discuss your needs.',
                                   },
                                   {
                                        q: 'Do you work with international clients?',
                                        a: 'Absolutely! I work with clients worldwide and can accommodate different time zones for calls and meetings.',
                                   },
                              ].map((faq, index) => (
                                   <motion.details
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="group p-6 rounded-xl bg-[var(--card-bg)] border border-[var(--glass-border)]"
                                   >
                                        <summary className="flex items-center justify-between cursor-pointer list-none">
                                             <span className="font-medium">{faq.q}</span>
                                             <svg
                                                  className="w-5 h-5 text-[var(--text-muted)] transition-transform group-open:rotate-180"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  viewBox="0 0 24 24"
                                             >
                                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                             </svg>
                                        </summary>
                                        <p className="mt-4 text-[var(--text-secondary)]">{faq.a}</p>
                                   </motion.details>
                              ))}
                         </div>
                    </div>
               </section>
          </div>
     );
}
