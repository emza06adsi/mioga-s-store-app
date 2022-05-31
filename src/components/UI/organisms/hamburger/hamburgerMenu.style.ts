import styled from "styled-components";
export const HamburgerMenu_ = styled.div`
  height: 20px;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 30px;
  cursor: pointer;
  div {
    width: 100%;
    height: 2px;
    background-color: white;
  }
  .icon {
    z-index: calc(10);
  }
`;