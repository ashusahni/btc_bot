import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";

export const metadata = {
  title: "Blog | DevPortfolio",
  description: "Technical articles and insights on web development",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <BlogHero />
      <BlogList />
      <Footer />
    </main>
  );
}
