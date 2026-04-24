import React from 'react';
import { useNavigate } from 'react-router-dom';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="container flex-center" style={{ minHeight: '100vh' }}>
      <div className="glass-card animate-fade-in" style={{ textAlign: 'center', maxWidth: '600px' }}>
        <h1>e-Class</h1>
        <p className="text-dim" style={{ fontSize: '1.2rem', marginBottom: '2.5rem' }}>
          Simplified online classes for IST students
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
          <button
            onClick={() => navigate('/create')}
            style={{
              padding: '2rem 1.5rem',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <span><img src="/teacher-icon.png" alt="teacher" style={{ width: '100px', height: '100px', objectFit: 'contain' }} /> </span>
            <span style={{ fontSize: '1.1rem' }}>I'm a Teacher</span>
            <small style={{ opacity: 0.9, fontWeight: 400 }}>Create a new class</small>
          </button>

          <button
            onClick={() => navigate('/join')}
            style={{
              background: '#ffffff',
              border: '1px solid var(--border)',
              color: 'var(--text-main)',
              padding: '2rem 1.5rem',
              height: 'auto',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem'
            }}
          >
            <span><img src="/student-icon.png" alt="student" style={{ width: '100px', height: '100px', objectFit: 'contain' }} /></span>
            <span style={{ fontSize: '1.1rem' }}>I'm a Student</span>
            <small style={{ opacity: 0.9, fontWeight: 400 }}>Join with a PIN</small>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
