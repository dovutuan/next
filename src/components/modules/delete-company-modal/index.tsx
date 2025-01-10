'use client';
import * as React from 'react';
import { ModalNames } from '@/types/ModalNames.type';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import BaseButton from '@/components/common/button';
import { useTranslation } from 'react-i18next';
import TrashFullIcon from '/public/assets/icons/trash-full.svg';
import CloseIcon from '/public/assets/icons/close.svg';
import IconButton from '@mui/material/IconButton';
import useApi from '@/services/useApi';
import { deleteCompany } from '@/services/company';
import { OperationIds } from '@/types/OperationIds.type';
import { useRouter } from 'next/navigation';
import useHandleAppModule from '@/hooks/useHandleAppModule';
import { useAppSelector } from '@/store/hooks';
import { isModalOpen } from '@/store/selectors';
import PATH_NAMES from '@/constants/PathNames';
import { SnackBarType } from '@/types/AppModule.type';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '0',
  padding: '24px',
  borderRadius: '16px',
};

type DeleteCompanyModalProps = {
  companyId: number;
};

const DeleteCompanyModal = (props: DeleteCompanyModalProps) => {
  const { t } = useTranslation(['common', 'modal']);
  const open = useAppSelector((state) =>
    isModalOpen(state, ModalNames.DELETE_COMPANY),
  );
  const router = useRouter();
  const { closeModal, openSnackBar } = useHandleAppModule();
  const { call } = useApi({
    request: deleteCompany,
    operationId: OperationIds.DELETE_COMPANY,
  });

  const handleClose = () => {
    closeModal(ModalNames.DELETE_COMPANY);
  };
  const handleDelete = () => {
    call(props.companyId).then(() => {
      openSnackBar({
        type: SnackBarType.SUCCESS,
        message: t('common:snackbar.delete_success'),
      });
      closeModal(ModalNames.DELETE_COMPANY);
      router.replace(PATH_NAMES.COMPANIES());
    });
  };

  return (
    <Modal className="overflow-hidden" open={open} onClose={handleClose}>
      <Box sx={style} className="bg-pulsating-effect bg-no-repeat">
        <Box className="relative mb-[16px] flex flex-row justify-between">
          <TrashFullIcon />
          <IconButton onClick={handleClose} className="h-fit w-fit">
            <CloseIcon />
          </IconButton>
        </Box>
        <p className="mb-[4px] text-[18px] font-semibold leading-[28px]">
          {t('modal:delete.title')}
        </p>
        <p className="mb-[32px] leading-[20px] text-clr-txt-tertiary">
          {t('modal:delete.confirm_text')}
        </p>
        <Box className="flex gap-[12px]">
          <BaseButton
            className="mt-2 w-full"
            onClick={handleClose}
            variant="outlined"
            size="large"
            color="primary"
            sx={{ width: '170px' }}
          >
            {t('common:button.cancel')}
          </BaseButton>
          <BaseButton
            className="mt-2 w-full"
            onClick={handleDelete}
            variant="contained"
            size="large"
            color="error"
            sx={{ width: '170px' }}
          >
            {t('common:button.delete')}
          </BaseButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default React.memo(DeleteCompanyModal);
