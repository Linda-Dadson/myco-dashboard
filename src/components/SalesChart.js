import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import { useTheme } from '../context/ThemeContext';
import { salesData } from '../data/sampleData';

// ============================================
// SalesChart — Multi-platform sales trend chart.
// Uses recharts, a React charting library.
// ============================================

const SalesChart = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        background: theme.cardBg,
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 2px 12px rgba(74, 31, 184, 0.06)',
        border: `1px solid ${theme.borderSoft}`,
      }}
    >
      <div style={{ marginBottom: '16px' }}>
        <h3
          style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: 700,
            color: theme.textPrimary,
          }}
        >
          Sales Trend
        </h3>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: theme.textSecondary }}>
          Revenue across Etsy, eBay, and TikTok Shop — last 6 months
        </p>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <LineChart data={salesData}>
          <CartesianGrid strokeDasharray="3 3" stroke={theme.borderSoft} />
          <XAxis dataKey="month" stroke={theme.textSecondary} style={{ fontSize: '12px' }} />
          <YAxis stroke={theme.textSecondary} style={{ fontSize: '12px' }} />
          <Tooltip
            contentStyle={{
              background: theme.cardBg,
              border: `1px solid ${theme.borderSoft}`,
              borderRadius: '12px',
              color: theme.textPrimary,
            }}
          />
          <Legend wrapperStyle={{ fontSize: '12px' }} />
          <Line type="monotone" dataKey="etsy" stroke={theme.primary} strokeWidth={2.5} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="ebay" stroke={theme.primaryLight} strokeWidth={2.5} dot={{ r: 4 }} />
          <Line type="monotone" dataKey="tiktok" stroke="#E8A5C8" strokeWidth={2.5} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SalesChart;
