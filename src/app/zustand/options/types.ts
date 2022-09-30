export type OptionsState = {
  showRecent: boolean;
  newTab: boolean;
  lockedEdition: boolean;
  changeRecent: () => void;
  changeNewTab: () => void;
  toggleLockedEdition: () => void;
  initOptions: () => void;
};
