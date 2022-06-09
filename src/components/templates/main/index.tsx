import { Home } from "../../UI/organisms/home";
import { Sofa } from "../../UI/organisms/sofa";
import { Location } from "../../UI/organisms/location";
import { PageType } from "../../pages/IPage";
import { TypeOfRendering } from "../../UI/organisms/selectOfList/selectOfList";

export const PageSelector = (type: string, optionSelected: TypeOfRendering) => {
  switch (type) {
    case PageType.HOME:
      return <Home optionSelected={optionSelected} />;
      break;
    case PageType.SOFA:
      return <Sofa />;
      break;
    case PageType.LOCATION:
      return <Location />;
      break;

    default:
      return <Home />;
      break;
  }
};
