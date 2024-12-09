import React from 'react';
import { Car, Home, Laptop, Bike } from 'lucide-react';

interface GoalCardProps {
  title: string;
  current: number;
  total: number;
  icon: 'car' | 'house' | 'laptop' | 'bike';
  color: string;
}

const icons = {
  car: Car,
  house: Home,
  laptop: Laptop,
  bike: Bike
};

export const GoalCard: React.FC<GoalCardProps> = ({ title, current, total, icon, color }) => {
  const Icon = icons[icon];
  const percentage = (current / total) * 100;

  return (
    <div className="bg-[var(--surface)] p-4 rounded-lg border border-[var(--border)]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm text-[var(--text-secondary)]">{title}</span>
        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${color}`}>
          <Icon className="w-4 h-4" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span className="text-sm font-medium">${current.toLocaleString()}</span>
          <span className="text-xs text-[var(--text-secondary)]">of ${total.toLocaleString()}</span>
        </div>
        <div className="h-2 bg-[var(--border)]/20 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full ${color}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
}; 