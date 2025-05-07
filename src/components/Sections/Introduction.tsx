import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import { Bot, Code, Server } from 'lucide-react';

const Introduction = () => {
  return (
    <section id="introduction" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="The Developer Automation Challenge"
          subtitle="Exploring how AI can transform and enhance the role of software developers"
        />
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg text-gray-700 mb-6">
              In today's rapidly evolving tech landscape, the role of a software developer faces 
              unprecedented opportunities for transformation through artificial intelligence and automation.
            </p>
            
            <p className="text-lg text-gray-700 mb-6">
              The challenge before us is to explore how AI-powered tools, especially large language models 
              like GPT, can revolutionize our daily tasks—from code generation and testing to documentation 
              and client interaction.
            </p>
            
            <p className="text-lg text-gray-700">
              This conceptual exploration examines a future where AI doesn't just assist developers, 
              but fundamentally changes how we approach software creation, potentially enhancing 
              efficiency, quality, and creativity across the entire development lifecycle.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Areas of Transformation</h3>
            
            <div className="space-y-4">
              <TransformationArea 
                icon={<Code className="h-5 w-5 text-blue-600" />}
                title="Code Generation & Optimization"
                description="AI automating routine coding tasks while optimizing performance"
              />
              
              <TransformationArea 
                icon={<Server className="h-5 w-5 text-purple-600" />}
                title="Testing & Deployment"
                description="Automated test creation and streamlined deployment processes"
              />
              
              <TransformationArea 
                icon={<Bot className="h-5 w-5 text-teal-600" />}
                title="Client Interaction & Documentation"
                description="AI-powered analysis of requirements and automatic documentation"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TransformationAreaProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TransformationArea: React.FC<TransformationAreaProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 p-2 rounded-lg bg-white shadow-sm">{icon}</div>
      <div className="ml-4">
        <h4 className="font-medium text-gray-900">{title}</h4>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>
  );
};

export default Introduction;