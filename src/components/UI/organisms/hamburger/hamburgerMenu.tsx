import React, { useReducer } from "react";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { IHamburguerState } from "./IHamburgerMenu";
import { HamburgerMenu_ } from "./hamburgerMenu.style";

export const HamburgerMenu = ({
  hamburguerState,
  setHamburguerState,
}: IHamburguerState) => {
  const handleComplete = () => {
    setHamburguerState(!hamburguerState);
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
