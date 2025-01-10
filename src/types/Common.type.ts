export type Option = {
  value: string | number | null;
  label: string;
};

export enum PopupMenuActions {
  To_DIAGNOSIS_LIST = '1',
  LOGIN = '2',
  EDIT = '3',
  REMOVE = '4',
  LOGOUT = '5'
}

export enum FormTypes {
  CREATE = 0,
  EDIT = 1,
}
