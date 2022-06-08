import styled from "styled-components";
import { useEffect, useState } from "react";
const product = [];

export const Shopping = styled.div`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  height: 315px;
  width: 1050px;
  display: flex;
  overflow-x: auto;
  margin-bottom: 10px;

  div {
    width: 265.5px;
    position: relative;
  }

  img {
    height: 300px;
    width: 265.5px;
  }
  button {
    position: absolute;
    z-index: 10;
    left: 0%;
    bottom: 0%;
    color: white;
    background: none;
    border: 1px solid #0c2a44;
    font-family: "poppins";
    letter-spacing: 3px;
    margin: 0 auto 25px 25px;
    padding: 10px 25px 10px 25px;
    text-transform: uppercase;
    font-size: 16px;
    font-weight: 200;
    width: 200px;
    background: rgba(255, 255, 255, 0.25);
    background: rgba(11, 41, 67, 1);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    border: none;
    cursor: pointer;
    :hover{
    color: #0c2a44;

    }
  }
`;

export enum ImageType {
  ANIME = "ANIME",
  ACCESS = "ACCESS",
}

export type UrlModel = {
  id: string;
  src: string;
};

export type ImageModel = {
  id: string | number;
  name: string;
  url: UrlModel;
  type: ImageType;
  price: number;
  description: string;
};

export const Home = () => {
  const articleState: ImageModel[] = [
    {
      id: "sfsdfsd",
      name: "himko toga",
      type: ImageType.ACCESS,
      url: {
        id: "",
        src: "http://127.0.0.1:5500/284705842_127487329919393_1022859282441383254_n.jpg",
      },
      price: 27000,
      description: "himko toga",
    },
    {
      id: "sfsdfsd",
      name: "inuyacha",
      type: ImageType.ACCESS,
      url: {
        id: "",
        src: "http://127.0.0.1:5500/284974254_128032603198199_3694426136577752316_n.jpg",
      },
      price: 27000,
      description: "inuyacha",
    },
    {
      id: "02",
      name: "kakachi",
      type: ImageType.ACCESS,
      url: {
        id: "",
        src: "http://127.0.0.1:5500/284725457_128032593198200_8977410104078612196_n.jpg",
      },
      price: 27000,
      description: "naruto",
    },
    {
      id: "--- ---",
      name: "--- ---",
      type: ImageType.ACCESS,
      url: {
        id: "",
        src: "http://127.0.0.1:5500/284445976_127487306586062_379456165107611648_n.jpg",
      },
      price: 27000,
      description: "--- ---",
    },
    {
      id: "sfsdfsd",
      name: "himko toga",
      type: ImageType.ACCESS,
      url: {
        id: "",
        src: "http://127.0.0.1:5500/284705842_127487329919393_1022859282441383254_n.jpg",
      },
      price: 27000,
      description: "himko toga",
    },
    {
      id: "sfsdfsd",
      name: "inuyacha",
      type: ImageType.ACCESS,
      url: {
        id: "",
        src: "http://127.0.0.1:5500/284974254_128032603198199_3694426136577752316_n.jpg",
      },
      price: 27000,
      description: "inuyacha",
    },
    {
      id: "02",
      name: "kakachi",
      type: ImageType.ACCESS,
      url: {
        id: "",
        src: "http://127.0.0.1:5500/284725457_128032593198200_8977410104078612196_n.jpg",
      },
      price: 27000,
      description: "naruto",
    },
    {
      id: "--- ---",
      name: "--- ---",
      type: ImageType.ACCESS,
      url: {
        id: "",
        src: "http://127.0.0.1:5500/284445976_127487306586062_379456165107611648_n.jpg",
      },
      price: 27000,
      description: "--- ---",
    },
  ];

  // useEffect(() => {
  //   getArticles();
  // }, [setArticleState]);

  // const getArticles = async () => {
  //   const json = await fetch(
  //     `${process.env.REACT_APP_API_URL}/api/v1/get-images`
  //   );
  //   debugger;
  //   console.log(json);
  //   const objet = await json.json();
  //   setArticleState();
  //   debugger;
  // };
  return (
    <>
      <Shopping>
        {articleState.map(
          ({
            description,
            name,
            id,
            price,
            type,
            url: { src },
          }: ImageModel) => (
            <div>
              <img src={src} width="100px" alt="" />
              <button> Comprar </button>
            </div>
          )
        )}
      </Shopping>
      
    </>
  );
};
