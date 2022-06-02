import styled from "styled-components";

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

export const Image = styled.div`
  margin: 0%;
  width: 100%;
  height: 100vh;
  background-image: url("https://i.pinimg.com/564x/41/f4/26/41f426b4cb4d4d45b3fc2d5e15783bd4.jpg");
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;
export const Image2 = styled.div`
  margin: 0%;
  width: 100%;
  height: 100vh;
  background-image: url("https://i.pinimg.com/564x/f3/3f/6f/f33f6f1971574e5b3966440ecc2d041d.jpg");
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 100%;
`;
export const Image3 = styled.div`
  margin: 0%;
  width: 100%;
  height: 100vh;
  background-image: url("https://i.pinimg.com/564x/57/0d/4f/570d4f024950142992be6458bdfd4747.jpg");
  background-position-x: center;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 100%;
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

export const HamburgerModal = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 99.5vh;
  width: 300px;
  position: absolute;
  right: 0;
  top: 0;
`;
