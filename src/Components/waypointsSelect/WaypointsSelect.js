import React from 'react';

class WaypointSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }

    componentDidMount() {
      fetch("http://localhost:8000/api/waypoints/", {
        method: "POST",
        body: JSON.stringify({
          "origin": "Houston",
          "dest": "Austin"
        }),
        headers: {
          "Content-Length": 61,
          "Content-Type": "application/json; charset=utf-8"
        },
        credentials: "same-origin"
      }).then(function (response) {
        response.status
        response.statusText
        response.headers
        response.url

        this.setState(response.text)
      }).catch(function (error) {
        error.message
      })
    }
  }

}