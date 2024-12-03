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
    <div className="flex h-screen">
      <aside className="w-64 border-r border-border bg-background">
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <h3 className="text-sm font-medium">DIVISÃO</h3>
            <input 
              type="text" 
              className="w-full h-9 px-3 rounded-md border border-input bg-background"
              placeholder="Search..."
            />
          </div>
          
          <div className="space-y-2">
            <h3 className="text-sm font-medium">TIME</h3>
            <input 
              type="text" 
              className="w-full h-9 px-3 rounded-md border border-input bg-background"
              placeholder="Search..."
            />
          </div>
          
          {/* ... outros filtros ... */}
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-6">
        <div className="flex gap-2 mb-4">
          <button className="button button-primary">
            Aprovar
          </button>
          <button className="button button-destructive">
            Rejeitar
          </button>
        </div>
        
        <div className="rounded-md border">
          <DataTable data={mockData} columns={columns} />
        </div>
      </main>
    </div>
  );
};