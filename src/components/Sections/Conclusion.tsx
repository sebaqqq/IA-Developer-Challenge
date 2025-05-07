import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import { ArrowRight, CheckCircle, Brain, Rocket } from 'lucide-react';

const Conclusion = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="The Future of Development"
          subtitle="Embracing AI as a transformative force in software creation"
          alignment="center"
          withAccent={false}
        />
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-blue-100 text-lg">
            The integration of AI into the software development process represents not just an incremental 
            improvement, but a fundamental transformation in how we build technology. By embracing these 
            changes, developers and organizations can unlock unprecedented levels of efficiency, quality, 
            and innovation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <ConclusionCard 
            icon={<Brain className="h-6 w-6 text-blue-300" />}
            title="AI-Powered Development"
            description="Development processes enhanced by intelligent automation and code generation"
          />
          
          <ConclusionCard 
            icon={<CheckCircle className="h-6 w-6 text-teal-300" />}
            title="Quality-First Approach"
            description="Automated testing and verification ensuring exceptional software quality"
          />
          
          <ConclusionCard 
            icon={<Rocket className="h-6 w-6 text-purple-300" />}
            title="Accelerated Innovation"
            description="Faster delivery enabling more experimentation and creative solutions"
          />
        </div>
        
        <div className="mt-16 text-center">
          <a href="#" className="inline-flex items-center text-lg font-medium text-white hover:text-blue-200 transition-colors">
            Get started with AI-powered development
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

interface ConclusionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ConclusionCard: React.FC<ConclusionCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-colors">
      <div className="flex-shrink-0 bg-white/10 p-3 rounded-lg inline-flex mb-4">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-blue-100">{description}</p>
    </div>
  );
};

export default Conclusion;