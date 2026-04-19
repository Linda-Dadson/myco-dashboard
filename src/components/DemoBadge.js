import React from 'react';
import { useTheme } from '../context/ThemeContext';

// ============================================
// DemoBadge — Shows "Demo Mode" pill.
// Remove this component once live APIs are connected.
// ============================================

const DemoBadge = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '6px 14px',
        background: theme.accentGradient,
        color: theme.primary,
        borderRadius: '999px',
        fontSize: '11px',
        fontWeight: 700,
        letterSpacing: '0.5px',
        textTransform: 'uppercase',
        border: `1px solid ${theme.primaryLight}`,
      }}
    >
      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: theme.primary }} />
      Demo Mode
    </div>
  );
};

export default DemoBadge;
