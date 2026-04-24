import React, { useState, useEffect, useRef } from 'react';
import { useChat, useLocalParticipant } from '@livekit/components-react';

const CustomChat = ({ isOpen, onClose }) => {
  const { chatMessages, send } = useChat();
  const { localParticipant } = useLocalParticipant();
  const [message, setMessage] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleSend = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await send(message);
      setMessage('');
    }
  };

  if (!isOpen) return null;

  return (
    <div className="custom-chat-container">
      <div className="custom-chat-header">
        <h3>Class Chat</h3>
        <button onClick={onClose} className="close-btn">&times;</button>
      </div>

      <div className="custom-chat-messages" ref={scrollRef}>
        {chatMessages.map((msg, i) => {
          const isSelf = msg.from?.identity === localParticipant.identity;
          return (
            <div key={i} className={`chat-message-row ${isSelf ? 'self' : 'others'}`}>
              {!isSelf && (
                <div className="chat-author-col">
                  <div className="chat-avatar"></div>
                  <span className="chat-author-name">{msg.from?.name || msg.from?.identity}</span>
                </div>
              )}
              <div className="chat-bubble-wrapper">
                <div className="chat-bubble">
                  {msg.message}
                  <span className="chat-time">
                    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <form className="custom-chat-input-area" onSubmit={handleSend}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default CustomChat;
