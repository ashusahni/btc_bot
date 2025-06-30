"use client";

import { useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const HIGHLIGHT_ELEMENTS = [
  {
    top: "25%",
    left: "42%",
    width: "374px",
    height: "506px",
    background: "rgba(125, 211, 252, 0.15)"
  },
  {
    top: "58%",
    left: "86%",
    width: "474px",
    height: "540px",
    background: "rgba(139, 92, 246, 0.15)"
  },
  {
    top: "5%",
    left: "65%",
    width: "492px",
    height: "588px",
    background: "rgba(125, 211, 252, 0.15)"
  },
  {
    top: "13%",
    left: "14%",
    width: "548px",
    height: "317px",
    background: "rgba(139, 92, 246, 0.15)"
  },
  {
    top: "37%",
    left: "18%",
    width: "427px",
    height: "403px",
    background: "rgba(125, 211, 252, 0.15)"
  }
];

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Create a floating animation effect on mouse move
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const containerRect = container.getBoundingClientRect();
      const centerX = containerRect.width / 2;
      const centerY = containerRect.height / 2;

      const moveX = ((clientX - containerRect.left) - centerX) / 50;
      const moveY = ((clientY - containerRect.top) - centerY) / 50;

      const highlights = container.querySelectorAll('.highlight-element');
      highlights.forEach((highlight) => {
        const elem = highlight as HTMLElement;
        elem.style.transform = `translate(${moveX * -1}px, ${moveY * -1}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20 px-4"
    >
      {/* Background gradient effect */}
      <div className="absolute inset-0 w-full h-full bg-grid-small-zinc/[0.025] -z-10" />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Animated circles in background */}
      <div className="absolute inset-0 overflow-hidden">
        {HIGHLIGHT_ELEMENTS.map((element, i) => (
          <div
            key={i}
            className="highlight-element absolute rounded-full mix-blend-multiply filter blur-xl opacity-50"
            style={{
              top: element.top,
              left: element.left,
              width: element.width,
              height: element.height,
              background: element.background,
              transform: 'translate(-50%, -50%)'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-primary/10 text-primary">
            AI/ML Engineer
          </span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Empowering innovation with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500"> Artificial Intelligence & Machine Learning</span>
        </motion.h1>

        <motion.p
          className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          I design and build intelligent systems that solve real-world problems using state-of-the-art AI and machine learning techniques. My passion lies in transforming data into actionable insights and creating impactful solutions with deep learning, NLP, and computer vision.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Button size="lg" asChild>
            <Link href="#projects">View My Work</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Contact Me</Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
