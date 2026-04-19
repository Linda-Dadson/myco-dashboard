import React, { useState } from 'react';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import Sidebar from './components/Sidebar';
import MetricCard from './components/MetricCard';
import SalesChart from './components/SalesChart';
import YouTubeWidget from './components/YouTubeWidget';
import HealthWidget from './components/HealthWidget';
import ProjectTracker from './components/ProjectTracker';
import MarketResearch from './components/MarketResearch';
import ThemeSwitcher from './components/ThemeSwitcher';
import BackgroundUploader from './components/BackgroundUploader';
import DemoBadge from './components/DemoBadge';
import { metrics } from './data/sampleData';

// ============================================
// MycoApp — The actual dashboard layout.
// Wrapped by <ThemeProvider> in App() below.
// ============================================

const MycoApp = () => {
  const { theme, backgroundImage } = useTheme();
  const [activeView, setActiveView] = useState('dashboard');

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        background: backgroundImage ? `url(${backgroundImage}) center/cover fixed` : theme.bgGradient,
        color: theme.textPrimary,
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      }}
    >
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      <main style={{ flex: 1, padding: '24px 32px', overflowY: 'auto' }}>
        {/* Top bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <div>
            <h1 style={{ margin: 0, fontSize: '28px', fontWeight: 700, color: theme.textPrimary }}>
              Welcome back, Linda
            </h1>
            <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: theme.textSecondary }}>
              Here's what's happening across your ventures today
            </p>
          </div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center', flexWrap: 'wrap' }}>
            <DemoBadge />
            <BackgroundUploader />
            <ThemeSwitcher />
          </div>
        </div>

        {/* Metric cards row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          {metrics.map((m) => (
            <MetricCard key={m.label} {...m} />
          ))}
        </div>

        {/* Sales chart + YouTube row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <SalesChart />
          <YouTubeWidget />
        </div>

        {/* Projects + Research row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '16px',
            marginBottom: '24px',
          }}
        >
          <ProjectTracker />
          <MarketResearch />
        </div>

        {/* Health widget — full width */}
        <div style={{ marginBottom: '24px' }}>
          <HealthWidget />
        </div>

        <footer style={{ textAlign: 'center', padding: '16px', fontSize: '12px', color: theme.textSecondary }}>
          MYCO Command Center • Built by Linda Dadson • Deployed on AWS
        </footer>
      </main>
    </div>
  );
};

// ============================================
// App — The entry point. Wraps everything in ThemeProvider.
// ============================================

function App() {
  return (
    <ThemeProvider>
      <MycoApp />
    </ThemeProvider>
  );
}

export default App;
