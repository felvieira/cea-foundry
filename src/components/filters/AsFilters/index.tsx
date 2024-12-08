import React from 'react';
import { Filter, ChevronRight } from 'lucide-react';
import { useStore } from '@/hooks/useStore';

interface FilterCategory {
  title: string;
  items: { name: string; count: number }[];
}

interface AsFiltersProps {
  categories: FilterCategory[];
}

export const AsFilters: React.FC<AsFiltersProps> = ({ categories }) => {
  const isFiltersOpen = useStore((state) => state.isFiltersOpen);
  const toggleFilters = useStore((state) => state.toggleFilters);
  const theme = useStore((state) => state.theme);
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  return (
    <div 
      className={`fixed top-0 h-full z-20 transition-all duration-300 ${
        isFiltersOpen ? 'w-64' : 'w-0'
      } bg-[var(--surface)] border-r border-[var(--border)]`}
      style={{ left: isSidebarOpen ? '16rem' : '4rem' }}
    >
      <div className="flex items-center justify-between p-4 border-b border-[var(--border)]">
        <div className="flex items-center space-x-3">
          <Filter className="w-5 h-5" />
          {isFiltersOpen && <span className="text-sm font-medium">Filtro</span>}
        </div>
        <button
          onClick={toggleFilters}
          className="p-1 hover:bg-[var(--border)]/50 rounded-full"
        >
          <ChevronRight className={`w-4 h-4 transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isFiltersOpen && (
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-64px)]">
          {categories.map((category) => (
            <div key={category.title} className="space-y-2">
              <h3 className="text-sm font-medium text-[var(--text-secondary)]">{category.title}</h3>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-[var(--border)]" />
                    <span className="text-sm flex-1">{item.name}</span>
                    <div className="h-1 bg-blue-400 rounded" style={{ width: `${(item.count / 500) * 100}px` }} />
                    <span className="text-xs text-[var(--text-secondary)] min-w-[2rem] text-right">{item.count}</span>
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