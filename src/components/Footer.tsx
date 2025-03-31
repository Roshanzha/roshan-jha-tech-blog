
import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center">
              <span className="font-bold text-xl text-primary">Roshan Jha</span>
              <span className="ml-2 text-gray-500">Blog</span>
            </Link>
            <p className="mt-4 text-gray-600">
              Sharing insights, tutorials, and thoughts on modern web development,
              JavaScript, React, Node.js, and other technologies.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <Github size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <Twitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary">
                <Linkedin size={20} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-400 hover:text-primary">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/category/javascript" className="text-gray-600 hover:text-primary">JavaScript</Link></li>
              <li><Link to="/category/react" className="text-gray-600 hover:text-primary">React</Link></li>
              <li><Link to="/category/node" className="text-gray-600 hover:text-primary">Node.js</Link></li>
              <li><Link to="/category/typescript" className="text-gray-600 hover:text-primary">TypeScript</Link></li>
              <li><Link to="/category/web-development" className="text-gray-600 hover:text-primary">Web Development</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-800 mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About</Link></li>
              <li><Link to="/archives" className="text-gray-600 hover:text-primary">Archives</Link></li>
              <li><a href="#" className="text-gray-600 hover:text-primary">Subscribe</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Roshan Jha Blog. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-gray-500 hover:text-primary">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
