
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FeaturedPost from '@/components/FeaturedPost';
import BlogCard from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CreditCard } from 'lucide-react';
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
          
          <section className="mt-16 bg-secondary p-8 rounded-lg text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">Subscribe to My Newsletter</h2>
                <p className="text-gray-600 mb-6">
                  Get the latest posts delivered right to your inbox. I promise not to spam you
                  or share your email with anyone else.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Your email address" 
                    className="flex-1"
                  />
                  <Button className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    Subscribe
                  </Button>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <CreditCard className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">Support My Work</h3>
                    <p className="text-gray-600 text-sm">
                      Get premium content and support my work with a paid subscription.
                    </p>
                  </div>
                </div>
                <ul className="space-y-2 mb-4 text-sm">
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Exclusive in-depth articles</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Early access to new content</span>
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-green-500">✓</span>
                    <span>Support independent publishing</span>
                  </li>
                </ul>
                <Link to="/subscribe">
                  <Button className="w-full">Subscribe Now</Button>
                </Link>
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
