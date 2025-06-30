import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import CaseStudyDetail from "@/components/projects/CaseStudyDetail";
import { caseStudies } from "@/data/case-studies";

interface CaseStudyPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    return {
      title: "Case Study Not Found | DevPortfolio",
      description: "The requested case study could not be found",
    };
  }

  return {
    title: `${caseStudy.title} | Case Study`,
    description: caseStudy.description,
    openGraph: {
      title: caseStudy.title,
      description: caseStudy.description,
      type: "article",
    },
  };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <CaseStudyDetail caseStudy={caseStudy} />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}
