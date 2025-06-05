import React, { useState } from "react";

import './chat.css'

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <button className="chatbot-toggle-button" onClick={toggleChatbot}>
                🤖
            </button>

            {isOpen && (
                <div className="chatbot-popup">
                    <iframe
                        className="chatbot-frame"
                        src="https://copilotstudio.microsoft.com/environments/Default-6ca34ae1-466f-44bc-a7aa-0ac5a78c61b1/bots/cr3a3_botNavi/webchat?__version__=2"
                        title="Copilot Chatbot"
                    ></iframe>
                </div>
            )}
        </>
    );
};

export default Chatbot;
