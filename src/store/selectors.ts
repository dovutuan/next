import { ModalNames } from '@/types/ModalNames.type';
import { OperationIds } from '@/types/OperationIds.type';

export const getResponseData = (state: any, operationId: OperationIds) =>
  state.res?.[operationId]?.response?.data;

export const getResponse = (state: any, operationId: OperationIds) =>
  state.res?.[operationId];

export const getRequest = (state: any, operationId: OperationIds) =>
  state.req?.[operationId];

export const isModalOpen = (state: any, modalName: ModalNames) =>
  state.app.modals.includes(modalName);
