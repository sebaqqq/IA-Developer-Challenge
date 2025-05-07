import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">DevAI Transformation</h3>
            <p className="text-sm text-gray-400 max-w-md">
              Exploring how artificial intelligence can revolutionize software development through automation and optimization.
            </p>
          </div>
          <div className="flex space-x-6">
            <SocialLink href="#" icon={<Github className="h-5 w-5" />} label="GitHub" />
            <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} label="Twitter" />
            <SocialLink href="#" icon={<Linkedin className="h-5 w-5" />} label="LinkedIn" />
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 DevAI Transformation. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      className="text-gray-400 hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;