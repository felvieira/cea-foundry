import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { useStore } from '../store/useStore';

interface ChartProps {
  data: any[];
}

export const Chart: React.FC<ChartProps> = ({ data }) => {
  const theme = useStore((state) => state.theme);

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke={theme === 'dark' ? '#fff' : '#000'}
          />
          <YAxis stroke={theme === 'dark' ? '#fff' : '#000'} />
          <Tooltip
            contentStyle={{
              backgroundColor: theme === 'dark' ? '#374151' : '#fff',
              border: 'none',
              borderRadius: '8px',
            }}
          />
          <Bar dataKey="value" fill="#3B82F6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};