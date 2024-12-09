import React, { useState } from 'react';
import { DataTable } from '@/components/common/DataTable';
import { useStore } from '@/hooks/useStore';
import { Package } from 'lucide-react';

interface ProjectionItem {
  id: string;
  name: string;
  lastUpdate: string;
  user: string;
  purchaseGroup: string;
}

const mockData: ProjectionItem[] = [
  {
    id: 'AB-001',
    name: 'AB - GOLDEN SECRET | BELEZA - OPAG-001 - 200ML',
    lastUpdate: '3 de out. de 2024, 09:25',
    user: 'Thalita Do Bem Mattos',
    purchaseGroup: ''
  },
  {
    id: 'AB-002',
    name: 'AB - GOLDEN SECRET | BELEZA - OPAG-002 - 150ML',
    lastUpdate: '10 de jul. de 2024, 09:44',
    user: 'Diego Alves Verdan',
    purchaseGroup: ''
  },
  // ... outros itens
];

export const ProjectionChangeView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'pending' | 'released'>('pending');
  const theme = useStore((state) => state.theme);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            className={`pb-2 ${
              activeTab === 'pending'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('pending')}
          >
            Aguardando liberação
          </button>
          <button
            className={`pb-2 ${
              activeTab === 'released'
                ? 'text-blue-400 border-b-2 border-blue-400'
                : 'text-gray-400 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('released')}
          >
            Liberado
          </button>
        </div>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Liberar
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
            Bloquear
          </button>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-sm font-medium text-gray-400 mb-2">Grupos Similares</h2>
        <div className="space-y-2">
          {mockData.map((item) => (
            <div
              key={item.id}
              className={`p-4 rounded-lg ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } border border-gray-700`}
            >
              <div className="flex items-start space-x-3">
                <input type="checkbox" className="mt-1.5" />
                <div>
                  <div className="flex items-center space-x-2">
                    <Package className="w-4 h-4 text-orange-400" />
                    <h3 className="font-medium">{item.name}</h3>
                  </div>
                  <div className="mt-1 text-sm text-gray-400">
                    <p>Último Update: {item.lastUpdate}</p>
                    <p>Usuário: {item.user}</p>
                    <p>Grupo de Compra: {item.purchaseGroup}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}; 