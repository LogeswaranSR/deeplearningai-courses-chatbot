// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    parse(message) {  // Parses the User message, Implements Logic and Decides the Next action (Implement LLM Link Here)
      console.log(this.state)

      const lowercase = message.toLowerCase();

      if(lowercase.includes("hello")){
        this.actionProvider.helloWorldHandler();
      }

      if(lowercase.includes("hi")){
        this.actionProvider.greet();
      }

      if(lowercase.includes("todos")){
        this.actionProvider.todosHandler();
      }

      if(lowercase.includes('movie')){
        this.actionProvider.moviesHandler();
      }

      if(lowercase.includes('prog')){
        this.actionProvider.optionsHandler();
      }
    }
}
  
export default MessageParser;
  