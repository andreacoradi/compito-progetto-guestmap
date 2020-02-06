class Input extends React.Component {

    constructor() {
        super();
        this.state = { content: "", coords: [] };
        let coords = []
    }

    onChange = (e) => {
        this.setState({ content: e.target.value })
        //console.log(this.state)
    }

    updateCoords = (coords) => {
        console.log(coords)
        if (coords)
            this.setState({ coords: coords })
    }

    submitMessage() {
        const url = "http://localhost:8080/GuestMap/messages";
        let { content, coords } = this.state
        if (!content || !coords)
            return
        //let coords = [0, 0]
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
        fetch(url, otherPram);
        //document.getElementById('InputMessage').value = '';
    }

    onClick = (e) => {
        if (this.state.content == "")
            return
        console.log("INVIO")
        this.submitMessage()
    }

    render() {
        return (
            <div>
                <Position coords={this.updateCoords} />
                <input id="InputMessage" type="text" placeholder="inserisci qui il tuo messaggio!" onChange={this.onChange} />
                <button id="submit" onClick={this.onClick}>invia</button>
            </div>
        );
    }

}


