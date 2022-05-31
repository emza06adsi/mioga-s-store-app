import React, { useReducer } from "react";
import styled from "styled-components";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { reducer } from "../../redux/reducer";
import { HamburgerInitialState } from "../../redux/state";
const HamburgerMenu_ = styled.div`
  height: 20px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px;
  cursor: pointer;
  div {
    width: 100%;
    height: 2px;
    background-color: white;
  }
  .icon {
    z-index: calc(10);
  }
`;



export const HamburgerMenu = () => {
  const [HamburgerState, dispatch] = useReducer(
    reducer,
    HamburgerInitialState
  );

  const handleComplete = () => {
    dispatch({ type: !HamburgerState.state, state: !HamburgerState.state });
    console.log(HamburgerState);
  };

  return (
    <HamburgerMenu_ onClick={handleComplete}>
      {HamburgerState.state ? (
        <FontAwesomeIcon className={"icon"} icon={faClose} />
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
