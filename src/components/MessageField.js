import React from 'react';

function MessageField({ sendMessage }) {
  const sendMessageWrapper = (ev) => {
    ev.preventDefault()
    
    const message = ev.target.elements['message-text'].value.trim()
    if (message.length > 0) {
      ev.target.elements['message-text'].value = ''
      sendMessage(message)
    }
  }

  return (
    <div className='message-field-container'>
      <form action='#' onSubmit={sendMessageWrapper}>
        <input type='text' name='message-text' className='message-text' placeholder='say something' autoComplete='off'></input>
        <input type='submit' className='message-button btn' value='Send'/>
      </form>
    </div>
  );
}

export default MessageField;
