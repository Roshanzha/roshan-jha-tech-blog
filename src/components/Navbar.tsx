
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { PenLine } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import IndianTimeDisplay from './IndianTimeDisplay';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur dark:bg-background/90 dark:border-gray-800">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link to="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl dark:text-white">Roshan Jha Blog</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <IndianTimeDisplay />
          <nav className="flex items-center space-x-4">
            <Link to="/" className="text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">
              Home
            </Link>
            <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary dark:text-gray-300 dark:hover:text-primary">
              About
            </Link>
            <DarkModeToggle />
          </nav>
          <Link to="/new-post">
            <Button size="sm" className="flex items-center gap-1">
              <PenLine className="h-4 w-4" />
              <span>New Post</span>
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
