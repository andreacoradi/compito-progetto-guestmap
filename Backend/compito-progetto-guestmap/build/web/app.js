const { Map: LeafletMap, TileLayer, Marker, Popup } = window.ReactLeaflet

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			messages: []
		}
		fetch("http://localhost:8080/GuestMap/messages")
			.then(result => result.json())
			.then(body => {
				this.setState({ messages: body.messages })
			})
	}

	render() {
		return (
			<div>
				<Input />
				<Messages messages={this.state.messages} />
			</div>
		);
	}
}
