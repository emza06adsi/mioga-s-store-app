import React from 'react';
import styled from 'styled-components';
import { Header } from '../templates/header';

const Image = styled.div`
margin: 0%;
width: 100%;
height: 100vh;
background-image: url('https://i.pinimg.com/564x/41/f4/26/41f426b4cb4d4d45b3fc2d5e15783bd4.jpg');
background-position: center center;
background-repeat: no-repeat;
background-size: 100%;
/* background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover; */
`;

const PrincipalPage = () => (
    <>
        <header >
            <Header />
        </header>
        <div>
            <Image />

        </div>


    </>
)

export default PrincipalPage;

