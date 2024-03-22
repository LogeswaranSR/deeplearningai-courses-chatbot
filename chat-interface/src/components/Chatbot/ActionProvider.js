// ActionProvider starter code
class ActionProvider {
    constructor(
     createChatBotMessage,
     setStateFunc,
     createClientMessage,
     stateRef,
     createCustomMessage,
     ...rest
   ) {
     this.createChatBotMessage = createChatBotMessage;
     this.setState = setStateFunc;
     this.createClientMessage = createClientMessage;
     this.stateRef = stateRef;
     this.createCustomMessage = createCustomMessage;
   }

   greet = () => {
    const greeting = this.createChatBotMessage("Hello there!. I am Loki");
    this.setChatbotMessage(greeting)
   }

   setChatbotMessage = (message) => {
    this.setState(state => ({ ...state, messages: [...state.messages, message]}))
   }

   helloWorldHandler = () => {
    const message = this.createChatBotMessage("Hello. I am not self-aware.")
    this.setChatbotMessage(message)
   }

   todosHandler = () => {
    const message = this.createChatBotMessage("Todo List:", {
      widget: 'todos'
    })
    this.setChatbotMessage(message)
   }

   moviesHandler = () => {
    const message = this.createChatBotMessage("Sure. Here are some movies currently in our Database.", {
      widget: 'movieList'
    })
    this.setChatbotMessage(message)
   }

   optionsHandler = () => {
    const message = this.createChatBotMessage("Here are our Programming Language Options:", {
      widget: 'options'
    })
    this.setChatbotMessage(message);
   }
}
 
export default ActionProvider;