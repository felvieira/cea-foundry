import React, { useState } from 'react';
import { DataTable } from '@/components/common/DataTable';
import { useStore } from '@/hooks/useStore';
import { ChevronDown, ChevronUp, Filter, ChevronRight } from 'lucide-react';
import type { AutomaticApproval } from '@/types';
import { CardFilters } from '@/components/filters/CardFilters';

const mockData: AutomaticApproval[] = [
  {
    groupName: 'BC SHORTS MOM COM CINTO | JEANS ELA - OPAG-010',
    purchaseWeek: '202441',
    operation: 'Compra',
    strategy: 'Sugerida',
    untilWeek: '0'
  },
  // ... outros dados
];

const columns = [
  { header: 'Grupo Similar', accessorKey: 'groupName' },
  { header: 'Semana de Compra', accessorKey: 'purchaseWeek' },
  { header: 'Compra / InSeason', accessorKey: 'operation' },
  { header: 'Estratégia', accessorKey: 'strategy' },
  { header: 'Até Semana', accessorKey: 'untilWeek' }
];

export const AutomaticApprovalView: React.FC = () => {
  const [expandedSections, setExpandedSections] = useState<string[]>(['opcao-agrupadora']);
  const theme = useStore((state) => state.theme);
  const isFiltersOpen = useStore((state) => state.isFiltersOpen);
  const toggleFilters = useStore((state) => state.toggleFilters);
  const isSidebarOpen = useStore((state) => state.isSidebarOpen);

  const filterSections = [
    {
      title: 'DIVISÃO',
      items: [
        { name: 'BELEZA', count: 1299 },
        { name: 'FEMININO', count: 657 },
        { name: 'MASCULINO', count: 434 },
        { name: 'KIDS', count: 380 },
        { name: 'ACE', count: 202 }
      ]
    },
    {
      title: 'DEPARTAMENTO',
      items: [
        { name: 'BELEZA', count: 1299 },
        { name: 'BASICOS ELA', count: 304 },
        { name: 'JEANS ELE', count: 178 },
        { name: 'JEANS ELA', count: 149 },
        { name: 'LINGERIE', count: 134 }
      ]
    },
    {
      title: 'COMMODITY',
      items: [
        { name: 'TOP MALHA', count: 778 },
        { name: 'MAKE E UNHAS', count: 552 },
        { name: 'FRAGRANCIAS PRES...', count: 366 },
        { name: 'FRAGRANCIAS MASS...', count: 244 },
        { name: 'BOTTOM LONGO JE...', count: 178 }
      ]
    }
  ];

  const opcoesData = [
    { name: 'RL - POLO BLUE | BELEZA - OPAG-002 - 40ML' },
    { name: 'THALES KIDS O | KIDS MENINO - OPAG-001' },
    { name: 'THALES KIDS O | KIDS MENINO - OPAG-002' },
    { name: 'TOP LICENCIADO TEEN O | TEEN - OPAG-008' },
    { name: 'TOP LICENCIADO TEEN O | TEEN - OPAG-011' },
    { name: 'TOP FRU FRU LISA ML | BBA - OPAG-001' },
    { name: 'BERMUDA BOLSO | BBO - OPAG-002' }
  ];

  return (
    <>
      <CardFilters sections={filterSections} />
      {/* Conteúdo Principal */}
      <div className="space-y-4">
        {['opcao-agrupadora', 'aprovacao-automatica'].map((id) => (
          <div 
            key={id}
            className={`border border-[var(--border)] rounded-lg overflow-hidden ${
              theme === 'dark' ? 'bg-[#1a1f2b]' : 'bg-white'
            }`}
          >
            <button
              onClick={() => setExpandedSections(prev => 
                prev.includes(id) ? prev.filter(s => s !== id) : [...prev, id]
              )}
              className="w-full flex items-center justify-between p-4 hover:bg-[var(--border)]/50"
            >
              <span className="font-medium">
                {id === 'opcao-agrupadora' ? 'Opção Agrupadora' : 'Aprovação Automática'}
              </span>
              {expandedSections.includes(id) ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {expandedSections.includes(id) && (
              <div className="p-4 border-t border-[var(--border)]">
                {id === 'opcao-agrupadora' ? (
                  <div className="space-y-2">
                    {opcoesData.map((item) => (
                      <div key={item.name} className="flex items-center space-x-2">
                        <input type="checkbox" className="rounded border-[var(--border)]" />
                        <span className="text-sm flex-1">{item.name}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                        Cadastrar
                      </button>
                    </div>
                    <DataTable data={mockData} columns={columns} />
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};