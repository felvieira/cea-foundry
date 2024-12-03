import React, { useState } from 'react';
import { DataTable } from '../components/DataTable';
import { Calendar, DollarSign, Truck, RefreshCw, ChevronDown, X, Download } from 'lucide-react';
import { Modal } from '../components/Modal';

const mockOpenData = [
  {
    timestamp: 'Nov 5, 2024',
    vendorName: 'FASHIONING COMERCIAL',
    userId: 'Diego Alves Verdan',
    similarGroupName: 'MESA LICENSE',
    optionId: '1079847 | PRETO',
    operation: 'BUY',
    weekIdOriginal: '202504',
    week: '202504',
    quantityRec: 3860,
    quantityFinal: 1930,
    priceInitial: 23.11,
    priceFinal: 23.11
  },
  {
    timestamp: 'Nov 5, 2024',
    vendorName: 'LATINA CONFECOES L...',
    userId: 'Diego Alves Verdan',
    similarGroupName: 'MESA LICENSE',
    optionId: '1044290 | PRETO',
    operation: 'BUY',
    weekIdOriginal: '202504',
    week: '202504',
    quantityRec: 5710,
    quantityFinal: 2855,
    priceInitial: 20,
    priceFinal: 20
  }
];

const mockApprovedData = [
  {
    timestamp: 'Apr 24, 2023',
    vendorName: 'COTTON STAR INDUST...',
    program: 'MC GOLA V FLAME',
    optionId: '8525926 | BRANCO_1',
    operation: 'BUY',
    prevWeek: '202327',
    week: '202325',
    userIdSourcing: 'Larissa Belinda Kuhn',
    oc: '',
    quantityInitial: 1377,
    quantityFinal: 1377,
    priceInitial: 12.18,
    priceFinal: 12.18
  }
];

const openColumns = [
  { header: 'Timestamp', accessorKey: 'timestamp' },
  { header: 'Vendor Name', accessorKey: 'vendorName' },
  { header: 'User ID Planning', accessorKey: 'userId' },
  { header: 'Similar Group Name', accessorKey: 'similarGroupName' },
  { header: 'Option ID', accessorKey: 'optionId' },
  { header: 'Operation', accessorKey: 'operation' },
  { header: 'Week ID Original', accessorKey: 'weekIdOriginal' },
  { header: 'Week', accessorKey: 'week' },
  { header: 'Quantidade Rec.', accessorKey: 'quantityRec' },
  { header: 'Quantidade final', accessorKey: 'quantityFinal' },
  { header: 'Preço inicial', accessorKey: 'priceInitial' },
  { header: 'Preço final', accessorKey: 'priceFinal' }
];

const approvedColumns = [
  { header: 'Timestamp', accessorKey: 'timestamp' },
  { header: 'Vendor Nm', accessorKey: 'vendorName' },
  { header: 'Program', accessorKey: 'program' },
  { header: 'Option Id', accessorKey: 'optionId' },
  { header: 'Operation', accessorKey: 'operation' },
  { header: 'Prev Week', accessorKey: 'prevWeek' },
  { header: 'Week', accessorKey: 'week' },
  { header: 'User Id Sourcing', accessorKey: 'userIdSourcing' },
  { header: 'OC', accessorKey: 'oc' },
  { header: 'Quantidade inicial', accessorKey: 'quantityInitial' },
  { header: 'Quantidade final', accessorKey: 'quantityFinal' },
  { header: 'Preço inicial', accessorKey: 'priceInitial' },
  { header: 'Preço final', accessorKey: 'priceFinal' }
];

interface EditModalProps {
  type: 'week' | 'price' | 'vendor' | null;
  onClose: () => void;
}

