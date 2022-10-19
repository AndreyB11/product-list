import { Avatar, TableCell } from "@mui/material";
import { IProduct } from "shared/models";
import { GenericTable } from "../GenericTable";

interface IProps {
  products: IProduct[];
}

const columns = ["ID", "Name", "Brand", "Price", "Image", ""];

export const ProductsTable = ({ products }: IProps) => {
  return (
    <GenericTable
      columns={columns}
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
        </>
      )}
    />
  );
};
