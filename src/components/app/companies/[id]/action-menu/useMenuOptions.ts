import ListIcon from '/public/assets/icons/list.svg';
import ExitIcon from '/public/assets/icons/exit.svg';
import PencilIcon from '/public/assets/icons/pencil.svg';
import TrashIcon from '/public/assets/icons/trash.svg';
import { useTranslation } from 'react-i18next';
import { PopupMenuActions } from '@/types/Common.type';

const useMenuOptions = () => {
  const { t } = useTranslation(['common']);

  return [
    {
      icon: ListIcon,
      label: t('common:popup_menu.diagnosis_list'),
      additionalData: {
        action: PopupMenuActions.To_DIAGNOSIS_LIST,
      },
    },
    {
      icon: ExitIcon,
      label: t('common:popup_menu.login'),
      additionalData: {
        action: PopupMenuActions.LOGIN,
      },
    },
    {
      icon: PencilIcon,
      label: t('common:popup_menu.edit'),
      additionalData: {
        action: PopupMenuActions.EDIT,
      },
    },
    {
      icon: TrashIcon,
      label: t('common:popup_menu.delete'),
      additionalData: {
        action: PopupMenuActions.REMOVE,
      },
    },
  ];
};

export default useMenuOptions;
