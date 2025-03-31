
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedPost from '@/components/FeaturedPost';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { getFeaturedPost, getRecentPosts } from '@/data/blogPosts';

const Index = () => {
  const featuredPost = getFeaturedPost();
  const recentPosts = getRecentPosts(featuredPost.id);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-12">
          <section className="mb-16">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Featured Post</h2>
            </div>
            <FeaturedPost post={featuredPost} />
          </section>
          
          <section>
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold">Recent Posts</h2>
              <Link to="/archives">
                <Button variant="outline">View All</Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </section>
          
          <section className="mt-16 bg-secondary p-8 rounded-lg">
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h2>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Get the latest posts delivered right to your inbox. I promise not to spam you
                or share your email with anyone else.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="flex-1 px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
                <Button>Subscribe</Button>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
