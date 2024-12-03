import React from 'react';

interface StatusBadgeProps {
  status: 'APPROVED' | 'NOT_APPROVED' | 'PENDING';
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'APPROVED':
        return 'bg-green-100 text-green-800';
      case 'NOT_APPROVED':
        return 'bg-red-100 text-red-800';
      case 'PENDING':
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor()}`}>
      {status.replace('_', ' ')}
    </span>
  );
};