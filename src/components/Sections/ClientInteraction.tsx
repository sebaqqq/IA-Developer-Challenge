import React from 'react';
import Card from '../UI/Card';
import { MessageSquare, FileText, Users, Brain } from 'lucide-react';

const ClientInteraction = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 order-2 md:order-1">
          <Card 
            title="Meeting Analysis & Documentation" 
            icon={<MessageSquare className="h-5 w-5 text-blue-600" />}
            gradient
          >
            <p className="mb-4">
              AI can transcribe, analyze, and extract key points from client meetings,
              automatically generating summaries that highlight frontend, backend, and database 
              requirements with minimal human intervention.
            </p>
            <div className="p-4 bg-white/70 rounded-lg border border-gray-100">
              <h5 className="text-sm font-medium text-gray-900 mb-2">Sample AI Meeting Analysis</h5>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start">
                  <span className="font-medium mr-2">Frontend:</span>
                  <span>Dashboard with real-time analytics, responsive design for mobile users</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Backend:</span>
                  <span>RESTful API with JWT authentication, rate limiting, caching layer</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2">Database:</span>
                  <span>PostgreSQL with time-series data optimization, historical analysis tables</span>
                </li>
              </ul>
            </div>
          </Card>
          
          <Card 
            title="Automated Documentation" 
            icon={<FileText className="h-5 w-5 text-purple-600" />}
          >
            <p>
              AI systems can generate comprehensive documentation directly from code,
              including API references, architecture diagrams, and usage examples that stay
              automatically in sync with the codebase as it evolves.
            </p>
          </Card>
        </div>
        
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Client Interaction Enhancement</h3>
          
          <p className="text-gray-700 mb-4">
            Client interactions are critical for project success but often involve information loss
            and misinterpretations. AI can revolutionize how developers capture, process, and respond to
            client requirements.
          </p>
          
          <p className="text-gray-700 mb-6">
            By leveraging natural language processing, AI can extract precise technical requirements from
            client conversations, ensure alignment between client expectations and development plans,
            and maintain clear communication throughout the project lifecycle.
          </p>
          
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Client Communication Workflow</h4>
            
            <div className="relative">
              <div className="absolute left-4 top-0 h-full w-0.5 bg-gray-200"></div>
              
              <WorkflowStep 
                icon={<Users className="h-5 w-5 text-indigo-600" />}
                title="Client Meeting"
                description="AI records and transcribes the conversation in real-time"
              />
              
              <WorkflowStep 
                icon={<Brain className="h-5 w-5 text-purple-600" />}
                title="Requirement Extraction"
                description="AI analyzes the conversation to identify technical requirements"
              />
              
              <WorkflowStep 
                icon={<FileText className="h-5 w-5 text-blue-600" />}
                title="Documentation Generation"
                description="Automatic creation of requirement documents and specifications"
              />
              
              <WorkflowStep 
                icon={<MessageSquare className="h-5 w-5 text-teal-600" />}
                title="Clarification Suggestions"
                description="AI identifies ambiguous requirements and suggests clarifying questions"
                isLast
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface WorkflowStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
}

const WorkflowStep: React.FC<WorkflowStepProps> = ({ 
  icon, 
  title, 
  description,
  isLast = false
}) => {
  return (
    <div className={`relative pl-12 ${isLast ? '' : 'pb-8'}`}>
      <div className="absolute left-0 top-0 z-10 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h5 className="font-medium text-gray-900">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ClientInteraction;