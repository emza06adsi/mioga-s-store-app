import styled from "styled-components";
import { IMain, IDiv } from "./I-main";

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

  .link {
    display: block;
    margin: 1rem 0;
  }

  .fontAwesomeIcon {
    cursor: pointer;
    height: 50px;
    color: white;
  }
`;

export const TextHeaderContainer = styled.div`
  position: absolute;
  top: 25%;
  left: 119.55px;
  height: 400px;
  width: 800px;

  .principalText {
    color: #fff;
    font-family: "poppins";
    letter-spacing: 3px;
    margin: 0 auto 25px;
    max-width: 850px;
    padding: 0 0px;
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

export const PropsBox = styled.div(({ sofa }: IDiv) => ({
  margin: "0%",
  width: "100%",
  height: "100vh",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  backgroundImage: `url(${sofa})` || "#0c2a44",
}));
