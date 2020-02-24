import React, { useState, useEffect } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import ChatPanel from './components/ChatPanel';
import origNames from './names.json';

const DEFAULT_GROUP_SIZE = 2
const MAX_GROUP_SIZE = 6

function App() {
  const initialParticipants = () => JSON.parse(localStorage.getItem('participants')) || []
  const initialGroupSize = () => parseInt(localStorage.getItem('groupSize'), 10) || DEFAULT_GROUP_SIZE
  const initialHistory = () => JSON.parse(localStorage.getItem('history')) || []
  let names = {...origNames}

  const [history, setHistory] = useState(initialHistory)
  const [participants, setParticipants] = useState(initialParticipants)
  const [groupSize, setGroupSize] = useState(initialGroupSize)

  const getRandomName = () => {
    var keys = Object.keys(names)
    const name = keys[keys.length * Math.random() << 0]
    const color = names[name]
    delete names[name]
    return { name, color }
  }

  const removeUsedNames = () => {
    participants.forEach(({ name }) => {
      delete names[name]
    })
  }

  const sendMessage = (userName, message) => {
    const messageObject = {
      timestamp: (new Date()).getTime(),
      userName,
      message
    }
    setHistory([...history, messageObject])
  }

  const clearHistory = () => {
    setHistory([])
  }

  const addParticipant = () => {
    setGroupSize(groupSize + 1)
  }

  const refreshParticipants = () => {
    setParticipants([])
    setGroupSize(DEFAULT_GROUP_SIZE)
    names = {...origNames}
  }

  useEffect(() => {
    removeUsedNames()
  }, [])

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

  useEffect(() => {
    localStorage.setItem('participants', JSON.stringify(participants))
  }, [participants])

  useEffect(() => {
    localStorage.setItem('groupSize', groupSize)

    const users = [...participants]
    while (users.length < groupSize) {
      users.push(getRandomName())
    }
    
    setParticipants(users)
  }, [groupSize, participants.length])

  return (
    <div className="application">
      <div className="chat-group">
        {participants.map((participant, index) => <Wrapper key={index} history={history} sendMessage={sendMessage} participant={participant}/>)}
      </div>

      <ChatPanel clearHistory={clearHistory} addParticipant={addParticipant} refreshParticipants={refreshParticipants} noMoreChats={groupSize === MAX_GROUP_SIZE}/>
    </div>
  );
}

export default App;
