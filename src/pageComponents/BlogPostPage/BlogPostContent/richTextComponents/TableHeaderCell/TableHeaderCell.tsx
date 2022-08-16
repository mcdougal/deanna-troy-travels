import { TableCell } from '@mui/material';
import React from 'react';

import sx from './TableHeaderCell.styles';

interface Props {
  children: React.ReactNode;
}

const TableHeaderCell = ({ children }: Props): JSX.Element => {
  return (
    <TableCell sx={sx.tableHeaderCell}>
      <b>{children}</b>
    </TableCell>
  );
};

export default TableHeaderCell;
