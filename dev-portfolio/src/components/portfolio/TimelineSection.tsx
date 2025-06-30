"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { TimelineItemType, timelineData } from "@/data/timeline-data";
import { IconBriefcase, IconSchool, IconMapPin, IconCalendar } from "@tabler/icons-react";

export default function TimelineSection() {
  const workItems = timelineData.filter(item => item.type === 'work');
  const educationItems = timelineData.filter(item => item.type === 'education');

  return (
    <section id="timeline" className="py-20 bg-zinc-50/50 dark:bg-zinc-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background
          </p>
        </motion.div>

        <Tabs defaultValue="work" className="w-full max-w-4xl mx-auto">
          <TabsList className="mx-auto flex justify-center mb-8">
            <TabsTrigger value="work" className="flex items-center gap-2">
              <IconBriefcase size={16} />
              Work Experience
            </TabsTrigger>
            <TabsTrigger value="education" className="flex items-center gap-2">
              <IconSchool size={16} />
              Education
            </TabsTrigger>
          </TabsList>

          <TabsContent value="work" className="mt-4">
            <Timeline items={workItems} />
          </TabsContent>

          <TabsContent value="education" className="mt-4">
            <Timeline items={educationItems} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

interface TimelineProps {
  items: TimelineItemType[];
}

function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      {/* Timeline line */}
      <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border transform md:-translate-x-1/2" />

      {items.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
}

interface TimelineItemProps {
  item: TimelineItemType;
  index: number;
}

function TimelineItem({ item, index }: TimelineItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col md:flex-row mb-8 md:mb-16 relative ${
        isEven ? 'md:flex-row-reverse' : ''
      }`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary transform md:-translate-x-1/2 z-10" />

      {/* Content box */}
      <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-12' : 'md:pr-12'}`}>
        <div
          className="bg-gradient-to-br from-zinc-200/80 to-white dark:from-zinc-800/80 dark:to-zinc-900 p-6 rounded-lg border shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <h4 className="text-lg font-medium text-primary">{item.organization}</h4>
            </div>
            {item.type === 'work' ? (
              <div className="bg-primary/10 p-2 rounded-full">
                <IconBriefcase className="h-5 w-5 text-primary" />
              </div>
            ) : (
              <div className="bg-primary/10 p-2 rounded-full">
                <IconSchool className="h-5 w-5 text-primary" />
              </div>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground mt-2 mb-4">
            <div className="flex items-center gap-1">
              <IconCalendar size={16} />
              <span>{item.startDate} - {item.endDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <IconMapPin size={16} />
              <span>{item.location}</span>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{item.description}</p>

          {/* Skills */}
          {item.skills && (
            <div className="mb-4">
              <div className="flex flex-wrap gap-2 mt-2">
                {item.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {/* Expandable highlights */}
          {item.highlights && (
            <div className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? 'max-h-96' : 'max-h-0'
            }`}>
              <div className="border-t pt-4 mt-2">
                <h5 className="font-medium mb-2">Key Achievements</h5>
                <ul className="space-y-2 pl-5 list-disc marker:text-primary">
                  {item.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Expand/collapse indicator */}
          {item.highlights && (
            <button
              className="text-sm font-medium text-primary mt-2 flex items-center hover:underline"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(!isExpanded);
              }}
            >
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}
