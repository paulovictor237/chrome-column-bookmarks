export type OptionsState = {
  newTab: boolean;
  searchBar: boolean;
  enableEditor: boolean;
  changeNewTab: () => void;
  changeEnableEditor: () => void;
  changeSearchBar: (action: boolean) => void;
  getLocalStorage: () => void;
};
