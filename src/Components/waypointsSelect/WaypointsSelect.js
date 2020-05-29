import React from 'react';

export default class WaypointSelect extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    data: []
  }
  componentDidMount() {
    fetch("http://localhost:8000/api/waypoints/", {
      method: "POST",
      body: JSON.stringify({
        "origin": "Milwaukee",
        "dest": "Madison"
      }),
      headers: {
        "Content-Length": 61,
        "Content-Type": "application/json; charset=utf-8"
      },
      credentials: "same-origin"
    }).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState({ data })
    }).catch(function (error) {
      return error.message
    })
  }
  render() {
    console.log(this.state)
    return (
      <>
        <ul>{this.state.data.map((place) => {
          return <li>{place.name}</li>
        })}</ul>
      </>
    )
  }
}

