import React from 'react';
import { DataTable } from '../components/DataTable';

const columns = [
  { header: 'Program OPAG', accessorKey: 'programOPAG' },
  { header: 'Program', accessorKey: 'program' },
  { header: 'OPAG', accessorKey: 'opag' },
  { header: 'Existe Projeção do SIA?', accessorKey: 'existsProjection' },
  { header: 'App de Cadastro', accessorKey: 'appCadastro' },
  { header: 'Projeção SIA', accessorKey: 'projectionSIA' }
];

const mockData = [
  {
    programOPAG: 'TOP EPP | NAO INFORMADO',
    program: 'TOP EPP',
    opag: 'NAO INFORMADO',
    existsProjection: 'No value',
    appCadastro: 'No value',
    projectionSIA: 'No value'
  },
  {
    programOPAG: 'TOP EPP | OPAG-001',
    program: 'TOP EPP',
    opag: 'OPAG-001',
    existsProjection: 'Yes',
    appCadastro: 'No value',
    projectionSIA: 'No value'
  }
];

export const ApprovalsView: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Admin Planning Application</h1>
        <div className="space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded">
            Aprovar Cadastro
          </button>
          <button className="px-4 py-2 bg-orange-600 text-white rounded">
            Aprovar Projeção
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded">
            Refresh
          </button>
        </div>
      </div>
      <DataTable data={mockData} columns={columns} />
    </div>
  );
};