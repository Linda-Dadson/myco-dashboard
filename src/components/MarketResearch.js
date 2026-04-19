import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { marketResearch } from '../data/sampleData';

// ============================================
// MarketResearch — Feed of headlines pulled
// from your configured sources (Reddit, RSS, etc.).
// Will run on a Lambda scheduled every 6 hours.
// ============================================

const MarketResearch = () => {
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
        <h3 style={{ margin: 0, fontSize: '18px', fontWeight: 700, color: theme.textPrimary }}>
          Market Research Feed
        </h3>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: theme.textSecondary }}>
          Live signals across your topics of interest
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {marketResearch.map((item, index) => (
          <div
            key={index}
            style={{
              padding: '14px 16px',
              background: theme.bgGradient,
              borderRadius: '12px',
              border: `1px solid ${theme.borderSoft}`,
              cursor: 'pointer',
              transition: 'transform 0.2s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateX(4px)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateX(0)')}
          >
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '6px' }}>
              <span
                style={{
                  padding: '3px 10px',
                  background: theme.accentGradient,
                  color: theme.primary,
                  borderRadius: '999px',
                  fontSize: '10px',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                }}
              >
                {item.topic}
              </span>
              <span style={{ fontSize: '11px', color: theme.textSecondary }}>
                {item.source} • {item.time}
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 500, color: theme.textPrimary, lineHeight: 1.4 }}>
              {item.headline}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketResearch;
