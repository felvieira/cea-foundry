import React from 'react';
import { DataTable } from '../components/DataTable';
import { mockOrders } from '../mockData';

const columns = [
  { header: 'Timestamp', accessorKey: 'timestamp' },
  { header: 'Vendor Name', accessorKey: 'vendorName' },
  { header: 'User ID Planning', accessorKey: 'userIdPlanning' },
  { header: 'Similar Group Name', accessorKey: 'similarGroupName' },
  { header: 'Option ID', accessorKey: 'optionId' },
  { header: 'Operation', accessorKey: 'operation' },
  { header: 'Week ID Original', accessorKey: 'weekIdOriginal' },
  { header: 'Week', accessorKey: 'week' },
  { header: 'Quantidade Rec.', accessorKey: 'quantityRec' },
  { header: 'Quantidade final', accessorKey: 'quantityFinal' },
  { header: 'Preço inicial', accessorKey: 'initialPrice' },
  { header: 'Preço final', accessorKey: 'finalPrice' },
];

export const OrdersView: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Pedidos</h2>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Aprovar
          </button>
          <button className="px-4 py-2 bg-red-600 text-white rounded">
            Rejeitar
          </button>
        </div>
      </div>
      <DataTable data={mockOrders} columns={columns} />
    </div>
  );
};