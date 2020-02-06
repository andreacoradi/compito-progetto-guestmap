import React, { Component } from 'react'
import { Redirect } from 'react-router';
import Position from './Position'
import ReCAPTCHA from "react-google-recaptcha";

class Input extends Component {

	constructor() {
		super();
		this.state = {
			content: "",
			coords: [],
			canSend: false,
			messageID: "",
			redirect: false
		};
	}

	onCaptcha = (value) => {
		this.setState({ canSend: true })
	}

	onChange = (e) => {
		this.setState({ content: e.target.value })
	}

	updateCoords = (coords) => {
		console.log(coords)
		if (coords)
			this.setState({ coords: coords })
	}

	submitMessage() {
		if (!this.state.canSend) {
			return
		}
		const url = "http://localhost:8080/GuestMap/messages";
		let { content, coords } = this.state
		if (!content || !coords)
			return
		const data = {
			"content": content,
			"lat": coords[0],
			"lon": coords[1]
		};
		const otherPram = {
			headers: {
				"content-type": "application/json; charset=UTF-8"
			},
			body: JSON.stringify(data),
			method: "POST"
		};
		fetch(url, otherPram)
			.then(r => r.json())
			.then(b => {
				this.setState({ messageID: b.messageID, redirect: true })
			})
	}

	onClick = (e) => {
		if (this.state.content === "" || this.state.coords === [])
			return
		this.submitMessage()
	}

	render() {
		if (this.state.redirect) {
			return <Redirect push to={{
				pathname: "/map",
				state: {
					messageID: this.state.messageID
				}
			}} />;
		}
		return (
			<div id="pagina_input">
				<div className="page-content page-container" id="page-content">
					<div className="padding">
						<div className="row container d-flex justify-content-center">
							<div className="col-lg-12">
								<div className="card px-3">
									<div className="card-body">
										<h4 >EARTH MESSENGER</h4>
										<div>
											<Position coords={this.updateCoords} />
										</div>
										<div className="add-items d-flex">
											<input id="InputMessage" type="text" className="form-control " placeholder="inserisci qui il tuo messaggio!" onChange={this.onChange} />
											<ReCAPTCHA
												sitekey="6LfHOtUUAAAAAKAL_i-CM5tOVUs2u1Zh8t4-iqjD"
												onChange={this.onCaptcha}
											/>
											<button id="submit" className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={this.onClick}>Invia</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Input


