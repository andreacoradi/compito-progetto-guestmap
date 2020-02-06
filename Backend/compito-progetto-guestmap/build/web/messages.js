class Messages extends React.Component {
	render() {
		let i = 0
		const messages = this.props.messages.map(m => <li key={i++}>{m.content}</li>);
		return (
			<div>
				<ul>
					{messages}
				</ul>
			</div>
		);
	}
}


