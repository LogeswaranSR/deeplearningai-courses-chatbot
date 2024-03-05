import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import config from './config';
import 'react-chatbot-kit/build/main.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chatbot 
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider} />
      </header>
    </div>
  );
}

export default App;
