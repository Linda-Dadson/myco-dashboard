
import React, { useState } from 'react';
import './App.css';
import MYCOHeader from './components/MYCOHeader';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');

  const renderDashboard = () => (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>🏛️ MYCO Business Operations</h2>
        <p>3 Primary Business Entities with Platform Sub-levels</p>
      </div>

      <div className="business-grid">
        {/* Lynn Living Card */}
        <div className="business-card lynn-living-card">
          <div className="status online">ONLINE</div>
          <h3>Lynn Living</h3>
          <p>E-commerce / Brand / Content Engine</p>
          
          <div className="platforms">
            <span className="platform amazon">📦 Amazon</span>
            <span className="platform etsy">🛍️ Etsy</span>
            <span className="platform tiktok">🎵 TikTok</span>
            <span className="platform youtube">📺 YouTube</span>
          </div>

          {/* YouTube Analytics */}
          <div className="youtube-analytics">
            <div className="youtube-header">
              <span className="youtube-icon">📺</span>
              <span className="channel-name">MyLynnLiving Channel</span>
            </div>
            <div className="youtube-stats">
              <div className="stat">
                <span className="stat-value">2.4K</span>
                <span className="stat-label">Subscribers</span>
              </div>
              <div className="stat">
                <span className="stat-value">45K</span>
                <span className="stat-label">Views</span>
              </div>
              <div className="stat">
                <span className="stat-value">23</span>
                <span className="stat-label">Videos</span>
              </div>
            </div>
          </div>

          <div className="financial-summary">
            <div className="metric">
              <span className="label">Monthly Revenue</span>
              <span className="value">$2,450</span>
            </div>
            <div className="metric">
              <span className="label">Active Platforms</span>
              <span className="value">4</span>
            </div>
          </div>
        </div>

        {/* Lynn Care Senior Services Card */}
        <div className="business-card lynn-care-card">
          <div className="status active">ACTIVE</div>
          <h3>Lynn Care Senior Services</h3>
          <p>Home Care Services</p>
          
          <div className="platforms">
            <span className="platform clients">👥 Client Management</span>
            <span className="platform scheduling">📅 Scheduling</span>
          </div>

          <div className="financial-summary">
            <div className="metric">
              <span className="label">Monthly Revenue</span>
              <span className="value">$8,200</span>
            </div>
            <div className="metric">
              <span className="label">Active Clients</span>
              <span className="value">12</span>
            </div>
          </div>
        </div>

        {/* Lynn Care Foundation Card */}
        <div className="business-card foundation-card">
          <div className="status running">RUNNING</div>
          <h3>Lynn Care Foundation</h3>
          <p>Nonprofit / Impact Engine</p>
          
          <div className="platforms">
            <span className="platform donations">💝 Donations</span>
            <span className="platform grants">🎯 Grants</span>
            <span className="platform ghana">🌍 Ghana Programs</span>
          </div>

          <div className="financial-summary">
            <div className="metric">
              <span className="label">Funds Received</span>
              <span className="value">$5,600</span>
            </div>
            <div className="metric">
              <span className="label">Remaining Funds</span>
              <span className="value">$3,200</span>
            </div>
          </div>
        </div>
      </div>

      {/* Development Progress Section */}
      <div className="progress-section">
        <h3>🚧 Development Progress</h3>
        <div className="milestone completed">✅ MYCO structure implemented with proper business hierarchy</div>
        <div className="milestone completed">✅ Intelligence Hub integrated for structured thinking</div>
        <div className="milestone completed">✅ Financial tracking aligned with business rules</div>
        <div className="milestone in-progress">🔄 Real data integration in progress</div>
      </div>
    </div>
  );

  const renderIntelligenceHub = () => (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>🧠 Intelligence Hub</h2>
        <p>Structured Thinking + Research Repository</p>
      </div>

      <div className="intelligence-grid">
        <div className="intelligence-card">
          <div className="card-header">
            <h4>Amazon Commission Optimization</h4>
            <span className="priority high">HIGH</span>
          </div>
          <div className="content">
            Research higher-commission product categories for Lynn Living expansion. Focus on home decor and wellness products.
          </div>
          <div className="card-meta">
            <span className="type">Opportunity</span>
            <span className="business">Lynn Living</span>
            <span className="status active">Active</span>
          </div>
        </div>

        <div className="intelligence-card">
          <div className="card-header">
            <h4>Ghana Community Center Grant</h4>
            <span className="priority high">HIGH</span>
          </div>
          <div className="content">
            $50K grant opportunity for community development programs. Application deadline approaching in 6 weeks.
          </div>
          <div className="card-meta">
            <span className="type">Research</span>
            <span className="business">Lynn Care Foundation</span>
            <span className="status researching">Researching</span>
          </div>
        </div>

        <div className="intelligence-card">
          <div className="card-header">
            <h4>Home Care Market Expansion</h4>
            <span className="priority medium">MEDIUM</span>
          </div>
          <div className="content">
            Analysis of neighboring areas for service expansion. Identified 3 potential markets with high senior population.
          </div>
          <div className="card-meta">
            <span className="type">Research</span>
            <span className="business">Lynn Care Senior Services</span>
            <span className="status complete">Complete</span>
          </div>
        </div>
      </div>

      <button className="add-entry-btn">+ Add Intelligence Entry</button>
    </div>
  );

  const renderPersonal = () => (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>📝 Personal Section</h2>
        <p>Personal notes, health tracking, and productivity tools</p>
      </div>

      <div className="personal-grid">
        <div className="personal-card">
          <h3>📌 Sticky Notes</h3>
          <p>Quick reminders and tasks</p>
          <div className="sticky-preview">
            <div className="sticky">Call accountant about Q1 taxes</div>
            <div className="sticky">Review Ghana project proposal</div>
            <div className="sticky">Update LinkedIn with MYCO project</div>
          </div>
        </div>

        <div className="personal-card">
          <h3>📂 Journal</h3>
          <p>Reflection and personal thoughts</p>
          <div className="journal-preview">
            <div className="entry">
              <span className="date">Today</span>
              <span className="text">MYCO restructuring going well...</span>
            </div>
          </div>
        </div>

        <div className="personal-card">
          <h3>💪 Health Tracker</h3>
          <p>Current status and metrics</p>
          <div className="health-metrics">
            <div className="metric">
              <span className="label">Energy</span>
              <span className="value high">High</span>
            </div>
            <div className="metric">
              <span className="label">Mood</span>
              <span className="value positive">Positive</span>
            </div>
          </div>
        </div>

        <div className="personal-card">
          <h3>📄 External Documents</h3>
          <p>Links to Google Docs, Word, etc.</p>
          <div className="doc-links">
            <a href="#" className="doc-link">Business Plan 2026</a>
            <a href="#" className="doc-link">Financial Projections</a>
            <a href="#" className="doc-link">Ghana Project Proposal</a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="App">
      <MYCOHeader 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <main>
        {activeSection === 'dashboard' && renderDashboard()}
        {activeSection === 'intelligence' && renderIntelligenceHub()}
        {activeSection === 'personal' && renderPersonal()}
      </main>
    </div>
  );
}

export default App;