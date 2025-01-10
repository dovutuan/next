import * as React from 'react';
import BaseSnackBar from '@/components/common/snack-bar';
import useHandleAppModule from '@/hooks/useHandleAppModule';
import { useAppSelector } from '@/store/hooks';
import { SnackbarItem } from '@/types/AppModule.type';

const SnackbarGroup = () => {
  const { closeSnackBar } = useHandleAppModule();
  const snackBars = useAppSelector((state) => state.app.snackBars);

  const handleCloseSnackBar = (reason: string, index: number) => {
    if (reason === 'clickaway') return;
    closeSnackBar(index);
  };

  return snackBars.map((item: SnackbarItem, index: number) => (
    <BaseSnackBar
      key={item.message + index}
      open={true}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onClose={(e: any, reason: any) => handleCloseSnackBar(reason, index)}
      message={item.message}
    />
  ));
};

export default SnackbarGroup;
