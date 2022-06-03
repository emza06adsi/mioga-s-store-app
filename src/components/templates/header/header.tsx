import React from "react";
import { HeaderIcon } from "../../UI/atoms/icon";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { HeaderTextContainer } from "../../UI/organisms/HeaderContainerText";
import { HamburgerMenu } from "../../UI/organisms/hamburger/hamburgerMenu";
import { HeaderX, RightContainerHeader } from "./header.style";
import { IHamburguerState } from "./IHeader";

export const Header = ({
  hamburguerState,
  setHamburguerState,
}: IHamburguerState) => (
  <HeaderX>
    <HeaderIcon />
    <HeaderTextContainer />
    {!hamburguerState && <FontAwesomeIcon className={"icon"} icon={faSearch} />}
    <RightContainerHeader>
      <HamburgerMenu
        hamburguerState={hamburguerState}
        setHamburguerState={setHamburguerState}
      />
    </RightContainerHeader>
  </HeaderX>
);
