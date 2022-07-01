import React, { useState } from "react";

import { Header } from "../templates/header/header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../templates/main/main";
import { HamburgerModal } from "./page.style";
import { PageType } from "./IPage";
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
            <Main
              img={
                process.env.REACT_APP_HOME_URL || process.env.HOME_BACKGROUND
              }
              type={PageType.HOME}
              hamburguerState={hamburguerState}
              setHamburguerState={setHamburguerState}
            />
          }
        />
        <Route
          path="sofa"
          element={
            <Main
              img={
                process.env.REACT_APP_LOCATION_URL || process.env.HOME_BACKGROUND
              }
              type={PageType.SOFA}
              hamburguerState={hamburguerState}
              setHamburguerState={setHamburguerState}
            />
          }
        />
        <Route
          path="location"
          element={
            <Main
              img={
                process.env.REACT_APP_LOCATION_URL ||
                process.env.HOME_BACKGROUND
              }
              type={PageType.LOCATION}
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

export default PrincipalPage;
