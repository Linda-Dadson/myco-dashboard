import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { healthData } from '../data/sampleData';

// ============================================
// HealthWidget — Daily wellness snapshot.
// Will integrate with Apple Health, Fitbit,
// MyFitnessPal, etc. via Lambda functions.
// ============================================

const HealthRing = ({ label, value, goal, unit }) => {
  const { theme } = useTheme();
  const percentage = Math.min((value / goal) * 100, 100);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '8px',
        padding: '12px',
        flex: 1,
      }}
    >
      <div style={{ position: 'relative', width: '72px', height: '72px' }}>
        <svg width="72" height="72" viewBox="0 0 72 72">
          <circle cx="36" cy="36" r="30" fill="none" stroke={theme.borderSoft} strokeWidth="6" />
          <circle
            cx="36"
            cy="36"
            r="30"
            fill="none"
            stroke={theme.primary}
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={`${(percentage / 100) * 188.5} 188.5`}
            transform="rotate(-90 36 36)"
          />
        </svg>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '13px',
            fontWeight: 700,
            color: theme.textPrimary,
          }}
        >
          {Math.round(percentage)}%
        </div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <p
          style={{
            margin: 0,
            fontSize: '11px',
            fontWeight: 600,
            color: theme.textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {label}
        </p>
        <p style={{ margin: '2px 0 0 0', fontSize: '13px', fontWeight: 600, color: theme.textPrimary }}>
          {value.toLocaleString()}
          {unit && <span style={{ fontWeight: 400, color: theme.textSecondary }}> / {goal}</span>}
        </p>
      </div>
    </div>
  );
};

const HealthWidget = () => {
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
      <div style={{ marginBottom: '8px' }}>
        <h3
          style={{
            margin: 0,
            fontSize: '18px',
            fontWeight: 700,
            color: theme.textPrimary,
          }}
        >
          Today's Wellness
        </h3>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: theme.textSecondary }}>
          Connect Apple Health or Fitbit to sync real data
        </p>
      </div>

      <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
        <HealthRing label="Steps" value={healthData.steps.value} goal={healthData.steps.goal} unit="steps" />
        <HealthRing label="Sleep" value={healthData.sleep.value} goal={healthData.sleep.goal} unit="hrs" />
        <HealthRing label="Water" value={healthData.water.value} goal={healthData.water.goal} unit="glasses" />
        <HealthRing label="Calories" value={healthData.calories.value} goal={healthData.calories.goal} unit="kcal" />
      </div>
    </div>
  );
};

export default HealthWidget;
