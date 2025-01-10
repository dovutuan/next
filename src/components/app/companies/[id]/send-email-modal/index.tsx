'use client';
import * as React from 'react';
import BaseButton from '@/components/common/button';
import { sendEmailInstruction } from '@/services/company';
import useApi from '@/services/useApi';
import { useAppSelector } from '@/store/hooks';
import { ModalNames } from '@/types/ModalNames.type';
import { OperationIds } from '@/types/OperationIds.type';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Modal from '@mui/material/Modal';
import { useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import CloseIcon from '/public/assets/icons/close.svg';
import InfoIcon from '/public/assets/icons/info.svg';
import { CompanyDetailResponse } from '@/types/Company.type';
import { getResponseData, isModalOpen } from '@/store/selectors';
import useHandleAppModule from '@/hooks/useHandleAppModule';
import RawHtmlText from '@/components/common/raw-html-text';
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

const SendEmailInstructionModal = () => {
  const { t } = useTranslation(['common', 'modal', 'company-create']);
  const params = useParams();
  const open = useAppSelector((state) =>
    isModalOpen(state, ModalNames.SEND_EMAIL_INSTRUCTION),
  );
  const { closeModal, openSnackBar } = useHandleAppModule();
  const { call } = useApi({
    request: sendEmailInstruction,
    operationId: OperationIds.SEND_EMAIL_INSTRUCTION,
  });
  const responseData = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_DETAIL_COMPANY),
  ) as CompanyDetailResponse;

  const handleClose = () => {
    closeModal(ModalNames.SEND_EMAIL_INSTRUCTION);
  };
  const handleSendEmail = () => {
    call(params.id).then(() => {
      openSnackBar({
        type: SnackBarType.SUCCESS,
        message: t('common:snackbar.send_success'),
      });
      closeModal(ModalNames.SEND_EMAIL_INSTRUCTION);
    });
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style} className="bg-pulsating-effect bg-no-repeat">
        <Box className="mb-[16px] flex flex-row justify-between">
          <InfoIcon />
          <IconButton onClick={handleClose} className="h-fit w-fit">
            <CloseIcon />
          </IconButton>
        </Box>
        <p className="mb-[4px] text-[18px] font-semibold leading-[28px]">
          {t('modal:send_mail_instruction.title')}
        </p>
        <RawHtmlText
          className="mb-[32px] leading-[20px] text-clr-txt-tertiary [&>span]:mr-[4px] [&>span]:font-semibold"
          content={t('modal:send_mail_instruction.confirm_text', {
            email: responseData?.email,
          })}
        />
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
            onClick={handleSendEmail}
            variant="contained"
            size="large"
            color="primary"
            sx={{ width: '170px' }}
          >
            {t('common:button.send')}
          </BaseButton>
        </Box>
      </Box>
    </Modal>
  );
};

export default React.memo(SendEmailInstructionModal);
