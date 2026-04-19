import React, { useState } from 'react';
import { useTheme, themes } from '../context/ThemeContext';

// ============================================
// ThemeSwitcher — Dropdown to pick 1 of 6 themes.
// Saved automatically to browser storage.
// ============================================

const ThemeSwitcher = () => {
  const { theme, themeKey, setThemeKey } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          padding: '8px 14px',
          background: theme.accentGradient,
          color: theme.primary,
          border: `1px solid ${theme.primaryLight}`,
          borderRadius: '999px',
          fontSize: '13px',
          fontWeight: 600,
          cursor: 'pointer',
        }}
      >
        🎨 Theme: {theme.name}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            background: theme.cardBg,
            border: `1px solid ${theme.borderSoft}`,
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(74, 31, 184, 0.12)',
            padding: '8px',
            minWidth: '200px',
            zIndex: 100,
          }}
        >
          {Object.keys(themes).map((key) => {
            const t = themes[key];
            const isActive = themeKey === key;
            return (
              <button
                key={key}
                onClick={() => {
                  setThemeKey(key);
                  setOpen(false);
                }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  width: '100%',
                  padding: '10px 12px',
                  border: 'none',
                  background: isActive ? theme.accentGradient : 'transparent',
                  color: theme.textPrimary,
                  fontSize: '13px',
                  fontWeight: isActive ? 600 : 500,
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.background = theme.borderSoft;
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.background = 'transparent';
                }}
              >
                <span
                  style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    background: t.accentGradient,
                    border: `2px solid ${t.primary}`,
                  }}
                />
                {t.name}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
