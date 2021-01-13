import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";
import "./Notification.css";

import Alert from 'react-bootstrap/Alert';

const T = i18n.createComponent("Common");

export default class NotificationAlert extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: true,
        }
    }

  render() {
    if (this.state.open) {
        return (
          <Alert variant="dark" onClose={() => this.setState({open: false})} dismissible>
            <Alert.Heading><T>{this.props.messageTitle}</T></Alert.Heading>
            <p className="alert-body"><T>{this.props.messageContent}</T></p>
            {this.props.information !== "" && <p className="alert-body">{this.props.information}</p>}
          </Alert>
        );
      }
      else {return <React.Fragment></React.Fragment>}
  }
}
