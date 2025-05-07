import React from 'react';
import { Bot, Code, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6">
            <Sparkles className="h-4 w-4 text-blue-300 mr-2" />
            <span className="text-sm font-medium text-blue-200">Innovation Challenge</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transforming Software Development 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"> with AI</span>
          </h1>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Exploring how artificial intelligence and automation can revolutionize
            the daily tasks and workflows of software developers
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#introduction" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">
              <Bot className="h-5 w-5 mr-2" />
              Explore Solution
            </a>
            <a href="#optimization" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium transition-colors">
              <Code className="h-5 w-5 mr-2" />
              View Process
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;