import React, { Component } from 'react';
import './App.css';

class ChatInput extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newMessage:'',
		};
	}

	handleChange (event) {
		this.setState({newMessage: event.target.value})
	}

	render() {
		return (
			<div className="ChatInput">
				<input type="text" value={this.state.newMessage} onChange={this.handleChange}/>
			</div>
		);
	}
}

export default ChatInput;
