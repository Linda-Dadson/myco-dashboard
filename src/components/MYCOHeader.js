import React from 'react';

function MYCOHeader() {
  return (
    <header style={{
      padding: '20px 30px',
      background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
      borderBottom: '3px solid #3498db'
    }}>
      <div>
        <h1 style={{
          margin: 0,
          fontSize: '32px',
          fontWeight: 900,
          letterSpacing: '3px',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          MYCO
        </h1>
        <p style={{
          margin: 0,
          fontSize: '11px',
          opacity: 0.9,
          textTransform: 'uppercase',
          letterSpacing: '1px'
        }}>
          Multi-Business Operations Command Center
        </p>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '25px'
      }}>
        <div style={{
          display: 'flex',
          gap: '10px'
        }}>
          <span style={{
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            background: 'rgba(46, 204, 113, 0.2)',
            border: '1px solid #2ecc71',
            color: '#2ecc71'
          }}>
            Lynn Living
          </span>
          <span style={{
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            background: 'rgba(52, 152, 219, 0.2)',
            border: '1px solid #3498db',
            color: '#3498db'
          }}>
            Lynn Care
          </span>
          <span style={{
            padding: '4px 8px',
            borderRadius: '12px',
            fontSize: '10px',
            fontWeight: 600,
            textTransform: 'uppercase',
            background: 'rgba(241, 196, 15, 0.2)',
            border: '1px solid #f1c40f',
            color: '#f1c40f'
          }}>
            NGO Ghana
          </span>
        </div>
        
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <span style={{
            fontSize: '14px',
            fontWeight: 500
          }}>
            Welcome, Linda!
          </span>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.2)',
            border: '2px solid rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            fontSize: '16px'
          }}>
            L
          </div>
        </div>
      </div>
    </header>
  );
}

export default MYCOHeader;