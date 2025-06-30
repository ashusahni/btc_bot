"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconArrowRight } from "@tabler/icons-react";
import { caseStudies } from "@/data/case-studies";

export function CaseStudiesList() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {caseStudies.map((study, index) => (
          <motion.div
            key={study.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-50px" }}
            className={`mb-32 flex flex-col ${
              index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
            } gap-12 items-center`}
          >
            {/* Project Image */}
            <div className="w-full lg:w-1/2">
              <div className="relative overflow-hidden rounded-xl shadow-xl group">
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                <Image
                  src={study.images.main}
                  alt={study.title}
                  width={800}
                  height={500}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="w-full lg:w-1/2">
              <h3 className="text-sm font-medium text-primary mb-2">
                {study.client}
              </h3>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                {study.title}
              </h2>
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                <span>{study.timeline}</span>
                <span>•</span>
                <span>{study.role}</span>
              </div>
              <p className="text-muted-foreground mb-6 text-lg">
                {study.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {study.technologies.slice(0, 5).map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
                {study.technologies.length > 5 && (
                  <Badge variant="secondary">
                    +{study.technologies.length - 5}
                  </Badge>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {study.results.slice(0, 2).map((result, i) => (
                  <div key={i} className="border p-4 rounded-md bg-zinc-50/50 dark:bg-zinc-900/20">
                    <h3 className="font-bold text-lg">{result.title}</h3>
                    <p className="text-sm text-muted-foreground">{result.description}</p>
                  </div>
                ))}
              </div>

              <Button asChild className="group">
                <Link href={`/projects/${study.slug}`}>
                  View Case Study
                  <IconArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
