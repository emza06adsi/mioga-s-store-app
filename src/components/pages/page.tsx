import React, { useState } from "react";

import { Header } from "../templates/header/header";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Main } from "../templates/main/main";

import { HamburgerModal } from "./page.style";

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
              img="https://i.pinimg.com/564x/f3/3f/6f/f33f6f1971574e5b3966440ecc2d041d.jpg"
              type="home"
              hamburguerState={hamburguerState}
              setHamburguerState={setHamburguerState}
            />
          }
        />
        <Route
          path="sofa"
          element={
            <Main
              img="https://i.pinimg.com/564x/57/0d/4f/570d4f024950142992be6458bdfd4747.jpg"
              type="sofa"
              hamburguerState={hamburguerState}
              setHamburguerState={setHamburguerState}
            />
          }
        />
        <Route
          path="location"
          element={
            <Main
              img="https://i.pinimg.com/564x/41/f4/26/41f426b4cb4d4d45b3fc2d5e15783bd4.jpg"
              type="location"
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
