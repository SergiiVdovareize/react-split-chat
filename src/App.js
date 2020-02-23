import React, { useState, useEffect } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';

const names = ['James', 'Ellie', 'Hazel', 'Carter', 'Lucy', 'Jack', 'Bob', 'Charlie', 'Juliet', 'Cody', 'Scott', 'Rosie']

const getRandomName = () => {
  return names.splice(Math.floor(Math.random()*names.length), 1)[0]
}

const name1 = getRandomName()
const name2 = getRandomName()

function App() {
  const [history, setHistory] = useState([])

  const sendMessage = (userName, message) => {
    const messageObject = {
      timestamp: new Date(),
      userName,
      message
    }
    const updatedHistory = [...history, messageObject]
    localStorage.setItem('history', JSON.stringify(updatedHistory))
    setHistory(updatedHistory)
  }

  useEffect(() => {
    const history = localStorage.getItem('history')
    if (history) {
      setHistory(JSON.parse(history))
    }
  }, [])

  return (
    <div className="App">
      <Wrapper history={history} sendMessage={sendMessage} userName={name1}/>
      <Wrapper history={history} sendMessage={sendMessage} userName={name2}/>
    </div>
  );
}

export default App;
