import React from 'react';
import MessageRow from './MessageRow';

function Conversation({ history, userName }) {
  return (
    <div className='conversation'>
      {history.map(data => <MessageRow userName={data.userName} timestamp={data.timestamp} message={data.message} itsMe={data.userName === userName}/>)}
    </div>
  );
}

export default Conversation;
