import React, { useState } from "react";
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";

import Modal from 'react-bootstrap/Modal';
import "./AppModal.scss";
import Button from './Button.jsx';

const T = i18n.createComponent("Common");

export default function AppModal(props) {

  function handleClose() {
    if (props.notifyParent) props.notifyParent(true);
  }

  const title = props.translate ? <T>{props.title}</T> : props.title
  const defaultOption = props.translate ? <T>{props.defaultOption}</T> : props.defaultOption

  return (<Modal show={props.show} centered>
      {props.title && <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>}
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button color="blue" width="fit" onClick={handleClose}>{defaultOption}</Button>
      </Modal.Footer>
    </Modal>
  )
}