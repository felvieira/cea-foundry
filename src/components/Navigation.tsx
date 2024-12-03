import React from 'react';
import { useStore } from '../store/useStore';
import { TabId } from '../types';

export const Navigation: React.FC = () => {
  const currentTab = useStore((state) => state.currentTab);
  const setCurrentTab = useStore((state) => state.setCurrentTab);

  const tabs: { id: TabId; label: string }[] = [
    { id: 'orders', label: 'Pedidos' },
    { id: 'parameters', label: 'Parâmetros' },
    { id: 'projection', label: 'Mudança na projeção' },
    { id: 'registration', label: 'App de Cadastro' },
    { id: 'approvals', label: 'Aprovação Automática' }
  ];

  return (
    <nav className="flex space-x-4 border-b border-gray-700 mb-4">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setCurrentTab(id)}
          className={`px-4 py-2 text-sm hover:text-blue-400 focus:outline-none ${
            currentTab === id ? 'text-blue-400 border-b-2 border-blue-400' : ''
          }`}
        >
          {label}
        </button>
      ))}
    </nav>
  );
};