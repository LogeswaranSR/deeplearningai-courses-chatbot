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

   setChatbotMessage = (message) => {
    this.setState(state => ({ ...state, messages: [...state.messages, message]}))
   }

   helloWorldHandler = () => {
    const message = this.createChatBotMessage("Hello. I am not self-aware.")
    this.setChatbotMessage(message)
   }
}
 
export default ActionProvider;