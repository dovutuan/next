import Joi from 'joi';
import { useTranslation } from 'react-i18next';

const useSchema = () => {
  const { t } = useTranslation(['messages', 'forgot-password']);
  return Joi.object({
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        'string.empty': t('messages:msg02', {
          value: t('forgot-password:email_label'),
        }),
        'string.email': t('messages:msg01'),
      }),
  });
};

export default useSchema;
