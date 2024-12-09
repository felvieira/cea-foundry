import React from 'react';
import { useStore } from '../hooks/useStore';
import { TabId } from '../types';
import { cn } from '../lib/utils';

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
    <nav className="flex w-full border-b">
      {tabs.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => setCurrentTab(id)}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative h-10 w-full",
            currentTab === id
              ? "text-primary-foreground bg-primary"
              : "text-muted-foreground hover:text-primary hover:bg-muted"
          )}
        >
          {label}
          {currentTab === id && (
            <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
          )}
        </button>
      ))}
    </nav>
  );
};