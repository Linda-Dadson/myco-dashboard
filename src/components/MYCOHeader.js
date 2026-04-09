import React from 'react';

function MYCOHeader({ activeSection, setActiveSection }) {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo-section">
          <h1>MYCO</h1>
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
  );
}

export default MYCOHeader;