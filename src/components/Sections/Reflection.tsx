import React from 'react';
import SectionTitle from '../UI/SectionTitle';
import { LightbulbIcon, Users, Zap, Rocket } from 'lucide-react';

const Reflection = () => {
  return (
    <section id="reflection" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Reflection & Impact"
          subtitle="How AI transformation changes the role of developers and enhances business outcomes"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Transforming the Developer Role</h3>
            
            <p className="text-gray-700 mb-4">
              As AI takes on more routine coding tasks, the role of developers evolves toward higher-level
              thinking, architectural design, and creative problem-solving. Far from replacing developers,
              AI empowers them to focus on the most impactful aspects of software creation.
            </p>
            
            <p className="text-gray-700 mb-6">
              This shift represents a significant evolution in the developer profession, moving from
              implementation-focused work to a more strategic role that combines technical expertise
              with creativity and business domain knowledge.
            </p>
            
            <div className="relative bg-gradient-to-r from-indigo-100 to-blue-50 rounded-xl p-6 overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-200 rounded-full -mr-12 -mt-12 opacity-50"></div>
              
              <h4 className="text-lg font-semibold text-gray-900 mb-4 relative z-10">Developer Evolution</h4>
              
              <div className="space-y-4 relative z-10">
                <EvolutionItem 
                  before="Writing repetitive boilerplate code" 
                  after="Defining software architecture and patterns"
                />
                
                <EvolutionItem 
                  before="Manual testing and debugging" 
                  after="Strategic test planning and edge case identification"
                />
                
                <EvolutionItem 
                  before="Tedious documentation writing" 
                  after="High-level system design and optimization"
                />
                
                <EvolutionItem 
                  before="Routine deployment management" 
                  after="Innovative feature creation and UX improvement"
                />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Business Impact</h3>
            
            <p className="text-gray-700 mb-6">
              The integration of AI into the development workflow delivers substantial business benefits
              beyond simple efficiency gains. Organizations experience transformed delivery capabilities,
              improved quality, and enhanced ability to respond to market changes.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <ImpactCard 
                icon={<Zap className="h-6 w-6 text-amber-500" />}
                title="Accelerated Delivery"
                value="68%"
                description="Faster time-to-market for new features"
              />
              
              <ImpactCard 
                icon={<LightbulbIcon className="h-6 w-6 text-purple-500" />}
                title="Innovation Growth"
                value="3.2x"
                description="Increase in new feature development"
              />
              
              <ImpactCard 
                icon={<Users className="h-6 w-6 text-teal-500" />}
                title="Client Satisfaction"
                value="42%"
                description="Improvement in client satisfaction scores"
              />
              
              <ImpactCard 
                icon={<Rocket className="h-6 w-6 text-blue-500" />}
                title="Cost Efficiency"
                value="35%"
                description="Reduction in development costs"
              />
            </div>
            
            <div className="mt-8 p-5 border border-gray-200 rounded-lg bg-gray-50">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Future Outlook</h4>
              <p className="text-gray-700">
                As AI tools continue to evolve, we can expect even deeper integration into the development
                lifecycle, with AI becoming an active collaborator in the creative aspects of software 
                development, not just the implementation details. This partnership between human creativity
                and AI capabilities will redefine what's possible in software creation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface EvolutionItemProps {
  before: string;
  after: string;
}

const EvolutionItem: React.FC<EvolutionItemProps> = ({ before, after }) => {
  return (
    <div className="flex items-center">
      <div className="flex-1">
        <p className="text-sm text-gray-600">{before}</p>
      </div>
      
      <div className="mx-4 flex-shrink-0">
        <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.3536 4.35356C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464468C19.9763 0.269206 19.6597 0.269206 19.4645 0.464468C19.2692 0.65973 19.2692 0.976312 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35356ZM-4.37114e-08 4.5L23 4.5L23 3.5L4.37114e-08 3.5L-4.37114e-08 4.5Z" fill="#3B82F6"/>
        </svg>
      </div>
      
      <div className="flex-1">
        <p className="text-sm font-medium text-blue-800">{after}</p>
      </div>
    </div>
  );
};

interface ImpactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ icon, title, value, description }) => {
  return (
    <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        <div className="flex-shrink-0">{icon}</div>
        <h3 className="ml-2 font-medium text-gray-900 text-sm">{title}</h3>
      </div>
      
      <p className="text-3xl font-bold text-gray-900 mb-1">{value}</p>
      <p className="text-xs text-gray-600">{description}</p>
    </div>
  );
};

export default Reflection;