import { STYLE_VARIABLES } from '@/constants/StyleVariables';
import Pagination, { PaginationProps } from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import React from 'react';
import ArrowRightIcon from '/public/assets/icons/arrow-right.svg';
import ArrowLeftIcon from '/public/assets/icons/arrow-left.svg';
import ArrowFirstIcon from '/public/assets/icons/arrow-first.svg';
import ArrowLastIcon from '/public/assets/icons/arrow-last.svg';
import styled from '@emotion/styled';

const CustomPaginationItem = styled(PaginationItem)(() => ({
  borderRadius: STYLE_VARIABLES.RADIUS_MD,
  fontWeight: 500,
  color: STYLE_VARIABLES.CLR_TXT_TERTIARY,
  fontFamily: STYLE_VARIABLES.FONT_FAMILY,
  '&:hover': {
    background: STYLE_VARIABLES.CLR_BG_BRAND_PRIMARY,
  },
  '&.Mui-selected': {
    background: STYLE_VARIABLES.CLR_BG_BRAND_PRIMARY,
    color: STYLE_VARIABLES.CLR_TXT_HOVER_SECONDARY,
  },
  margin: 0,
}));

interface Props extends PaginationProps {}

function AppPagination(props: Props) {
  return (
    <Pagination
      showFirstButton
      showLastButton
      size="large"
      renderItem={(item) => {
        return (
          <CustomPaginationItem
            slots={{
              previous: ArrowLeftIcon,
              next: ArrowRightIcon,
              first: ArrowFirstIcon,
              last: ArrowLastIcon,
            }}
            {...item}
          />
        );
      }}
      {...props}
    />
  );
}

export default AppPagination;
