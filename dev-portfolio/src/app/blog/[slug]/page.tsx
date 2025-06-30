import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/portfolio/Header";
import Footer from "@/components/portfolio/Footer";
import { BlogPost } from "@/components/blog/BlogPost";
import { blogPosts } from "@/data/blog-posts";

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    return {
      title: "Post Not Found | DevPortfolio",
      description: "The requested blog post could not be found",
    };
  }

  return {
    title: `${post.title} | DevPortfolio Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <BlogPost post={post} />
      <Footer />
    </main>
  );
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
