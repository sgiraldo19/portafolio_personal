import React from 'react';

import { useModal } from '../../hooks/useModal';

import './chat.css';

// REFACTOR: Usar hook personalizado para gestionar modal (S.O.L.I.D - SRP)
const Chatbot = () => {
  const { isOpen, toggle } = useModal(false);

  return (
    <>
      <button
        className="chatbot-toggle-button"
        onClick={toggle}
        aria-label="Toggle chatbot"
        aria-expanded={isOpen}
      >
        🤖
      </button>

      {isOpen && (
        <div className="chatbot-popup">
          <iframe
            className="chatbot-frame"
            src="https://copilotstudio.microsoft.com/environments/Default-6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1/bots/cr3a3_botNavi/webchat?__version__=2"
            title="Copilot Chatbot"
          />
        </div>
      )}
    </>
  );
};

export default Chatbot;
