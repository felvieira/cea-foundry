import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { useStore } from '../store/useStore';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DataTableProps<T> {
  data: T[];
  columns: any[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
  const theme = useStore((state) => state.theme);
  const [sorting, setSorting] = useState<SortingState>([]);
  
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
    <div className={`rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-[#0f1319]' : 'bg-white'}`}>
      <table className="w-full">
        <thead className={theme === 'dark' ? 'bg-[#1a1f2b]' : 'bg-gray-50'}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              <th className="w-10 px-4 py-3">
                <input type="checkbox" className="rounded border-gray-600" />
              </th>
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 py-3 text-left text-sm font-medium cursor-pointer select-none"
                  onClick={header.column.getToggleSortingHandler()}
                >
                  <div className="flex items-center space-x-2">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                    {header.column.getIsSorted() === 'asc' && (
                      <ChevronUp className="w-4 h-4" />
                    )}
                    {header.column.getIsSorted() === 'desc' && (
                      <ChevronDown className="w-4 h-4" />
                    )}
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
              className={`border-t ${
                theme === 'dark' 
                  ? 'border-gray-800 hover:bg-gray-800/50' 
                  : 'border-gray-200 hover:bg-gray-50'
              }`}
            >
              <td className="w-10 px-4 py-3">
                <input type="checkbox" className="rounded border-gray-600" />
              </td>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-3 text-sm">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}