import React from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DataTableProps<T> {
  data: T[];
  columns: any[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting,
  });

  return (
    <div className="card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="border-b border-[var(--border)]">
                <th className="w-10 p-4">
                  <div className="flex items-center justify-center w-5 h-5">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-[var(--border)] accent-blue-500"
                    />
                  </div>
                </th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="p-4 text-left text-sm font-medium text-[var(--text-secondary)] cursor-pointer"
                  >
                    <div className="flex items-center space-x-2">
                      <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                      <div className="w-4">
                        {header.column.getIsSorted() === 'asc' && (
                          <ChevronUp className="w-4 h-4" />
                        )}
                        {header.column.getIsSorted() === 'desc' && (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="border-b border-[var(--border)] hover:bg-[var(--border)]/10 transition-colors"
              >
                <td className="p-4">
                  <div className="flex items-center justify-center w-5 h-5">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-[var(--border)] accent-blue-500"
                    />
                  </div>
                </td>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="p-4 text-sm">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}