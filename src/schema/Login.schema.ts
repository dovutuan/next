import Joi from 'joi';
import { useTranslation } from 'react-i18next';

const useSchema = () => {
  const { t } = useTranslation(['messages', 'login']);
  return Joi.object({
    email: Joi.string()
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('login:username_label'),
        }),
      }),
    password: Joi.string()
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('login:password_label'),
        }),
      }),
    secure: Joi.boolean(),
  });
};

export default useSchema;
