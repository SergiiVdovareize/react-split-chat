import React from 'react';

function MessageField({ sendMessage }) {
  const sendMessageWrapper = (ev) => {
    ev.preventDefault()
    
    const message = ev.target.elements['message-text'].value
    ev.target.elements['message-text'].value = ''
    sendMessage(message)
  }

  return (
    <div className='message-field-container'>
      <form action='#' onSubmit={sendMessageWrapper}>
        <input type='text' name='message-text' className='message-text' placeholder='say something'></input>
        <input type='submit' className='message-button' value='Send'/>
      </form>
    </div>
  );
}

export default MessageField;
