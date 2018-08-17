import React, { Component } from 'react';


export default class Notification extends Component {

  componentDidUpdate() {

    if(this.props.color === 'green' || this.props.color === 'grey') {
      setTimeout(this.props.removeNotification,5000)
    }
  }
  render() {
    const notificationStyle = {
      height: '100%',
      width: '20%',
      backgroundColor: this.props.color !== null ? `${this.props.color}` : 'white'
    }

    let notificationText;
    if(this.props.color === 'grey') {
      notificationText = `loading ${this.props.mode}`
    }else if(this.props.color === 'green') {
      notificationText = `Successfully loaded ${this.props.mode}`
    }else if(this.props.color === 'red') {
      notificationText = `Error loading ${this.props.mode}`
    }else {
      notificationText = ''
    }


    return (
      <div>
        {
          this.props.color && this.props.mode
          ?
          <div style = {notificationStyle} >
                { notificationText }
                <button onClick = {this.props.removeNotification}>X</button>
          </div>
          :
        " "
      }
      </div>

    )
  }
}

