import React from 'react';
import { Filter, ChevronRight, Search } from 'lucide-react';
import { useStore } from '../store/useStore';

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
      } ${theme === 'dark' ? 'bg-[#0f1319]' : 'bg-white'} border-r border-gray-800`}
      style={{ left: isSidebarOpen ? '16rem' : '4rem' }}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Filter className="w-5 h-5" />
          {isFiltersOpen && <span className="text-sm font-medium">Filtro</span>}
        </div>
        <button
          onClick={toggleFilters}
          className="p-1 hover:bg-gray-800 rounded-full"
        >
          <ChevronRight className={`w-4 h-4 transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isFiltersOpen && (
        <div className="p-4 space-y-6 overflow-y-auto h-[calc(100vh-64px)]">
          {categories.map((category) => (
            <div key={category.title} className="space-y-2">
              <h3 className="text-sm font-medium text-gray-400">{category.title}</h3>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-600" />
                    <span className="text-sm flex-1">{item.name}</span>
                    <div className="h-1 bg-blue-400 rounded" style={{ width: `${(item.count / 500) * 100}px` }} />
                    <span className="text-xs text-gray-400 min-w-[2rem] text-right">{item.count}</span>
                  </div>
                ))}
                <button className="text-sm text-gray-400 hover:text-gray-300">
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