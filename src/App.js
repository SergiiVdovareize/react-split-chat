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

  const refreshUsedNames = () => {
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

  const exitChat = (user) => {
    const updatedParticipants = [...participants]

    const found = updatedParticipants.find(elem => elem.name === user)
    updatedParticipants.splice(updatedParticipants.indexOf(found), 1)

    const messageObject = {
      timestamp: (new Date()).getTime(),
      userName: null,
      message: `${found.name} leaves the group`
    }

    setHistory([...history, messageObject])
    setParticipants(updatedParticipants)
    setGroupSize(groupSize - 1)
  }

  useEffect(() => {
    refreshUsedNames()
  }, [participants])

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history))
  }, [history])

  useEffect(() => {
    localStorage.setItem('participants', JSON.stringify(participants))
  }, [participants])

  useEffect(() => {
    localStorage.setItem('groupSize', groupSize)

    const users = [...participants]
    const log = [...history]
    while (users.length < groupSize) {
      const newUserName = getRandomName()
      const messageObject = {
        timestamp: (new Date()).getTime(),
        userName: null,
        message: `${newUserName.name} enters the group`
      }
      log.push(messageObject)
      users.push(newUserName)
    }
    
    setParticipants(users)
    setHistory(log)
  }, [groupSize, participants.length])

  return (
    <div className="application">
      <div className="chat-group">
        {participants.map((participant, index) => <Wrapper key={index} 
            history={history} 
            sendMessage={sendMessage} 
            participant={participant}
            exitChat={exitChat}/>)}
      </div>

      <ChatPanel clearHistory={clearHistory}
          addParticipant={addParticipant}
          refreshParticipants={refreshParticipants}
          noMoreChats={groupSize === MAX_GROUP_SIZE}/>
    </div>
  );
}

export default App;
