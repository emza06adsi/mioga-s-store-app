import React from 'react';
import styled from 'styled-components';

const SearchImage = styled.input`
width: 400px;
height: 30px;
margin-right: 100px;
border-radius: 5px;
border: none;
outline: none;
background-color: #eeecef;
color: #a81d18;
font-size: 24px;
font-family: poppins;
font-weight: 600;
`;

export const Search = () => (
    <SearchImage type="text" />)