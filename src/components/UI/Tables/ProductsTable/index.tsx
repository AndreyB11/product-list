import { Avatar, IconButton, TableCell } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IProduct } from "shared/models";
import { GenericTable } from "../GenericTable";
import { productTableColumns } from "./productTableColumns";

interface IProps {
  products: IProduct[];
}

export const ProductsTable = ({ products }: IProps) => (
  <GenericTable
    columns={productTableColumns}
    data={products}
    keyExtractor={({ id }) => id}
    renderRow={({ id, name, brand, price, image }) => (
      <>
        <TableCell>{id}</TableCell>
        <TableCell>{name}</TableCell>
        <TableCell>{brand}</TableCell>
        <TableCell>{price}</TableCell>
        <TableCell>
          <Avatar src={image} />
        </TableCell>
        <TableCell align="left">
          <IconButton>
            <EditIcon color="primary" />
          </IconButton>
          <IconButton>
            <DeleteIcon color="error" />
          </IconButton>
        </TableCell>
      </>
    )}
  />
);
