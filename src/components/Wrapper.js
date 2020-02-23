import React from 'react';
import MessageField from './MessageField';
import Title from './Title';
import Conversation from './Conversation';

function Wrapper({ userName, history, sendMessage }) {
  const sendMessageWrapper = (message) => {
    sendMessage(userName, message)
  }

  return (
    <div className="chat-wrapper">
      <div className="chat-content">
        <Title userName={userName}/>
        <Conversation history={history} userName={userName}/>
        <MessageField sendMessage={sendMessageWrapper}/>
      </div>
    </div>
  );
}

export default Wrapper;
