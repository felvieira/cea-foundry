import React, { useState } from 'react';
import { DataTable } from '../components/DataTable';
import { Chart } from '../components/Chart';
import { Modal } from '../components/Modal';
import { Search, X } from 'lucide-react';
import { Parameter } from '../types';

const mockParameters: Parameter[] = Array.from({ length: 15 }, (_, i) => ({
  id: `${i + 1}`,
  title: 'TOP EPP | BASICOS',
  program: 'TOP EPP',
  similarGroupName: 'TOP EPP | BASICOS ELA -',
  idealSalesProjection: 'No value',
  flexBuyWeeks: 'No value',
  displayLayer: 'No value'
}));

const columns = [
  { header: 'Title', accessorKey: 'title' },
  { header: 'Program', accessorKey: 'program' },
  { header: 'Similar Group Name', accessorKey: 'similarGroupName' },
  { header: 'Ideal Sales Projection Safety', accessorKey: 'idealSalesProjection' },
  { header: 'Flex Buy Weeks', accessorKey: 'flexBuyWeeks' },
  { header: 'Display Layer', accessorKey: 'displayLayer' }
];

const mockChartData = [
  { name: '0.1', value: 10 },
  { name: '0.2', value: 20 },
  { name: '0.3', value: 30 },
  { name: '0.4', value: 45 },
  { name: '0.5', value: 60 },
  { name: '0.6', value: 75 },
  { name: '0.7', value: 85 },
  { name: '0.8', value: 70 },
  { name: '0.9', value: 55 },
];

const flexBuyOptions = [2, 5, 8, 12];

export const ParametersView: React.FC = () => {
  const [selectedGroups, setSelectedGroups] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFlexBuy, setSelectedFlexBuy] = useState<number | null>(null);
  const [searchValue, setSearchValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-start">
        <div className="w-64 space-y-4">
          <h3 className="text-sm font-medium">SIMILAR GROUP NAME</h3>
          <div className="space-y-2">
            {Array.from({ length: 5 }, (_, i) => (
              <div key={i} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id={`group-${i}`}
                  className="rounded border-gray-400"
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedGroups([...selectedGroups, `group-${i}`]);
                    } else {
                      setSelectedGroups(selectedGroups.filter(g => g !== `group-${i}`));
                    }
                  }}
                />
                <label htmlFor={`group-${i}`} className="text-sm">
                  TOP EPP | BASICOS ELA - {i + 1}
                </label>
                <div className="flex-grow h-1 bg-blue-400 rounded" />
              </div>
            ))}
            <button className="text-sm text-gray-400 hover:text-gray-300">
              Show more
            </button>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">IDEAL SALES PROJECTION SAFETY</h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm">8</span>
              <div className="flex-grow h-1 bg-blue-400 rounded" />
              <span className="text-sm">8</span>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-medium">FLEX BUY WEEKS</h3>
            <Chart data={mockChartData} />
          </div>
        </div>

        <div className="flex-1 ml-6">
          <div className="flex justify-between items-center mb-4">
            <div className="space-x-2">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                Editar Estratégia Flex Buy
              </button>
              <button className="px-4 py-2 bg-orange-600 text-white rounded hover:bg-orange-700">
                Remover Estratégia Flex Buy
              </button>
              <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                Editar Display Layer
              </button>
            </div>
          </div>
          <DataTable data={mockParameters} columns={columns} />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="[TEST] [Admin] Enable Extended Buy Strategy"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">
              Grupo Similar <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center space-x-2 p-2 bg-blue-500/10 rounded">
              <span className="bg-blue-500 text-white text-xs px-1 rounded">IR</span>
              <span className="text-sm">TOP EPP | BASICOS ELA - OPAG-012</span>
              <button className="ml-auto">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Flex Buy Weeks
            </label>
            <div className="relative">
              <div 
                className="flex items-center p-2 border rounded cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <Search className="w-4 h-4 mr-2" />
                <input 
                  type="text"
                  placeholder="Search options..."
                  className="bg-transparent outline-none flex-1"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
              {showDropdown && (
                <div className="absolute w-full mt-1 border rounded shadow-lg bg-gray-800">
                  {flexBuyOptions
                    .filter(option => option.toString().includes(searchValue))
                    .map((option) => (
                      <div
                        key={option}
                        className="p-2 hover:bg-gray-700 cursor-pointer"
                        onClick={() => {
                          setSelectedFlexBuy(option);
                          setShowDropdown(false);
                          setSearchValue(option.toString());
                        }}
                      >
                        {option}
                      </div>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};