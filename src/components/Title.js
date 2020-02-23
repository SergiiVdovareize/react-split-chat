import React from 'react';

function Title({ userName, sendMessage }) {
  return (
    <div className='chat-title'>
      <div className='user-name'>{userName}</div>
    </div>
  );
}

export default Title;
