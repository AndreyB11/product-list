import React from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

export interface IGenericTableColumn {
  key: string;
  name: string;
  width?: string;
}

interface IProps<T> {
  columns: IGenericTableColumn[];
  renderRow: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
}

export const GenericTable = <T extends unknown>({
  columns,
  data,
  renderRow,
  keyExtractor,
}: IProps<T>) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map(({ key, name, width }) => (
              <TableCell key={key} sx={width ? { width } : {}}>
                {name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={keyExtractor(item)}>{renderRow(item)}</TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
