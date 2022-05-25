import React from 'react';
import styled from 'styled-components';
import { Header } from '../templates/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRoute,
    faCartShopping,
    faCalendarDays
} from '@fortawesome/free-solid-svg-icons'

const Image = styled.div`
margin: 0%;
width: 100%;
height: 100vh;
background-image: url('https://i.pinimg.com/564x/41/f4/26/41f426b4cb4d4d45b3fc2d5e15783bd4.jpg');
background-position: center center;
background-repeat: no-repeat;
background-size: 100%;
/* position: relative; */
/* background-position: center center;
background-repeat: no-repeat;
background-attachment: fixed;
background-size: cover; */
`;

const Options = styled.div`
    position: absolute;
    top: 30%;
    left: 90%;
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    width: 100px;
    justify-content: space-around;
`;

const PrincipalPage = () => (
    <>
        <header >
            <Header />
        </header>
        <div>
            <Image>
                <Options>
                    <FontAwesomeIcon style={{ height: '50px', color: 'white' }} icon={faRoute} />
                    <FontAwesomeIcon style={{ height: '50px', color: 'white' }} icon={faCartShopping} />
                    <FontAwesomeIcon style={{ height: '50px', color: 'white' }} icon={faCalendarDays} />
                </Options>
            </Image>
        </div>


    </>
)

export default PrincipalPage;

