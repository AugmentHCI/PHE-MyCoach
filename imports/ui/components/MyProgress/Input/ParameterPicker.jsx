import React, { Component } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import i18n from 'meteor/universe:i18n';
import "../../../../../i18n/nl.i18n.json";
import "../../../../../i18n/fr.i18n.json";
import "../../../../../i18n/en.i18n.json";

const T = i18n.createComponent("Common");

export default class ParameterPicker extends Component {
    constructor(props) {
        super(props);
    }

    handleChange(newValue) {
        this.props.onChange(newValue);
    }

    render() {
        const title = this.props.currentParameter === "" ? "──" : <T>{`myProgress.parameters.${this.props.currentParameter}`}</T>
        return (
            <DropdownButton variant="dropdown" title={title}>
              {(this.props.currentParameter !== "painIntensity" && this.props.dontDisplay !== "painIntensity") && <Dropdown.Item key={"painIntensity"} onClick={() => this.handleChange("painIntensity")}><T>myProgress.parameters.painIntensity</T></Dropdown.Item>}
              {(this.props.currentParameter !== "satisfaction" && this.props.dontDisplay !== "satisfaction") && <Dropdown.Item key={"satisfaction"} onClick={() => this.handleChange("satisfaction")}><T>myProgress.parameters.satisfaction</T></Dropdown.Item>}
              {(this.props.currentParameter !== "physicalTiredness" && this.props.dontDisplay !== "physicalTiredness") && <Dropdown.Item key={"physicalTiredness"} onClick={() => this.handleChange("physicalTiredness")}><T>myProgress.parameters.physicalTiredness</T></Dropdown.Item>}
              {(this.props.currentParameter !== "mentalTiredness" && this.props.dontDisplay !== "mentalTiredness") && <Dropdown.Item key={"mentalTiredness"} onClick={() => this.handleChange("mentalTiredness")}><T>myProgress.parameters.mentalTiredness</T></Dropdown.Item>}
              {(this.props.currentParameter !== "distance" && this.props.dontDisplay !== "distance") && <Dropdown.Item key={"distance"} onClick={() => this.handleChange("distance")}><T>myProgress.parameters.distance</T></Dropdown.Item>}
          </DropdownButton>
        )
    }
}