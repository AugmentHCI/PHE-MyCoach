import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";
import "./Notification.css";

import Alert from 'react-bootstrap/Alert';

const T = i18n.createComponent("Common");

function NotificationAlert(props) {

  const [open, toggleOpen] = useState(true);

  if (open) {
      return (
        <Alert variant="dark" onClose={() => toggleOpen(!open)} dismissible>
          <Alert.Heading><T>{props.messageTitle}</T></Alert.Heading>
          <p className="alert-body"><T>{props.messageContent}</T></p>
          {props.information !== "" && <p className="alert-body">{props.information}</p>}
        </Alert>
      );
    }

    else {return <React.Fragment></React.Fragment>}
}

export default NotificationAlert;