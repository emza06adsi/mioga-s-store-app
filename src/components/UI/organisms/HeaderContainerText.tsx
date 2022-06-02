import React from "react";
import styled from "styled-components";
import { HeaderTex } from "../molecules/headerTex";
import { Link } from "react-router-dom";
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 119.56px;
  width: 40%;
  margin-right: 400px;
`;

export const HeaderTextContainer = (props: any) => (
  <OptionContainer>
    <Link style={{ display: "block", margin: "1rem 0" }} to={`/`}>
      <HeaderTex name={"home"} />
    </Link>
    <Link style={{ display: "block", margin: "1rem 0" }} to={`/sofa`}>
      <HeaderTex name={"sofa"} />
    </Link>
    <Link style={{ display: "block", margin: "1rem 0" }} to={`/location`}>
      <HeaderTex name={"location"} />
    </Link>
  </OptionContainer>
);
