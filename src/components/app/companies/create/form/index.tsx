'use client';
import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { OperationIds } from '@/types/OperationIds.type';
import { getSectors as getSectorsService } from '@/services/master';
import useApi from '@/services/useApi';
import { GetSectorItemRes, IndustryItemRes } from '@/types/GetSector.type';
import { CreateCompanyRequest } from '@/types/Company.type';
import { getResponseData } from '@/store/selectors';
import { createCompany, editCompany } from '@/services/company';
import { FormTypes } from '@/types/Common.type';
import Template from './template';
import { StoreModuleNames } from '@/types/StoreModules';
import { useParams, useRouter } from 'next/navigation';
import { actions as createCompanyActions } from '@/store/req/createCompany';
import { actions as editCompanyActions } from '@/store/req/editCompany';
import PATH_NAMES from '@/constants/PathNames';
import useHandleAppModule from '@/hooks/useHandleAppModule';
import { SnackBarType } from '@/types/AppModule.type';
import { useTranslation } from 'react-i18next';
import useServerValidation from '@/hooks/useServerValidation';

type Props = {
  type?: FormTypes;
};

const CreateCompanyForm = (props: Props) => {
  const { t } = useTranslation(['common']);
  const { openSnackBar } = useHandleAppModule();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();
  const type = props.type ?? FormTypes.CREATE;
  const operationId =
    type === FormTypes.CREATE
      ? OperationIds.CREATE_COMPANY
      : OperationIds.EDIT_COMPANY;
  const storeModuleName =
    type === FormTypes.CREATE
      ? StoreModuleNames.REQ_CREATE_COMPANY
      : StoreModuleNames.REQ_EDIT_COMPANY;
  const { call: callGetSectors } = useApi({
    operationId: OperationIds.GET_SECTORS,
    request: getSectorsService,
  });
  const moduleActions =
    type === FormTypes.CREATE ? createCompanyActions : editCompanyActions;
  const { call: callCreateUpdateCompany } = useApi({
    operationId,
    request: type === FormTypes.CREATE ? createCompany : editCompany,
  });
  const submitData = useAppSelector(
    (state) => state.req?.[operationId],
  ) as CreateCompanyRequest;
  const sectors = useAppSelector((state) =>
    getResponseData(state, OperationIds.GET_SECTORS),
  ) as GetSectorItemRes[];
  const sectorOptions = React.useMemo(() => {
    return sectors?.map?.((sector: GetSectorItemRes) => ({
      value: sector.id,
      label: sector.name,
    }));
  }, [sectors]);
  const industryOptions = React.useMemo(() => {
    return (
      sectors
        ?.find((item: GetSectorItemRes) => item.id === submitData?.sector_id)
        ?.industries?.map((item: IndustryItemRes) => ({
          value: item.id,
          label: item.name,
        })) || []
    );
  }, [submitData?.sector_id, sectors]);
  const { serverMessages } = useServerValidation(operationId);

  React.useEffect(() => {
    callGetSectors();
  }, []);

  const onCreateCompany = async () => {
    const request =
      type === FormTypes.CREATE
        ? callCreateUpdateCompany(submitData)
        : callCreateUpdateCompany(+params.id, submitData);

    request.then(() => {
      openSnackBar({
        type: SnackBarType.SUCCESS,
        message:
          type === FormTypes.CREATE
            ? t('common:snackbar.create_success')
            : t('common:snackbar.save_success'),
      });
      router.push(PATH_NAMES.COMPANIES());
    });
  };

  const onChangeIndustry = () => {
    dispatch(
      moduleActions.setValue({
        path: 'industry_id',
        value: null,
      }),
    );
  };

  return (
    <Template
      errorMessages={serverMessages}
      type={type}
      industryOptions={industryOptions}
      sectorOptions={sectorOptions}
      onCreateCompany={onCreateCompany}
      submitData={submitData}
      storeModuleName={storeModuleName}
      onChangeIndustry={onChangeIndustry}
    />
  );
};

export default CreateCompanyForm;
