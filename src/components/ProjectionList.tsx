import React from 'react';
import { Package } from 'lucide-react';

interface ProjectionItem {
  id: string;
  name: string;
  lastUpdate: string;
  user: string;
  purchaseGroup: string;
}

interface ProjectionListProps {
  activeTab: 'pending' | 'released';
}

const mockProjections: ProjectionItem[] = [
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
  {
    id: 'AB-003',
    name: 'AB - GOLDEN SECRET | BELEZA - OPAG-003 - 100ML',
    lastUpdate: '10 de jul. de 2024, 09:44',
    user: 'Diego Alves Verdan',
    purchaseGroup: ''
  },
  {
    id: 'AB-004',
    name: 'AB - GOLDEN SECRET | BELEZA - OPAG-004 - 50ML',
    lastUpdate: '10 de jul. de 2024, 09:44',
    user: 'Diego Alves Verdan',
    purchaseGroup: ''
  },
  {
    id: 'AB-005',
    name: 'AB - GOLDEN SECRET | BELEZA - OPAG-005 - 30ML',
    lastUpdate: '10 de jul. de 2024, 09:44',
    user: 'Diego Alves Verdan',
    purchaseGroup: ''
  },
  {
    id: 'AB-006',
    name: 'AB - HER GOLDEN SECRET | BELEZA - OPAG-001 - 50ML',
    lastUpdate: '10 de jul. de 2024, 09:44',
    user: 'Diego Alves Verdan',
    purchaseGroup: ''
  }
];

export const ProjectionList: React.FC<ProjectionListProps> = ({ activeTab }) => {
  return (
    <div className="space-y-2">
      <h2 className="text-sm font-medium mb-4">Grupos Similares</h2>
      {mockProjections.map((item) => (
        <div
          key={item.id}
          className="flex items-start space-x-3 p-4 rounded-lg bg-gray-800 border border-gray-700"
        >
          <input type="checkbox" className="mt-1.5 rounded border-gray-600" />
          <div className="flex-1">
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
      ))}
    </div>
  );
};