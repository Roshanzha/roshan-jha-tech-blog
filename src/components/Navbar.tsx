
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="border-b bg-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="font-bold text-xl text-primary">Roshan Jha</span>
              <span className="ml-2 text-gray-500">Blog</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="px-3 py-2 text-gray-700 hover:text-primary">Home</Link>
            <Link to="/category/javascript" className="px-3 py-2 text-gray-700 hover:text-primary">JavaScript</Link>
            <Link to="/category/react" className="px-3 py-2 text-gray-700 hover:text-primary">React</Link>
            <Link to="/category/node" className="px-3 py-2 text-gray-700 hover:text-primary">Node.js</Link>
            <Link to="/about" className="px-3 py-2 text-gray-700 hover:text-primary">About</Link>
            <Button variant="default" size="sm">Subscribe</Button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-primary focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1 px-4 sm:px-6 lg:px-8 bg-white">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary">Home</Link>
            <Link to="/category/javascript" className="block px-3 py-2 text-gray-700 hover:text-primary">JavaScript</Link>
            <Link to="/category/react" className="block px-3 py-2 text-gray-700 hover:text-primary">React</Link>
            <Link to="/category/node" className="block px-3 py-2 text-gray-700 hover:text-primary">Node.js</Link>
            <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-primary">About</Link>
            <Button variant="default" size="sm" className="mt-3 w-full">Subscribe</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
