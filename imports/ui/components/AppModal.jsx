import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import "./AppModal.scss";
import Button from './Button.jsx';

export default function AppModal(props) {

  function handleClose() {
    if (props.notifyParent) props.notifyParent(true);
  }

  return (<Modal show={props.show} centered>
      {props.title && <Modal.Header>
        <Modal.Title>{props.title}</Modal.Title>
      </Modal.Header>}
      <Modal.Body>{props.children}</Modal.Body>
      <Modal.Footer>
        <Button color="blue" width="fit" action={handleClose}>{props.defaultOption}</Button>
      </Modal.Footer>
    </Modal>
  )
}