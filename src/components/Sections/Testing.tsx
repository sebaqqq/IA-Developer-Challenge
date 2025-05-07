import React from 'react';
import Card from '../UI/Card';
import { CheckCircle, Shield, AlertTriangle, RefreshCw } from 'lucide-react';

const Testing = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6 order-2 md:order-1">
          <Card 
            title="Automated Test Generation" 
            icon={<CheckCircle className="h-5 w-5 text-green-600" />}
            gradient
          >
            <p className="mb-4">
              AI can analyze code and automatically generate comprehensive test suites covering unit tests, 
              integration tests, and end-to-end scenarios with intelligent edge case detection.
            </p>
            <div className="p-4 bg-white/70 rounded-lg border border-gray-100">
              <pre className="text-xs text-gray-800 overflow-x-auto">
                <code>{`// AI-generated test for the validateEmail function

test('validateEmail function', () => {
  // Valid email cases
  expect(validateEmail('user@example.com')).toBe(true);
  expect(validateEmail('name.surname@domain.co')).toBe(true);
  
  // Invalid email cases
  expect(validateEmail('invalid-email')).toBe(false);
  expect(validateEmail('missing@domain')).toBe(false);
  expect(validateEmail('@no-username.com')).toBe(false);
});`}</code>
              </pre>
            </div>
          </Card>
          
          <Card 
            title="Security Vulnerability Detection" 
            icon={<Shield className="h-5 w-5 text-blue-600" />}
          >
            <p>
              AI-powered security analysis can continuously scan code for potential vulnerabilities,
              identify security risks before deployment, and suggest secure alternatives to problematic code patterns.
            </p>
          </Card>
        </div>
        
        <div className="order-1 md:order-2">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Testing & Quality Assurance</h3>
          
          <p className="text-gray-700 mb-4">
            Quality assurance requires extensive testing across multiple scenarios and edge cases. 
            AI can revolutionize this process by automating test creation, execution, and analysis.
          </p>
          
          <p className="text-gray-700 mb-6">
            Beyond simple test generation, AI can predict potential failure points, identify security vulnerabilities, 
            and ensure comprehensive test coverage without manual intervention.
          </p>
          
          <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">Benefits of AI-Powered Testing</h4>
            
            <div className="space-y-4">
              <BenefitItem 
                icon={<RefreshCw className="h-4 w-4 text-blue-600" />}
                title="Continuous Testing"
                description="Tests run automatically with each code change, providing immediate feedback"
              />
              
              <BenefitItem 
                icon={<AlertTriangle className="h-4 w-4 text-amber-600" />}
                title="Proactive Issue Detection"
                description="AI identifies potential issues before they become problems in production"
              />
              
              <BenefitItem 
                icon={<Shield className="h-4 w-4 text-green-600" />}
                title="Security-First Testing"
                description="Automated security analysis built into the testing process"
              />
              
              <BenefitItem 
                icon={<CheckCircle className="h-4 w-4 text-purple-600" />}
                title="Comprehensive Coverage"
                description="AI ensures all code paths are tested, including edge cases often missed manually"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 p-1 bg-white rounded-md shadow-sm">{icon}</div>
      <div className="ml-3">
        <h5 className="font-medium text-gray-900">{title}</h5>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default Testing;