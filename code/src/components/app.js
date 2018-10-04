import React from "react"
import Station from "./station"

class App extends React.Component {

  // state = {
  //   radioItems: []
  // }
  constructor(props) {
    super(props)
    this.state = { radioItems: [] }
  }

  componentDidMount() {
    fetch("http://api.sr.se/api/v2/channels?format=json&size=100").then((response) => {
      return response.json()
    }).then((json) => {
      this.setState({
        radioItems: json.channels
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Sveriges Radio Stationer</h1>
        <div className="stationContainer">
          {this.state.radioItems.map((channels) => {
            return <Station
              name={channels.name}
              image={channels.image}
              audio={channels.liveaudio.url}
              color={channels.color}
              tagline={channels.tagline}
              channeltype={channels.channeltype} />
          })}
        </div>
      </div>
    )
  }

}

export default App
