import React, { useState } from 'react';
import { DataTable } from '@/components/common/DataTable';
import { useStore } from '@/hooks/useStore';
import { ChevronDown, ChevronUp, Package, Clock, Settings, History, Edit2 } from 'lucide-react';

const mockPrograms = [
  {
    name: 'AB - GOLDEN SECRET',
    leadtime: 1,
    multiples: 1,
    moq: 1,
    status: 'CONFIRMADO'
  },
  {
    name: 'AB - HER SECRET DESIRE',
    leadtime: 1,
    multiples: 1,
    moq: 1,
    status: 'CONFIRMADO'
  },
  {
    name: 'AB - KING OF SEDUCTION',
    leadtime: 1,
    multiples: 1,
    moq: 1,
    status: 'CONFIRMADO'
  }
];

const mockGroupingOptions = [
  {
    name: 'TOP EPP | BASICOS ELA - OPAG-012',
    vendaLW: 'No value',
    sixLW: 'No value',
    nwsCarteiras: '0',
    opagEspelho: 'No value',
    status: 'DESCONTINUADA'
  },
  {
    name: 'TOP EPP | BASICOS ELA - OPAG-014',
    vendaLW: 'R$ 27.207',
    sixLW: '13.429',
    nwsCarteiras: '4.330',
    opagEspelho: 'No value',
    status: 'ATIVA'
  },
  {
    name: 'TOP EPP | BASICOS ELA - OPAG-044',
    vendaLW: 'R$ 31.559',
    sixLW: '13.993',
    nwsCarteiras: '6.690',
    opagEspelho: 'No value',
    status: 'ATIVA'
  }
];

const mockOptions = [
  {
    groupName: 'TOP EPP | BASICOS ELA - OPAG-014 - CURRENT',
    modelId: '1007096',
    color: 'PRETO',
    size: 'M02',
    stockLW: '13446',
    wallet: '4.330',
    opag: 'OPAG-014'
  }
];

const mockTimelineData = [
  {
    title: 'TOP EPP | BASICOS ELA - OPAG-014 - CURRENT | ELA_BR | 202401 | 202552',
    storeGroup: 'ELA_BR',
    initialWeek: '202401',
    finalWeek: '202552'
  }
];

const sections = [
  { id: 'programa', label: 'Programa', icon: Package, color: 'pink' },
  { id: 'opcoes-agrupadoras', label: 'Opções agrupadoras', icon: Settings, color: 'blue' },
  { id: 'timeline-estoque', label: 'Timeline - Estoque de segurança', icon: Clock, color: 'pink' },
  { id: 'opcoes', label: 'Opções', icon: Settings, color: 'purple' },
  { id: 'timeline-lojas', label: 'Timeline - Grupo de Lojas', icon: History, color: 'orange' }
];

