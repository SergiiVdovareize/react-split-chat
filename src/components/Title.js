import React from 'react';

function Title({ userName, backColor }) {
  return (
    <div className='chat-title' style={{backgroundColor: `#${backColor}`}}>
      <div className='user-name'>{userName}</div>
    </div>
  );
}

export default Title;
