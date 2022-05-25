import React from 'react';
import styled from 'styled-components';
import { HeaderIcon } from '../UI/atoms/icon';
import { Search } from '../UI/molecules/searchImage'

const HeaderX = styled.div`
    background-color:none;
    color: #eeecef;
    width: 100%;
    height: 119.56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;

`;


const RightContainerHeader = styled.section`

height: 119.56px;
display: flex;
align-items: center;
justify-content: end;
`;

const HamburgerMenu = styled.div`
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

const OptionContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-around;
height: 119.56px;
width: 40%;
margin-right: 400px;
font-size: 24px;
font-weight: 400;
font-family: poppins;
text-transform: capitalize;
`;

export const Header = () => (<HeaderX>
    <HeaderIcon />
    <OptionContainer >
        <p>home</p>
        <p>history</p> <p>contact</p></OptionContainer >
    <RightContainerHeader>
        <HamburgerMenu >
            <div></div>
            <div></div>
            <div></div>
        </HamburgerMenu >
        {/* <Search /> */}
    </RightContainerHeader>
    {/* <img src="" alt="" /> */}
</HeaderX>
)