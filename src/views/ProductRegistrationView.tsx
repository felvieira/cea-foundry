import React from 'react';
import { DataTable } from '../components/DataTable';
import { useStore } from '../store/useStore';

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
  },
  {
    programOPAG: 'TOP EPP | OPAG-002',
    program: 'TOP EPP',
    opag: 'OPAG-002',
    existsProjection: 'Yes',
    appCadastro: 'No value',
    projectionSIA: 'No value'
  },
  {
    programOPAG: 'TOP EPP | OPAG-003',
    program: 'TOP EPP',
    opag: 'OPAG-003',
    existsProjection: 'Yes',
    appCadastro: 'No value',
    projectionSIA: 'No value'
  },
  {
    programOPAG: 'TOP EPP | OPAG-004',
    program: 'TOP EPP',
    opag: 'OPAG-004',
    existsProjection: 'Yes',
    appCadastro: 'No value',
    projectionSIA: 'No value'
  },
  {
    programOPAG: 'TOP EPP | OPAG-005',
    program: 'TOP EPP',
    opag: 'OPAG-005',
    existsProjection: 'Yes',
    appCadastro: 'No value',
    projectionSIA: 'No value'
  },
  {
    programOPAG: 'TOP EPP | OPAG-006',
    program: 'TOP EPP',
    opag: 'OPAG-006',
    existsProjection: 'Yes',
    appCadastro: 'No value',
    projectionSIA: 'No value'
  },
  {
    programOPAG: 'TOP EPP | OPAG-007',
    program: 'TOP EPP',
    opag: 'OPAG-007',
    existsProjection: 'Yes',
    appCadastro: 'NOT_APPROVED',
    projectionSIA: 'NOT_APPROVED'
  },
  {
    programOPAG: 'TOP EPP | OPAG-012',
    program: 'TOP EPP',
    opag: 'OPAG-012',
    existsProjection: 'Yes',
    appCadastro: 'APPROVED',
    projectionSIA: 'APPROVED'
  },
  {
    programOPAG: 'TOP EPP | OPAG-014',
    program: 'TOP EPP',
    opag: 'OPAG-014',
    existsProjection: 'Yes',
    appCadastro: 'APPROVED',
    projectionSIA: 'NOT_APPROVED'
  }
];

const columns = [
  { header: 'Program OPAG', accessorKey: 'programOPAG' },
  { header: 'Program', accessorKey: 'program' },
  { header: 'OPAG', accessorKey: 'opag' },
  { 
    header: 'Existe Projeção do SIA?', 
    accessorKey: 'existsProjection',
    cell: (info: any) => (
      <span className={`px-2 py-0.5 rounded text-xs ${
        info.getValue() === 'Yes' ? 'bg-green-600/20 text-green-500' : ''
      }`}>
        {info.getValue()}
      </span>
    )
  },
  { 
    header: 'App de Cadastro', 
    accessorKey: 'appCadastro',
    cell: (info: any) => {
      const value = info.getValue();
      if (value === 'APPROVED') {
        return <span className="px-2 py-0.5 rounded text-xs bg-green-600/20 text-green-500">APPROVED</span>;
      } else if (value === 'NOT_APPROVED') {
        return <span className="px-2 py-0.5 rounded text-xs bg-red-600/20 text-red-500">NOT_APPROVED</span>;
      }
      return value;
    }
  },
  { 
    header: 'Projeção SIA', 
    accessorKey: 'projectionSIA',
    cell: (info: any) => {
      const value = info.getValue();
      if (value === 'APPROVED') {
        return <span className="px-2 py-0.5 rounded text-xs bg-green-600/20 text-green-500">APPROVED</span>;
      } else if (value === 'NOT_APPROVED') {
        return <span className="px-2 py-0.5 rounded text-xs bg-red-600/20 text-red-500">NOT_APPROVED</span>;
      }
      return value;
    }
  }
];

export const ProductRegistrationView: React.FC = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <div className="space-x-2">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            Aprovar Cadastro
          </button>
          <button className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600">
            Aprovar Projeção
          </button>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Refresh
        </button>
      </div>
      <DataTable data={mockData} columns={columns} />
    </div>
  );
};