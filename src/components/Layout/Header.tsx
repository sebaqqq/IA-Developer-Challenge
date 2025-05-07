import React, { useState } from "react";
import { Sparkles, Braces, Bot } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            <Bot className="h-6 w-6 text-blue-600" />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${
          isMenuOpen ? "block" : "hidden"
        } absolute left-0 w-full bg-white backdrop-blur-md border-b border-indigo-600 py-2`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLink
              href="#introduction"
              icon={<Sparkles className="h-4 w-4" />}
              onClick={closeMenu}
            >
              Challenge
            </NavLink>
            <NavLink
              href="#optimization"
              icon={<Braces className="h-4 w-4" />}
              onClick={closeMenu}
            >
              Mejoramiento
            </NavLink>
            <NavLink
              href="#gpt-component"
              icon={<Bot className="h-4 w-4" />}
              onClick={closeMenu}
            >
              Componente GPT
            </NavLink>
            <NavLink
              href="#reflection"
              icon={<Sparkles className="h-4 w-4" />}
              onClick={closeMenu}
            >
              Reflexión
            </NavLink>
          </nav>
        </div>
      </div>
    </header>
  );
};

interface NavLinkProps {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
}

const NavLink = ({ href, icon, children, onClick }: NavLinkProps) => {
  return (
    <a
      href={href}
      className="flex items-center space-x-1 text-gray-600 hover:text-blue-600 transition-colors duration-200"
      onClick={onClick}
    >
      {icon}
      <span className="text-sm font-medium">{children}</span>
    </a>
  );
};

export default Header;
