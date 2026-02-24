import { useState} from 'react'
import { Chatbot } from 'supersimpledev';
import { ChatInput } from './components/Chatinput.jsx';
import { ChatMessage } from './components/ChatMessage.jsx';
import { ChatMessages } from './components/chatMessages.jsx';

import './App.css'

function App() {
        const [chatMessages, setChatMessages] = useState([

            {
                message: "Hello Chatbot",
                sender: "user",
                id:"id1"   // key 
            },
            {
                message: "Hello! How Can I help you?",
                sender: "bot",
                id:"id2"
            },
            {
                message: "What is todays date?",
                sender: "user",
                id:"id3"
            },
            {
                message: "Today is Febrauary 20",
                sender: "bot",
                id:"id4"
            }
        ]);
        const [positionTop, setPositionTop] = useState(false);

        const togglePosition = () => setPositionTop(p => !p);

        const containerClass = `chatbot-container ${positionTop ? 'chatbot-container-top' : 'chatbot-container-bottom'}`;

        const suggested = (() => {
          const defaultSuggestions = [
            'What is todays date?',
            'How are you?',
            'Tell me about yourself',
            'What can you do?',
            'How to make a website?'
          ];

          try {
            if (!window.Chatbot) return defaultSuggestions;

            // Collect keys from known response containers
            const responses = {
              ...(Chatbot.defaultResponses || {}),
              ...(Chatbot.additionalResponses || {})
            };

            const keys = Object.keys(responses || {});
            if (!keys.length) return defaultSuggestions;

            // Normalize keys: replace newlines with spaces and trim
            const normalized = keys.map(k => ('' + k).replace(/\s+/g, ' ').trim()).filter(Boolean);

            // Deduplicate while preserving order
            const unique = [];
            const seen = new Set();
            for (const s of normalized) {
              if (!seen.has(s)) {
                seen.add(s);
                unique.push(s);
              }
            }

            return unique.length ? unique : defaultSuggestions;
          } catch (e) {
            console.warn('Failed to load suggested questions from Chatbot', e);
            return defaultSuggestions;
          }
        })();

        return (
          <div className={containerClass}>
            {positionTop && (
              <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                suggestedQuestions={suggested}
              />
            )}

            <ChatMessages
              chatMessages={chatMessages}
            />

            {!positionTop && (
              <ChatInput
                chatMessages={chatMessages}
                setChatMessages={setChatMessages}
                suggestedQuestions={suggested}
              />
            )}

            <div className="position-switcher-container">
              <span className="position-switcher" onClick={togglePosition}>
                {positionTop ? 'Move textbox to bottom' : 'Move textbox to top'}
              </span>
            </div>
          </div>
        );
    }
export default App
