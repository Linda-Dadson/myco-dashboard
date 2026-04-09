import YouTubeAnalytics from './YouTubeAnalytics';import React, { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  return (
    <div className="App">
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <h1>🏢 MYCO</h1>
            <p>My Command Center - Structured Business Operating System</p>
          </div>
          <div className="nav-section">
            <span className="welcome">Welcome, Linda!</span>
            <button 
              className={`nav-btn ${activeSection === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveSection('dashboard')}
            >
              DASHBOARD
            </button>
            <button 
              className={`nav-btn ${activeSection === 'intelligence' ? 'active' : ''}`}
              onClick={() => setActiveSection('intelligence')}
            >
              INTELLIGENCE HUB
            </button>
            <button 
              className={`nav-btn ${activeSection === 'personal' ? 'active' : ''}`}
              onClick={() => setActiveSection('personal')}
            >
              PERSONAL
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard">
        {activeSection === 'dashboard' && <BusinessDashboard />}
        {activeSection === 'intelligence' && <IntelligenceHub />}
        {activeSection === 'personal' && <PersonalSection />}
      </main>
    </div>
  );
}

function BusinessDashboard() {
  return (
    <div className="business-dashboard">
      <div className="dashboard-header">
        <h2>🏛️ MYCO Business Operations</h2>
        <p>3 Primary Business Entities with Platform Sub-levels</p>
      </div>

      <div className="business-grid">
        <div className="business-card lynn-living-card">
          <h3>Lynn Living</h3>
          <p>E-commerce / Brand / Content Engine</p>
          <div className="platforms">
           <span className="tag">🛒 Amazon</span>
<span className="tag">🟥 Etsy</span>
<span className="tag">🎵 TikTok</span>
<span className="tag youtube">▶️ YouTube</span>
          </div>
          <div className="financial-summary">
            <div className="metric">
              <span className="label">Monthly Revenue:</span>
              <span className="value">$2,450</span>
            </div>
            <div className="metric">
              <span className="label">Active Platforms:</span>
              <span className="value">3</span>
            </div>
          </div>
          <span className="status online">Online</span>
        </div>

        <div className="business-card lynn-care-card">
          <h3>Lynn Care Senior Services</h3>
          <p>Home Care Services</p>
          <div className="platforms">
            <span className="platform clients">Client Management</span>
            <span className="platform scheduling">Scheduling</span>
          </div>
          <div className="financial-summary">
            <div className="metric">
              <span className="label">Monthly Revenue:</span>
              <span className="value">$8,200</span>
            </div>
            <div className="metric">
              <span className="label">Active Clients:</span>
              <span className="value">12</span>
            </div>
          </div>
          <span className="status active">Active</span>
        </div>

        <div className="business-card foundation-card">
          <h3>Lynn Care Foundation</h3>
          <p>Nonprofit / Impact Engine</p>
          <div className="platforms">
            <span className="platform donations">Donations</span>
            <span className="platform grants">Grants</span>
            <span className="platform ghana">Ghana Programs</span>
          </div>
          <div className="financial-summary">
            <div className="metric">
              <span className="label">Funds Received:</span>
              <span className="value">$5,600</span>
            </div>
            <div className="metric">
              <span className="label">Remaining Funds:</span>
              <span className="value">$3,200</span>
            </div>
          </div>
          <span className="status running">Running</span>
        </div>
      </div>

      <div className="progress-section">
        <h3>🚧 Development Progress</h3>
        <div className="milestone completed">
          ✅ MYCO structure implemented with proper business hierarchy
        </div>
        <div className="milestone completed">
          ✅ Intelligence Hub integrated for structured thinking
        </div>
        <div className="milestone completed">
          ✅ Financial tracking aligned with business rules
        </div>
        <div className="milestone in-progress">
          🔄 Real data integration in progress
        </div>
      </div>
    </div>
  );
}

function IntelligenceHub() {
  const [entries] = useState([
    {
      id: 1,
      title: "Amazon Commission Optimization",
      content: "Research higher-commission product categories for Lynn Living expansion",
      type: "Opportunity",
      business: "Lynn Living",
      status: "Active",
      priority: "High"
    },
    {
      id: 2,
      title: "Ghana Community Center Grant",
      content: "$50K grant opportunity for community development programs",
      type: "Grant",
      business: "Lynn Care Foundation",
      status: "Researching",
      priority: "High"
    },
    {
      id: 3,
      title: "Home Care Market Expansion",
      content: "Analysis of neighboring areas for service expansion",
      type: "Research",
      business: "Lynn Care Senior Services",
      status: "Complete",
      priority: "Medium"
    }
  ]);

  return (
    <div className="intelligence-hub">
      <div className="dashboard-header">
        <h2>🧠 Intelligence Hub</h2>
        <p>Structured Thinking + Research Repository</p>
      </div>

      <div className="intelligence-grid">
        {entries.map(entry => (
          <div key={entry.id} className="intelligence-card">
<span className={`status ${entry.status.toLowerCase()}`}>
  {entry.status}
</span>
            <div className="card-header">
              <h4>{entry.title}</h4>
              <span className={`priority ${entry.priority.toLowerCase()}`}>
                {entry.priority}
              </span>
            </div>
            <p className="content">{entry.content}</p>
            <div className="card-meta">
              <span className="type">{entry.type}</span>
              <span className="business">{entry.business}</span>
              <span className={`status ${entry.status.toLowerCase()}`}>
                {entry.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button className="add-entry-btn">+ Add Intelligence Entry</button>
    </div>
  );
}

function PersonalSection() {
  return (
    <div className="personal-section">
      <div className="dashboard-header">
        <h2>📝 Personal Section</h2>
        <p>Notes, Health, Sticky Notes</p>
      </div>

      <div className="personal-grid">
        <div className="personal-card sticky-notes">
          <h3>📌 Sticky Notes</h3>
          <p>Quick, temporary notes</p>
          <div className="sticky-preview">
            <div className="sticky">Call accountant about Q1 taxes</div>
            <div className="sticky">Review Ghana project proposal</div>
            <div className="sticky">Update LinkedIn with MYCO project</div>
          </div>
        </div>

        <div className="personal-card journal">
          <h3>📖 Journal</h3>
          <p>Reflection and personal thoughts</p>
          <div className="journal-preview">
            <div className="entry">
              <span className="date">Today</span>
              <span className="text">MYCO restructuring going well...</span>
            </div>
          </div>
        </div>

        <div className="personal-card health">
          <h3>💪 Health Tracker</h3>
          <p>Mood and energy levels</p>
          <div className="health-metrics">
            <div className="metric">
              <span>Energy:</span>
              <span className="value high">High</span>
            </div>
            <div className="metric">
              <span>Mood:</span>
              <span className="value positive">Positive</span>
            </div>
          </div>
        </div>

        <div className="personal-card documents">
          <h3>📄 External Documents</h3>
          <p>Links to Google Docs, Word, etc.</p>
          <div className="doc-links">
            <a href="#" className="doc-link">📄 Business Plan 2024</a>
            <a href="#" className="doc-link">📊 Financial Projections</a>
            <a href="#" className="doc-link">📋 Ghana Project Proposal</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;