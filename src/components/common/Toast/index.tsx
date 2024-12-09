import React from 'react';
import { useStore } from '../../../hooks/useStore';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

interface ToastProps {
  type: 'success' | 'error';
  message: string;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  const theme = useStore((state) => state.theme);
  
  const Icon = type === 'success' ? CheckCircle : AlertCircle;
  const bgColor = type === 'success' ? 'bg-green-500/10' : 'bg-red-500/10';
  const borderColor = type === 'success' ? 'border-green-500' : 'border-red-500';
  const textColor = type === 'success' ? 'text-green-500' : 'text-red-500';

  return (
    <div className={`fixed top-4 right-4 z-50 flex items-center p-3 rounded-lg ${bgColor} border ${borderColor}`}>
      <Icon className={`w-5 h-5 ${textColor} mr-3`} />
      <div className="flex-1 mr-4">
        <p className="text-sm font-medium">{message}</p>
      </div>
      <button
        onClick={onClose}
        className="p-1 hover:bg-gray-700/50 rounded-full"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}; 