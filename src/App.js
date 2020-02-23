import React, { useState } from 'react';
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
    setHistory([...history, messageObject])
  }

  return (
    <div className="App">
      <Wrapper history={history} sendMessage={sendMessage} userName={name1}/>
      <Wrapper history={history} sendMessage={sendMessage} userName={name2}/>
    </div>
  );
}

export default App;
