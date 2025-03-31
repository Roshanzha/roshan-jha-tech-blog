
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Post } from '@/data/blogPosts';

interface BlogCardProps {
  post: Post;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-300">
      <CardContent className="p-0">
        <Link to={`/post/${post.slug}`}>
          <img 
            src={post.coverImage} 
            alt={post.title}
            className="w-full h-48 object-cover rounded-t-lg"
          />
        </Link>
        <div className="p-4">
          <div className="flex space-x-2 mb-2">
            {post.tags.map(tag => (
              <Link to={`/category/${tag}`} key={tag}>
                <Badge variant="secondary" className="hover:bg-secondary">
                  {tag}
                </Badge>
              </Link>
            ))}
          </div>
          <Link to={`/post/${post.slug}`}>
            <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-200">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
        </div>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-0 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-sm text-gray-500">
            {post.date} · {post.readTime} min read
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default BlogCard;
