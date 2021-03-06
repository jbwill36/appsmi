import React from "react";
import BaseControl, { ControlProps } from "./BaseControl";
import _ from "lodash";
import { DropdownOption } from "components/ads/Dropdown";
import { StyledMultiSelectDropDown } from "./StyledControls";

class MultiSelectControl extends BaseControl<MultiSelectControlProps> {
  render() {
    const selectedItems: string[] = [];

    _.map(this.props.propertyValue, (value) => {
      const option = _.find(this.props.options, (option) => {
        return option.value === value;
      });
      if (option) selectedItems.push(option.value as string);
      return option;
    });

    return (
      <StyledMultiSelectDropDown
        onSelect={this.onItemSelect}
        optionWidth="260px"
        options={this.props.options}
        selectAll
        selectAllQuantifier="*"
        selected={selectedItems}
        showLabelOnly
        width="100%"
      />
    );
  }

  onItemSelect = (value: string[]): void => {
    this.updateProperty(this.props.propertyName, value);
  };

  static getControlType() {
    return "MULTI_SELECT";
  }
}

export interface MultiSelectControlProps extends ControlProps {
  options: DropdownOption[];
  placeholderText: string;
  propertyValue: string[];
}

export default MultiSelectControl;
