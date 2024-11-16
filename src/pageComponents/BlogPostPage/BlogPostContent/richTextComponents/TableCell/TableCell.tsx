import { TableCell as MuiTableCell } from '@mui/material';
import React from 'react';

import sx from './TableCell.styles';

type Props = {
  children: React.ReactNode;
};

const TableCell = ({ children }: Props): JSX.Element => {
  return <MuiTableCell sx={sx.tableCell}>{children}</MuiTableCell>;
};

export default TableCell;
