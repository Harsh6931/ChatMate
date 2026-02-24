import { useState,} from 'react'
import { Chatbot } from 'supersimpledev';
import './chatinput.css';

    export function ChatInput({ chatMessages, setChatMessages, suggestedQuestions = [] }) {
      const [inputText, setInputText] = useState('')
      const [dropdownValue, setDropdownValue] =useState('')
      function saveInputText(event){
        setInputText(event.target.value)

      }
      function handleSelect(event){
        const val = event.target.value
        setInputText(val)
        // reset dropdown to placeholder
        setDropdownValue('')
      }
      function sendMessage(){
        if(!inputText || inputText.trim() === '') return;
            const newChatMessages = [
                ...chatMessages , // spread operator
                {
                    message: inputText,
                    sender: 'user',
                    id:crypto.randomUUID()
                }
            ]
            
            setChatMessages(newChatMessages);
            const response = Chatbot.getResponse(inputText)
            setChatMessages([
                ...newChatMessages , // spread operator
                {
                    message: response,
                    sender: 'bot',
                    id:crypto.randomUUID()
                }
            ]);
            setInputText('');

        }
        return ( 
          <div className="chat-input-container">
            <select
              className="question-dropdown"
              value={dropdownValue}
              onChange={handleSelect}
            >
              <option value="" disabled>Choose a question</option>
              {suggestedQuestions.map((q, idx) => (
                <option key={idx} value={q}>{q}</option>
              ))}
            </select>
              <input 
              placeholder="Send a message to Chatbot" 
              size="30"
              onChange={saveInputText}
                onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); sendMessage(); } }}
              value={inputText} 
              className="chat-input"
            />
            <button
            onClick={sendMessage}
            className="send-button"
            >Send</button>
          </div>
        );
    }

    