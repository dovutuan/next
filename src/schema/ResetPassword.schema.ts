import { PASSWORD_REGEX } from '@/constants/Login';
import Joi from 'joi';
import { useTranslation } from 'react-i18next';

const useSchema = () => {
  const { t } = useTranslation(['messages']);
  return Joi.object({
    password: Joi.string()
      .required()
      .min(8)
      .max(20)
      .pattern(PASSWORD_REGEX)
      .messages({
        'string.empty': t('messages:msg10'),
        'string.min': t('messages:msg08'),
        'string.max': t('messages:msg08'),
        'string.pattern.base': t('messages:msg08'),
      }),
    password_confirmation: Joi.string()
      .required()
      .valid(Joi.ref('password'))
      .messages({
        'string.empty': t('messages:msg10'),
        'any.only': t('messages:msg09'),
      }),
  });
};

export default useSchema;
