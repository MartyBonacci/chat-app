import React, { Component } from 'react';
import './App.css';

class ChatWindow extends Component {
	constructor(props) {
		super(props);
		this.state = {
			messages:[]
		};
	}

	render() {
		return (
			<div className="ChatWindow">
				<h1>505 react chat app</h1>
				<div className="window">
					{this.state.messages.map(message => {
						return (
							<div>{message}</div>
						)
					})}
				</div>
			</div>
		);
	}
}

export default ChatWindow;
