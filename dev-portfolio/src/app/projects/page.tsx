import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import { CaseStudiesHero } from "@/components/projects/CaseStudiesHero";
import { CaseStudiesList } from "@/components/projects/CaseStudiesList";

export const metadata = {
  title: "Case Studies | DevPortfolio",
  description: "Detailed case studies showcasing my work on fullstack development projects",
};

export default function CaseStudiesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <CaseStudiesHero />
      <CaseStudiesList />
      <Footer />
    </main>
  );
}
