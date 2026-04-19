import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { youtubeData } from '../data/sampleData';

// ============================================
// YouTubeWidget — YouTube performance overview.
// Will be powered by YouTube Data API v3 via Lambda.
// ============================================

const YouTubeWidget = () => {
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
          YouTube Analytics
        </h3>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: theme.textSecondary }}>
          {youtubeData.totalSubs.toLocaleString()} subscribers • {youtubeData.totalViews} total views
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {youtubeData.channels.map((channel) => (
          <div
            key={channel.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '12px 16px',
              background: theme.bgGradient,
              borderRadius: '12px',
              border: `1px solid ${theme.borderSoft}`,
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: '14px',
                  fontWeight: 600,
                  color: theme.textPrimary,
                }}
              >
                {channel.name}
              </p>
              <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: theme.textSecondary }}>
                {channel.subs.toLocaleString()} subs • {channel.views} views
              </p>
            </div>
            <span
              style={{
                padding: '4px 10px',
                background: theme.success,
                color: theme.successText,
                borderRadius: '999px',
                fontSize: '11px',
                fontWeight: 700,
              }}
            >
              {channel.growth}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YouTubeWidget;
