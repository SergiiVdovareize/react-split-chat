import React from 'react';

function MessageRow({ timestamp, userName, message, itsMe }) {
  const messageAuthor = () => {
    let author = itsMe ? 'me' : userName
    let classList = 'userName'
    if (itsMe) {
      classList += ' itsme'
    }

    author = author ? `${author}:` : ''
    return (<div className={classList}>{author}</div>)
  }

  const messageText = () => {
    let classList = 'userMessage'
    if (!userName) {
      classList += ' systemMessage'
    }
    return <div className={classList}>{message}</div>
  }

  const messageTime = () => {
    const date = new Date(timestamp)
    const hours = date.getHours().toString().padStart(2, '0')
    const minutes = date.getMinutes().toString().padStart(2, '0')
    const seconds = date.getSeconds().toString().padStart(2, '0')

    return `${hours}:${minutes}:${seconds}`
  }

  return message.trim().length > 0 ?(
    <div className='message-row'>
      {messageAuthor()}
      {messageText()}
      <div className='timestamp'>{messageTime()}</div>
      
    </div>
  ) : null;
}

export default MessageRow;
