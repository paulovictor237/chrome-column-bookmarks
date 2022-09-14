export type OptionsState = {
  showRecent: boolean;
  newTab: boolean;
  enableEditor: boolean;
  changeRecent: () => void;
  changeNewTab: () => void;
  changeEnableEditor: () => void;
  initOptions: () => void;
};
