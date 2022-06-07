import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMain } from "./I-main";
import { Link } from "react-router-dom";

import {
  faRoute,
  faCartShopping,
  faCalendarDays,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

import { PropsBox, Options, TextHeaderContainer } from "./main.style";

export const Main = ({
  type,
  img,
  hamburguerState,
  setHamburguerState,
}: IMain) => {
  const PageSelector = (type: string) => {
    switch (type) {
      case "home":
        return <h1 className="nextText">home</h1>;
        break;
      case "sofa":
        return <h1 className="nextText">sofa</h1>;
        break;
      case "location":
        return <h1 className="nextText">location</h1>;
        break;

      default:
        break;
    }
  };

  return (
    <PropsBox
      onClick={() => {
        setHamburguerState(false);
      }}
      sofa={img}
    >
      <TextHeaderContainer>
        <p className="principalText">mioga's store</p>

        {PageSelector(type)}

        {/* <p className="nextText">
          Win, and you’re in. It’s the Breeders’ Cup Challenge Series, where the
          world’s top Thoroughbreds compete for a starting spot at the 2022
          Breeders’ Cup World Championships at Keeneland, Nov 4 & 5. With
          qualifying races all over the world and across three new battleground
          regions in the US (East, West, Midwest), this year’s series just means
          more. Catch all the action on NBC, FOX or TVG all summer long.
        </p>
        <button>watch</button> */}
      </TextHeaderContainer>
      {!hamburguerState && (
        <Options>
          <Link style={{ display: "block", margin: "1rem 0" }} to={`/`}>
            <FontAwesomeIcon
              style={{ cursor: "pointer", height: "50px", color: "white" }}
              icon={faRoute}
            />
          </Link>
          <Link style={{ display: "block", margin: "1rem 0" }} to={`/sofa`}>
            <FontAwesomeIcon
              style={{ cursor: "pointer", height: "50px", color: "white" }}
              icon={faCartShopping}
            />
          </Link>
          <Link style={{ display: "block", margin: "1rem 0" }} to={`/location`}>
            <FontAwesomeIcon
              style={{ cursor: "pointer", height: "50px", color: "white" }}
              icon={faCalendarDays}
            />
          </Link>
        </Options>
      )}
    </PropsBox>
  );
};
