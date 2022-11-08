import { Avatar, IconButton, TableCell } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IProduct } from "shared/models";
import { useModal } from "components/UI/Modals/GenericModal/GenericModalProvider";
import { GenericTable } from "../GenericTable";
import { productTableColumns } from "./productTableColumns";

interface IProps {
  products: IProduct[];
}

export const ProductsTable = ({ products }: IProps) => {
  const { openModal } = useModal();

  const handleDeleteClick = () => {
    openModal("deleteModal", { visible: true });
  };

  const handleEditClick = (product: IProduct) => {
    openModal("upsertModal", {
      visible: true,
      title: "Edit Product",
      product,
    });
  };

  return (
    <GenericTable
      columns={productTableColumns}
      data={products}
      keyExtractor={({ id }) => id}
      renderRow={(product) => (
        <>
          <TableCell>{product.id}</TableCell>
          <TableCell>{product.name}</TableCell>
          <TableCell>{product.brand}</TableCell>
          <TableCell>{product.price}</TableCell>
          <TableCell>
            <Avatar src={product.image} />
          </TableCell>
          <TableCell align="left">
            <IconButton onClick={() => handleEditClick(product)}>
              <EditIcon color="primary" />
            </IconButton>
            <IconButton onClick={handleDeleteClick}>
              <DeleteIcon color="error" />
            </IconButton>
          </TableCell>
        </>
      )}
    />
  );
};
