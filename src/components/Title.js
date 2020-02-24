import React from 'react';

function Title({ userName, backColor, exitChat }) {
  const exitClickHandler = () => {
    exitChat(userName)
  }

  return (
    <div className='chat-title' style={{backgroundColor: `#${backColor}`}}>
      <div className='user-name'>{userName}</div>
      <input type='button' className='exit-chat' value='Exit' onClick={exitClickHandler}/>
    </div>
  );
}

export default Title;
