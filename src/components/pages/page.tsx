import React, { useReducer, useEffect } from "react";
import styled from "styled-components";
import { Header } from "../templates/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HamburgerInitialState } from "../redux/state";
import { reducer } from "../redux/reducer";
import {
  faRoute,
  faCartShopping,
  faCalendarDays,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
// import { useEffect } from "react";

const Image = styled.div`
  margin: 0%;
  width: 100%;
  height: 100vh;
  /* background-image: url('https://i.pinimg.com/564x/ad/e6/ed/ade6edae6a9263d2d8fbc0951fde9e36.jpg'); */
  /* background-image: url('https://i.pinimg.com/564x/57/0d/4f/570d4f024950142992be6458bdfd4747.jpg'); */
  /* background-image: url('https://i.pinimg.com/564x/fa/8e/fe/fa8efe337f2a55cdac56529937530b4b.jpg'); */
  /* background-image: url('https://i.pinimg.com/564x/01/2a/27/012a27d3ed6c1265a01f2ed8bc9fff68.jpg'); */
  /* background-image: url('https://i.pinimg.com/564x/49/ca/18/49ca18cae8391087e48198cab95abb2c.jpg'); */
  /* background-image: url('https://i.pinimg.com/564x/49/12/f5/4912f5b527db3e45236e0da38f2750fa.jpg'); */
  /* background-image: url('https://i.pinimg.com/564x/53/f6/ee/53f6ee59a03b89d844a376d2769e2fa6.jpg'); */
  /* background-image: url('https://i.pinimg.com/736x/cb/f7/fc/cbf7fc54053aa7daf7172d0b406ae123.jpg'); */
  background-image: url("https://i.pinimg.com/564x/41/f4/26/41f426b4cb4d4d45b3fc2d5e15783bd4.jpg");
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 100%;
  /* position: relative; */
  /* background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover; */
`;

const Options = styled.div`
  position: absolute;
  top: 30%;
  left: 90%;
  display: flex;
  flex-direction: column;
  height: 300px;
  align-items: center;
  width: 100px;
  justify-content: space-around;
`;

const TextHeaderContainer = styled.div`
  position: absolute;
  top: 30%;
  left: 119.55px;
  height: 400px;
  width: 800px;
  /* border: 10px solid white; */

  .principalText {
    color: #fff;
    font-family: "poppins";
    letter-spacing: 3px;
    margin: 0 auto 25px;
    max-width: 850px;
    padding: 0 25px;
    text-transform: uppercase;
    font-size: 40px;
    font-weight: 800;
  }

  .nextText {
    color: #fff;
    font-family: "poppins";
    letter-spacing: 3px;
    margin: 0 auto 25px;
    max-width: 850px;
    padding: 0 25px;
    text-transform: unset;
    font-size: 16px;
    font-weight: 200;
  }

  button {
    color: #fff;
    background: none;
    border: 1px solid white;
    font-family: "poppins";
    letter-spacing: 3px;
    margin: 0 auto 25px 25px;
    padding: 10px 25px 10px 25px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 200;
    cursor: pointer;
    :hover {
      background: #805a2d;
      background: rgba(255, 255, 255, 0.25);
      box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
      backdrop-filter: blur(4px);
      -webkit-backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.18);
      border: none;
    }
  }
`;

const HamburgerModal = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 99.8vh;
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
`;
const PrincipalPage = () => {
  const [hamburguer, dispatch] = useReducer(reducer, HamburgerInitialState);

  useEffect(() => {
    dispatch({ type: hamburguer.state, state: hamburguer.state });

    debugger;
  }, [HamburgerInitialState.state]);

  return (
    <>
      <Header />
      {/* <iframe width={'100%'} height={'500px'} src="https://www.enelsofa.com/sofa2021/"></iframe> */}

      <Image>
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

        {/* <h1 style={{position:'absolute', height:"200px",background:'red'}}>sdsa</h1> */}

        <Options>
          <FontAwesomeIcon
            style={{ height: "50px", color: "white" }}
            icon={faRoute}
          />
          <FontAwesomeIcon
            style={{ height: "50px", color: "white" }}
            icon={faCartShopping}
          />
          <FontAwesomeIcon
            style={{ height: "50px", color: "white" }}
            icon={faCalendarDays}
          />
        </Options>
      </Image>
      {hamburguer.state ? <HamburgerModal></HamburgerModal> : <></>}
    </>
  );
};
export default PrincipalPage;
