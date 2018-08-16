import React, { Component } from 'react';


export default class Notification extends Component {
  state = {
    message: false
  }
  render() {
    const NotificationStyle = {
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
      <div style = {NotificationStyle} >
      { notificationText }
      </div>
    )
  }
}

