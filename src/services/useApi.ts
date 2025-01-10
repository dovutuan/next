import { useAppDispatch } from '@/store/hooks';
import { OperationIds } from '@/types/OperationIds.type';
import { actions as resModuleActions } from '@/store/res';

type UseApiParams = {
  operationId: OperationIds;
  request: any;
};
const useApi = ({ operationId, request }: UseApiParams) => {
  const dispatch = useAppDispatch();
  const call = (...data: any): Promise<any> => {
    return new Promise((resolve, reject) => {
      request(...data)
        .then((res: any) => {
          dispatch(
            resModuleActions.setValue({
              path: operationId,
              value: res,
            }),
          );
          resolve(res);
        })
        .catch((err: any) => {
          dispatch(
            resModuleActions.setValue({
              path: operationId,
              value: err,
            }),
          );
          reject(err);
        });
    });
  };

  return { call };
};

export default useApi;
