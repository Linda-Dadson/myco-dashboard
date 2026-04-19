import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { projects } from '../data/sampleData';

// ============================================
// ProjectTracker — Active project list
// with status badges and progress bars.
// ============================================

const ProjectTracker = () => {
  const { theme } = useTheme();

  const statusStyles = {
    'In Progress': { bg: theme.accentGradient, color: theme.primary },
    Planning: { bg: theme.info, color: theme.infoText },
    Ready: { bg: theme.success, color: theme.successText },
    Review: { bg: theme.accentGradient, color: theme.primary },
  };

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
          Active Projects
        </h3>
        <p style={{ margin: '4px 0 0 0', fontSize: '13px', color: theme.textSecondary }}>
          {projects.length} projects across your businesses
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {projects.map((project) => {
          const style = statusStyles[project.status] || statusStyles['In Progress'];
          return (
            <div
              key={project.name}
              style={{
                padding: '14px 16px',
                background: theme.bgGradient,
                borderRadius: '12px',
                border: `1px solid ${theme.borderSoft}`,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '14px', fontWeight: 600, color: theme.textPrimary }}>
                    {project.name}
                  </p>
                  <p style={{ margin: '2px 0 0 0', fontSize: '12px', color: theme.textSecondary }}>
                    Due {project.dueDate}
                  </p>
                </div>
                <span
                  style={{
                    padding: '4px 10px',
                    background: style.bg,
                    color: style.color,
                    borderRadius: '999px',
                    fontSize: '11px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px',
                  }}
                >
                  {project.status}
                </span>
              </div>
              <div style={{ width: '100%', height: '6px', background: theme.borderSoft, borderRadius: '999px', overflow: 'hidden' }}>
                <div
                  style={{
                    width: `${project.progress}%`,
                    height: '100%',
                    background: theme.cardEdgeGradient,
                    borderRadius: '999px',
                    transition: 'width 0.3s ease',
                  }}
                />
              </div>
              <p style={{ margin: '6px 0 0 0', fontSize: '11px', color: theme.textSecondary, fontWeight: 600 }}>
                {project.progress}% complete
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectTracker;
