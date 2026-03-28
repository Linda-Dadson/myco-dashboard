import React from 'react';
import MYCOHeader from './components/MYCOHeader';

function App() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#f8f9fa'
    }}>
      <MYCOHeader />
      
      <main style={{
        padding: '40px',
        textAlign: 'center',
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <h2 style={{
          color: '#2c3e50',
          marginBottom: '20px',
          fontSize: '32px'
        }}>
          🏦 MYCO Command Center
        </h2>
        
        <p style={{
          color: '#6c757d',
          fontSize: '18px',
          marginBottom: '30px'
        }}>
          Professional Multi-Business Operations Dashboard
        </p>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          marginTop: '30px'
        }}>
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'left'
          }}>
            <h3 style={{
              color: '#2ecc71',
              marginBottom: '10px'
            }}>
              Lynn Living
            </h3>
            <p style={{
              color: '#6c757d',
              marginBottom: '15px'
            }}>
              E-commerce Operations
            </p>
            <div style={{
              background: '#d4edda',
              color: '#155724',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              display: 'inline-block'
            }}>
              Online
            </div>
          </div>
          
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'left'
          }}>
            <h3 style={{
              color: '#3498db',
              marginBottom: '10px'
            }}>
              Lynn Care
            </h3>
            <p style={{
              color: '#6c757d',
              marginBottom: '15px'
            }}>
              Home Care Agency
            </p>
            <div style={{
              background: '#cce7ff',
              color: '#004085',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              display: 'inline-block'
            }}>
              Active
            </div>
          </div>
          
          <div style={{
            background: 'white',
            borderRadius: '15px',
            padding: '25px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            textAlign: 'left'
          }}>
            <h3 style={{
              color: '#f1c40f',
              marginBottom: '10px'
            }}>
              NGO Ghana
            </h3>
            <p style={{
              color: '#6c757d',
              marginBottom: '15px'
            }}>
              Community Development
            </p>
            <div style={{
              background: '#fff3cd',
              color: '#856404',
              padding: '6px 12px',
              borderRadius: '20px',
              fontSize: '12px',
              fontWeight: 600,
              display: 'inline-block'
            }}>
              Running
            </div>
          </div>
        </div>
        
        <div style={{
          background: 'white',
          borderRadius: '15px',
          padding: '30px',
          boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
          textAlign: 'left',
          marginTop: '30px'
        }}>
          <h3 style={{
            color: '#27ae60',
            marginBottom: '20px',
            fontSize: '24px'
          }}>
            🎉 Development Progress
          </h3>
          <ul style={{
            listStyle: 'none',
            padding: 0
          }}>
            <li style={{
              padding: '10px 0',
              fontSize: '16px',
              color: '#2c3e50',
              borderBottom: '1px solid #f1f1f1'
            }}>
              ✅ Professional development environment established
            </li>
            <li style={{
              padding: '10px 0',
              fontSize: '16px',
              color: '#2c3e50',
              borderBottom: '1px solid #f1f1f1'
            }}>
              ✅ Banking-level security practices implemented
            </li>
            <li style={{
              padding: '10px 0',
              fontSize: '16px',
              color: '#2c3e50',
              borderBottom: '1px solid #f1f1f1'
            }}>
              ✅ Multi-business header component created
            </li>
            <li style={{
              padding: '10px 0',
              fontSize: '16px',
              color: '#2c3e50'
            }}>
              ✅ Foundation ready for cloud deployment
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;