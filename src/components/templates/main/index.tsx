import { Home } from "../../UI/organisms/home";
import { Sofa } from "../../UI/organisms/sofa";
import { Location } from "../../UI/organisms/location";
import { PageType } from "../../pages/IPage";


export const PageSelector = (type: string) => {
  switch (type) {
    case PageType.HOME:
      return <Home />;
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
