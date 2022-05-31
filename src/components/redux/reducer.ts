import {IHamburger} from "../UI/organisms/IHamburgerMenu";

export const reducer = (state: IHamburger, action: any) => {
    switch (action.type) {
      case false:
        return { ...state, state: false };
      case true:
        return { ...state, state: true };
      default:
        return state;
    }
  };