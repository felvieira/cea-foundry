import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useStore } from '@/hooks/useStore';

interface ChartProps {
  data: {
    name: string;
    value: number;
  }[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
  const theme = useStore((state) => state.theme);
  const isDark = theme === 'dark';

  return (
    <div className="h-32">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis 
            dataKey="name" 
            tick={{ fontSize: 12, fill: isDark ? '#E5E7EB' : '#374151' }}
            axisLine={{ stroke: isDark ? '#4B5563' : '#D1D5DB' }}
            tickLine={{ stroke: isDark ? '#4B5563' : '#D1D5DB' }}
          />
          <YAxis 
            tick={{ fontSize: 12, fill: isDark ? '#E5E7EB' : '#374151' }}
            axisLine={{ stroke: isDark ? '#4B5563' : '#D1D5DB' }}
            tickLine={{ stroke: isDark ? '#4B5563' : '#D1D5DB' }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: isDark ? '#1F2937' : '#FFFFFF',
              border: 'none',
              borderRadius: '4px',
              color: isDark ? '#E5E7EB' : '#374151',
              boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}
          />
          <Bar 
            dataKey="value" 
            fill={isDark ? '#3B82F6' : '#2563EB'}
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}; 