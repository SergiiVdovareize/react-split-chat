import React from 'react';

function ChatPanel({ noMoreChats, clearHistory, addParticipant, refreshParticipants }) {
  return (
    <div className='chat-panel'>
      <input type='button' className='btn' value='Clear history' onClick={clearHistory}/>
      <input type='button' className='btn' value='Refresh participants' onClick={refreshParticipants}/>
      <input type='button' className='btn' value='Add participant' disabled={noMoreChats === true} onClick={addParticipant}/>
    </div>
  );
}

export default ChatPanel;
