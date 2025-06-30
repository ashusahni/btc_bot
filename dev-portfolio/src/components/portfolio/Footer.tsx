"use client";

import Link from "next/link";
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconHeart } from "@tabler/icons-react";

export default function Footer() {
  const year = new Date().getFullYear();

  const navigationItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="py-12 bg-zinc-50 dark:bg-zinc-900/50 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link href="#home" className="inline-block font-bold text-xl tracking-tight mb-4">
              Anshul AI/ML
            </Link>
            <p className="text-muted-foreground mb-6 max-w-md">
              AI/ML engineer specializing in building intelligent systems, machine learning models, and data-driven solutions for real-world impact.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/ashusahni"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="GitHub"
              >
                <IconBrandGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/ashu-sahni-6b6943201/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="LinkedIn"
              >
                <IconBrandLinkedin size={18} />
              </a>
              <a
                href="https://x.com/Ashu0833"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-zinc-100 dark:bg-zinc-800 text-muted-foreground hover:text-primary hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                aria-label="Twitter"
              >
                <IconBrandTwitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Navigation</h3>
            <nav className="flex flex-col gap-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>New Delhi, India</p>
              <p>anshulmsd@gmail.com</p>
              <p>91 9582099846</p>
            </div>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm mb-4 md:mb-0">
            © {2025} Anshul.dev.portfolio. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center">
            Made with <IconHeart size={16} className="mx-1 text-red-500" /> using Next.js and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
