import React, { useState } from 'react';
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  getSortedRowModel,
  SortingState,
} from '@tanstack/react-table';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface DataTableProps<T> {
  data: T[];
  columns: any[];
}

export function DataTable<T>({ data, columns }: DataTableProps<T>) {
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
    <div className="card">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                <th className="w-10 table-header">
                  <input type="checkbox" className="rounded border-gray-600" />
                </th>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    onClick={header.column.getToggleSortingHandler()}
                    className="table-header cursor-pointer select-none"
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
                className="hover:bg-gray-800/50 transition-colors"
              >
                <td className="w-10 table-cell">
                  <input type="checkbox" className="rounded border-gray-600" />
                </td>
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="table-cell">
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