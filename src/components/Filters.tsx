import React from 'react';
import { Filter, ChevronRight } from 'lucide-react';
import { useStore } from '../store/useStore';

export const Filters: React.FC = () => {
  const isFiltersOpen = useStore((state) => state.isFiltersOpen);
  const toggleFilters = useStore((state) => state.toggleFilters);
  const theme = useStore((state) => state.theme);
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  const filters = [
    { label: 'DIVISÃO', placeholder: 'Search...' },
    { label: 'TIME', placeholder: 'Search...' },
    { label: 'COMMODITY', placeholder: 'Search...' },
    { label: 'CLASSIFICAÇÃO', placeholder: 'Search...' },
    { label: 'PROGRAMA', placeholder: 'Search...' },
    { label: 'OPÇÃO', placeholder: 'Search...' },
    { label: 'FORNECEDOR', placeholder: 'Search...' },
    { label: 'OPERAÇÃO', placeholder: 'Search...' },
    { label: 'USER ID PLANNING', placeholder: 'Search...' }
  ];

  return (
    <div 
      className={`fixed top-14 h-[calc(100vh-3.5rem)] z-20 transition-all duration-300 ${
        isFiltersOpen ? 'w-64' : 'w-0'
      } ${theme === 'dark' ? 'bg-[#0f1319]' : 'bg-white'} border-r border-gray-800`}
      style={{ left: isSidebarOpen ? '16rem' : '4rem' }}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Filter className="w-5 h-5" />
          {isFiltersOpen && <span className="text-sm font-medium">Filtros</span>}
        </div>
        <button
          onClick={toggleFilters}
          className="p-1 hover:bg-gray-800 rounded-full"
        >
          <ChevronRight className={`w-4 h-4 transform transition-transform ${isFiltersOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>
      {isFiltersOpen && (
        <div className="p-4 space-y-4 overflow-y-auto h-[calc(100vh-8.5rem)]">
          {filters.map((filter) => (
            <div key={filter.label} className="space-y-1">
              <label className="text-xs text-gray-400">{filter.label}</label>
              <div className="relative">
                <input
                  type="text"
                  placeholder={filter.placeholder}
                  className={`w-full rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'
                  }`}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};