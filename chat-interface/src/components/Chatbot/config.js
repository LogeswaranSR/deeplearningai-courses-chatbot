// Config starter code
import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import BotAvatar from "../BotAvatar/BotAvatar";
import Todos from "../Todos/Todos";
import MovieList from "../Movies/MovieList";
import Options from "../Options/Options";


const config = {
  initialMessages: [createChatBotMessage(`Hello world`)],
  botName: 'Loki',
  customComponents:{
    botAvatar: (props) => <BotAvatar {...props}/>
  },
  customStyles: {
    botMessageBox: {
      backgroundColor: 'rgb(246, 91, 102)',
    },
    chatButton: {
      backgroundColor: 'green',
    },
  },
  state:{
    movieTitles :[],
    todos:[]
  },
  widgets:[
    {
      widgetName:"todos",
      widgetFunc: (props) => <Todos {...props} />,
      mapStateToProps: ['todos']
    },
    {
      widgetName:'movieList',
      widgetFunc: (props) => <MovieList {...props} />,
      mapStateToProps: ['movieTitles']
    },
    {
      widgetName: 'options',
      widgetFunc: (props) => <Options {...props} />,
    },
  ]
}

export default config