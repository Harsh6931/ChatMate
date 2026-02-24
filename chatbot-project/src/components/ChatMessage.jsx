import RobotProfileImage from '../assets/robot.png';
import UserProfileImage from '../assets/user.png';
import './chatmessage.css';

    export function ChatMessage(props) {  
        const message = props.message; 
        const sender = props.sender;

        return (
            <div className={sender === 'user' ? 'chat-message-container-user' : 'chat-message-container-robot'}>
            {sender === 'bot' && <img src={RobotProfileImage} className="chat-message-profile" />} 
            <div className="chat-message-contents">
                {message}
            </div>
            {sender === 'user' && <img src={UserProfileImage} className="chat-message-profile" />}
            </div>
        );

    }