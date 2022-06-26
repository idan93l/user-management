import React from "react";
import styled from "styled-components";

const Style = {
  ToggleActivity: styled.button`
    padding: 0.75em 0.9em;
    outline: none;
    background: radial-gradient(#acd4fa, #2559c2);
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 1em;
    margin: 0.5em;
    transition: all 0.2s;
    &:hover {
      border-radius: 50px;
      cursor: pointer;
    }
  `,
};

const ToggleActivity = ({ activity, handleActivity }) => (
  <Style.ToggleActivity
    onClick={() => {
      handleActivity(!activity);
    }}
  >
    {activity === true ? "Deactivate" : "Activate"}
  </Style.ToggleActivity>
);

export default ToggleActivity;