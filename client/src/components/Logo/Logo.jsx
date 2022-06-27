import React from "react";
import styled from "styled-components";

const Style = {
  Logo: styled.button`
    height: 25px;
    width: 80px;
    outline: none;
    color: whitesmoke;
    backgroundImage: ${};
    border: none;
    border-radius: 5px;
    transition: all 0.5s;
    &:hover {
      border-radius: 100px;
      cursor: pointer;
    }
  `,
};

const Logo = ({ activity, handleActivity }) => (
  <Style.ToggleActivity
    onClick={() => {
      handleActivity(!activity);
    }}
    activity={activity}
  >
    {activity ? "Deactivate" : "Activate"}
  </Style.ToggleActivity>
);

export default ToggleActivity;