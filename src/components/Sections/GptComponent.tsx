import React, { useState } from 'react';
import SectionTitle from '../UI/SectionTitle';
import { GitCommit, MessageSquare, FileText, CheckCircle, Terminal } from 'lucide-react';

const GptComponent = () => {
  const [activeTab, setActiveTab] = useState('commit');

  return (
    <section id="gpt-component" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="GPT-Powered Developer Assistant"
          subtitle="An intelligent component that transforms code documentation and client communication"
          alignment="center"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
            <div className="border-b border-gray-100">
              <nav className="flex">
                <TabButton 
                  active={activeTab === 'commit'} 
                  onClick={() => setActiveTab('commit')}
                  icon={<GitCommit className="h-4 w-4" />}
                  label="Commit Documentation"
                />
                <TabButton 
                  active={activeTab === 'client'} 
                  onClick={() => setActiveTab('client')}
                  icon={<MessageSquare className="h-4 w-4" />}
                  label="Client Meeting Analysis"
                />
              </nav>
            </div>
            
            <div className="p-6">
              {activeTab === 'commit' ? (
                <CommitDocumentation />
              ) : (
                <ClientMeetingAnalysis />
              )}
            </div>
          </div>
          
          <div className="mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">How It Works</h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard 
                icon={<Terminal className="h-5 w-5 text-blue-600" />}
                title="Input Processing"
                description="GPT analyzes code changes or meeting transcripts to understand context and technical details"
              />
              
              <FeatureCard 
                icon={<FileText className="h-5 w-5 text-purple-600" />}
                title="Smart Documentation"
                description="Generates comprehensive documentation that highlights key changes and implications"
              />
              
              <FeatureCard 
                icon={<CheckCircle className="h-5 w-5 text-teal-600" />}
                title="Continuous Improvement"
                description="The system learns from feedback and previous projects to improve documentation quality"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
}

const TabButton: React.FC<TabButtonProps> = ({ active, onClick, icon, label }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center px-4 py-3 text-sm font-medium transition-colors ${
        active
          ? 'text-blue-600 border-b-2 border-blue-600'
          : 'text-gray-600 hover:text-gray-900'
      }`}
    >
      {icon}
      <span className="ml-2">{label}</span>
    </button>
  );
};

const CommitDocumentation = () => {
  return (
    <div>
      <p className="text-gray-700 mb-6">
        The GPT-powered Commit Documentation assistant automatically analyzes code changes 
        and generates detailed documentation for each commit, highlighting changes, potential impacts, 
        and optimization suggestions.
      </p>
      
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Sample Commit</h4>
        <pre className="text-xs text-gray-800 overflow-x-auto">
          <code>{`feat(auth): implement JWT authentication middleware

- Add token generation and validation
- Implement role-based access control
- Add refresh token functionality
- Update user repository for token storage`}</code>
        </pre>
      </div>
      
      <div className="bg-blue-50 rounded-lg p-4 border border-blue-100">
        <div className="flex items-center mb-2">
          <GitCommit className="h-4 w-4 text-blue-600 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">GPT-Generated Documentation</h4>
        </div>
        
        <div className="space-y-4">
          <div>
            <h5 className="text-xs font-medium text-gray-700">CHANGES OVERVIEW</h5>
            <p className="text-sm text-gray-800">
              This commit implements a complete JWT authentication system with token generation, 
              validation, and role-based access control.
            </p>
          </div>
          
          <div>
            <h5 className="text-xs font-medium text-gray-700">TECHNICAL IMPACT</h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>All protected routes now require valid JWT tokens</li>
              <li>User permissions are enforced through role-based middleware</li>
              <li>Token refresh mechanism allows for extended sessions</li>
              <li>Database changes: new fields in user table for refresh tokens</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs font-medium text-gray-700">OPTIMIZATION SUGGESTIONS</h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>Consider implementing token blacklisting for improved security</li>
              <li>Add rate limiting to authentication endpoints to prevent brute force</li>
              <li>Cache frequently used user permissions to reduce database queries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ClientMeetingAnalysis = () => {
  return (
    <div>
      <p className="text-gray-700 mb-6">
        The Client Meeting Analysis component uses GPT to automatically record, transcribe, and analyze 
        client meetings, extracting key technical requirements and organizing them into actionable items 
        for the development team.
      </p>
      
      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 mb-6">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Meeting Transcript Excerpt</h4>
        <p className="text-xs text-gray-700 italic">
          "We need the dashboard to show real-time analytics for user engagement. It should update
          automatically every minute or so. And make sure it works well on mobile too. For the database, 
          we need to store at least 12 months of historical data for reporting, and the API needs to be 
          really fast even with large datasets..."
        </p>
      </div>
      
      <div className="bg-purple-50 rounded-lg p-4 border border-purple-100">
        <div className="flex items-center mb-2">
          <MessageSquare className="h-4 w-4 text-purple-600 mr-2" />
          <h4 className="text-sm font-medium text-gray-900">GPT-Generated Analysis</h4>
        </div>
        
        <div className="space-y-4">
          <div>
            <h5 className="text-xs font-medium text-gray-700">FRONTEND REQUIREMENTS</h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>Dashboard with real-time analytics display</li>
              <li>Auto-refresh functionality (approx. every 60 seconds)</li>
              <li>Responsive design optimized for mobile devices</li>
              <li>Data visualization for user engagement metrics</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs font-medium text-gray-700">BACKEND REQUIREMENTS</h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>High-performance API for analytics data</li>
              <li>Websocket or polling mechanism for real-time updates</li>
              <li>Caching layer for improved performance with large datasets</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-xs font-medium text-gray-700">DATABASE REQUIREMENTS</h5>
            <ul className="text-sm text-gray-800 list-disc pl-5 space-y-1">
              <li>Storage solution for minimum 12 months of historical data</li>
              <li>Optimized querying for time-series analytics data</li>
              <li>Indexing strategy for high-performance reporting queries</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center mb-3">
        <div className="flex-shrink-0 bg-blue-100 p-2 rounded-lg">{icon}</div>
        <h3 className="ml-3 font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-700 text-sm">{description}</p>
    </div>
  );
};

export default GptComponent;