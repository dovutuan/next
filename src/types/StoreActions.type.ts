import { OperationIds } from "./OperationIds.type";

export interface AddToListParams {
  path: string;
  value?: any;
  index?: number;
}

export interface RemoveFromListParams {
  path: string;
  index: number;
}

export interface RemoveItemInListParams {
  path: string;
  value: any;
}

export interface SetValueParams {
  path?: string;
  value: any;
}

export interface AddKeysToObjectParams<T> {
  data: {
    path: string;
    value: T;
  }[];
}

export interface InitDefaultResItemParams {
  operationIds: OperationIds[];
}
