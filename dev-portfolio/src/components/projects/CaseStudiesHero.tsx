"use client";

import { motion } from "framer-motion";

export function CaseStudiesHero() {
  return (
    <section className="relative py-20 mt-16 bg-zinc-50/50 dark:bg-zinc-900/20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-grid-small-zinc/[0.025] -z-10" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Case Studies</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Detailed breakdowns of selected projects, the challenges faced, and solutions implemented
          </p>
        </motion.div>
      </div>
    </section>
  );
}
