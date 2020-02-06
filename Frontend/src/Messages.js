import React, { Component } from 'react'
// DEBUG COMPONENT
class Messages extends Component {
	constructor() {
		super();
		this.state = { response: [] };
		console.log("start fetch")
		fetch("http://localhost:8080/GuestMap/messages")
			.then(result => result.json())
			.then(result => { this.setState({ response: result.messages }); console.log(result.messages) });
	}
	render() {
		let i = 0
		const messages = this.state.response.map(m => <li key={i++}>{m.content}</li>);
		return (
			<div>
				<ul>
					{messages}
				</ul>
			</div>
		);
	}
}

export default Messages