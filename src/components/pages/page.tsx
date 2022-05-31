import React, { useReducer, useEffect, useState } from "react";
import { Header } from "../templates/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRoute,
  faCartShopping,
  faCalendarDays,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {HamburgerModal,Options,TextHeaderContainer,Image} from './page.style';

const PrincipalPage = () => {
  const [hamburguerState, setHamburguerState] = useState(false);

  return (
    <>
      <Header
        hamburguerState={hamburguerState}
        setHamburguerState={setHamburguerState}
      />

      <Image
        onClick={() => {
          setHamburguerState(false);
        }}
      >
        <TextHeaderContainer>
          <p className="principalText">mioga's store</p>
          <p className="nextText">
            Win, and you’re in. It’s the Breeders’ Cup Challenge Series, where
            the world’s top Thoroughbreds compete for a starting spot at the
            2022 Breeders’ Cup World Championships at Keeneland, Nov 4 & 5. With
            qualifying races all over the world and across three new
            battleground regions in the US (East, West, Midwest), this year’s
            series just means more. Catch all the action on NBC, FOX or TVG all
            summer long.
          </p>
          <button>watch</button>
        </TextHeaderContainer>

        {!hamburguerState && (
          <Options>
            <FontAwesomeIcon
              style={{ cursor: "pointer", height: "50px", color: "white" }}
              icon={faRoute}
            />
            <FontAwesomeIcon
              style={{ cursor: "pointer", height: "50px", color: "white" }}
              icon={faCartShopping}
            />
            <FontAwesomeIcon
              style={{ cursor: "pointer", height: "50px", color: "white" }}
              icon={faCalendarDays}
            />
          </Options>
        )}
      </Image>
      {hamburguerState && <HamburgerModal></HamburgerModal>}
    </>
  );
};
export default PrincipalPage;
