'use client';
import React from 'react';
import { DataGrid, DataGridProps } from '@mui/x-data-grid';
import styled from '@emotion/styled';
import { STYLE_VARIABLES } from '@/constants/StyleVariables';

const StyledDataGrid = styled(DataGrid)(() => ({
  border: 0,
  width: '100%',
  '& .MuiDataGrid-columnHeaders': {
    border: 0,
  },
  '& .MuiDataGrid-columnSeparator': {
    display: 'none',
  },
  '& .MuiDataGrid-columnHeader': {
    background: STYLE_VARIABLES.CLR_BG_SECONDARY,
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiDataGrid-cell': {
    paddingLeft: 24,
    paddingRight: 24,
  },
  '& .MuiDataGrid-cell:focus': {
    outline: 'none',
  },
  '& .MuiDataGrid-cell:focus-within': {
    outline: 'none',
  },
  '& .MuiDataGrid-cell.Mui-selected': {
    backgroundColor: 'transparent',
  },
  '& .MuiDataGrid-columnHeaderTitle': {
    color: STYLE_VARIABLES.CLR_TXT_TERTIARY,
    fontWeight: 500,
  },
  '& .MuiDataGrid-filler': {
    background: STYLE_VARIABLES.CLR_BG_SECONDARY,
  },
  '& .MuiDataGrid-row.MuiDataGrid-row--filler': {
    display: 'none', // Target filler rows if specific class is available
  },
}));

interface Props extends DataGridProps {}

function DataTable(props: Readonly<Props>) {
  return (
    <StyledDataGrid
      columnHeaderHeight={44}
      hideFooter
      disableColumnSorting
      disableColumnMenu
      disableRowSelectionOnClick
      autoHeight
      slots={{
        noRowsOverlay: () => null,
      }}
      {...props}
    />
  );
}

export default DataTable;
