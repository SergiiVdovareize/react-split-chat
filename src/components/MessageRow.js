import React from 'react';

function MessageRow({ timestamp, userName, message, itsMe }) {
  const messageAuthor = () => {
    const author = itsMe ? 'me' : userName
    let classList = 'userName'
    if (itsMe) {
      classList += ' itsme'
    }
    return (<div className={classList}>{author}:</div>)
  }

  const messageTime = () => {
    const hours = timestamp.getHours().toString().padStart(2, '0')
    const minutes = timestamp.getMinutes().toString().padStart(2, '0')
    const seconds = timestamp.getSeconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  return (
    <div className='message-row'>
      {messageAuthor()}
      <div className='userMessage'>{message}</div>
      <div className='timestamp'>{messageTime()}</div>
      
    </div>
  );
}

export default MessageRow;
