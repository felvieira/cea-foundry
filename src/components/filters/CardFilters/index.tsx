import React from 'react';
import { Filter, ChevronRight } from 'lucide-react';
import { useStore } from '@/hooks/useStore';

interface FilterItem {
  name: string;
  count: number;
}

interface FilterSection {
  title: string;
  items: FilterItem[];
}

interface CardFiltersProps {
  sections: FilterSection[];
}

export const CardFilters: React.FC<CardFiltersProps> = ({ sections }) => {
  const isFiltersOpen = useStore((state) => state.isFiltersOpen);
  const toggleFilters = useStore((state) => state.toggleFilters);
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  return (
    <div 
      className={`fixed top-14 h-[calc(100vh-3.5rem)] z-20 transition-all duration-300 ${
        isFiltersOpen ? 'w-80' : 'w-0'
      } bg-[var(--surface)] border-r border-[var(--border)]`}
      style={{ left: isSidebarOpen ? '16rem' : '4rem' }}
    >
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
        <div className="flex items-center space-x-3">
          <Filter className="w-5 h-5" />
          {isFiltersOpen && <span className="text-sm font-medium">Filtros</span>}
        </div>
        <button
          onClick={toggleFilters}
          className="p-1 hover:bg-[var(--border)]/50 rounded-full"
        >
          <ChevronRight className={`w-4 h-4 transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isFiltersOpen && (
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-8.5rem)]">
          {sections.map((section) => (
            <div key={section.title} className="bg-[var(--surface)] p-4 rounded-lg border border-[var(--border)]">
              <h3 className="text-sm font-medium mb-4">{section.title}</h3>
              <div className="space-y-2">
                {section.items.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <div className="flex items-center justify-center w-5 h-5">
                      <input 
                        type="checkbox" 
                        className="w-4 h-4 rounded border-[var(--border)] accent-blue-500"
                      />
                    </div>
                    <span className="text-sm flex-1">{item.name}</span>
                    <div className="h-1 w-24 bg-blue-400 rounded" />
                    <span className="text-xs text-[var(--text-secondary)] min-w-[2rem] text-right">
                      {item.count}
                    </span>
                  </div>
                ))}
                <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)]">
                  Show more
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}; 