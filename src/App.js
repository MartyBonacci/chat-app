import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from './ChatWindow';
import ChatInput from './ChatInput';

class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
      	messages:[
      		'hello world',
				'sadfasdfsadfd',
			],
		};
   }

  render() {
    return (
      <div className="App">
			<ChatWindow messages={this.state.messages}/>
			<ChatInput/>
      </div>
    );
  }
}

export default App;
