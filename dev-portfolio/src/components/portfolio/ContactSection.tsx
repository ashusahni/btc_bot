"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { IconMail, IconPhone, IconMapPin, IconBrandLinkedin, IconBrandGithub, IconBrandTwitter } from '@tabler/icons-react';
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Create reference for mousePosition and for inView detection
  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse move for glowing effect
  const handleMouseMove = (e: React.MouseEvent) => {
    if (formRef.current) {
      const rect = formRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-zinc-50/50 dark:to-zinc-900/20" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaborating on AI/ML projects, research, or consulting? Let's connect and create intelligent solutions together!
          </p>
        </motion.div>

        <div ref={sectionRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold mb-6 relative">
              Contact Information
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <IconMail size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:anshulmsd@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                    anshulmsd@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <IconPhone size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary transition-colors">
                    91 9582099846
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary flex-shrink-0">
                  <IconMapPin size={24} />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    New Delhi, India
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="font-medium mb-4">Connect With Me</h4>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/ashu-sahni-6b6943201/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  <IconBrandLinkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="https://github.com/ashusahni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  <IconBrandGithub size={20} />
                  <span className="sr-only">GitHub</span>
                </a>
                <a
                  href="https://x.com/Ashu0833"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                >
                  <IconBrandTwitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative"
          >
            {/* Aceternity UI-inspired glowing effect */}
            <div
              className="absolute -inset-0.5 bg-gradient-to-r from-primary/40 to-blue-500/40 rounded-lg blur-lg opacity-50 group-hover:opacity-100 transition duration-1000"
              style={{
                background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(147, 51, 234, 0.3), transparent 40%)`,
                opacity: formStatus === 'submitting' ? 0.8 : 0.3
              }}
            />

            <form
              ref={formRef}
              onMouseMove={handleMouseMove}
              onSubmit={handleSubmit}
              className="relative bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 border rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-6">Send Message</h3>

              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-md border bg-background/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-md border bg-background/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-md border bg-background/50 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition"
                    disabled={formStatus === 'submitting'}
                  />
                </div>

                <Button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full"
                >
                  {formStatus === 'idle' && 'Send Message'}
                  {formStatus === 'submitting' && 'Sending...'}
                  {formStatus === 'success' && 'Message Sent!'}
                  {formStatus === 'error' && 'Failed to Send'}
                </Button>

                {formStatus === 'success' && (
                  <p className="text-green-600 dark:text-green-400 text-sm text-center">
                    Thanks for reaching out! I'll get back to you soon..
                  </p>
                )}

                {formStatus === 'error' && (
                  <p className="text-red-600 dark:text-red-400 text-sm text-center">
                    There was an error sending your message. Please try again.
                  </p>
                )}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
