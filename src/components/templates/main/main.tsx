import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMain } from "./Imain";

import {
  faRoute,
  faCartShopping,
  faCalendarDays,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export const Options = styled.div`
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

export const TextHeaderContainer = styled.div`
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
    color: black;
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
    color: black;
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

interface IDiv {
  home?: string;
  contact?: string;
  sofa?: string;
}

const PropsBox = styled.div(({ sofa }: IDiv) => ({
  margin: "0%",
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  // backgroundImage: `url(${sofa})`,
}));

export const Main = ({
  type,
  img,
  hamburguerState,
  setHamburguerState,
}: IMain) => {
  return (
    <PropsBox
      onClick={() => {
        setHamburguerState(false);
      }}
      sofa={img}
    >
      <TextHeaderContainer>
        <p className="principalText">mioga's store GOOGLE COMMANDS</p>
        <p className="nextText">CTRL + J= DOWNLOAD</p>
        <p className="nextText">CTRL + E= SEARCH</p>
        <p className="nextText">CTRL + H= HISTORY</p>
        <p className="nextText">CTRL + T= NEW WINDOWS</p>
        <p className="nextText">CTRL + W= CLOSE WINDOWS</p>
        <p className="nextText">CTRL + SHIFT + N= NEW WINDOWS</p>
        <p className="nextText">CTRL + Q= CLOSE APP</p>
        <p className="nextText">windows + L= LOCK</p>
        <p className="nextText">CTRL + P= PRINT</p>
        <p className="nextText">CTRL + F= SEARCH IN PAGE</p>
        <p className="nextText">CTR + O= OPEN A FILE IN THE BROWSER</p>
        <p className="nextText">F11= FULL PAGE</p>
        {/* <button>watch</button> */}
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
    </PropsBox>
  );
};
