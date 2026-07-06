import { BLOG_POSTS } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

// Format blog content from markdown-style to HTML
function formatBlogContent(content: string): string {
  let html = content;
  
  // Replace headings with styled versions
  html = html.replace(/^# (.+)$/gm, '<h2 style="font-size: 1.875rem; font-weight: 600; margin-top: 3rem; margin-bottom: 1.5rem; color: #001B4D; font-family: var(--font-barlow);">$1</h2>');
  html = html.replace(/^## (.+)$/gm, '<h3 style="font-size: 1.5rem; font-weight: 600; margin-top: 2rem; margin-bottom: 1rem; color: #001B4D; font-family: var(--font-barlow);">$1</h3>');
  html = html.replace(/^### (.+)$/gm, '<h4 style="font-size: 1.25rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #001B4D; font-family: var(--font-barlow);">$1</h4>');
  
  // Replace bold text
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong style="font-weight: 600; color: #001B4D;">$1</strong>');
  
  // Split into lines for list processing
  const lines = html.split('\n');
  const processed: string[] = [];
  let inList = false;
  let listType: 'ul' | 'ol' | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // Check for bullet point
    if (line.match(/^[-*] (.+)$/)) {
      const content = line.replace(/^[-*] (.+)$/, '$1');
      if (!inList || listType !== 'ul') {
        if (inList) processed.push(listType === 'ol' ? '</ol>' : '</ul>');
        processed.push('<ul style="margin: 1.5rem 0; margin-left: 1.5rem; list-style-type: disc; color: #475569;">');
        listType = 'ul';
        inList = true;
      }
      processed.push(`<li style="margin: 0.5rem 0; line-height: 1.75;">${content}</li>`);
    }
    // Check for numbered list
    else if (line.match(/^\d+\. (.+)$/)) {
      const content = line.replace(/^\d+\. (.+)$/, '$1');
      if (!inList || listType !== 'ol') {
        if (inList) processed.push(listType === 'ol' ? '</ol>' : '</ul>');
        processed.push('<ol style="margin: 1.5rem 0; margin-left: 1.5rem; list-style-type: decimal; color: #475569;">');
        listType = 'ol';
        inList = true;
      }
      processed.push(`<li style="margin: 0.5rem 0; line-height: 1.75;">${content}</li>`);
    }
    // Regular content
    else {
      if (inList) {
        processed.push(listType === 'ol' ? '</ol>' : '</ul>');
        inList = false;
        listType = null;
      }
      
      // Skip empty lines after closing tags
      if (line === '' && i > 0 && processed[processed.length - 1]?.match(/<\/(h[234]|ul|ol)>$/)) {
        continue;
      }
      
      // Add paragraph tags for non-heading content
      if (line && !line.startsWith('<h')) {
        processed.push(`<p style="color: #475569; line-height: 1.75; margin: 1rem 0;">${line}</p>`);
      } else if (line) {
        processed.push(line);
      }
    }
  }
  
  // Close any open list
  if (inList) {
    processed.push(listType === 'ol' ? '</ol>' : '</ul>');
  }
  
  return processed.join('\n');
}

// Generate SSG routes for all blog posts
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | Blog | SHROFF PROCESS PRODUCTS`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Get related posts (any category, excluding current) - show 3
  const relatedPosts = BLOG_POSTS
    .filter(p => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <main className="pt-32 pb-24 bg-white min-h-screen">
      <article className="container">

        {/* Article Header */}
        <div className="max-w-4xl mx-auto mb-12">
          {/* Category Badge */}
          <div className="mb-6">
            <span className="inline-block px-4 py-2 bg-primary text-white text-xs font-bold uppercase tracking-wider">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            {post.title}
          </h1>

          {/* Meta Information */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-text-secondary mb-8">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>
                {new Date(post.publishedDate).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-text-primary">{post.author.name}</span>
              <span>•</span>
              <span>{post.author.role}</span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-surface mb-12">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>

        {/* Article Content */}
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none prose-headings:font-heading prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 prose-h2:text-text-primary prose-h3:text-2xl prose-h3:font-bold prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-text-primary prose-h4:text-xl prose-h4:font-bold prose-h4:mt-6 prose-h4:mb-3 prose-h4:text-text-primary prose-p:text-text-secondary prose-p:leading-relaxed prose-p:my-4 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-text-primary prose-strong:font-bold prose-ul:my-6 prose-ul:ml-6 prose-ul:list-disc prose-ul:text-text-secondary prose-ol:my-6 prose-ol:ml-6 prose-ol:list-decimal prose-ol:text-text-secondary prose-li:my-2 prose-li:leading-relaxed prose-li:marker:text-primary">
            {/* Render content with proper HTML formatting */}
            <div 
              dangerouslySetInnerHTML={{ 
                __html: formatBlogContent(post.content)
              }} 
            />
          </div>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex items-center gap-3 flex-wrap">
                <Tag size={18} className="text-text-secondary" />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-surface text-text-secondary text-sm font-semibold rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Related Posts - 3 Columns */}
        {relatedPosts.length > 0 && (
          <div className="max-w-6xl mx-auto mt-20 pt-12 border-t border-slate-200">
            <h3 className="text-3xl md:text-4xl font-heading font-black uppercase text-text-primary mb-8">
              Related <span className="text-primary">Articles</span>
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.slug}
                  href={`/blog/${relatedPost.slug}`}
                  className="group bg-surface rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col"
                >
                  <div className="relative aspect-video bg-slate-200">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <span className="text-xs font-bold text-primary uppercase tracking-wider mb-2">
                      {relatedPost.category}
                    </span>
                    <h4 className="font-heading font-bold text-lg text-text-primary group-hover:text-primary transition-colors line-clamp-2 mb-3">
                      {relatedPost.title}
                    </h4>
                    <p className="text-text-secondary text-sm mt-auto line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </article>
    </main>
  );
}
