import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import Development from './Development';
import Testing from './Testing';
import Deployment from './Deployment';
import ClientInteraction from './ClientInteraction';
import { Code, CheckCircle, UploadCloud, MessageSquare } from 'lucide-react';

const OptimizationSection = () => {
  return (
    <section id="optimization" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Process Optimization Through AI"
          subtitle="Transforming each phase of the software development lifecycle"
          alignment="center"
        />
        
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <ProcessTabs />
          </div>
          
          <div className="space-y-16">
            <div id="development">
              <div className="flex items-center mb-6">
                <Code className="h-6 w-6 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Development</h3>
              </div>
              <Development />
            </div>
            
            <div id="testing">
              <div className="flex items-center mb-6">
                <CheckCircle className="h-6 w-6 text-purple-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Testing</h3>
              </div>
              <Testing />
            </div>
            
            <div id="deployment">
              <div className="flex items-center mb-6">
                <UploadCloud className="h-6 w-6 text-teal-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Deployment</h3>
              </div>
              <Deployment />
            </div>
            
            <div id="client-interaction">
              <div className="flex items-center mb-6">
                <MessageSquare className="h-6 w-6 text-amber-600 mr-3" />
                <h3 className="text-2xl font-bold text-gray-900">Client Interaction</h3>
              </div>
              <ClientInteraction />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ProcessTabs = () => {
  return (
    <div className="flex justify-center overflow-x-auto py-4">
      <div className="inline-flex bg-white rounded-lg shadow-sm p-1 border border-gray-200">
        <ProcessTab
          href="#development"
          icon={<Code className="h-4 w-4" />}
          label="Development"
        />
        <ProcessTab
          href="#testing"
          icon={<CheckCircle className="h-4 w-4" />}
          label="Testing"
        />
        <ProcessTab
          href="#deployment"
          icon={<UploadCloud className="h-4 w-4" />}
          label="Deployment"
        />
        <ProcessTab
          href="#client-interaction"
          icon={<MessageSquare className="h-4 w-4" />}
          label="Client Interaction"
        />
      </div>
    </div>
  );
};

interface ProcessTabProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

const ProcessTab: React.FC<ProcessTabProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      className="flex items-center px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-50 text-gray-700 transition-colors"
    >
      <span className="text-blue-600 mr-2">{icon}</span>
      {label}
    </a>
  );
};

export default OptimizationSection;