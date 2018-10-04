import React from "react"

class Station extends React.Component {

  render() {
    const channelColor = {
      backgroundColor: {
        backgroundColor: `#${this.props.color}`
      }
    }
    return (
      <div className="stationContent" style={channelColor.backgroundColor}>
        <div className="leftSide">
          <img src={this.props.image} alt={this.props.name} />
        </div>
        <div className="rightSide">
          <h2>{this.props.name}</h2>
          <p>{this.props.channeltype}</p>
          <p>{this.props.tagline}</p>
        </div>
        <audio controls>
          <source src={this.props.audio} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      </div>
    )
  }

}

export default Station
