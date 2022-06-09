import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IMain } from "./I-main";
import { Link } from "react-router-dom";
import { PageSelector } from "./index";
import { PropsBox, Options, TextHeaderContainer } from "./main.style";
import {
  SelectOfList,
  TypeOfRendering,
} from "../../UI/organisms/selectOfList/selectOfList";

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
  const [optionSelected, setOptionSelected] = useState(TypeOfRendering.ALL);
  
  
  
  return (
    <>
      <PropsBox
        onClick={() => {
          setHamburguerState(false);
        }}
        sofa={img}
      >
        <TextHeaderContainer>
          <SelectOfList
            optionSelected={optionSelected}
            setOptionSelected={setOptionSelected}
          />

          {PageSelector(type,optionSelected)}
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
      {optionSelected === TypeOfRendering.ALL && (
        <PropsBox sofa={process.env.REACT_APP_SOFA_URL} />
      )}
    </>
  );
};
