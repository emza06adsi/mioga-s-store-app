import React from 'react';
import styled from 'styled-components';




const HamburgerMenu_ = styled.div`
    height: 20px;
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right:30px ;
    div{
        width: 100%;
        height: 2px;
        background-color: white;
    }
`;


export const HamburgerMenu = () => (
    <HamburgerMenu_>
        <div></div>
        <div></div>
        <div></div>
    </HamburgerMenu_>
)