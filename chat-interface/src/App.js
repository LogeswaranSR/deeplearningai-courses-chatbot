import React from 'react';
import { Chatbot } from 'react-chatbot-kit';
import MessageParser from "./components/Chatbot/MessageParser";
import ActionProvider from "./components/Chatbot/ActionProvider";
import config from './components/Chatbot/config';
import 'react-chatbot-kit/build/main.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{
          position:'fixed',
          right:"25px",
          bottom:"50px",
          boxShadow:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}>
          <Chatbot 
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider} />
        </div>
      </header>
    </div>
  );
}

export default App;
