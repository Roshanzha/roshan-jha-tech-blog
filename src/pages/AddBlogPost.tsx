
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { toast } from '@/hooks/use-toast';
import { X } from 'lucide-react';
import { blogPosts } from '@/data/blogPosts';

const AddBlogPost = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [coverImageUrl, setCoverImageUrl] = useState('');
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [readTime, setReadTime] = useState(5);

  const handleAddTag = () => {
    if (tag && !tags.includes(tag)) {
      setTags([...tags, tag]);
      setTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTags(tags.filter(t => t !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !excerpt || !content || !coverImageUrl || tags.length === 0) {
      toast({
        title: "Missing fields",
        description: "Please fill all required fields",
        variant: "destructive",
      });
      return;
    }

    // Generate slug from title
    const slug = title.toLowerCase()
      .replace(/[^\w\s]/gi, '')
      .replace(/\s+/g, '-');

    // Create a new blog post
    const newPost = {
      id: blogPosts.length + 1,
      title,
      slug,
      excerpt,
      coverImage: coverImageUrl,
      content,
      date: new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }),
      readTime,
      tags
    };

    // Add to blogPosts array (in a real app, this would be an API call)
    blogPosts.unshift(newPost);
    
    toast({
      title: "Success!",
      description: "Your blog post has been published",
    });

    // Redirect to the new blog post
    navigate(`/post/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Add New Blog Post</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input 
                id="title" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Enter blog title"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea 
                id="excerpt" 
                value={excerpt}
                onChange={(e) => setExcerpt(e.target.value)}
                placeholder="A short summary of your blog post"
                rows={3}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="coverImage">Cover Image URL</Label>
              <Input 
                id="coverImage" 
                value={coverImageUrl}
                onChange={(e) => setCoverImageUrl(e.target.value)}
                placeholder="Paste image URL"
                required
              />
              {coverImageUrl && (
                <div className="mt-2">
                  <img 
                    src={coverImageUrl} 
                    alt="Cover preview" 
                    className="max-h-40 rounded-md object-cover"
                    onError={() => {
                      toast({
                        title: "Invalid image URL",
                        description: "The provided URL doesn't seem to be a valid image",
                        variant: "destructive",
                      });
                      setCoverImageUrl('');
                    }}
                  />
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="tags">Tags</Label>
              <div className="flex gap-2">
                <Input 
                  id="tags" 
                  value={tag}
                  onChange={(e) => setTag(e.target.value)}
                  placeholder="Add a tag"
                />
                <Button type="button" onClick={handleAddTag}>Add</Button>
              </div>
              {tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {tags.map((t) => (
                    <Badge key={t} className="flex items-center gap-1">
                      {t}
                      <X 
                        className="h-3 w-3 cursor-pointer" 
                        onClick={() => handleRemoveTag(t)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="readTime">Estimated Read Time (minutes)</Label>
              <Input 
                id="readTime" 
                type="number"
                value={readTime}
                onChange={(e) => setReadTime(parseInt(e.target.value))}
                required
                min={1}
                max={60}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="content">Content</Label>
              <div className="border rounded-md p-2 bg-slate-50">
                <p className="text-sm text-gray-500 mb-2">
                  Support for Markdown syntax. Use ``` for code blocks.
                </p>
                <Textarea 
                  id="content" 
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Write your blog post content here..."
                  rows={15}
                  required
                  className="font-mono"
                />
              </div>
            </div>
            
            <div className="flex justify-end gap-4">
              <Button 
                type="button" 
                variant="outline"
                onClick={() => navigate('/')}
              >
                Cancel
              </Button>
              <Button type="submit">Publish Post</Button>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AddBlogPost;
