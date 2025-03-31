
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BlogCard from '@/components/BlogCard';
import { Badge } from '@/components/ui/badge';
import CodeBlock from '@/components/CodeBlock';
import { getPostBySlug, getRecentPosts } from '@/data/blogPosts';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const post = slug ? getPostBySlug(slug) : undefined;
  const relatedPosts = post ? getRecentPosts(post.id) : [];
  
  useEffect(() => {
    // Redirect to 404 if post not found
    if (!post && slug) {
      navigate('/not-found');
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, slug, navigate]);
  
  if (!post) {
    return null;
  }
  
  // Function to render content with code blocks
  const renderContent = () => {
    // This is a simplified version. In a real app, you'd want to use a markdown library
    // with proper parsing like react-markdown
    
    const contentWithoutCodeBlocks = post.content.split('```');
    
    return contentWithoutCodeBlocks.map((part, index) => {
      // Check if it's a code block (odd indices after splitting by ```)
      if (index % 2 === 1) {
        // Extract language from the first line
        const lines = part.split('\n');
        const language = lines[0];
        const code = lines.slice(1).join('\n');
        
        return <CodeBlock key={index} code={code} language={language} />;
      }
      
      // Return normal content
      return (
        <div key={index} dangerouslySetInnerHTML={{ __html: part.replace(/\n/g, '<br>') }} />
      );
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <article>
          {/* Hero section with cover image */}
          <div className="w-full h-64 md:h-96 bg-cover bg-center" style={{ backgroundImage: `url(${post.coverImage})` }}>
            <div className="w-full h-full flex items-end bg-gradient-to-t from-black/70 to-transparent">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 pb-8 text-white">
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.map(tag => (
                    <Link to={`/category/${tag}`} key={tag}>
                      <Badge variant="outline" className="text-white hover:bg-white/10">
                        {tag}
                      </Badge>
                    </Link>
                  ))}
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{post.title}</h1>
                <div className="text-gray-200">
                  {post.date} · {post.readTime} min read
                </div>
              </div>
            </div>
          </div>
          
          {/* Article content */}
          <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
            <div className="blog-content">
              {renderContent()}
            </div>
            
            {/* Author section */}
            <div className="mt-12 pt-8 border-t">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img 
                    src="https://via.placeholder.com/100" 
                    alt="Roshan Jha" 
                    className="w-12 h-12 rounded-full" 
                  />
                </div>
                <div className="ml-4">
                  <p className="font-medium">Written by</p>
                  <h3 className="text-lg font-bold">Roshan Jha</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Full Stack Developer specializing in JavaScript, React, and Node.js
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
        
        {/* Related posts section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8 text-center">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
