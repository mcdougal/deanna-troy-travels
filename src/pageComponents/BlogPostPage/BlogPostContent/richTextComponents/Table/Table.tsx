import { Table as MuiTable, TableBody as MuiTableBody } from '@mui/material';
import React from 'react';

import sx from './Table.styles';

type Props = {
  children: React.ReactNode;
};

const Table = ({ children }: Props): JSX.Element => {
  return (
    <MuiTable sx={sx.table}>
      <MuiTableBody>{children}</MuiTableBody>
    </MuiTable>
  );
};

export default Table;
