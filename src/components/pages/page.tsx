import React from 'react';
import styled from 'styled-components';
import { Header } from '../templates/header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faRoute,
    faCartShopping,
    faCalendarDays,faSearch
} from '@fortawesome/free-solid-svg-icons'

const Image = styled.div`
margin: 0%;
width: 100%;
height: 100vh;
background-image: url('https://i.pinimg.com/564x/ad/e6/ed/ade6edae6a9263d2d8fbc0951fde9e36.jpg');
background-image: url('https://i.pinimg.com/564x/57/0d/4f/570d4f024950142992be6458bdfd4747.jpg');
background-image: url('https://i.pinimg.com/564x/fa/8e/fe/fa8efe337f2a55cdac56529937530b4b.jpg');
background-image: url('https://i.pinimg.com/564x/01/2a/27/012a27d3ed6c1265a01f2ed8bc9fff68.jpg');
background-image: url('https://i.pinimg.com/564x/49/ca/18/49ca18cae8391087e48198cab95abb2c.jpg');
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

