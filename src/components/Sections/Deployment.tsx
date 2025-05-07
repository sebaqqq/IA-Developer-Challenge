import React from 'react';
import Card from '../UI/Card';
import { UploadCloud, BarChart, Clock, ArrowRight } from 'lucide-react';

const Deployment = () => {
  return (
    <div className="py-12">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Automated Deployment</h3>
          
          <p className="text-gray-700 mb-4">
            Deployment processes often involve complex steps and potential for human error. 
            AI can transform this critical phase by automating verification, orchestration, and monitoring.
          </p>
          
          <p className="text-gray-700 mb-6">
            With AI-driven deployment, systems can intelligently schedule releases, 
            analyze deployment risks, and even automatically roll back problematic updates 
            before they impact users.
          </p>
          
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-800 to-indigo-900 p-6 text-white">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-600 opacity-20"></div>
            <div className="absolute -left-5 -bottom-5 h-24 w-24 rounded-full bg-indigo-500 opacity-20"></div>
            
            <h4 className="text-xl font-semibold mb-4 relative z-10">Deployment Acceleration</h4>
            
            <div className="flex items-center mb-6 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  <Clock className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-blue-200">Traditional</span>
                <span className="text-lg font-bold">48-72 hrs</span>
              </div>
              
              <ArrowRight className="h-5 w-5 text-blue-300 mx-6" />
              
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mb-2">
                  <UploadCloud className="h-5 w-5 text-white" />
                </div>
                <span className="text-sm text-blue-200">AI-Powered</span>
                <span className="text-lg font-bold">15-30 min</span>
              </div>
            </div>
            
            <p className="text-sm text-blue-200 relative z-10">
              AI-powered deployment can reduce deployment time by up to 95% while simultaneously 
              increasing reliability and reducing post-deployment issues.
            </p>
          </div>
        </div>
        
        <div className="space-y-6">
          <Card 
            title="Intelligent Release Management" 
            icon={<UploadCloud className="h-5 w-5 text-blue-600" />}
            gradient
          >
            <p>
              AI can analyze code changes, predict deployment risks, and intelligently schedule releases 
              to minimize disruption. The system learns from previous deployments to optimize future release strategies.
            </p>
          </Card>
          
          <Card 
            title="Automated Verification" 
            icon={<BarChart className="h-5 w-5 text-teal-600" />}
          >
            <p className="mb-4">
              Post-deployment verification is automated through AI, which monitors key metrics, 
              user behavior patterns, and system performance to detect anomalies instantly.
            </p>
            <div className="p-3 bg-gray-50 rounded-lg text-sm text-gray-700 border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <span>Response Time</span>
                <span className="text-green-600 font-medium">↓15% Improvement</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span>Error Rate</span>
                <span className="text-green-600 font-medium">↓42% Reduction</span>
              </div>
              <div className="flex justify-between items-center">
                <span>User Engagement</span>
                <span className="text-green-600 font-medium">↑23% Increase</span>
              </div>
            </div>
          </Card>
          
          <Card 
            title="Self-Healing Systems" 
            icon={<Clock className="h-5 w-5 text-purple-600" />}
          >
            <p>
              AI deployment systems can detect issues in real-time and automatically initiate 
              remediation actions such as scaling resources, rerouting traffic, or rolling back 
              problematic updates without human intervention.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Deployment;