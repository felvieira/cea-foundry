import React, { useState, useRef, useEffect } from 'react';
import { Calendar, DollarSign, Truck } from 'lucide-react';

interface EditMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOptionSelect: (option: string) => void;
  position: { x: number; y: number };
}

export const EditMenu: React.FC<EditMenuProps> = ({ isOpen, onClose, onOptionSelect, position }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const options = [
    { id: 'week', label: 'Mudar Semana', icon: Calendar },
    { id: 'price', label: 'Mudar Preço Custo', icon: DollarSign },
    { id: 'vendor', label: 'Mudar Fornecedor', icon: Truck },
  ];

  return (
    <div
      ref={menuRef}
      className="absolute bg-gray-800 rounded-md shadow-lg z-50 w-48"
      style={{ top: position.y, left: position.x }}
    >
      {options.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          className="flex items-center space-x-2 w-full px-4 py-2 text-sm text-gray-300 hover:bg-gray-700"
          onClick={() => onOptionSelect(id)}
        >
          <Icon className="w-4 h-4" />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
};