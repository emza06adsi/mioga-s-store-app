import React from "react";
import styled from 'styled-components';
import {HeaderTex} from '../molecules/headerTex'
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
        <HeaderTex name={"home"}/>
        <HeaderTex name={"history"}/>
        <HeaderTex name={"contact"}/>
    </OptionContainer>
)