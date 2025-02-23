import { TableRow as MuiTableRow } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
};

const TableRow = ({ children }: Props): JSX.Element => {
  return <MuiTableRow>{children}</MuiTableRow>;
};

export default TableRow;
