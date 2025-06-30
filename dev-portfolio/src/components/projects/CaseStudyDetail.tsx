"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { CaseStudyType, caseStudies } from "@/data/case-studies";

interface CaseStudyDetailProps {
  caseStudy: CaseStudyType;
}

export default function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  const findRelatedStudy = (slug: string) => {
    return caseStudies.find((study) => study.slug === slug);
  };

  const nextStudy = findRelatedStudy(caseStudy.nextProject);
  const prevStudy = findRelatedStudy(caseStudy.prevProject);

  return (
    <article className="pt-10 pb-20 mt-16">
      <div className="container mx-auto px-4">
        <Link href="/projects" className="inline-block mb-6 group">
          <Button variant="ghost" className="group-hover:bg-muted transition-colors">
            <IconArrowLeft className="mr-2 h-4 w-4" />
            Back to All Case Studies
          </Button>
        </Link>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Header */}
            <header className="mb-16">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="outline" className="px-3 py-1 text-primary">
                  {caseStudy.client}
                </Badge>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{caseStudy.timeline}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-muted-foreground">{caseStudy.role}</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
                {caseStudy.title}
              </h1>

              <p className="text-xl text-muted-foreground mb-10 max-w-3xl">
                {caseStudy.description}
              </p>

              <div className="relative h-80 md:h-[500px] rounded-xl overflow-hidden mb-10">
                <Image
                  src={caseStudy.images.main}
                  alt={caseStudy.title}
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </header>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
              {/* Sidebar */}
              <div className="lg:col-span-1 order-2 lg:order-1">
                <div className="sticky top-24">
                  <div className="mb-8">
                    <h3 className="text-lg font-bold mb-4">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-lg font-bold mb-4">Key Results</h3>
                    <div className="space-y-4">
                      {caseStudy.results.map((result, i) => (
                        <div key={i} className="border p-4 rounded-md bg-zinc-50/50 dark:bg-zinc-900/20">
                          <h4 className="font-bold">{result.title}</h4>
                          <p className="text-sm text-muted-foreground">{result.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-2 order-1 lg:order-2">
                {/* Challenges Section */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Challenges
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
                  </h2>
                  <ul className="space-y-4 pl-6 list-disc marker:text-primary">
                    {caseStudy.challenges.map((challenge, i) => (
                      <li key={i} className="text-lg text-muted-foreground pl-2">
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Solutions Section */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Solutions
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
                  </h2>
                  <ul className="space-y-4 pl-6 list-disc marker:text-primary">
                    {caseStudy.solutions.map((solution, i) => (
                      <li key={i} className="text-lg text-muted-foreground pl-2">
                        {solution}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Image Gallery */}
                <div className="mb-16">
                  <h2 className="text-2xl font-bold mb-6 relative inline-block">
                    Gallery
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {caseStudy.images.gallery.map((image, i) => (
                      <div key={i} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${caseStudy.title} gallery image ${i + 1}`}
                          fill
                          className="object-cover hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                {caseStudy.testimonial && (
                  <div className="mb-16">
                    <h2 className="text-2xl font-bold mb-6 relative inline-block">
                      Testimonial
                      <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30"></span>
                    </h2>
                    <blockquote className="border-l-4 border-primary pl-6 py-4 italic text-lg relative">
                      <span className="text-6xl absolute top-0 left-0 text-primary/10">"</span>
                      <p className="mb-4">{caseStudy.testimonial.quote}</p>
                      <footer className="text-base not-italic">
                        <strong>{caseStudy.testimonial.author}</strong>
                        <span className="block text-sm text-muted-foreground">
                          {caseStudy.testimonial.role}
                        </span>
                      </footer>
                    </blockquote>
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Between Case Studies */}
            <div className="border-t pt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
              {prevStudy && (
                <Link
                  href={`/projects/${prevStudy.slug}`}
                  className="flex items-center group"
                >
                  <div className="p-2 rounded-full bg-muted mr-4 group-hover:bg-primary/10 transition-colors">
                    <IconArrowLeft className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Previous Case Study</span>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {prevStudy.title}
                    </h3>
                  </div>
                </Link>
              )}

              {nextStudy && (
                <Link
                  href={`/projects/${nextStudy.slug}`}
                  className="flex items-center justify-end text-right group ml-auto"
                >
                  <div>
                    <span className="text-sm text-muted-foreground">Next Case Study</span>
                    <h3 className="font-medium group-hover:text-primary transition-colors">
                      {nextStudy.title}
                    </h3>
                  </div>
                  <div className="p-2 rounded-full bg-muted ml-4 group-hover:bg-primary/10 transition-colors">
                    <IconArrowRight className="h-5 w-5" />
                  </div>
                </Link>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  );
}
