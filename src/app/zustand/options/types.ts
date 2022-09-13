export type OptionsState = {
  newTab: boolean;
  enableEditor: boolean;
  changeNewTab: () => void;
  changeEnableEditor: () => void;
  getLocalStorage: () => void;
};
