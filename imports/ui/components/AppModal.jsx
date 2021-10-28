import React, { useState } from "react";
import i18n from 'meteor/universe:i18n';
import "../../../i18n/nl.i18n.json";
import "../../../i18n/fr.i18n.json";
import "../../../i18n/en.i18n.json";

import Modal from 'react-bootstrap/Modal';
import "./AppModal.scss";
import Button from './Button.jsx';
import Icon from "./Illustrations/Icon";

const T = i18n.createComponent("Common");

export default function AppModal(props) {

  function handleDefault() {
    if (props.disabledDefault) return;
    if (props.notifyParent) props.notifyParent(true);
  }

  function handleBack() {
    if (props.notifyBack) props.notifyBack();
  }

  const title = props.translate ? <T>{props.title}</T> : props.title
  const defaultOption = props.translate ? <T>{props.defaultOption}</T> : props.defaultOption

  return (<Modal show={props.show} centered>
      {props.title && <Modal.Header>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>}
      {props.noPadding && <Modal.Body>{props.children}</Modal.Body>}
      {!props.noPadding && <Modal.Body><div style={{padding: "0 16px", color:"var(--idewe-blue-dark)"}}>{props.children}</div></Modal.Body>}
      <Modal.Footer>
        {!props.backOption && <Button color="blue" center onClick={handleDefault}>{defaultOption}</Button>}
        {props.backOption && <React.Fragment>
          <Button color="gray" width="45%" center onClick={handleBack} style={{marginRight:"10px"}}>{props.backOption}</Button>
          {defaultOption && <Button color={props.defaultColor ? props.defaultColor : (props.disabledDefault ? "gray" : "blue")} width="45%" center onClick={handleDefault}>{props.addLockedIcon && <Icon width="14px" color="white" image="locked" style={{margin:"0 4px 4px 0"}}/>}{defaultOption}</Button>}
        </React.Fragment>}
      </Modal.Footer>
    </Modal>
  )
}