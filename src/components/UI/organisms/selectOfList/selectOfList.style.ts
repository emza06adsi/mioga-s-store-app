import styled from "styled-components";

export const SelectContainer = styled.article`
  width: 1050px;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SelectComponent = styled.select`
  margin: 100px;
  width: 400px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
  background: #805a2d;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  border: none;
  color: #0c2a44;
  font-size: 24px;
`;
