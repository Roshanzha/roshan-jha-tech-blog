
import React from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/data/blogPosts';

interface FeaturedPostProps {
  post: Post;
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 bg-white rounded-lg overflow-hidden shadow-md">
      <div className="h-64 md:h-auto">
        <Link to={`/post/${post.slug}`}>
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </Link>
      </div>
      <div className="p-6 flex flex-col justify-center">
        <div className="flex space-x-2 mb-3">
          {post.tags.map(tag => (
            <Link to={`/category/${tag}`} key={tag}>
              <Badge variant="secondary" className="hover:bg-secondary">
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
        <Link to={`/post/${post.slug}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-primary transition-colors duration-200">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4">{post.excerpt}</p>
        <div className="flex items-center mt-auto">
          <div>
            <p className="text-sm text-gray-500">
              {post.date} · {post.readTime} min read
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
