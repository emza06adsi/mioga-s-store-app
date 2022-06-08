import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMain } from "./I-main";
import { Link } from "react-router-dom";
import { PageSelector } from "./index";
import { PropsBox, Options, TextHeaderContainer } from "./main.style";
import {
  faRoute,
  faCartShopping,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

export const Main = ({
  type,
  img,
  hamburguerState,
  setHamburguerState,
}: IMain) => {
  return (
    <>
      <PropsBox
        onClick={() => {
          setHamburguerState(false);
        }}
        sofa={img}
      >
        <TextHeaderContainer>
          <p className="principalText">
            {process.env.REACT_APP_MIOGA_S_NAME || "mioga's store"}{" "}
          </p>

          {PageSelector(type)}
        </TextHeaderContainer>
        {!hamburguerState && (
          <Options>
            <Link className="link" to={`/`}>
              <FontAwesomeIcon className="fontAwesomeIcon" icon={faRoute} />
            </Link>
            <Link className="link" to={`/sofa`}>
              <FontAwesomeIcon
                className="fontAwesomeIcon"
                icon={faCartShopping}
              />
            </Link>
            <Link className="link" to={`/location`}>
              <FontAwesomeIcon
                className="fontAwesomeIcon"
                icon={faCalendarDays}
              />
            </Link>
          </Options>
        )}
      </PropsBox>
      <PropsBox sofa={process.env.REACT_APP_SOFA_URL  } />
    </>
  );
};
