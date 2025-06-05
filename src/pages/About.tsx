
import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/AppSidebar';
import { Button } from '@/components/ui/button';
import Footer from '@/components/Footer';
import { Github, Twitter, Linkedin, Mail, Youtube, Instagram } from 'lucide-react';

const About = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <SidebarInset className="flex-1">
          <div className="flex flex-col min-h-screen">
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur dark:bg-background/90 dark:border-gray-800">
              <div className="container flex h-14 items-center">
                <SidebarTrigger className="mr-4" />
                <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
                  <nav className="flex items-center space-x-4">
                    <Link to="/" className="text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                      Home
                    </Link>
                    <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">
                      About
                    </Link>
                  </nav>
                  <Link to="/new-post">
                    <Button size="sm" className="flex items-center gap-1">
                      <span>New Post</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </header>
            
            <main className="flex-grow">
              <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
                <div className="text-center mb-12">
                  <img 
                    src="/lovable-uploads/b5753d8b-b0f5-4051-893a-59fb2b1ec527.png" 
                    alt="Roshan Jha" 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h1 className="text-3xl md:text-4xl font-bold mb-2">Roshan Jha</h1>
                  <p className="text-xl text-gray-600">Full Stack Developer & Technical Writer</p>
                  
                  <div className="flex justify-center space-x-4 mt-4">
                    <a href="https://github.com/roshanzha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                      <Github size={22} />
                    </a>
                    <a href="https://twitter.com/roshnzha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                      <Twitter size={22} />
                    </a>
                    <a href="https://linkedin.com/in/roshanzha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                      <Linkedin size={22} />
                    </a>
                    <a href="https://youtube.com/@roshanzha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                      <Youtube size={22} />
                    </a>
                    <a href="https://instagram.com/roshnzha" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                      <Instagram size={22} />
                    </a>
                    <a href="mailto:mail@roshanjha.com.np" className="text-gray-400 hover:text-primary">
                      <Mail size={22} />
                    </a>
                  </div>
                </div>
                
                <div className="prose max-w-none">
                  <h2>About Me</h2>
                  <p>
                    Hi, I'm Roshan Jha, a full-stack developer passionate about web technologies and sharing knowledge 
                    with the developer community. I specialize in JavaScript, React, Node.js, and modern web development techniques.
                  </p>
                  
                  <p>
                    With over 8 years of experience in the tech industry, I've worked on a variety of projects ranging from 
                    small startups to large enterprise applications. My focus has always been on creating clean, efficient,
                    and maintainable code.
                  </p>
                  
                  <h2>Why I Started This Blog</h2>
                  <p>
                    I created this blog as a platform to share my experiences, challenges, and solutions in web development.
                    My goal is to help other developers avoid the same pitfalls I've encountered and provide practical, 
                    hands-on tutorials that can be immediately applied to real-world projects.
                  </p>
                  
                  <p>
                    I believe in the power of open-source and community learning. The tech industry evolves rapidly, and
                    staying updated requires constant learning and sharing of knowledge.
                  </p>
                  
                  <h2>My Tech Stack</h2>
                  <p>
                    I'm proficient in a wide range of technologies including:
                  </p>
                  <ul>
                    <li>JavaScript (ES6+) and TypeScript</li>
                    <li>React, Redux, and Next.js</li>
                    <li>Node.js, Express, and NestJS</li>
                    <li>MongoDB, PostgreSQL, and Redis</li>
                    <li>AWS and Google Cloud Platform</li>
                    <li>Docker and Kubernetes</li>
                    <li>CI/CD pipelines with GitHub Actions</li>
                  </ul>
                  
                  <h2>Get in Touch</h2>
                  <p>
                    I love connecting with fellow developers and tech enthusiasts. If you have questions, feedback, or just
                    want to say hi, feel free to reach out to me through any of the social links above or drop me an email.
                  </p>
                  
                  <p>
                    Thanks for visiting my blog, and I hope you find the content helpful and insightful!
                  </p>
                </div>
              </div>
            </main>
            
            <Footer />
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default About;
