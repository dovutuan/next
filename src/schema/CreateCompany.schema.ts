import Joi from 'joi';
import { useTranslation } from 'react-i18next';

const useSchema = () => {
  const { t } = useTranslation(['messages', 'company-create']);
  return Joi.object({
    name: Joi.string()
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('company-create:form_label.company_name'),
        }),
      }),
    industry_id: Joi.number()
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('company-create:form_label.industry'),
        }),
      }),
    first_name: Joi.string()
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('company-create:form_label.name_kanji'),
        }),
      }),
    last_name: Joi.string()
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('company-create:form_label.last_name'),
        }),
      }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('company-create:form_label.mail'),
        }),
        'string.email': t('messages:msg06'),
      }),
    sector_id: Joi.number()
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('company-create:form_label.industry'),
        }),
      }),
  });
};

export default useSchema;
