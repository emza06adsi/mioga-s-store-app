import React from 'react';
import styled from 'styled-components';
import { HeaderIcon } from '../UI/atoms/icon';
import { Search } from '../UI/molecules/searchImage'

const HeaderX = styled.div`
    background-color: #a81d18;
    color: #eeecef;
    width: 100%;
    height: 119.56px;
    height: 100hv;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


const RightContainerHeader = styled.section`
width: 100%;
height: 119.56px;
display: flex;
align-items: center;
justify-content: end;
`;



export const Header = () => (<HeaderX>
    <HeaderIcon />
    <RightContainerHeader>
        <Search />
    </RightContainerHeader>
</HeaderX>)