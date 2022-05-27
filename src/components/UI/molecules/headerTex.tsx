import React from "react";
import styled from 'styled-components';

const Text = styled.button`
        color: #fff;
        background: none;
        border: 1px solid white;
        font-family:'poppins';
        letter-spacing: 3px;
        padding: 5px 25px 5px 25px;
        text-transform:capitalize;
        font-size: 16px;
        font-weight: 200;
        cursor: pointer;
        :hover{
        background: #805a2d;
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 4px );
        -webkit-backdrop-filter: blur( 4px );
        border: 1px solid rgba( 255, 255, 255, 0.18 );
        border: none;
        }

`;

export const HeaderTex = (props: any) => (
    <Text>{props?.name}</Text>
)