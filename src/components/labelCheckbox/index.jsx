import React from "react";
import styled from "styled-components";

export function LabelCheckbox(props) {
  const { labelText = "Checkbox", bgColor = "red", handleOnChange } = props;

  return (
    <LabelCheckboxStyle bgColor={bgColor}>
      <label className="Label">
        <input
          onChange={handleOnChange}
          type="checkbox"
          style={{ margin: "0 5px", textTransform: "capitalize" }}
          value={labelText}
        />
        <span style={{ textTransform: "capitalize" }}>{labelText}</span>
      </label>
    </LabelCheckboxStyle>
  );
}

export const LabelCheckboxStyle = styled.div`
  .Label {
    padding: 4px 5px 4px 0;
    background-color: ${(props) => props.bgColor};
    border-radius: 5px;
    margin: 5px 10px 5px 0;
  }
  .Label > span:hover {
    cursor: pointer;
  }
`;
