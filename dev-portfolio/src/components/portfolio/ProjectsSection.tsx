"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { IconArrowRight } from "@tabler/icons-react";
import { projects, type Project } from "@/data/projects";
import { useMemo } from "react";

type ProjectCategory = 'all' | 'frontend' | 'backend' | 'fullstack';

export default function ProjectsSection() {
  const filteredProjects = useMemo(() => {
    const categories: Record<ProjectCategory, Project[]> = {
      all: projects,
      frontend: projects.filter(project => project.category === "frontend"),
      backend: projects.filter(project => project.category === "backend"),
      fullstack: projects.filter(project => project.category === "fullstack")
    };
    return categories;
  }, []);

  const renderProjectGrid = (category: ProjectCategory) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {filteredProjects[category].map((project, index) => (
        <ProjectCard
          key={`${project.title}-${index}`}
          {...project}
        />
      ))}
    </div>
  );

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI/ML Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in artificial intelligence and machine learning, including deep learning, NLP, computer vision, and MLOps.
          </p>
        </motion.div>

        <Tabs defaultValue="all" className="mb-12">
          <TabsList className="mx-auto flex justify-center">
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="fullstack">Fullstack</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-8">
            {renderProjectGrid('all')}
          </TabsContent>

          <TabsContent value="frontend" className="mt-8">
            {renderProjectGrid('frontend')}
          </TabsContent>

          <TabsContent value="backend" className="mt-8">
            {renderProjectGrid('backend')}
          </TabsContent>

          <TabsContent value="fullstack" className="mt-8">
            {renderProjectGrid('fullstack')}
          </TabsContent>
        </Tabs>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-lg text-muted-foreground mb-8">
            These are just a few examples of my work. Check out detailed case studies for more in-depth information.
          </p>

          <Button size="lg" asChild className="group">
            <Link href="/projects">
              View All Case Studies
              <IconArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
