"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  IconBrandJavascript,
  IconBrandTypescript,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconDatabase,
  IconCode,
  IconBrandFigma,
  IconBrandDocker,
  IconBrandAws,
  IconBrandGit
} from '@tabler/icons-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function SkillCard({ icon, title, description }: SkillCardProps) {
  return (
    <Card className="w-full bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 border shadow-md hover:shadow-lg transition-all">
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function SkillsSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the background shapes
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  const skills = [
    {
      icon: <IconBrandPython size={32} />,
      title: "Python",
      description: "Primary language for machine learning, data science, and AI research.",
    },
    {
      icon: <IconCode size={32} />,
      title: "TensorFlow & PyTorch",
      description: "Building, training, and deploying deep learning models for computer vision and NLP.",
    },
    {
      icon: <IconCode size={32} />,
      title: "scikit-learn",
      description: "Classical machine learning algorithms, model evaluation, and data preprocessing.",
    },
    {
      icon: <IconDatabase size={32} />,
      title: "Data Engineering",
      description: "Data wrangling, ETL pipelines, and working with large datasets using Pandas and SQL.",
    },
    {
      icon: <IconCode size={32} />,
      title: "Natural Language Processing",
      description: "Text classification, sentiment analysis, and language modeling with spaCy, NLTK, and Transformers.",
    },
    {
      icon: <IconCode size={32} />,
      title: "Computer Vision",
      description: "Image classification, object detection, and image processing with OpenCV and deep learning.",
    },
    {
      icon: <IconCode size={32} />,
      title: "MLOps & Deployment",
      description: "Model versioning, CI/CD, Docker, MLflow, and cloud deployment for scalable AI solutions.",
    },
    {
      icon: <IconCode size={32} />,
      title: "Data Visualization",
      description: "Communicating insights with Matplotlib, Seaborn, Plotly, and interactive dashboards.",
    },
    {
      icon: <IconBrandGit size={32} />,
      title: "Collaboration & Version Control",
      description: "Git, GitHub, and best practices for collaborative AI/ML development.",
    }
  ];

  return (
    <section id="skills" ref={containerRef} className="py-20 relative overflow-hidden bg-zinc-50/50 dark:bg-zinc-900/20">
      {/* Animated background shapes */}
      <motion.div
        style={{ y: y1 }}
        className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute top-40 -left-20 w-80 h-80 rounded-full bg-violet-400/5 blur-3xl"
      />
      <motion.div
        style={{ y: y3 }}
        className="absolute bottom-20 right-20 w-72 h-72 rounded-full bg-blue-400/5 blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">AI/ML Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive set of skills and technologies I use to build intelligent systems, from data engineering to deep learning and MLOps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="px-4">
              {skills.map((skill, index) => (
                <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4 pl-4">
                  <div className="p-1">
                    <SkillCard
                      icon={skill.icon}
                      title={skill.title}
                      description={skill.description}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious />
              <CarouselNext />
            </div>
          </Carousel>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-4">My Development Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 border shadow-md">
              <h4 className="text-lg font-semibold mb-2">Clean & Maintainable</h4>
              <p className="text-muted-foreground">
                I write clean, well-documented code that follows best practices and is easy to maintain.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 border shadow-md">
              <h4 className="text-lg font-semibold mb-2">Performance Focused</h4>
              <p className="text-muted-foreground">
                Optimizing applications for speed, responsiveness, and an excellent user experience.
              </p>
            </div>
            <div className="p-6 rounded-lg bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 border shadow-md">
              <h4 className="text-lg font-semibold mb-2">Continuous Learning</h4>
              <p className="text-muted-foreground">
                Constantly expanding my knowledge and staying updated with the latest technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
