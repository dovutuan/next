import { useAppSelector } from '@/store/hooks';
import { getResponse } from '@/store/selectors';
import { ErrorCodes } from '@/types/Axios.type';
import { IIndexable } from '@/types/Generic.type';
import { OperationIds } from '@/types/OperationIds.type';
import entries from 'lodash/entries';
import React from 'react';

const useServerValidation = (operationId: OperationIds) => {
  const [serverMessages, setServerMessages] = React.useState<IIndexable>({});
  const response = useAppSelector((state) => getResponse(state, operationId));

  React.useEffect(() => {
    if (response?.status === ErrorCodes.VALIDATE_FAIL) {
      const msgs = entries(response?.response?.data).reduce?.(
        (acc: IIndexable, curr: any) => {
          acc[curr[0]] = curr[1][0];
          return acc;
        },
        {},
      );
      setServerMessages(() => msgs);
    } else {
      setServerMessages(() => {});
    }
  }, [response]);

  return { serverMessages };
};

export default useServerValidation;
