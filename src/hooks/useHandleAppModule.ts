import { useAppDispatch } from '@/store/hooks';
import { actions } from '@/store/app';
import { ModalNames } from '@/types/ModalNames.type';
import { SnackbarItem } from '@/types/AppModule.type';

const useHandleAppModule = () => {
  const dispatch = useAppDispatch();

  const openModal = (modalName: ModalNames) => {
    dispatch(
      actions.addToList({
        path: 'modals',
        value: modalName,
      }),
    );
  };
  const closeModal = (modalName: ModalNames) => {
    dispatch(
      actions.removeItemInList({
        path: 'modals',
        value: modalName,
      }),
    );
  };
  const openSnackBar = (item: SnackbarItem) => {
    dispatch(
      actions.addToList({
        path: 'snackBars',
        value: item,
      }),
    );
  };
  const closeSnackBar = (index: number) => {
    dispatch(
      actions.removeInListByIndex({
        path: 'snackBars',
        index,
      }),
    );
  };

  return { openModal, closeModal, openSnackBar, closeSnackBar };
};

export default useHandleAppModule;