export const AsManagementView: React.FC = () => {
  const theme = useStore((state) => state.theme);
  const [expandedSections, setExpandedSections] = useState<string[]>(['programa']);

  const toggleSection = (section: string) => {
    setExpandedSections(prev => 
      prev.includes(section) 
        ? prev.filter(s => s !== section)
        : [...prev, section]
    );
  };

  const renderSectionContent = (sectionId: string) => {
    switch (sectionId) {
      case 'programa':
        return (
          <div className="p-4 border-t border-gray-700">
            <DataTable 
              data={mockPrograms} 
              columns={[
                { header: 'Programa', accessorKey: 'name' },
                { header: 'Leadtime do Fornecedor', accessorKey: 'leadtime' },
                { header: 'Múltiplos', accessorKey: 'multiples' },
                { header: 'MOQ', accessorKey: 'moq' },
                { 
                  header: 'Confirmação', 
                  accessorKey: 'status',
                  cell: (info: any) => (
                    <span className="px-2 py-0.5 rounded text-xs bg-green-500/20 text-green-400">
                      {info.getValue()}
                    </span>
                  )
                }
              ]} 
            />
          </div>
        );

      case 'opcoes-agrupadoras':
        return (
          <div className="p-4 border-t border-gray-700">
            <DataTable 
              data={mockGroupingOptions} 
              columns={[
                { header: 'Opção Agrupadora', accessorKey: 'name' },
                { header: 'Venda LW', accessorKey: 'vendaLW' },
                { header: 'Six LW', accessorKey: 'sixLW' },
                { header: 'NWs Carteiras', accessorKey: 'nwsCarteiras' },
                { header: 'OPAG Espelho', accessorKey: 'opagEspelho' },
                { 
                  header: 'Status OPAG', 
                  accessorKey: 'status',
                  cell: (info: any) => {
                    const status = info.getValue();
                    const colors = {
                      ATIVA: 'green',
                      DESCONTINUADA: 'red'
                    };
                    const color = colors[status as keyof typeof colors] || 'gray';
                    return (
                      <span className={`px-2 py-0.5 rounded text-xs bg-${color}-500/20 text-${color}-400`}>
                        {status}
                      </span>
                    );
                  }
                }
              ]} 
            />
          </div>
        );

      case 'timeline-estoque':
        return (
          <div className="p-4 border-t border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-sm">
                  <div className="font-medium">Grupo Similar</div>
                  <div>TOP EPP | BASICOS ELA - OPAG-014</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Semana inicial</div>
                  <div>202401</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Semana final</div>
                  <div>202552</div>
                </div>
                <div className="text-sm">
                  <div className="font-medium">Estoque de segurança</div>
                  <div>5</div>
                </div>
              </div>
              <button className="p-2 hover:bg-gray-700 rounded">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
              Timeline visualization would go here
            </div>
          </div>
        );

      case 'opcoes':
        return (
          <div className="p-4 border-t border-gray-700">
            <DataTable 
              data={mockOptions} 
              columns={[
                { header: 'Grupo de Compra', accessorKey: 'groupName' },
                { header: 'Model Id', accessorKey: 'modelId' },
                { header: 'Cor', accessorKey: 'color' },
                { header: 'Size', accessorKey: 'size' },
                { header: 'Estoque LW', accessorKey: 'stockLW' },
                { header: 'Carteira', accessorKey: 'wallet' },
                { header: 'OPAG', accessorKey: 'opag' }
              ]} 
            />
          </div>
        );

      case 'timeline-lojas':
        return (
          <div className="p-4 border-t border-gray-700">
            <div className="mb-4">
              <h3 className="text-sm font-medium mb-2">Visualização</h3>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-700 px-3 py-1 rounded text-sm">ELA_BR</div>
                <div>TOP EPP | BASIC...</div>
              </div>
            </div>
            <div className="h-32 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400">
              Timeline visualization would go here
            </div>
            <div className="mt-4">
              <DataTable 
                data={mockTimelineData} 
                columns={[
                  { header: 'Title', accessorKey: 'title' },
                  { header: 'Conjunto de Lojas', accessorKey: 'storeGroup' },
                  { header: 'Semana Inicial', accessorKey: 'initialWeek' },
                  { header: 'Semana Final', accessorKey: 'finalWeek' }
                ]} 
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-medium">App de Cadastro</h1>
        </div>
        <div className="flex items-center space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Ativar programa
          </button>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1.5 bg-pink-600/20 text-pink-400 rounded">
              TOP EPP
            </div>
            <div className="px-3 py-1.5 bg-blue-600/20 text-blue-400 rounded">
              TOP EPP | BASICOS ELA - OPAG-014
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {sections.map(({ id, label, icon: Icon, color }) => (
          <div 
            key={id}
            className={`border border-gray-700 rounded-lg overflow-hidden ${
              theme === 'dark' ? 'bg-[#1a1f2b]' : 'bg-white'
            }`}
          >
            <button
              onClick={() => toggleSection(id)}
              className="w-full flex items-center justify-between p-4 hover:bg-gray-800/50"
            >
              <div className="flex items-center space-x-2">
                <Icon className={`w-5 h-5 text-${color}-500`} />
                <span className="font-medium">{label}</span>
              </div>
              {expandedSections.includes(id) ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </button>
            {expandedSections.includes(id) && renderSectionContent(id)}
          </div>
        ))}
      </div>
    </div>
  );
};