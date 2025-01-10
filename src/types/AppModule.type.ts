import { ModalNames } from './ModalNames.type';

export enum SnackBarType {
  SUCCESS = 'success',
}

export interface SnackbarItem {
  type: SnackBarType;
  message: string;
}

export interface AppModuleStates {
  modals: ModalNames[];
  snackBars: SnackbarItem[];
  isSidebarOpen: boolean;
}
