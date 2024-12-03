import React from 'react';
import { DataTable } from '../components/DataTable';
import { useStore } from '../store/useStore';

const mockData = [
  {
    groupName: 'BC SHORTS MOM COM CINTO | JEANS ELA - OPAG-010',
    purchaseWeek: '202441',
    operation: 'Compra',
    strategy: 'Sugerida',
    untilWeek: '0'
  },
  {
    groupName: 'BABY LOOK COTTON LYCRA | TOP MALHA - OPAG-030',
    purchaseWeek: '202440',
    operation: 'Compra',
    strategy: 'SimpleBuy',
    untilWeek: '0'
  },
  {
    groupName: 'CORDOBA | JEANS ELE - OPAG-001',
    purchaseWeek: '202437',
    operation: 'InSeason',
    strategy: 'Antecipação/Prorrogação',
    untilWeek: '0'
  },
  {
    groupName: 'BL MOM EPP | JEANS ELA - OPAG-007',
    purchaseWeek: '202444',
    operation: 'InSeason',
    strategy: 'Antecipação/Prorrogação',
    untilWeek: '0'
  },
  {
    groupName: 'BABY LOOK COTTON LYCRA | TOP MALHA - OPAG-029',
    purchaseWeek: '202438',
    operation: 'Compra',
    strategy: 'SimpleBuy',
    untilWeek: '0'
  },
  {
    groupName: 'BC SHORTS MIDI C CINTO PU | JEANS ELA - OPAG-004',
    purchaseWeek: '202443',
    operation: 'NAO INFORMADO',
    strategy: 'Sugerida',
    untilWeek: '0'
  }
];

const columns = [
  { header: 'Grupo Similar', accessorKey: 'groupName' },
  { header: 'Semana de Compra', accessorKey: 'purchaseWeek' },
  { header: 'Compra / InSeason', accessorKey: 'operation' },
  { header: 'Estratégia', accessorKey: 'strategy' },
  { header: 'Até Semana', accessorKey: 'untilWeek' }
];

const filterCategories = [
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

const groupingOptions = [
  'RL - POLO BLUE | BELEZA - OPAG-002 - 40ML',
  'THALES KIDS O | KIDS MENINO - OPAG-001',
  'THALES KIDS O | KIDS MENINO - OPAG-002',
  'TOP LICENCIADO TEEN O | TEEN - OPAG-008',
  'TOP LICENCIADO TEEN O | TEEN - OPAG-011',
  'TOP FRU FRU LISA ML | BBA - OPAG-001',
  'BERMUDA BOLSO | BBO - OPAG-002'
];

export const AutomaticApprovalView: React.FC = () => {
  const theme = useStore((state) => state.theme);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Opção Agrupadora</h2>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Cadastrar
        </button>
      </div>

      <div className="flex space-x-4">
        <div className="w-64 space-y-6">
          {filterCategories.map((category) => (
            <div key={category.title} className="space-y-2">
              <h3 className="text-sm font-medium text-gray-400">{category.title}</h3>
              <div className="space-y-1">
                {category.items.map((item) => (
                  <div key={item.name} className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded border-gray-600" />
                    <span className="text-sm">{item.name}</span>
                    <div className="flex-grow h-1 bg-blue-400 rounded" style={{ width: `${(item.count / 1500) * 100}%` }} />
                    <span className="text-xs text-gray-400">{item.count}</span>
                  </div>
                ))}
                <button className="text-sm text-gray-400 hover:text-gray-300">
                  Show more
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex-1">
          <div className="mb-6">
            <h3 className="text-sm font-medium mb-2">Opção Agrupadora</h3>
            <div className="space-y-2">
              {groupingOptions.map((option) => (
                <div key={option} className="flex items-center space-x-2 p-2 rounded hover:bg-gray-700">
                  <input type="checkbox" className="rounded border-gray-600" />
                  <span className="text-sm">{option}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium mb-4">Aprovação Automática</h3>
            <DataTable data={mockData} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};