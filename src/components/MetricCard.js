import React from 'react';
import { useTheme } from '../context/ThemeContext';

// ============================================
// MetricCard — A single KPI tile.
// Shows one number that matters.
// ============================================

const MetricCard = ({ label, value, change, trend }) => {
  const { theme } = useTheme();

  const trendColor =
    trend === 'up' ? theme.successText : trend === 'down' ? '#C44D5C' : theme.textSecondary;

  return (
    <div
      style={{
        background: theme.cardBg,
        borderRadius: '16px',
        padding: '20px 24px',
        boxShadow: '0 2px 12px rgba(74, 31, 184, 0.06)',
        border: `1px solid ${theme.borderSoft}`,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Left edge gradient bar — the signature MYCO touch */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '4px',
          background: theme.cardEdgeGradient,
        }}
      />

      <p
        style={{
          margin: 0,
          fontSize: '12px',
          fontWeight: 600,
          color: theme.textSecondary,
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}
      >
        {label}
      </p>
      <h2
        style={{
          margin: '8px 0 4px 0',
          fontSize: '32px',
          fontWeight: 700,
          color: theme.textPrimary,
          letterSpacing: '-0.5px',
        }}
      >
        {value}
      </h2>
      <p style={{ margin: 0, fontSize: '13px', fontWeight: 500, color: trendColor }}>
        {trend === 'up' && '↑ '}
        {trend === 'down' && '↓ '}
        {change}
      </p>
    </div>
  );
};

export default MetricCard;
