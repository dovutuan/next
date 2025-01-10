'use client';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import { IIndexable } from '@/types/Generic.type';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

export type PopupMenuItem = {
  icon?: any;
  label: string;
  additionalData?: IIndexable;
};

type PopupMenuProps = {
  onClickItem?: (data: any) => void;
  items: PopupMenuItem[];
  toggleElement: React.ReactElement;
};

const PopupMenu = (props: PopupMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [menuId] = React.useState(uuidv4());

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClickItem = (item: PopupMenuItem) => {
    props.onClickItem?.(item);
    setAnchorEl(null);
  };
  const renderIcon = (item: any) => {
    return item.icon && <item.icon />;
  };

  return (
    <>
      <IconButton
        onClick={handleClick}
        aria-controls={open ? menuId : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        {props.toggleElement}
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id={menuId}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        slotProps={{
          paper: {
            sx: {
              boxShadow: 'none',
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: STYLE_VARIABLES.CLR_BORDER_SECONDARY,
            },
          },
        }}
      >
        {props.items.map((item: PopupMenuItem, index: number) => (
          <MenuItem
            key={item.label + index}
            className="group flex h-[40px] cursor-pointer items-center gap-x-[8px] pl-[14px] hover:bg-clr-border-secondary"
            onClick={() => handleClickItem(item)}
          >
            {renderIcon(item)}
            <span className="text-clr-txt-secondary group-hover:text-clr-txt-primary">
              {item.label}
            </span>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default PopupMenu;
