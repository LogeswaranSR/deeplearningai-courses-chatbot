// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "./components/BotAvatar/BotAvatar";

const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: 'Loki',
  customComponents:{
    botAvatar: (props) => <BotAvatar {...props}/>
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: 'purple',
    },
    chatButton: {
      backgroundColor: 'purple',
    },
  },
  state:{
    movieTitles :[ "Gintama", "Attack on Titan" ]
  }
}

export default config