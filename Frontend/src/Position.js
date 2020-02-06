import { Component } from 'react'

class Position extends Component {

	constructor() {
		super()
		this.state = {}
		this.getPosition()
	}
	getPosition() {
		let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
		let targetUrl = 'https://api.ipgeolocation.io/ipgeo?apiKey=3492ae3f90544cd5a124198188d86046'
		fetch(proxyUrl + targetUrl)
			.then(r => r.json())
			.then(b => {
				let lat = b.latitude
				let lon = b.longitude
				let country = b.country_name
				let country_code = b.country_code2
				let emoji = this.getCountryFlag(country_code)
				this.setState({ lat, lon, country, emoji })
				this.props.coords([lat, lon])
			})
	}

	getCountryFlag = (country_code) => {
		let urlEmoji = 'https://unpkg.com/country-flag-emoji-json@latest/json/flag-emojis-by-code.pretty.json'
		let proxyUrl = 'https://cors-anywhere.herokuapp.com/'
		fetch(proxyUrl + urlEmoji)
			.then(r => r.json())
			.then(b => {
				this.setState({ emoji: b[country_code].emoji })
			})
	}

	render() {
		return (null)
	}
}


export default Position