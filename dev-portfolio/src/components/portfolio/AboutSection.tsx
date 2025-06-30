"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IconCode, IconServer, IconDatabase, IconBrandJavascript, IconBrandReact, IconBrandNextjs, IconBrandNodejs, IconBrandPython } from "@tabler/icons-react";

export default function AboutSection() {
  const skills = [
    "Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas",
    "NumPy", "Keras", "OpenCV", "NLTK", "spaCy",
    "Hugging Face", "Jupyter", "SQL", "Data Visualization", "Machine Learning",
    "Deep Learning", "Computer Vision", "NLP", "MLOps", "Git"
  ];

  // Aceternity UI-inspired trackerBeam effect
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="about" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Text content */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative">
              About Me
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-primary"></span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              I'm an enthusiastic AI/ML engineer with a passion for building intelligent systems that drive innovation and solve complex problems. My expertise spans deep learning, natural language processing, computer vision, and data science.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              With hands-on experience in developing and deploying machine learning models, I enjoy transforming raw data into actionable insights and scalable solutions. I thrive at the intersection of research and engineering, always eager to learn and apply the latest advancements in AI.
            </p>
            <p className="text-lg text-muted-foreground">
              When I'm not experimenting with new ML models, you can find me contributing to open-source AI projects, writing technical articles, or mentoring aspiring data scientists.
            </p>
          </motion.div>

          {/* Card stack */}
          <div className="relative h-[500px] flex items-center justify-center">
            <motion.div
              variants={itemVariants}
              className="absolute top-0 right-0 md:right-10 h-[450px] w-full max-w-md"
            >
              <Card className="relative h-full bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 border shadow-lg overflow-hidden group">
                <div className="absolute inset-0 bg-grid-small-zinc/[0.025] -z-10" />
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <IconCode className="text-primary" />
                    AI/ML Skills
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Specializing in designing, training, and deploying machine learning and deep learning models for real-world applications in NLP, computer vision, and predictive analytics.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary" className="flex gap-1 items-center">
                      <IconBrandPython size={16} /> Python
                    </Badge>
                    <Badge variant="secondary" className="flex gap-1 items-center">
                      {/* Replace with appropriate icon if available */}
                      <span>TensorFlow</span>
                    </Badge>
                    <Badge variant="secondary" className="flex gap-1 items-center">
                      <span>PyTorch</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="absolute bottom-0 left-0 md:left-10 h-[450px] w-full max-w-md"
            >
              <Card className="relative h-full bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 border shadow-lg overflow-hidden">
                <div className="absolute inset-0 bg-grid-small-zinc/[0.025] -z-10" />
                <CardContent className="p-8 h-full flex flex-col">
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <IconServer className="text-primary" />
                    Data & Backend Skills
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Building robust data pipelines, scalable APIs, and deploying ML models to production with a focus on performance, reliability, and MLOps best practices.
                  </p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge variant="secondary" className="flex gap-1 items-center">
                      <IconDatabase size={16} /> SQL
                    </Badge>
                    <Badge variant="secondary" className="flex gap-1 items-center">
                      <span>Data Engineering</span>
                    </Badge>
                    <Badge variant="secondary" className="flex gap-1 items-center">
                      <span>MLOps</span>
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">My Technical Skills</h3>
          <div className="flex flex-wrap justify-center gap-2">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Badge variant="outline" className="py-2 px-3 text-sm">
                  {skill}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
