import React, { Component } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import MarkerClusterGroup from 'react-leaflet-markercluster'

import './Mappa.css'

/* Chiedi al prof
class ExtendedMarker extends Marker {
	componentDidMount() {
		super.componentDidMount();
		console.log(this.leafletElement)
		this.leafletElement.openPopup();
	}
}*/

class Mappa extends Component {

	constructor(props) {
		super(props)

		this.state = {
			selectedMessage: {},
			messageID: [this.props.location.state.messageID],
			messages: [],
			markers: [],
			markersLayer: {},
			zoom: 5,
		}

		fetch('http://localhost:8080/GuestMap/messages')
			.then(r => r.json())
			.then(b => {
				this.setState({ messages: b.messages })
				this.state.messages.forEach(m => {
					if (m.id == this.state.messageID)
						this.setState({ selectedMessage: m })
					this.makeMarker(m)
				})
			})
	}

	makeMarker = (msg) => {
		const { markers } = this.state
		markers.push({
			id: msg.id,
			content: msg.content,
			latLon: [msg.lat, msg.lon],
			date: msg.date,
			time: msg.time
		})
		this.setState({ markers: markers })
	}

	render() {

		let msg = this.state.selectedMessage
		if (!msg.lat) {
			msg = {
				lat: 0,
				lon: 0
			}
			if (this.state.zoom !== 5)
				this.setState({ zoom: 5 })
		}
		return (
			<Map className="mapid"
				center={[msg.lat, msg.lon]}
				zoom={this.state.zoom}
				maxZoom={30}>
				<TileLayer
					attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				<MarkerClusterGroup maxClusterRadius={50}>
					{this.state.markers.map(m =>
						<Marker
							key={m.id}
							position={m.latLon}
							onMouseOver={(e) => {
								e.target.openPopup();
							}}
							onMouseOut={(e) => {
								e.target.closePopup();
							}}
						>
							<Popup>
								<strong>{m.content}</strong>
								<hr />
								<em>{m.time} {m.date}</em>
							</Popup>
						</Marker>

					)}
				</MarkerClusterGroup>
			</Map>
		)
	}
}



export default Mappa