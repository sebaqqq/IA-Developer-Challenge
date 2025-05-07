import React from 'react';
import Card from '../UI/Card';
import AnimatedProcess from '../UI/AnimatedProcess';
import { Code, GitBranch, Check, Zap } from 'lucide-react';

const developmentSteps = [
  {
    id: 1,
    label: "Requirement Analysis",
    description: "AI analyzes client requirements and converts them into technical specifications"
  },
  {
    id: 2,
    label: "Code Generation",
    description: "AI generates initial code structure based on technical specifications"
  },
  {
    id: 3,
    label: "Optimization",
    description: "AI improves code efficiency and readability through automated refactoring"
  },
  {
    id: 4,
    label: "Feature Implementation",
    description: "AI assists in implementing complex features with best practices"
  }
];

const Development = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Development Process Automation</h3>
          
          <p className="text-gray-700 mb-4">
            The traditional development process involves numerous repetitive tasks that can be streamlined through AI automation. 
            By leveraging advanced language models, we can transform how code is written, tested, and optimized.
          </p>
          
          <p className="text-gray-700 mb-6">
            AI can understand requirements, generate boilerplate code, suggest optimizations, and even implement 
            complex features with minimal human intervention, allowing developers to focus on higher-level design decisions.
          </p>
          
          <AnimatedProcess steps={developmentSteps} />
        </div>
        
        <div className="space-y-6">
          <Card 
            title="Automated Code Generation" 
            icon={<Code className="h-5 w-5 text-blue-600" />}
            gradient
          >
            <p className="mb-4">
              AI models can generate complete functions, classes, and components based on descriptive prompts 
              or technical specifications, reducing development time by up to 40%.
            </p>
            <div className="p-4 bg-white/70 rounded-lg border border-gray-100">
              <pre className="text-xs text-gray-800 overflow-x-auto">
                <code>{`// Prompt: "Create a function to validate email addresses"

function validateEmail(email: string): boolean {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}`}</code>
              </pre>
            </div>
          </Card>
          
          <Card 
            title="Intelligent Version Control" 
            icon={<GitBranch className="h-5 w-5 text-purple-600" />}
          >
            <p>
              AI-powered version control systems can automatically manage branches, detect conflicts early, 
              and provide intelligent merging suggestions, reducing integration problems and streamlining collaboration.
            </p>
          </Card>
          
          <Card 
            title="Performance Optimization" 
            icon={<Zap className="h-5 w-5 text-amber-600" />}
          >
            <p>
              AI can continuously analyze code for performance bottlenecks, suggest optimizations, 
              and even implement improvements automatically, ensuring your application maintains peak efficiency.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Development;