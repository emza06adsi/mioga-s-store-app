import { SelectContainer, SelectComponent } from "./selectOfList.style";
export enum TypeOfRendering {
  ALL = "ALL",
  SHIRT = "SHIRT",
  access = "access",
  computers = "computers designs",
}

export interface ISelectOfList {
  optionSelected?: TypeOfRendering;
  setOptionSelected?: any;
}

export const SelectOfList = ({
  optionSelected,
  setOptionSelected,
}: ISelectOfList) => (
  <SelectContainer>
    <p className="principalText">
      {process.env.REACT_APP_MIOGA_S_NAME || "mioga's store"}{" "}
    </p>
    <SelectComponent
      name=""
      id=""
      onChange={(event) => {
        setOptionSelected(event.target.value);
      }}
    >
      <option value={TypeOfRendering.ALL}>{TypeOfRendering.ALL}</option>
      <option value={TypeOfRendering.SHIRT}>{TypeOfRendering.SHIRT}</option>
      <option value={TypeOfRendering.access}>{TypeOfRendering.access}</option>
      <option value={TypeOfRendering.computers}>
        {TypeOfRendering.computers}
      </option>
    </SelectComponent>
  </SelectContainer>
);
