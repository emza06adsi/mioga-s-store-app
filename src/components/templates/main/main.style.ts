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
