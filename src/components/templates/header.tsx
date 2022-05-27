import React from 'react';
import styled from 'styled-components';
import { HeaderIcon } from '../UI/atoms/icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch
} from '@fortawesome/free-solid-svg-icons'

import { HeaderTextContainer } from '../UI/organisms/HeaderContainerText';
import { HamburgerMenu } from '../UI/organisms/hamburgerMenu';
const HeaderX = styled.header`
    background-color:none;
    color: #eeecef;
    width: 100%;
    height: 119.56px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;

    .icon{
     border: 2px solid white;
     border-radius: 100%;
    height: 15px;
    color: white;
    padding: 10px;
    }

`;


const RightContainerHeader = styled.section`

height: 119.56px;
display: flex;
align-items: center;
justify-content: end;
`;




export const Header = () => (<HeaderX>
    <HeaderIcon />
    <HeaderTextContainer />
    <FontAwesomeIcon className={'icon'} icon={faSearch} />
    <RightContainerHeader>
        <HamburgerMenu />
    </RightContainerHeader>
</HeaderX>
)