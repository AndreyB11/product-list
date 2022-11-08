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
  id: string;
  name: string;
  width?: string;
}

interface IProps<T> {
  columns: IGenericTableColumn[];
  renderRow: (item: T) => React.ReactNode;
  keyExtractor: (item: T) => string;
  data: T[];
}

export const GenericTable = <T extends object>({
  columns,
  data,
  renderRow,
  keyExtractor,
}: IProps<T>) => (
  <TableContainer component={Paper} sx={{ maxWidth: "800px" }}>
    <Table>
      <TableHead>
        <TableRow>
          {columns.map(({ id, name, width }) => (
            <TableCell key={id} sx={width ? { width } : {}}>
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
