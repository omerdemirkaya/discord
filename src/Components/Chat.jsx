import { useState } from 'react';
import styled from "styled-components";
import { useUser } from './UserContext';

const ChatWrapper = styled.div`
  width: 65%;
  height: calc(95vh); /* Header yüksekliğini çıkararak ayarlarız */
  background-color: #313338;
  display: flex;
  flex-direction: column; /* Üstten alta sıralama için */
  border-right: 1px solid black;
`;

const UserName = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #424549;
  color: white;
  font-size: 1.2rem;
  border-bottom: 1px solid #595A5E;
`;

const MessagesContainer = styled.div`
  flex: 1; /* Mesajlar alanının kalan tüm boşluğu kaplamasını sağlar */
  padding: 10px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px; /* Mesajlar arasında boşluk */
`;

const Message = styled.div`
  background-color: #2b2d31;
  color: white;
  padding: 10px;
  border-radius: 5px;
  max-width: 80%;
  align-self: ${props => props.isSender ? 'flex-end' : 'flex-start'};
`;

const MessageInputWrapper = styled.div`
  width: 100%;
  padding: 10px;
  background-color: #424549;
  border-top: 1px solid #595A5E;
`;

const MessageInput = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #2b2d31;
  color: white;
`;

const Chat = () => {
  const { selectedUser } = useUser();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;
    setMessages([...messages, { text: newMessage, isSender: true }]); // Gönderici mesajı
    setNewMessage(""); // Input'u temizle
  };

  return (
    <ChatWrapper>
      <UserName>
        {selectedUser ? `Mesajlaşmakta olduğunuz kullanıcı: ${selectedUser}` : 'Bir kullanıcı seçin'}
      </UserName>
      <MessagesContainer>
        {messages.map((msg, index) => (
          <Message key={index} isSender={msg.isSender}>
            {msg.text}
          </Message>
        ))}
      </MessagesContainer>
      <MessageInputWrapper>
        <MessageInput
          placeholder="Mesajınızı buraya yazın..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
        />
      </MessageInputWrapper>
    </ChatWrapper>
  );
};

export default Chat;
