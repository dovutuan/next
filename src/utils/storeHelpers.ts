import get from 'lodash/get';
import isArray from 'lodash/isArray';
import keys from 'lodash/keys';
import set from 'lodash/set';
import unset from 'lodash/unset';
import { current } from '@reduxjs/toolkit';
import { isEqual } from 'lodash';
import has from 'lodash/has';

export type SetValueParams = {
  state: any;
  path?: string;
  value: any;
};

type InitValueParams = {
  state: object;
  initialState: object;
};

type SpliceInListParams = {
  state: { [key: string]: any };
  path: string;
  value?: any;
  index?: number;
  type: SpliceType;
};
enum SpliceType {
  ADD,
  REMOVE,
}
type AddToListParams = {
  state: any;
  path: string;
  value: any;
  index?: number;
};
type RemoveFromListByIndexParams = {
  state: any;
  path: string;
  index: number;
};

type RemoveKeyFromObjectParams = {
  state: any;
  path: string;
};

type AddKeyToObjectParams = {
  state: any;
  path: string;
  value: any;
};

type RemoveItemFromListParams = {
  state: any;
  path: string;
  value: any;
};

type AddKeysToObjectParams = {
  state: any;
  data: {
    path: string;
    value: any;
  }[];
};

type RemoveKeysFromObjectParams = {
  state: any;
  paths: string[];
};

/**
 * Check if the path exists in the object
 * @param {Object} state
 * @param {string} path
 * @returns If path not exist throw Error
 */
const checkPathExists = (state: any, path: string) => {
  if (!has(current(state), path)) {
    throw new Error(`Path ${path} is not existed!`);
  }
};

/**
 * Set value to object based on path
 * @param {Object} params function parameter object
 * @param {any} params.state target object
 * @param {string} params.path target path
 * @param {any} params.value value
 * @returns void
 */
export const setValue = (params: SetValueParams) => {
  const { state, path, value } = params;
  if (path) checkPathExists(state, path);
  if (path) {
    set(state, path, value);
  } else {
    Object.assign(state, value);
  }
};

/**
 * Initialize the entire state
 * @param {Object} params function parameter object
 * @param {Object} params.state target object
 * @param {Object} params.initialState initial value
 * @returns void
 */
export const initValue = (params: InitValueParams) => {
  return params.initialState;
};

/**
 * Delete all keys in the state
 * @param {Object} state target object
 * @returns void
 */
export const resetValue = (state: { [key: string]: any }) => {
  keys(state).forEach((key) => delete state[key]);
};

/**
 * Add more item or remove item in list
 * @param {Object} params function parameter object
 * @param {Object} params.state target object
 * @param {string} params.path target path
 * @param {any} params.value value
 * @param {number} params.index index
 * @param {SpliceType} params.type SpliceType { ADD, REMOVE }
 * @returns void
 */
const spliceInList = (params: SpliceInListParams) => {
  const { state, path, value, index, type } = params;
  if (path) checkPathExists(state, path);
  const array = get(state, path);
  if (!array || !isArray(array)) throw new Error('Data is not an array!');
  let _index = index;
  if (type === SpliceType.ADD) {
    if (!value) {
      throw new Error('Value is required!');
    }
    if (_index === undefined) _index = array.length;
    array.splice(_index, 0, value);
  } else {
    if (_index === undefined) _index = array.length - 1;
    array.splice(_index, 1);
  }
};

/**
 * Add more item to list
 * @param {Object} params function parameter object
 * @param {Object} params.state target object
 * @param {string} params.path target path
 * @param {any} params.value value
 * @param {number} params.index index
 * @returns void
 */
export const addToList = (params: AddToListParams) => {
  if (params.path) checkPathExists(params.state, params.path);
  spliceInList({ ...params, type: SpliceType.ADD });
};

/**
 * Remove item from list
 * @param {Object} params function parameter object
 * @param {Object} params.state target object
 * @param {string} params.path target path
 * @param {number} params.index index
 * @returns void
 */
export const removeFromListByIndex = (params: RemoveFromListByIndexParams) => {
  if (params.path) checkPathExists(params.state, params.path);
  spliceInList({ ...params, type: SpliceType.REMOVE });
};

/**
 * Delete the specified key in the object
 * @param {Object} params function parameter object
 * @param {Object} params.state target object
 * @param {string} params.path target path
 * @param {string} params.keyPath index
 * @returns void
 */
export const removeKeyFromObject = (params: RemoveKeyFromObjectParams) => {
  unset(params.state, params.path);
};

export const removeKeysFromObject = (params: RemoveKeysFromObjectParams) => {
  params.paths.forEach((path: string) => {
    removeKeyFromObject({ state: params.state, path });
  });
};

/**
 * Add the specified key and it's value in the object
 * @param {Object} params function parameter object
 * @param {Object} params.state target object
 * @param {string} params.path target path
 * @param {string} params.keyPath index
 * @param {any} params.value value
 * @returns void
 */
export const addKeyToObject = (params: AddKeyToObjectParams) => {
  set(params.state, params.path, params.value);
};

export const addKeysToObject = (params: AddKeysToObjectParams) => {
  params.data.forEach((data) => {
    addKeyToObject({
      state: params.state,
      path: data.path,
      value: data.value,
    });
  });
};

/**
 * Remove item in list by value
 * @param {Object} params function parameter object
 * @param {Object} params.state target object
 * @param {string} params.path target path
 * @param {any} params.value value
 * @returns void
 */
export const removeItemFromList = (params: RemoveItemFromListParams) => {
  checkPathExists(params.state, params.path);
  const list = get(params.state, params.path);
  set(
    params.state,
    params.path,
    list.filter((item: any) => !isEqual(item, params.value)),
  );
};
