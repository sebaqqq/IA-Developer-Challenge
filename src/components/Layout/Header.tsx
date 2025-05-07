import React from "react";
import { Sparkles, Braces, Bot } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Bot className="h-6 w-6 text-blue-600" />
          <h1 className="text-xl font-bold text-gray-900">
            DevAI: Un Desafío de IA Generativa
          </h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink href="#introduction" icon={<Sparkles className="h-4 w-4" />}>
            Challenge
          </NavLink>
          <NavLink href="#optimization" icon={<Braces className="h-4 w-4" />}>
            Mejoramiento
          </NavLink>
          <NavLink href="#gpt-component" icon={<Bot className="h-4 w-4" />}>
            Componente GPT
          </NavLink>
          <NavLink href="#reflection" icon={<Sparkles className="h-4 w-4" />}>
            Reflexión
          </NavLink>
        </nav>
        <div className="md:hidden">
          <Bot className="h-6 w-6 text-blue-600" />
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const NavLink = ({ href, icon, children }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
    >
      {icon}
      <span className="text-sm font-medium">{children}</span>
    </a>
  );
};

export default Header;
