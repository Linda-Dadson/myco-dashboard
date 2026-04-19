import React from 'react';
import { useTheme } from '../context/ThemeContext';

// ============================================
// Sidebar — Navigation for the whole app
// ============================================

const Sidebar = ({ activeView, setActiveView }) => {
  const { theme } = useTheme();

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '📊' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'tasks', label: 'Tasks', icon: '✓' },
    { id: 'intelligence', label: 'Intelligence Hub', icon: '💡' },
    { id: 'financials', label: 'Financials', icon: '💰' },
    { id: 'health', label: 'Health', icon: '🌿' },
    { id: 'decisions', label: 'Decision Log', icon: '📝' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ];

  return (
    <aside
      style={{
        width: '240px',
        minHeight: '100vh',
        background: theme.cardBg,
        borderRight: `1px solid ${theme.borderSoft}`,
        padding: '24px 16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        position: 'sticky',
        top: 0,
      }}
    >
      <div style={{ padding: '0 12px 24px 12px', borderBottom: `1px solid ${theme.borderSoft}`, marginBottom: '8px' }}>
        <h1
          style={{
            fontSize: '28px',
            fontWeight: 800,
            margin: 0,
            background: theme.accentGradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.5px',
          }}
        >
          MYCO
        </h1>
        <p style={{ fontSize: '11px', color: theme.textSecondary, margin: '4px 0 0 0', fontWeight: 500 }}>
          COMMAND CENTER
        </p>
      </div>

      {navItems.map((item) => {
        const isActive = activeView === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveView(item.id)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '12px 14px',
              border: 'none',
              background: isActive ? theme.accentGradient : 'transparent',
              color: isActive ? theme.primary : theme.textSecondary,
              fontWeight: isActive ? 600 : 500,
              fontSize: '14px',
              borderRadius: '12px',
              cursor: 'pointer',
              textAlign: 'left',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (!isActive) e.currentTarget.style.background = theme.borderSoft;
            }}
            onMouseLeave={(e) => {
              if (!isActive) e.currentTarget.style.background = 'transparent';
            }}
          >
            <span style={{ fontSize: '16px' }}>{item.icon}</span>
            <span>{item.label}</span>
          </button>
        );
      })}
    </aside>
  );
};

export default Sidebar;
