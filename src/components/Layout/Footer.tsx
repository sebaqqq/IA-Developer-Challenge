import React from "react";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold text-white mb-2">
              DevAI: Un Desafío de IA Generativa
            </h3>
            <p className="text-sm text-gray-400 max-w-md">
              Explorando cómo la inteligencia artificial puede revolucionar el
              desarrollo de software mediante la automatización y la
              optimización.
            </p>
          </div>
          <div className="flex space-x-6">
            <SocialLink
              href="https://github.com/sebaqqq/IA-Developer-Challenge.git"
              icon={<Github className="h-5 w-5" />}
              label="GitHub"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  href: string;
  target?: string;
  icon: React.ReactNode;
  label: string;
}

const SocialLink = ({ href, icon, label }: SocialLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-gray-400 hover:text-white transition-colors duration-200"
      aria-label={label}
    >
      {icon}
    </a>
  );
};

export default Footer;
