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

interface IHamburguerState {
  hamburguerState: boolean;
  setHamburguerState: any;
}

export const HamburgerMenu = ({
  hamburguerState,
  setHamburguerState,
}: IHamburguerState) => {

  const handleComplete = () => {
    setHamburguerState(!hamburguerState)
  };

  return (
    <HamburgerMenu_ onClick={handleComplete}>
      {hamburguerState ? (
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
