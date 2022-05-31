import React, { useReducer } from "react";
import styled from "styled-components";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const HamburgerMenu_ = styled.div`
  height: 20px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px;
  div {
    width: 100%;
    height: 2px;
    background-color: white;
  }
  .icon {
    z-index: calc(10);
  }
`;

interface IHamburger {
  state: boolean;
}

export const HamburgerInitialState: IHamburger = { state: true };

export const reducer = (state: IHamburger, action: any) => {
  switch (action.type) {
    case false:
      return { ...state, state: false };
    case true:
      return { ...state, state: true };
    default:
      return state;
  }
};

export const HamburgerMenu = () => {
  const [HamburgerState, dispatch] = useReducer(reducer, HamburgerInitialState);

  const handleComplete = () => {
    dispatch({ type: false, state: !handleComplete });
    console.log(HamburgerState);
  };

  return (
    <HamburgerMenu_>
      {HamburgerState.state ? (
        <FontAwesomeIcon
          onClick={handleComplete}
          className={"icon"}
          icon={faClose}
        />
      ) : (
        <>
          <div></div>
          <div></div>
          <div></div>
        </>
      )}
    </HamburgerMenu_>
  );
};
