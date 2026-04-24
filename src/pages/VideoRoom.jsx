import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  LiveKitRoom,
  RoomAudioRenderer,
  useChat,
  VideoConference,
} from '@livekit/components-react';
import { Track } from 'livekit-client';
import '@livekit/components-styles';
import CustomChat from '../components/CustomChat';

const VideoRoom = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { token, pin, isHost } = location.state || {};
  const [isChatOpen, setIsChatOpen] = useState(false);

  // You'll get this from your LiveKit Cloud dashboard
  const serverUrl = import.meta.env.VITE_LIVEKIT_URL || 'wss://your-project.livekit.cloud';

  if (!token) {
    return (
      <div className="container flex-center">
        <div className="glass-card">
          <p>Invalid session. Please join again.</p>
          <button onClick={() => navigate('/')}>Go Home</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ height: '100vh', width: '100vw', background: 'var(--bg-main)', display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
      {/* Top Header Bar */}
      <div style={{
        padding: '0.75rem 2rem',
        background: '#ffffff',
        borderBottom: '1px solid var(--border)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 10,
        flexShrink: 0
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <h3 style={{ margin: 0, fontWeight: 700, color: 'var(--primary)' }}>e-Class <sup style={{ color: 'var(--primary)', fontSize: '12px', fontWeight: 700 }}>IST</sup> </h3>
          <div style={{ padding: '0.2rem 0.6rem', background: '#e7f3ff', color: 'var(--primary)', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
            {isHost ? 'TEACHER' : 'STUDENT'}
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <div style={{ textAlign: 'right' }}>
            <small className="text-dim" style={{ fontSize: '0.7rem', textTransform: 'uppercase', fontWeight: 700 }}>Class PIN</small>
            <div style={{ fontWeight: 700, fontSize: '1.1rem', color: 'var(--text-main)', letterSpacing: '1px' }}>{pin}</div>
          </div>
        </div>
      </div>

      {/* LiveKit Video Room */}
      <div style={{ flex: 1, position: 'relative', display: 'flex', overflow: 'hidden' }}>
        <LiveKitRoom
          video={true}
          audio={true}
          token={token}
          serverUrl={serverUrl}
          onDisconnected={() => navigate('/')}
          data-lk-theme="default"
          style={{ flex: 1, display: 'flex', overflow: 'hidden' }}
        >
          <VideoRoomContent isChatOpen={isChatOpen} setIsChatOpen={setIsChatOpen} />
          <RoomAudioRenderer />
        </LiveKitRoom>
      </div>
    </div>
  );
};

const VideoRoomContent = ({ isChatOpen, setIsChatOpen }) => {
  const [unreadCount, setUnreadCount] = useState(0);
  const { chatMessages } = useChat();
  const lastCountRef = React.useRef(0);

  // Synchronize unread count
  useEffect(() => {
    if (!isChatOpen) {
      const newMessages = chatMessages.length - lastCountRef.current;
      if (newMessages > 0) {
        setUnreadCount(prev => prev + newMessages);
      }
    }
    lastCountRef.current = chatMessages.length;
  }, [chatMessages, isChatOpen]);

  useEffect(() => {
    if (isChatOpen) {
      setUnreadCount(0);
      lastCountRef.current = chatMessages.length;
    }
  }, [isChatOpen, chatMessages.length]);

  return (
    <>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
        <VideoConference />

        {/* Floating Chat Toggle */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="lk-button"
          style={{
            position: 'absolute',
            bottom: '12px',
            right: '20px',
            zIndex: 100,
            background: isChatOpen ? 'var(--primary)' : 'white',
            color: isChatOpen ? 'white' : 'var(--text-main)',
            border: '1px solid var(--border)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '2px',
            padding: '8px 16px',
            height: '48px',
            minWidth: '60px',
            borderRadius: '8px',
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
          }}
        >
          {unreadCount > 0 && !isChatOpen && (
            <span style={{
              position: 'absolute',
              top: '-5px',
              right: '-5px',
              background: '#ff0000',
              color: 'white',
              borderRadius: '50%',
              minWidth: '20px',
              height: '20px',
              fontSize: '11px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: '900',
              boxShadow: '0 0 0 2px white',
              zIndex: 1001,
              pointerEvents: 'none'
            }}>
              {unreadCount}
            </span>
          )}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span style={{ fontSize: '10px', fontWeight: 700 }}>CHAT</span>
        </button>
      </div>
      <CustomChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </>
  );
};

export default VideoRoom;
