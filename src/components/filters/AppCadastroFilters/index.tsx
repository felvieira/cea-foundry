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

export const AppCadastroFilters: React.FC = () => {
  const isFiltersOpen = useStore((state) => state.isFiltersOpen);
  const toggleFilters = useStore((state) => state.toggleFilters);
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  const departamentoData = [
    { name: 'BELEZA', count: 494 },
    { name: 'CALCADOS ELA', count: 39 },
    { name: 'CALCADOS KIDS', count: 39 },
    { name: 'UNDERWEAR', count: 34 },
    { name: 'JEANS ELA', count: 32 }
  ];

  const commodityData = [
    { name: 'MAKE E UNHAS', count: 207 },
    { name: 'FRAGRANCIAS PRES...', count: 154 },
    { name: 'TOP MALHA', count: 107 },
    { name: 'FRAGRANCIAS MASSIVO', count: 89 },
    { name: 'TENIS', count: 65 }
  ];

  const programaData = [
    { name: 'AB - GOLDEN SECRET', count: 1 },
    { name: 'AB - HER GOLDEN SEC...', count: 1 },
    { name: 'AB - HER SECRET DESIRE', count: 1 },
    { name: 'AB - HER SECRET TEM...', count: 1 },
    { name: 'AB - KING OF SEDUCTI...', count: 1 }
  ];

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
          {/* DEPARTAMENTO */}
          <div>
            <h3 className="text-sm font-medium mb-2">DEPARTAMENTO</h3>
            <div className="space-y-2">
              {departamentoData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-[var(--border)]" />
                  <span className="text-sm flex-1">{item.name}</span>
                  <div className="h-1 w-12 bg-blue-400 rounded" />
                  <span className="text-xs text-[var(--text-secondary)]">{item.count}</span>
                </div>
              ))}
              <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)]">
                Show more
              </button>
            </div>
          </div>

          {/* COMMODITY */}
          <div>
            <h3 className="text-sm font-medium mb-2">COMMODITY</h3>
            <div className="space-y-2">
              {commodityData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-[var(--border)]" />
                  <span className="text-sm flex-1">{item.name}</span>
                  <div className="h-1 w-12 bg-blue-400 rounded" />
                  <span className="text-xs text-[var(--text-secondary)]">{item.count}</span>
                </div>
              ))}
              <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)]">
                Show more
              </button>
            </div>
          </div>

          {/* PROGRAMA */}
          <div>
            <h3 className="text-sm font-medium mb-2">PROGRAMA</h3>
            <div className="space-y-2">
              {programaData.map((item) => (
                <div key={item.name} className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded border-[var(--border)]" />
                  <span className="text-sm flex-1">{item.name}</span>
                  <div className="h-1 w-4 bg-blue-400 rounded" />
                  <span className="text-xs text-[var(--text-secondary)]">{item.count}</span>
                </div>
              ))}
              <button className="text-sm text-[var(--text-secondary)] hover:text-[var(--text)]">
                Show more
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}; 