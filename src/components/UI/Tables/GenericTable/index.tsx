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

interface IProps<T> {
  columns: string[];
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
            {columns.map((col) => (
              <TableCell>{col}</TableCell>
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
