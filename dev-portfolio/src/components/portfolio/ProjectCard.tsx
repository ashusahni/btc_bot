"use client";

import { useState, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { IconBrandGithub, IconExternalLink, IconBook } from "@tabler/icons-react";
import type { Project } from "@/data/projects";

interface ProjectCardProps extends Omit<Project, 'category'> {}

export default function ProjectCard({
  title,
  description,
  image,
  tags,
  github,
  demo,
  caseStudy
}: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 400, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 400, damping: 30 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["6deg", "-6deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-6deg", "6deg"]
  );

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }, [x, y]);

  const handleMouseLeave = useCallback(() => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  }, [x, y]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="relative w-full rounded-xl overflow-hidden shadow-lg bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 border"
      role="article"
      aria-label={`Project: ${title}`}
    >
      {/* Project image */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        <div
          className="absolute inset-0 bg-primary/10 z-10 transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.3 : 0 }}
          aria-hidden="true"
        />
        <Image
          src={image}
          alt={`${title} project preview`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.5s ease-in-out"
          }}
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="p-6" style={{ transform: "translateZ(20px)" }}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6" role="list">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" role="listitem">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          {github && (
            <Button variant="outline" size="sm" asChild>
              <Link 
                href={github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1"
                aria-label={`View ${title} on GitHub`}
              >
                <IconBrandGithub size={16} aria-hidden="true" />
                GitHub
              </Link>
            </Button>
          )}

          {demo && (
            <Button size="sm" asChild>
              <Link 
                href={demo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-1"
                aria-label={`View ${title} live demo`}
              >
                <IconExternalLink size={16} aria-hidden="true" />
                Live Demo
              </Link>
            </Button>
          )}

          {caseStudy && (
            <Button variant="secondary" size="sm" asChild>
              <Link 
                href={caseStudy} 
                className="flex items-center gap-1"
                aria-label={`Read case study for ${title}`}
              >
                <IconBook size={16} aria-hidden="true" />
                Case Study!
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
