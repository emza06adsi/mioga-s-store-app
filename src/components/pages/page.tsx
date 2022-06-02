import React, { useReducer, useEffect, useState } from "react";

import { Header } from "../templates/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  faRoute,
  faCartShopping,
  faCalendarDays,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  HamburgerModal,
  Options,
  TextHeaderContainer,
  Image,
  Image2,
} from "./page.style";

const PrincipalPage = () => {
  const [hamburguerState, setHamburguerState] = useState(false);

  return (
    <BrowserRouter>
      <Header
        hamburguerState={hamburguerState}
        setHamburguerState={setHamburguerState}
      />
      <Routes>
        <Route
          path="/"
          element={
            <App
              hamburguerState={hamburguerState}
              setHamburguerState={setHamburguerState}
            />
          }
        />
        <Route
          path="invoices"
          element={
            <App2
              hamburguerState={hamburguerState}
              setHamburguerState={setHamburguerState}
            />
          }
        />
      </Routes>
      {hamburguerState && <HamburgerModal></HamburgerModal>}
    </BrowserRouter>
  );
};
export interface IHamburguerState {
  hamburguerState: boolean;
  setHamburguerState: any;
}

const App = ({ hamburguerState, setHamburguerState }: IHamburguerState) => {
  return (
    <Image
      onClick={() => {
        setHamburguerState(false);
      }}
    >
      <TextHeaderContainer>
        <p className="principalText">mioga's store</p>
        <p className="nextText">
          Win, and you’re in. It’s the Breeders’ Cup Challenge Series, where the
          world’s top Thoroughbreds compete for a starting spot at the 2022
          Breeders’ Cup World Championships at Keeneland, Nov 4 & 5. With
          qualifying races all over the world and across three new battleground
          regions in the US (East, West, Midwest), this year’s series just means
          more. Catch all the action on NBC, FOX or TVG all summer long.
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
  );
};

const App2 = ({ hamburguerState, setHamburguerState }: IHamburguerState) => {
  return (
    <Image2
      onClick={() => {
        setHamburguerState(false);
      }}
    >
      <TextHeaderContainer>
        <p className="principalText"> store mioga's</p>
        <p className="nextText">
          Win, and you’re in. It’s the Breeders’ Cup Challenge Series, where the
          world’s top Thoroughbreds compete for a starting spot at the 2022
          Breeders’ Cup World Championships at Keeneland, Nov 4 & 5. With
          qualifying races all over the world and across three new battleground
          regions in the US (East, West, Midwest), this year’s series just means
          more. Catch all the action on NBC, FOX or TVG all summer long.
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
    </Image2>
  );
};
export default PrincipalPage;
