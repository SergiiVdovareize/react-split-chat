import React from 'react';
import MessageField from './MessageField';
import Title from './Title';
import Conversation from './Conversation';

function Wrapper({ participant: {name, color}, history, sendMessage, exitChat }) {
  const sendMessageWrapper = (message) => {
    sendMessage(name, message)
  }

  return (
    <div className="chat-wrapper">
      <div className="chat-content">
        <Title userName={name} backColor={color} exitChat={exitChat}/>
        <Conversation history={history} userName={name}/>
        <MessageField sendMessage={sendMessageWrapper}/>
      </div>
    </div>
  );
}

export default Wrapper;
