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
    if (this.state.radioItems.length > 0) {
      return (
        <div>
          <div className="imageHeadline"><img src="https://sverigesradio.se/kvinnoregistret/assets/images/sr-logo-white.png" alt="Sveriges Radio" /></div>
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
    } else {
      return <div> Loading..</div>
    }
  }

}

export default App
