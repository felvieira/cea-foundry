import React from 'react';

interface ProjectionTabsProps {
  activeTab: 'pending' | 'released';
  onTabChange: (tab: 'pending' | 'released') => void;
}

export const ProjectionTabs: React.FC<ProjectionTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-4">
      <button
        className={`pb-2 ${
          activeTab === 'pending'
            ? 'text-blue-400 border-b-2 border-blue-400'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        onClick={() => onTabChange('pending')}
      >
        Aguardando liberação
      </button>
      <button
        className={`pb-2 ${
          activeTab === 'released'
            ? 'text-blue-400 border-b-2 border-blue-400'
            : 'text-gray-400 hover:text-gray-300'
        }`}
        onClick={() => onTabChange('released')}
      >
        Liberado
      </button>
    </div>
  );
};