const EditModalContent: React.FC<EditModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const titles = {
    week: '[SourcingV2] Update Order Modification Week',
    price: '[SourcingV2] Update Order Modification Price',
    vendor: '[SourcingV2] Update Order Modification Vendor'
  };

  return (
    <Modal isOpen={true} onClose={onClose} title={titles[type]}>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            Order Modification <span className="text-red-500">*</span>
          </label>
          <div className="space-y-2">
            {['7a9859a3-65b4-46dd-a46f-3fb6b2b32732', '4c14d34-2c45-48b5-aa8f-6332fd1041a'].map((id) => (
              <div key={id} className="flex items-center space-x-2 p-2 bg-blue-500/10 rounded">
                <span className="bg-blue-500 text-white text-xs px-1 rounded">✓</span>
                <span className="text-sm">{id}</span>
                <button className="ml-auto">
                  <X className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {type === 'price' && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Preço Custo <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              className="w-full p-2 bg-gray-700 rounded border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter a number"
            />
          </div>
        )}

        <div className="flex justify-end space-x-2 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-300 hover:bg-gray-700 rounded"
          >
            Cancel
          </button>
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Submit
          </button>
        </div>
      </div>
    </Modal>
  );
};

export const SourcingAppView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'open' | 'approved' | 'rejected'>('open');
  const [showEditMenu, setShowEditMenu] = useState(false);
  const [editModalType, setEditModalType] = useState<'week' | 'price' | 'vendor' | null>(null);
  const [showSummary, setShowSummary] = useState(false);

  const handleEditClick = (type: 'week' | 'price' | 'vendor') => {
    setEditModalType(type);
    setShowEditMenu(false);
  };

  const EditMenu = () => (
    <div className="absolute z-50 mt-1 w-48 rounded-md shadow-lg bg-[#1a1f2b] ring-1 ring-black ring-opacity-5">
      <div className="py-1">
        <button
          onClick={() => handleEditClick('week')}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          <Calendar className="mr-2 h-4 w-4" />
          Mudar Semana
        </button>
        <button
          onClick={() => handleEditClick('price')}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          <DollarSign className="mr-2 h-4 w-4" />
          Mudar Preço Custo
        </button>
        <button
          onClick={() => handleEditClick('vendor')}
          className="flex items-center w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
        >
          <Truck className="mr-2 h-4 w-4" />
          Mudar Fornecedor
        </button>
      </div>
    </div>
  );

  return (
    <div className="space-y-4">
      <div className="flex space-x-4 border-b border-gray-700">
        <button
          className={`pb-2 ${
            activeTab === 'open'
              ? 'text-blue-400 border-b-2 border-blue-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('open')}
        >
          Abertas
        </button>
        <button
          className={`pb-2 ${
            activeTab === 'approved'
              ? 'text-blue-400 border-b-2 border-blue-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('approved')}
        >
          Aprovadas
        </button>
        <button
          className={`pb-2 ${
            activeTab === 'rejected'
              ? 'text-blue-400 border-b-2 border-blue-400'
              : 'text-gray-400 hover:text-gray-300'
          }`}
          onClick={() => setActiveTab('rejected')}
        >
          Rejeitadas
        </button>
      </div>

      {activeTab === 'approved' ? (
        <div className="flex justify-end">
          <button
            onClick={() => setShowSummary(true)}
            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded"
          >
            Resumo - Pedidos aprovados
          </button>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <button className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded">
              Aprovar
            </button>
            <button className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded">
              Rejeitar
            </button>
            <div className="relative">
              <button
                onClick={() => setShowEditMenu(!showEditMenu)}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center space-x-2"
              >
                <span>Editar</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showEditMenu && <EditMenu />}
            </div>
            <button className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded">
              Resumo - Pedidos abertos
            </button>
          </div>
          <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded flex items-center space-x-2">
            <RefreshCw className="h-4 w-4" />
            <span>Refresh data</span>
          </button>
        </div>
      )}

      <DataTable 
        data={activeTab === 'open' ? mockOpenData : activeTab === 'approved' ? mockApprovedData : []} 
        columns={activeTab === 'open' ? openColumns : approvedColumns} 
      />
      
      {editModalType && (
        <EditModalContent type={editModalType} onClose={() => setEditModalType(null)} />
      )}

      {showSummary && (
        <div className="fixed inset-0 z-50 bg-[#1a1f2b]">
          <div className="flex flex-col h-full">
            <div className="flex justify-between items-center p-4 border-b border-gray-700">
              <h2 className="text-lg font-medium">Resumo - Pedidos aprovados</h2>
              <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 flex items-center space-x-2">
                  <Download className="w-4 h-4" />
                  <span>Download</span>
                </button>
                <button 
                  className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700"
                  onClick={() => setShowSummary(false)}
                >
                  Fechar
                </button>
              </div>
            </div>
            <div className="flex-1 overflow-auto p-4">
              <DataTable data={mockApprovedData} columns={approvedColumns} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};