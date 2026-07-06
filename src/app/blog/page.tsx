import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Blog | SHROFF PROCESS PRODUCTS",
  description: "Insights, guides, and updates about rubber expansion joints, industrial bellows, and piping solutions.",
};

export default function BlogPage() {
  return (
    <main className="pt-32 pb-24 bg-surface min-h-screen">
      <div className="container">
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="label-tag mb-4">Knowledge Center</div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-black uppercase text-text-primary leading-tight mb-6">
            Industry <span className="text-primary">Insights</span>
          </h1>
          <p className="text-lg text-text-secondary">
            Technical guides, maintenance tips, and application insights for rubber expansion joints and industrial bellows.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Featured Image */}
              <Link href={`/blog/${post.slug}`} className="relative aspect-video overflow-hidden bg-surface">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-4 py-1.5 bg-primary text-white text-xs font-bold uppercase tracking-wider">
                    {post.category}
                  </span>
                </div>
              </Link>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-xs text-text-secondary mb-4">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-xl font-heading font-bold text-text-primary mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                </Link>

                {/* Excerpt */}
                <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Read More Link */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-2 text-primary font-bold text-sm uppercase tracking-wider group-hover:gap-3 transition-all"
                >
                  Read Article
                  <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Empty State if no posts */}
        {BLOG_POSTS.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-secondary text-lg">
              No blog posts available at the moment. Check back soon!
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
